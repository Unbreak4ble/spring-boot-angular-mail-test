import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSimpleTextComponent } from './animated-simple-text.component';

describe('AnimatedSimpleTextComponent', () => {
  let component: AnimatedSimpleTextComponent;
  let fixture: ComponentFixture<AnimatedSimpleTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedSimpleTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedSimpleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
