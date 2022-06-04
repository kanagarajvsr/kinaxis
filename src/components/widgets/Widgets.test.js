import Widgets from './Widgets';
import {renderWithRouter} from '../../testUtil';
import { widgets  } from "../../jsonData/dashboardData";
import { cleanup } from '@testing-library/react';

describe('Widgets render', () => {
  afterEach(cleanup);

  test('Update Snapshot with users', () => { 
      const utils =  renderWithRouter(<Widgets data={ widgets.user} />)
      const {asFragment}=utils;
      expect(asFragment()).toMatchSnapshot()
  })

  test('Update Snapshot with order', () => { 
      const utils =  renderWithRouter(<Widgets data={ widgets.order} />)
      const {asFragment}=utils;
      expect(asFragment()).toMatchSnapshot()
  })

  test('Update Snapshot with earning', () => { 
      const utils =  renderWithRouter(<Widgets data={ widgets.earning} />)
      const {asFragment}=utils;
      expect(asFragment()).toMatchSnapshot()
  })

  test('Update Snapshot with balance', () => { 
      const utils =  renderWithRouter(<Widgets data={ widgets.balance} />)
      const {asFragment}=utils;
      expect(asFragment()).toMatchSnapshot()
  })
  
  });
   


