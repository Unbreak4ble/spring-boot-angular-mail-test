package com.example.newgs.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.newgs.DTOs.MailSendMessageDTO;
import com.example.newgs.services.MailService;

@RestController
@RequestMapping("/email")
public class MainController {

	private MailService mailservice;

	public MainController(MailService _mailservice){
		this.mailservice = _mailservice;
	}

	@PostMapping("/send")
	public ResponseEntity<String> index(@RequestBody MailSendMessageDTO body) throws Exception {
		mailservice.send(body.message, body.email, body.name);
		
		return ResponseEntity.status(200).body("Feito.");
	}
}