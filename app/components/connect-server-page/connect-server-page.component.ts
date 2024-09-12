import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { ApiService } from '../../APIService/api.service';
import { Observable } from 'rxjs';
import { DbServer } from '../../models/db-server.model';

@Component({
  selector: 'connect-server-page',
  templateUrl: './connect-server-page.component.html',
  styleUrls: ['./connect-server-page.component.scss']
})
export class ConnectServerPageComponent {
  sqlServerAddress: string = '';
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) { } // Inject Router

  connectToDatabase() {
    if (this.sqlServerAddress && this.username && this.password) {
      const credentials: DbServer = {
        name: this.sqlServerAddress,
        username: this.username,
        password: this.password
      };

      this.apiService.getDatabases(credentials)
        .subscribe(
          (databases: string[]) => {
            console.log('Databases:', databases);
            // If the connection is successful, redirect to the desired page
            this.router.navigateByUrl('/select-update-page', { state: { databases } });
          },
          (error) => {
            console.error('Error fetching databases:', error);
            // Handle error, e.g., show error message to the user
          }
        );
    }
  }
}
