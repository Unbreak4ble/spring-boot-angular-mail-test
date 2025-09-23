package com.example.newgs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class MailService {
    @Autowired
    private JavaMailSender emailSender;

    @Autowired
    private SpringTemplateEngine thymleafEngine; // configurations/ThymeleafConfig.java

    @Autowired
    @Qualifier("mailRecipients")
    private List<String> emails; // aponta para o Bean de lista de emails do sistema, definido em configurations/MailConstants.java.

    // envia mensagem de confirmação de recibo para o cliente.
    public void sendBack(String to_email, String name) throws MessagingException {
        MimeMessage mimeMessage = this.emailSender.createMimeMessage();

        try {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

            messageHelper.setFrom("contact@gmail.com");
            messageHelper.setTo(to_email);
            messageHelper.setSubject("[SAJUDH]");

            Context context = new Context();
            context.setVariable("name", name);
            context.setVariable("queue_num", 15);
            context.setVariable("expected_timeleft", "32m");

            String htmlContent = thymleafEngine.process("callback", context);

            messageHelper.setText(htmlContent, true);

            emailSender.send(mimeMessage);
        }catch(MessagingException exc){
            throw exc;
        }
    }

    // envia mensagem do cliente para varios emails recipientes do sistema
    public void broadcast(String text, String from_email, String name) throws MessagingException {
        MimeMessage mimeMessage = this.emailSender.createMimeMessage();
        
        try {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

            messageHelper.setFrom(from_email);
            messageHelper.setTo(emails.toArray(new String[]{}));
            messageHelper.setSubject("[SAJUDH] Nova mensagem de "+name);

            Context context = new Context();
            context.setVariable("name", name);
            context.setVariable("from_email", from_email);
            context.setVariable("text", text);

            String htmlContent = thymleafEngine.process("forward", context);

            messageHelper.setText(htmlContent, true);

            emailSender.send(mimeMessage);
        }catch(MessagingException exc){
            throw exc;
        }
    }

    public void send(String text, String from_email, String name) throws MessagingException {
        this.sendBack(from_email, name);

        this.broadcast(text, from_email, name);
    }
}
