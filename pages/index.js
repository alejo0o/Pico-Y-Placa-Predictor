import { format, parseISO } from 'date-fns'; //JS Library to format the input date into any unit doc:https://date-fns.org/v2.22.1/docs/format
import Car from '../utils/Logic';

const index = () => {
  const HandleCheckPlate = (event) => {
    event.preventDefault();
    let car = new Car(event.target.plate.value);
    //format the time and date so it fits the car class logic
    let verification = car.CheckPlate(
      format(parseISO(event.target.date.value), 'EEEE'),
      event.target.time.value
    );
    console.log(verification);
    //console.log(event.target.time.value);
  };

  return (
    <div>
      <form onSubmit={HandleCheckPlate}>
        <label>Plate number:</label>
        <input type='text' name='plate' required />
        <label>Date:</label>
        <input type='date' name='date' required />
        <label>Hour:</label>
        <input type='time' name='time' required />
        <input type='submit' />
      </form>
    </div>
  );
};

export default index;
