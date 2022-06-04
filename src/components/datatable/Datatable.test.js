import Datatable from './Datatable';
import { cleanup } from '@testing-library/react';
import {renderWithRouter} from '../../testUtil';
import { userColumns, userRows } from "../../jsonData/UserData";


describe('Datatable render', () => {
  afterEach(cleanup);
  
  test('Update Snapshot', () => { 
      const utils =  renderWithRouter(<Datatable columns={userColumns} rows={userRows} pageName="Users" actionType={true} link="/userdetail"/>)
      const {asFragment,fireEvent}=utils;
      expect(asFragment()).toMatchSnapshot()
    })
  
  });
   


