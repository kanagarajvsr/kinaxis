import Dashboard from './Dashboard';
import { cleanup } from '@testing-library/react';
import {renderWithRouter} from '../../testUtil';

describe('Dashboard render', () => {
  afterEach(cleanup);
  const utils =  renderWithRouter(<Dashboard />)
  const input = utils.getByTestId("select-id");
  const {asFragment,fireEvent}=utils;
   
  test('transaction onchange with 3 months', () => {
      fireEvent.change(input, {target: {value: '3'}})
      expect(input.value).toBe('3')
  })
 
  test('transaction onchange with 6 months', () => {
      fireEvent.change(input, {target: {value: '6'}})
      expect(input.value).toBe('6') 
  })

  test('Update Snapshot', () => { 
    expect(asFragment()).toMatchSnapshot()
  })

});
   


