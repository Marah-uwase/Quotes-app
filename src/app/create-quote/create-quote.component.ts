
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
    selector: 'app-create-quote',
    templateUrl: './create-quote.component.html',
    styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

    newQuote = new Quote(0, '', '', '', new Date(), 0, 0);

    @Output() addQuote = new EventEmitter<Quote>()

    submitQuote() {

        this.addQuote.emit(this.newQuote);
        this.newQuote = new Quote(0, '', '', '', new Date(), 0, 0);

    }
    resetFields() {
        this.newQuote.author = '';
        this.newQuote.quote = '';
        this.newQuote.user = '';

    }

    constructor() { }

    ngOnInit(): void {
    }

}
