import Home from './Home';
import { mount } from 'enzyme'

it('has a image', () => {
    const wrapper = mount(<Home />)
    expect(wrapper.find("img")).toHaveLength(1);
})

it('has a list with 3 elements', () => {
    const wrapper = mount(<Home />)
    expect(wrapper.find("li")).toHaveLength(3);
}) 
