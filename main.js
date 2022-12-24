import { Car } from './car.js';
import { getRandomArrayObject } from './utils.js';

const car = Car.getRandomCar();
console.log(car);

function getRandomSpeeder() {
    const SPEED_LIMITS = [25, 40, 50, 60, 70];
    const speedLimit = getRandomArrayObject(SPEED_LIMITS);
    const driverSpeed = Math.floor(49 * Math.random() + speedLimit + 1);
    console.log(`"Driving ${driverSpeed} MPH in a ${speedLimit}.`);
}

getRandomSpeeder();