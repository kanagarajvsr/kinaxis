import NavBar from './NavBar';
import {renderWithRouter} from '../../testUtil';
 
describe('NavBar render', () => {
 
  test('Update Snapshot', () => { 
      const utils =  renderWithRouter(<NavBar />)
      const {asFragment}=utils;
      expect(asFragment()).toMatchSnapshot()
    })
  
  });
   


