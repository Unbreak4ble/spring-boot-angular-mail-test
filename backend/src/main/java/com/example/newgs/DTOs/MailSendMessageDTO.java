package com.example.newgs.DTOs;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class MailSendMessageDTO {
    @NotEmpty(message = "Mensagem não pode estar vazia")
    @Size(min = 16, max = 4096, message = "Mensagem deve ter entre 16 à 4096 caracteres")
    public String message;
    
    @NotEmpty(message = "Titulo não pode estar vazio")
    @Size(min = 8, max = 64, message = "Titulo deve ter entre 8 à 64 caracteres")
    public String title;
    
    @NotEmpty(message = "Email não pode estar vazio")
    @Pattern(regexp = "^[A-Za-z0-9+_.-]+@(.+)$", message = "Email invalido")
    @Size(min = 3, max = 64, message = "Nome deve ter entre 5 à 64 caracteres")
    public String email;
    
    @NotEmpty(message = "Nome não pode estar vazio")
    @Size(min = 3, max = 16, message = "Nome deve ter entre 3 à 16 caracteres")
    public String name;
    
    @NotEmpty(message = "Sobrenome não pode estar vazio")
    @Size(min = 3, max = 32, message = "Sobrenome deve ter entre 3 à 32 caracteres")
    public String surname;
};