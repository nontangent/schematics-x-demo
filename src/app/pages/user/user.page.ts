import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `
  <div>Profile</div>
  `,
  styleUrl: './user.page.css'
})
export class UserPage {
  readonly title = signal('This is Profile Page');
}
