import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


// ===[ Test SUM ]================================

import HomeComponent from './MyApp/01-Home'

Enzyme.configure({ adapter: new Adapter() })
const app = Enzyme.shallow(<HomeComponent />)
 
it('renders correctly', () => {
  expect(app).toMatchSnapshot()
})