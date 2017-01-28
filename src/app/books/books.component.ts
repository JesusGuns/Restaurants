import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = [];
  constructor() { 
    
  }

  ngOnInit() {
    //Se ejecuta al inicio
    this.books = ["Lorem"];
  }

}
