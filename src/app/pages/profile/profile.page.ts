import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <div>Profile</div>
  `,
  styleUrl: './profile.page.css'
})
export class ProfilePage {
  readonly title = signal('This is Profile Page');
}
