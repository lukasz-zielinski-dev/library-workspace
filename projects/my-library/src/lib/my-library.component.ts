import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-library',
  template: `
    <div class="container">
      <div class="welcome-card">{{ welcomeMessage }}</div>
    </div>
  `,
  styles: [
    `
      .welcome-card {
        display: flex;
        justify-content: center;
      }
      .welcome-card {
        background-color: #ccffcc;
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
        font-size: 24px;
      }
    `,
  ],
})
export class MyLibraryComponent implements OnInit {
  @Input() name: string;
  welcomeMessage: string;

  constructor() {}

  ngOnInit(): void {
    this.welcomeMessage = `Hello ${this.name || 'Stranger'}!`;
  }
}
