import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CardRank, CardSuit, ICardConfig} from "./card";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation : ViewEncapsulation.None,
    host: {
        class: 'card'
    }
})
export class CardComponent implements OnInit {
    @Input() public config: ICardConfig | undefined;

    public isOpen: boolean = false;

    public suit: CardSuit;

    public rank: CardRank;

    public CardRank = CardRank;

    ngOnInit(): void {
        this._initCard();
    }

    private _initCard() {
        if (!this.config) {
            return;
        }

        this.isOpen = true;
        this.suit = this.config.mainSide.suit;
        this.rank = this.config.mainSide.rank;
    }
}
