import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuditItemsDialogComponent } from '../audit-items-dialog/audit-items-dialog.component';
import { ApiService } from '../../APIService/api.service';
import { Audit } from '../../models/audit.model';
import { AuditItem } from '../../models/audit-item.model';

@Component({
  selector: 'audit-page',
  templateUrl: './audit-page.component.html',
  styleUrls: ['./audit-page.component.scss']
})
export class AuditPageComponent implements OnInit {
  audits: Audit[] = [];
  displayedColumns: string[] = ['id', 'startDate', 'endDate', 'databaseName', 'status', 'result', 'rollbackDone', 'userId', 'actions'];
  isLoading: boolean = true; // Add a loading state

  constructor(private auditService: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadAudits();
  }

  loadAudits(): void {
    this.isLoading = true; // Start loading
    this.auditService.getAudits().subscribe(data => {
      this.audits = data;
      console.log("Loaded audits: ", this.audits);
      this.isLoading = false; // End loading
    }, error => {
      console.error("Error loading audits: ", error);
      this.isLoading = false; // End loading even if there's an error
    });
  }

  openAuditItemsDialog(auditItems: AuditItem[]): void {
    const dialogRef = this.dialog.open(AuditItemsDialogComponent, {
      width: '600px',
      data: { auditItems }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
