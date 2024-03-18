import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenceDetailComponent } from './evidence-detail.component';

describe('EvidenceDetailComponent', () => {
  let component: EvidenceDetailComponent;
  let fixture: ComponentFixture<EvidenceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvidenceDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvidenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
