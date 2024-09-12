import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { ConnectServerPageComponent } from './components/connect-server-page/connect-server-page.component';
import { LogsPageComponent } from './components/logs-page/logs-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { SelectUpdatePageComponent } from './components/select-update-page/select-update-page.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FolderDialogComponent } from './components/folder-dialog/folder-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { AuditPageComponent } from './components/audit-page/audit-page.component';
import { AuditItemsDialogComponent } from './components/audit-items-dialog/audit-items-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    ConnectServerPageComponent,
    LogsPageComponent,
    SelectUpdatePageComponent,
    FolderDialogComponent,
    AuditPageComponent,
    AuditItemsDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
