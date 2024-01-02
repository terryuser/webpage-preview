import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  submittedUrl: string = '';

  onSubmit(url: string): void {
    console.log(url);
    this.submittedUrl = url;
  }
}
