import { Component, ElementRef, input, ViewChild, ViewChildren } from '@angular/core';
import { EmailService } from '../../../core/services/email/email.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-email-form',
  standalone: false,
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss'
})
export class EmailFormComponent {
  @ViewChild("input_name") element_name: ElementRef|null = null;
  @ViewChild("input_latername") element_latername: ElementRef|null = null;
  @ViewChild("input_email") element_email: ElementRef|null = null;
  @ViewChild("input_title") element_title: ElementRef|null = null;
  @ViewChild("input_message") element_message: ElementRef|null = null;
  
  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef, private emailService: EmailService){
    
  }
  
  ngOnInit(){
    
  }
  
  validateAll = ():Boolean => !!this.element_name && !!this.element_latername && !!this.element_email && !!this.element_title && !!this.element_message;
  
  async send(){
    if(!this.validateAll()) return;
    const name = this.element_name?.nativeElement.value,
          surname = this.element_latername?.nativeElement.value,
          email = this.element_email?.nativeElement.value,
          title = this.element_title?.nativeElement.value,
          message = this.element_message?.nativeElement.value;
          
    if(!this.emailService.available) return;
    
    console.log("Enviando");
    
    const response_data = await this.emailService.send(name, surname, email, title, message);
  
    console.log("recebido:", response_data);
  }
}
