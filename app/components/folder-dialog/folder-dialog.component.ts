import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-folder-dialog',
  templateUrl: './folder-dialog.component.html',
  styleUrls: ['./folder-dialog.component.scss']
})
export class FolderDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { files: string[] }) {}
}
