import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigatorsComponent } from './investigators.component';

describe('InvestigatorsComponent', () => {
  let component: InvestigatorsComponent;
  let fixture: ComponentFixture<InvestigatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestigatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
