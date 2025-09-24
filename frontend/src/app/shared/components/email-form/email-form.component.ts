import { asNativeElements, Component, ElementRef, input, ViewChild, ViewChildren } from '@angular/core';
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
  
  private fieldMessagesElements: Element[] = [];
  private finalMessageElement:Element|null = null;
  
  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef, private emailService: EmailService){
    
  }
  
  ngOnInit(){
    
  }
  
  ngAfterViewInit(){
    this.fieldMessagesElements = this.elementRef.nativeElement?.querySelectorAll(".field-error-message") || [];
    this.finalMessageElement = this.elementRef.nativeElement?.querySelector("#final-message");
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
    
    this.eraseTextMessages();
    this.showFinalStatusMessage("Enviando...");
    
    const response_data = await this.emailService.send(name, surname, email, title, message);
    
    if(response_data.status == 200)
      this.showFinalStatusMessage(response_data.message);
    else if(response_data.status == 400 && response_data.message.type == "field")
      this.showFieldErrors(response_data.message.fields);
  }
  
  showFieldErrors(fields:any){
    for(const fieldMessageElement of this.fieldMessagesElements){
      const field = fields.filter((x:any) => x.field == fieldMessageElement.getAttribute('name'))[0];
      
      if(field == null) continue;
      
      (fieldMessageElement as any).text = field.message;
    }
  }
  
  eraseTextMessages(){
    (this.finalMessageElement as any).text = "";
    
    for(const fieldMessageElement of this.fieldMessagesElements){
      (fieldMessageElement as any).text = "";
    }
  }
  
  showFinalStatusMessage(message:string){
    (this.finalMessageElement as any).text = message;
  }
}
