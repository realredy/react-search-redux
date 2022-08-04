/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from '../../redux/store';
import MainNavigation from "./MainNavigation";
 


describe('confirm scroll position', () => {
     let wrapper;
    beforeEach(() => {
          wrapper = shallow(<Provider store={store}><MainNavigation/></Provider>);
    });
    

    test("<MeetupItem/> renders without crashing", () => {
        // const wrapper = shallow(<Provider store={store}><MainNavigation/></Provider>);
        expect(wrapper.exists()).toBe(true);
      });
  
    
  });