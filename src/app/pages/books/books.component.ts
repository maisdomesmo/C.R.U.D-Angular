import { Component, OnInit } from '@angular/core';
import { min } from 'rxjs';
import { book } from './bookclass';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Array<book> = [
    {
    id : 1,
    name: 'A arte da guerra',
    price: 30,
    img: '../../../assets/livro.jpg',
    choose: false
    },
    {
      id : 2,
      name: 'O Livro dos Cinco anéis',
      price: 40,
      img: '../../../assets/livro2.jpg',
      choose: false
    },
    {
      id : 3,
      name: 'Em busca de nós mesmos',
      price: 50,
      img: '../../../assets/livro3.jpg',
      choose: false
    },
    {
      id : 13,
      name: 'O grande livro da mitologia egípcia',
      price: 57,
      img: '../../../assets/livro4.jpg',
      choose: false
    },
    {
      id : 4,
      name: 'O livro dos mortos do egito antigo',
      price: 70,
      img: '../../../assets/livro5.jpg',
      choose: false
    },
    {
      id : 5,
      name: 'As ideias dos egípcios sobre a vida futura',
      price: 88,
      img: '../../../assets/livro6.jpg',
      choose: false
    },
    {
      id : 6,
      name: 'O Livro dos Cinco anéis',
      price: 48,
      img: '../../../assets/livro2.jpg',
      choose: false
    },
    {
      id : 7,
      name: 'Em busca de nós mesmos',
      price: 50,
      img: '../../../assets/livro3.jpg',
      choose: false
    },
    {
      id : 8,
      name: 'O grande livro da mitologia egípcia',
      price: 60,
      img: '../../../assets/livro4.jpg',
      choose: false
    },
    {
      id : 9,
      name: 'O livro dos mortos do egito antigo',
      price: 62,
      img: '../../../assets/livro5.jpg',
      choose: false
    },
    {
      id : 10,
      name: 'As ideias dos egípcios sobre a vida futura',
      price: 19,
      img: '../../../assets/livro6.jpg',
      choose: false
    },
    {
      id : 11,
      name: 'As ideias dos egípcios sobre a vida futura',
      price: 44,
      img: '../../../assets/livro6.jpg',
      choose: false
    },
    {
      id : 12,
      name: 'O Livro dos Cinco anéis',
      price: 35,
      img: '../../../assets/livro2.jpg',
      choose: false
    },
]
  choosedBooks: Array<book> = []

  total: number = 0;
  minfilter: number = 0
  maxfilter: number = Infinity


  constructor() { }

  ngOnInit(): void {
  }

  chooseBook(book: book){
    book.choose = !book.choose
      if(book.choose){
        this.choosedBooks.push(book)
        this.total += book.price
      } else {
        let index = this.choosedBooks.indexOf(book)
        this.choosedBooks.splice(index, 1)
        this.total -= book.price
      }
  }



  filtrar(min: any, max: any){
    this.minfilter = min;
    this.maxfilter = max;
    if(!min){
      this.minfilter = 0
    }
    if(!max) {
      this.maxfilter = Infinity
    }
  }

}
