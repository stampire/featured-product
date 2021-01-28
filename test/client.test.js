const React = require('react');
const { shallow } = require('enzyme');
const App = require('../src/components/app');

describe('<App />', () => {
  it('renders the product path', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Path')).to.have.lengthOf(1);
  });
});
