import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormComponent } from './components/email-form/email-form.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EmailFormComponent
  ],
  exports: [
    EmailFormComponent
  ]
})
export class SharedModule { }
