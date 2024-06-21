import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'todo-app-angular';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    const potentialToken = localStorage.getItem('auth-token');
    if (potentialToken) {
      this.auth.setToken(potentialToken);
    }
  }
}
