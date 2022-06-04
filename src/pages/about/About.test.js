import {renderWithRouter} from '../../testUtil';

import About from './About';

test('renders learn react link', () => {
   const { asFragment } = renderWithRouter(<About />)
   expect(asFragment()).toMatchSnapshot()
})