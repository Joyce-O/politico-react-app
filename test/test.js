import React from 'react';
import { shallow } from 'enzyme';
import { Message } from 'semantic-ui-react';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
import AuthErrorMessage from '../src/components/ErrorMessage';

describe('<AuthErrorMessage/>', () => {
  let wrapper;

  beforeEach(() => {

  });

  it('should return a <Message/> element ', () => {
    wrapper = shallow(<AuthErrorMessage
      hidden={false}
      error={{ email: 'Oh! It seems something went wrong' }}
    />);
    expect(wrapper.find(<Message />));
  });

  it('should return a <Message/> element when given error in form of string', () => {
    wrapper = shallow(<AuthErrorMessage
      hidden={false}
      error="Oh! It seems something went wrong"
    />);
    expect(wrapper.find(<Message />));
  });
});
