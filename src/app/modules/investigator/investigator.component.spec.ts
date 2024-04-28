import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigatorComponent } from './investigator.component';

describe('InvestigatorComponent', () => {
  let component: InvestigatorComponent;
  let fixture: ComponentFixture<InvestigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestigatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
