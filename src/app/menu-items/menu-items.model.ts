export class MenuItem {
    constructor(
        public _id: string,
        public name: string,
        public imageUrl: string,
        public category: Category,
        public price: number
    ) {}
}