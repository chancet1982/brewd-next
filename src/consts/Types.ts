export interface IIngredientTypeFermentable {
	name: string;
	description: string | null;
	sg: number;
	mcu: number;
	color: number; //figure out what unit it should be using.
	maxInBatch: number;
	tags: string [];
	weight: number;
}

export interface IIngredientTypeHops {
	name: string;
	description: string;
	bu: number;
	tags: string [];
	weight: number;
}

export interface IIngredientTypeYeast {
	name: string;
	description: string;
	minTemp: number;
	maxTemp: number;
	origin: string;
	weight: number;
}

export interface IIngredientTypeOther {
	name: string;
	description: string;
	weight: number;
}