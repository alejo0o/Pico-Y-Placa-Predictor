export default class Car {
  constructor(plate) {
    this._plate = plate;
  }

  get plate() {
    return this._plate;
  }

  set plate(plate) {
    this._plate = plate;
  }

  CheckHour(value) {
    let range = ['07:00', '09:30'];
    let range2 = ['16:00', '19:30'];
    return !(
      (value >= range[0] && value <= range[1]) ||
      (value >= range2[0] && value <= range2[1])
    );
  }

  CheckPlate(date, hour) {
    const plate_number = parseInt(this._plate[this._plate.length - 1]);

    switch (date) {
      case 'Monday':
        if (plate_number === 1 || plate_number === 2)
          return this.CheckHour(hour);
        else return true;

      case 'Tuesday':
        if (plate_number === 3 || plate_number === 4)
          return this.CheckHour(hour);
        else return true;

      case 'Wednesday':
        if (plate_number === 5 || plate_number === 6)
          return this.CheckHour(hour);
        else return true;

      case 'Thursday':
        if (plate_number === 7 || plate_number === 8)
          return this.CheckHour(hour);
        else return true;

      case 'Friday':
        if (plate_number === 9 || plate_number === 0)
          return this.CheckHour(hour);
        else return true;

      default:
        return false;
    }
  }
}
