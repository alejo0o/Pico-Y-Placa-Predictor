import Car from '../utils/Logic';

export function forEach(items, date, hour, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index], date, hour);
  }
}

export var plate_check = jest.fn((plate, date, hour) => {
  const car = new Car(plate);
  let verification = car.CheckPlate(date, hour);
  return verification;
});
