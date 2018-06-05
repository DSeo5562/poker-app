export class Player {
    username: string;
    status: string;
    winnings: string;
    hand: [string, string];

    constructor(username: string, status:string, winnings: string, hand: [string, string]) {
        this.username = username;
        this.status = status;
        this.winnings = winnings;
        this.hand = hand;
    }
}