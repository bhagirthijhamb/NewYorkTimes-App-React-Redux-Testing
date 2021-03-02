import React from 'react';
import { mount } from 'enzyme';
import ArticleBox from './../ArticleBox';

it('has a text area and a button', () => {
  const wrapped = mount(<ArticleBox />)

  // console.log(wrapped.find('input').length); // 1
  // console.log(wrapped.find('button').length) // 1

  expect(wrapped.find('input').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
})

// we can use shallow render here because here we care to test just this component, not its child components

