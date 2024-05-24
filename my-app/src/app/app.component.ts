import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MainComponent] // Add MainComponent as a provider
})
export class AppComponent {
  title = 'my-app';
  heading = "Hello to Angular"
  description = "This is a simple Angular application"
  name = "Angular"
  age = 10
}



