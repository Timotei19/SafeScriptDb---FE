import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUpdatePageComponent } from './select-update-page.component';

describe('SelectUpdatePageComponent', () => {
  let component: SelectUpdatePageComponent;
  let fixture: ComponentFixture<SelectUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectUpdatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
