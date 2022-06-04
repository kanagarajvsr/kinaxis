import UserDetail from './UserDetail';
import { cleanup } from '@testing-library/react';
import {renderWithRouter} from '../../testUtil';

describe('UserDetail render', () => {
  afterEach(cleanup);
  const {asFragment} =  renderWithRouter(<UserDetail />) 
    
  test('Update Snapshot', () => { 
    expect(asFragment()).toMatchSnapshot()
  })

});
   


