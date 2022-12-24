import { getRandomArrayObject } from './utils.js';

const AVAILABLE_MAKES = ["Toyota", "Ford", "Chevrolet", "Honda", "Tesla"];
const AVAILABLE_COLORS = ["Blue", "Red", "Black"];

export class Car {
	constructor(make, year, color, tint) {
		this.make = make;
		this.year = year;
		this.color = color;
		this.tint = tint;
	}

	static getRandomCar() {
		const randomMake = getRandomArrayObject(AVAILABLE_MAKES);
		const year = Math.floor(30 * Math.random() + 1990);
		const color = getRandomArrayObject(AVAILABLE_COLORS);
		const tint = Math.floor(101 * Math.random());

		return new Car(randomMake, year, color, tint);
	}
}