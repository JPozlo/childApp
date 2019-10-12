import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.page.html',
  styleUrls: ['./addition.page.scss'],
})
export class AdditionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onQuiz() {
    this.router.navigate(['/questions']);

  }

}
