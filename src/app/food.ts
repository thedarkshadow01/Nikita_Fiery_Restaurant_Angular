export class Food {
    id!: number;
    name!: string;
    price!: number;
    tags?: string[];
    favourite: boolean= false;
    imageUrl!: string;
    origins!: string[];
    cookTime!: string;
}
