import Featured from './Featured';
import {renderWithRouter} from '../../testUtil';

describe('Featured render', () => {
 
  test('Update Snapshot', () => { 
      const utils =  renderWithRouter(<Featured />)
      const {asFragment}=utils;
      expect(asFragment()).toMatchSnapshot()
    })
  
  });
   


