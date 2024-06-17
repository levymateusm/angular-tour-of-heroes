import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css'
})
export class SnackbarComponent {
  @Input() message = 'Hello World'
  progressValue = 10

  constructor() {
    setInterval(() => {
      if (this.progressValue <= 100) {
        this.progressValue += 10;
      }
    }, 500)
  }
}
