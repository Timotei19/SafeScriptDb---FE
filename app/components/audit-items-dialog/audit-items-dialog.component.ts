import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuditItem } from '../../models/audit-item.model';

@Component({
  selector: 'audit-items-dialog',
  templateUrl: './audit-items-dialog.component.html',
  styleUrls: ['./audit-items-dialog.component.scss']
})
export class AuditItemsDialogComponent {
  displayedColumns: string[] = ['id', 'scriptName', 'status', 'result', 'resultMessage'];

  constructor(
    public dialogRef: MatDialogRef<AuditItemsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { auditItems: AuditItem[] }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
