import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'show-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css'],
})

export class ratingComponent {
    @Input() rating: number = 0;
    starWidth: number = 0;

    @Output() clicked:EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void{
        this.starWidth = +(this.rating * 150) /5 ;
    }

    onClick():void{
        this.clicked.emit(`Rating: ${this.rating}`);
    }
}