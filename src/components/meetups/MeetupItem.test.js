/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import MeetupItem from "./MeetupItem";
import store from '../../redux/store';
 
test("<MeetupItem/> renders without crashing", () => {
  const wrapper = shallow(<Provider store={store}><MeetupItem /></Provider>);
  expect(wrapper.exists()).toBe(true);
});
