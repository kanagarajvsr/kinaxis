import Chart from './Chart';
import { cleanup } from '@testing-library/react';
import {renderWithRouter} from '../../testUtil';

describe('Chart render', () => {
  afterEach(cleanup);
  const {asFragment} =  renderWithRouter(<Chart />) 
    
  test('Update Snapshot', () => { 
    expect(asFragment()).toMatchSnapshot()
  })

});
   


