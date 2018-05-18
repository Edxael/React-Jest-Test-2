// ===[ Gral-Imports ]================================
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'




// ***[ Links ]***********************************************************
// https://airbnb.io/projects/enzyme/

// Locations:
// https://jonbellah.com/articles/intro-react-testing/
// https://github.com/airbnb/enzyme/issues/404
// https://github.com/airbnb/enzyme/issues/323




// ===[ Test SUM ]====================================
import SumComp from './MyApp/02-Sum'

describe('<SumComp />', () => { 
  Enzyme.configure({ adapter: new Adapter() })
  
  it('renders correctly', () => {
    const Wrapper = Enzyme.shallow(<SumComp />)
    expect.anything(Wrapper)
  })


  it('should render children when passed in', () => {
    const wrapper = Enzyme.shallow(
      <SumComp>
        <div className="SumCont" />
      </SumComp>     );
    expect(wrapper.contains(<div className="SumCont" />)).to.be.true;
  });


  // it('simulates click events', () => {
  //   const mockOnClick = sinon.spy();
  //   const wrapper = Enzyme.shallow(
  //     <SumComp>
  //       <button onClick={ mockOnClick } >Add Numbers</button>
  //     </SumComp>    
  //   )
  //   wrapper.find('button').simulate('click');
  //   expect(mockOnClick.calledOnce).to.be.true;
  // });

})
// ---------------------------------------------------




// ===[ Test XYZ ]====================================



// it('simulates click events', () => {
//   const mockOnClick = sinon.spy();
//     const wrapper = Enzyme.shallow(<SumComp onClick={mockOnClick}/>);
//     wrapper.find('button').simulate('click');
//     expect(mockOnClick.calledOnce).to.be.true;
// })


// expect(onButtonClick.calledOnce).to.equal(true);



