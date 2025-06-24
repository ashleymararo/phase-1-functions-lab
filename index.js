function distanceFromHqInBlocks(pickupLocation) {
  let diff = Math.abs(pickupLocation - 42);
  return diff;
}

function distanceFromHqInFeet(pickupLocation) {
  let blocks = Math.abs(pickupLocation - 42);
  let distanceFeet = blocks * 264;
  return distanceFeet;
}

function distanceTravelledInFeet(start, destination) {
  let travelled = Math.abs(destination - start);
  let feet = travelled * 264;
  return feet;
}

function calculatesFarePrice(start, destination) {
  let distance = Math.abs(destination - start) * 264;

  if (distance <= 400) {
    let fare = 0;
    return fare;
  } else if (distance > 400 && distance <= 2000) {
    let fare = (distance - 400) * 0.02;
    return fare;
  } else if (distance > 2000 && distance <= 2500) {
    let fare = 25;
    return fare;
  } else {
    return 'cannot travel that far';
  }
}

console.log(distanceFromHqInBlocks(50));// Code your solution in this file!
