export interface IProduct {
	id: number;
	title: string;
	price: number;
	imageUrl: string;
}

export interface ISearchAndSort {
	sortBy: string;
	title?: string;
}
