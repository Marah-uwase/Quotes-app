export class Quote {
    showDetails: boolean
    constructor(
        public id: number,
        public quote: string,
        public author: string,
        public user: string,
        public date: Date,
        public upvotes: number,
        public downvotes: number) {

            this.showDetails = false;
            this.upvotes=0;
            this.downvotes=0;
            
    }
}