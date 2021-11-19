export interface ICardConfig {
    mainSide: ICardSide;
    flipSide?: ICardSide;
}

export interface ICardSide {
    suit?: CardSuit;
    rank: CardRank;
    //TODO: implement 'effect?'
    //TODO: implement layout
}

export enum CardSuit {
    Spades = 'spades',
    Clubs = 'clubs',
    Diamonds = 'diamonds',
    Hearts = 'hearts'
}

export enum CardRank {
    Two = 2,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace,
    Joker,
}
