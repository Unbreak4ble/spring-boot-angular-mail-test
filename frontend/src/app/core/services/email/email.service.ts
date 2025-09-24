import { Injectable } from '@angular/core';
import { EmailResponse404DTO } from '../../../shared/DTOs/email.404.dto';
import { EmailResponse200DTO } from '../../../shared/DTOs/email.200.dto';
import { EmailResponse500DTO } from '../../../shared/DTOs/email.500.dto';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly _url:string = "http://localhost:8080/email";
  private readonly _url_send:string = this._url + "/send";
  private _available: boolean = true;
  
  get available(){
    return this._available;
  }

  constructor() { }
  
  async send(name:string, surname:string, email:string, title:string, message:string): Promise<EmailResponse200DTO|EmailResponse404DTO|EmailResponse500DTO> {
    this._available = false;
    
    const payload = {
      name: name,
      surname: surname,
      email: email,
      title: title,
      message: message
    };
    
    const response = await fetch(this._url_send, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload)
    });
    
    this._available = true;

    switch(response.status){
      case 200:
        return { status: 200, message: await response.text() };
      break;
      
      case 404:
        return { status: 404, message: await response.text() };
      break;
      
      case 500:
        return { status: 500, message: await response.text() };
      break;
    };
    
    throw "Erro inesperado. E por isso não pôde ser reconhecido pelo sistema.";
  }
}