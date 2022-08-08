import { shallow, mount } from "enzyme";
import Card from "./Card";
import MeetupItem from '../meetups/MeetupItem';
import store from '../../redux/store';
import { Provider } from "react-redux";

describe("Card", ()=>{

     
    test("Confirm exist components Card", ()=>{
        const wrapper = shallow((<Provider store={store}><Card /></Provider>)); 
          
       
        expect(wrapper.exists()).toBeTruthy()
        expect(wrapper.children()).toBeTruthy()
    })

    
})