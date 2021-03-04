import React from 'react';
import { mount } from 'enzyme';
import Root from './../Root';
import App from './../components/App';

it('can fetch a list of articles and display them', () => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  // find the 'Search' button and click it
    wrapped.find('.fetch-articles').simulate('submit');

  // Expect to find a list of camments!
  expect(wrapped.find('li').length).toEqual(10)
})