import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }

      li:hover {
        background-color: #0d6efd;
        color: white;
      }
    `
  ],
})
export class SidebarComponent {}
