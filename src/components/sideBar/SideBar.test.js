import SideBar from './SideBar';
import {renderWithRouter} from '../../testUtil';
 
describe('SideBar render', () => {
 
  test('Update Snapshot', () => { 
      const utils =  renderWithRouter(<SideBar />)
      const {asFragment}=utils;
      expect(asFragment()).toMatchSnapshot()
    })
  
  });
   


