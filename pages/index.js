import { useState } from 'react';
import { format, parseISO } from 'date-fns'; //JS Library to format the input date into any unit doc:https://date-fns.org/v2.22.1/docs/format
import Car from '../utils/Logic';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Form, Button } from 'react-bootstrap';

const index = () => {
  const [permission, setPermission] = useState(undefined);

  const HandleCheckPlate = (event) => {
    event.preventDefault();
    try {
      let car = new Car(event.target.plate.value);
      //format the time and date so it fits the car class logic
      let verification = car.CheckPlate(
        format(parseISO(event.target.date.value), 'EEEE'),
        event.target.time.value
      );
      setPermission(verification);
    } catch (error) {
      setPermission(false);
    }
  };

  return (
    <div style={{ background: '#004369', color: '#fff', height: '100vh' }}>
      <nav className='text-center'>
        <h1>PICO Y PLACA PREDICTOR</h1>
      </nav>
      <div className='d-flex justify-content-center'>
        <Form onSubmit={HandleCheckPlate} className='w-25 mt-2 mb-4'>
          <Form.Group className='mb-3'>
            <Form.Label>Plate Number:</Form.Label>
            <Form.Control
              type='text'
              name='plate'
              placeholder='Enter plate number'
              required
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Date:</Form.Label>
            <Form.Control type='date' name='date' required />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Time:</Form.Label>
            <Form.Control type='time' name='time' required />
          </Form.Group>
          <div className='text-center'>
            <Button variant='info' type='submit' className='text-white'>
              Check Plate
            </Button>
          </div>
        </Form>
      </div>
      <div className='text-center'>
        {permission === undefined ? (
          <></>
        ) : permission ? (
          <h4>
            You're <strong>able</strong> to get in road.
            <i className='fas fa-check-circle' style={{ color: '#81B622' }} />
          </h4>
        ) : (
          <h4>
            You're <strong>NOT</strong> able to get in the road.
            <i
              className='fas fa-exclamation-triangle'
              style={{ color: '#E43D40' }}
            />
          </h4>
        )}
      </div>
    </div>
  );
};

export default index;
