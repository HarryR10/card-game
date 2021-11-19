import {Component} from '@angular/core';
import {CardRank, CardSuit, ICardConfig} from "../card/card";

@Component({
    selector: 'app-game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {
    public AceOfSpades: ICardConfig

    constructor() {
        this.AceOfSpades = {
            mainSide: { suit: CardSuit.Spades, rank: CardRank.Ace }
        }
    }
}

