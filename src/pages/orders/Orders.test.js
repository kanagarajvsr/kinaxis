import Orders from './Orders';
import { cleanup } from '@testing-library/react';
import {renderWithRouter} from '../../testUtil';

describe('Orders render', () => {
  afterEach(cleanup);
  const {asFragment} =  renderWithRouter(<Orders />) 
    
  test('Update Snapshot', () => { 
    expect(asFragment()).toMatchSnapshot()
  })

});
   


