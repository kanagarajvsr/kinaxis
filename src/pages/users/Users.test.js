import Users from './Users';
import { cleanup } from '@testing-library/react';
import {renderWithRouter} from '../../testUtil';

describe('Users render', () => {
  afterEach(cleanup);
  const {asFragment} =  renderWithRouter(<Users />) 
    
  test('Update Snapshot', () => { 
    expect(asFragment()).toMatchSnapshot()
  })

});
   


