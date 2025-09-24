import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-animated-simple-text',
  standalone: false,
  templateUrl: './animated-simple-text.component.html',
  styleUrl: './animated-simple-text.component.scss'
})
export class AnimatedSimpleTextComponent {

  constructor(private selfElementRef:ElementRef){
    
  }
  
  setText(text: string): void {
    
  }
  
  pushText(text: string): void {
    
  }
  
}