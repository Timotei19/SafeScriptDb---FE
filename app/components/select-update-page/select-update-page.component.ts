import { Component } from '@angular/core';
import { ApiService } from '../../APIService/api.service';
import { Router } from '@angular/router';
import { FolderDialogComponent } from '../folder-dialog/folder-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-select-update-page',
  templateUrl: './select-update-page.component.html',
  styleUrls: ['./select-update-page.component.scss']
})
export class SelectUpdatePageComponent {
  scriptsPath: string = '';
  availableDatabases: string[] = ['DB1', 'DB2', 'DB3', 'DB4'];
  databasesToUpdate: string[] = [];
  selectedFiles!: FileList;
  databases: string[];

  constructor(private apiService: ApiService, private router: Router, public dialog: MatDialog) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { databases: string[] };
    this.databases = state?.databases || [];
  }

  selectFolder() {
    // Implement folder selection logic here
    console.log('Folder selected');
  }

  setDefaultPath() {
    // Implement set default path logic here
    console.log('Default path set');
  }

  showFolderContent() {
    if (this.selectedFiles) {
      const fileNames = Array.from(this.selectedFiles).map(file => file.name);
      this.dialog.open(FolderDialogComponent, {
        data: { files: fileNames }
      });
    } else {
      console.log('No files selected.');
    }
  }

  moveToUpdateList(db: string) {
    this.databases = this.databases.filter(d => d !== db);
    this.databasesToUpdate.push(db);
  }

  moveToAvailableList(db: string) {
    this.databasesToUpdate = this.databasesToUpdate.filter(d => d !== db);
    this.databases.push(db);
  }

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
    console.log("Number of files selected:", this.selectedFiles.length);
    for (let i = 0; i < this.selectedFiles.length; i++) {
      console.log(this.selectedFiles.item(i)?.name);
    }

    if (this.selectedFiles.length > 0) {
      const file = this.selectedFiles.item(0);
      if (file) {
        const path = file.webkitRelativePath || file.name;
        this.scriptsPath = path.substring(0, path.lastIndexOf('/'));
      }
    }  
  }

  updateDatabases(): void {
    if (this.selectedFiles && this.databasesToUpdate.length > 0) {
      this.apiService.updateDatabasesWithFiles(this.databasesToUpdate, this.selectedFiles).subscribe(
        response => {
          console.log('Databases updated successfully:', response);
          // Handle response here
        },
        error => {
          console.error('Error updating databases:', error);
          // Handle error here
        }
      );
    } else {
      console.error('No files selected or no databases to update.');
    }
  }
}
