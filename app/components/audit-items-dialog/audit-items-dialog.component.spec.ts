import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditItemsDialogComponent } from './audit-items-dialog.component';

describe('AuditItemsDialogComponent', () => {
  let component: AuditItemsDialogComponent;
  let fixture: ComponentFixture<AuditItemsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuditItemsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuditItemsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
