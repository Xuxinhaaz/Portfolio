import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrl: './project.css',
  imports: [
    RouterLink
  ]
})
export class Project {
  @Input() title: string = '';
  @Input() year: string = '';
  @Input() description: string = '';
  @Input() img: string = '';
  @Input() projectLink: string = '';
}
