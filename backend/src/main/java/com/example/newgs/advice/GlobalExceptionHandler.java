package com.example.newgs.advice;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.newgs.DTOs.response.SendFieldNotValidDTO;
import com.example.newgs.controllers.EmailController;

@ControllerAdvice(assignableTypes = {EmailController.class})
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        SendFieldNotValidDTO body = new SendFieldNotValidDTO();
        
        ex.getBindingResult().getFieldErrors().forEach(error -> {
            body.fields.add(SendFieldNotValidDTO.createFieldProperty(error.getField(), error.getDefaultMessage()));
        });
    
        return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
    }
}