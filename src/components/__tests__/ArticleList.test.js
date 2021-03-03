import React from 'react';
import { mount } from 'enzyme';
import ArticleList from './../ArticleList';
import Root from './../../Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    articles: ['Article 1', 'Article 2']
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <ArticleList />
    </Root>
  )
})

it('creates on li per article', () => {
  // console.log(wrapped.find('li').length);
  expect(wrapped.find('li').length).toEqual(2);
})