import { format, parseISO } from 'date-fns';
import { plate_check, forEach } from '../__mocks__/MockFunctions';

describe('Testing each day of the week with different values', () => {
  test('Monday with plates ending with 1 and 2, at 07:30am (results expected to be false)', () => {
    forEach(
      ['1321', '2231'], //plates
      format(parseISO('2021-05-31'), 'EEEE'), //it also works changing the formatted date with the string 'Monday'
      '07:30', //hour
      plate_check
    );
    expect(plate_check.mock.results[0].value).toBeFalsy();
    expect(plate_check.mock.results[1].value).toBeFalsy();
  });

  test('Tuesday with plates ending with 3 and 4, at 08:47am (results expected to be false)', () => {
    forEach(
      ['3233', '0994'], //plates
      format(parseISO('2021-06-01'), 'EEEE'), //it also works changing the formatted date with the string 'Tuesday'
      '08:47', //hour
      plate_check
    );
    expect(plate_check.mock.results[0].value).toBeFalsy();
    expect(plate_check.mock.results[1].value).toBeFalsy();
  });

  test('Wednesday with plates ending with 5 and 6, at 09:30am (results expected to be false)', () => {
    forEach(
      ['3235', '0996'], //plates
      format(parseISO('2021-06-02'), 'EEEE'), //it also works changing the formatted date with the string 'Wednesday'
      '09:30', //hour
      plate_check
    );
    expect(plate_check.mock.results[0].value).toBeFalsy();
    expect(plate_check.mock.results[1].value).toBeFalsy();
  });

  test('Thursday with plates ending with 7 and 8, at 16:50pm (results expected to be false)', () => {
    forEach(
      ['3237', '0998'], //plates
      format(parseISO('2021-06-03'), 'EEEE'), //it also works changing the formatted date with the string 'Thursday'
      '16:50', //hour
      plate_check
    );
    expect(plate_check.mock.results[0].value).toBeFalsy();
    expect(plate_check.mock.results[1].value).toBeFalsy();
  });

  test('Friday with plates ending with 9 and 0, at 19:30pm (results expected to be false)', () => {
    forEach(
      ['3239', '0990'], //plates
      format(parseISO('2021-06-04'), 'EEEE'), //it also works changing the formatted date with the string 'Friday'
      '19:30', //hour
      plate_check
    );
    expect(plate_check.mock.results[0].value).toBeFalsy();
    expect(plate_check.mock.results[1].value).toBeFalsy();
  });
});
