import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { AnimatedSimpleTextComponent } from './components/animated-simple-text/animated-simple-text.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EmailFormComponent,
    AnimatedSimpleTextComponent,
  ],
  exports: [
    EmailFormComponent,
    AnimatedSimpleTextComponent,
  ]
})
export class SharedModule { }
