import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngConceptsComponent } from './ang-concepts.component';

describe('AngConceptsComponent', () => {
  let component: AngConceptsComponent;
  let fixture: ComponentFixture<AngConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngConceptsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
