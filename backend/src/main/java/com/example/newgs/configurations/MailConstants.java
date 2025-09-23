package com.example.newgs.configurations;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MailConstants {

    // emails dos membros da equipe SAJUDH que irão receber os emails enviados pelos clientes.
    @Bean(name = "mailRecipients")
    public List<String> consumers_emails (){
        var emails = new ArrayList<String>();
        
        emails.add("rafael.fernandes1@unemat.br");
        emails.add("rafael.mefer05@gmail.com");
        
        return emails;
    }
}
