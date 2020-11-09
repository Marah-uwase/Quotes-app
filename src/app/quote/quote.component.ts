import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class  QuoteComponent implements OnInit {
 
  mQuotes: Quote[] = [
    // new Quote(0, "The purpose of our lives is to be happy.", "Dalai Lama", "milinia cherot", new Date(2020, 9, 8), 0, 0),
    // new Quote(1, " You only live once, but if you do it right, once is enough.", " Mae West", "steve ride", new Date(2020, 9, 10), 0, 0),
    new Quote(2, "A man with outward courage dares to die; a man with inner courage dares to live.",
                 "Lao Tzu, Tao Te Ching", "Mae West", new Date(2020, 12, 30), 0, 0),
    new Quote(3, "I had never given much thought to how I would die, but dying in the place of someone I love doesn't seem like such a bad way to go"
    , "Stephanie Meyer", "renox wakanda", new Date(2020, 12, 19), 0, 0),  
  ];

 
  isComplete = true;
  upvotes = 0;
  downvotes = 0;

  bestVotes = 0;
  bestAuthor: string;
  bestQuote: string;
  bestUser: string;
  lowVotes: number;
  date: any;


  newQuote(quote){
    let quoteLength = this.mQuotes.length;
    quote.id =quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.mQuotes.push(quote)
  } 
  upVote(index) {
    this.mQuotes[index].upvotes++;
 
  }
  downVote(index) {
    this.mQuotes[index].downvotes++;

  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.mQuotes[index].quote}?`)

      if (toDelete) {
        this.mQuotes.splice(index, 1)
      } 
    }  
  } 

  bestmQuote() {
    for (let i = 0; i < this.mQuotes.length; i++) {
      if (this.mQuotes[i].upvotes > this.bestVotes) {
        this.bestVotes = this.mQuotes[i].upvotes;
        this.bestAuthor = this.mQuotes[i].author;
        this.bestQuote = this.mQuotes[i].quote;

        this.bestUser = this.mQuotes[i].user;
        this.lowVotes = this.mQuotes[i].downvotes;
        this.date = this.mQuotes[i].date;
      }                                                    
    }   
  }
  constructor() { }

  ngOnInit(): void {
  }

}