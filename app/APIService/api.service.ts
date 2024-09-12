import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { DbServer } from '../models/db-server.model';
import { Audit } from '../models/audit.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7165'; // Your API URL

  constructor(private http: HttpClient) { }
  
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/api/Users');
  }

  postFolderPath(folderPath: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/Users/PostFolderPath`, `"${folderPath}"`, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  getDatabases(credentials: DbServer): Observable<string[]> {
    const url = `${this.apiUrl}/api/Users/ServerConnect`;
    console.log("aici la service")
    return this.http.post<string[]>(url, credentials);
  }

  uploadFile(formData: FormData): Observable<any> {
    const url = `${this.apiUrl}/api/upload-file`; // Adjust the endpoint URL
    return this.http.post<any>(url, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  uploadFiles(files: FileList): Observable<File[]> {
    const formData = new FormData();
    Array.from(files).forEach(file => formData.append('files', file));
    formData.forEach(element => {
      console.log("aici la upload", element)
    });
    //console.log(typeof(files))
    const url = `${this.apiUrl}/api/Users/executeSqlOnTenants`;
    return this.http.post<File[]>(url, formData);
  }

  updateDatabasesWithFiles(databases: string[], files: FileList): Observable<any> {
    const formData: FormData = new FormData();
    databases.forEach(db => formData.append('databases', db));
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i], files[i].name);
    }
    return this.http.post(`${this.apiUrl}/api/Users/executeSqlOnTenants`, formData);
  }

  getAudits(): Observable<Audit[]> {
    console.log("aici la audit")
    return this.http.get<Audit[]>(this.apiUrl + '/api/Users/GetAudits');
  }
}