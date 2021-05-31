import { format, parseISO } from 'date-fns';
import { plate_check, forEach } from '../__mocks__/MockFunctions';

describe('Testing each day of the week with valid plates', () => {
  test('Monday with plates ending with 4 and 5, at 08:30am (results expected to be true)', () => {
    forEach(
      ['1324', '2235'], //plates
      format(parseISO('2021-05-31'), 'EEEE'), //it also works changing the formatted date with the string 'Monday'
      '08:30', //hour
      plate_check
    );
    expect(plate_check.mock.results[0].value).toBeTruthy();
    expect(plate_check.mock.results[1].value).toBeTruthy();
  });

  test('Wednesday with plates ending with 8 and 9, at 17:45pm (results expected to be true)', () => {
    forEach(
      ['3238', '0999'], //plates
      format(parseISO('2021-06-02'), 'EEEE'), //it also works changing the formatted date with the string 'Tuesday'
      '17:45', //hour
      plate_check
    );
    expect(plate_check.mock.results[0].value).toBeTruthy();
    expect(plate_check.mock.results[1].value).toBeTruthy();
  });
});
