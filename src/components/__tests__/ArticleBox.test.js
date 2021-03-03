import React from 'react';
import { mount } from 'enzyme';
import ArticleBox from './../ArticleBox';

let wrapped;

beforeEach(() => {
  // we can use shallow render here because here we care to test just this component, not its child components
  wrapped = mount(<ArticleBox />)
})

afterEach(() => {
  wrapped.unmount();
})

it('has a text area and a button', () => {
  // const wrapped = mount(<ArticleBox />)

  // console.log(wrapped.find('input').length); // 1
  // console.log(wrapped.find('button').length) // 1

  expect(wrapped.find('input').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
})

// we will programatically interact with the in some fashion.In other words we want to trick the input into thinking that we are typing so text into it.

// describe function is used to group together certain sets of tests that have common setup
// describe function is also used to limit the scope of beforeEach() 
describe('the input box', () => {
  beforeEach(() => {
    wrapped.find('input').simulate('change', {
      target: { value: 'new term' }
    })
    wrapped.update();
  })
  it('has an input that user can type in', () => {
    // simulate() takes an event (string) and a mock (object)
      // wrapped.find('input').simulate('change', {
      //   target: { value: 'new term' }
      // })
    // on setState() the component does not rerender instantaneously but asychronously at some time in the future
    // So we force the component to rerender with update()
      // wrapped.update();

    expect(wrapped.find('input').prop('value')).toEqual('new term');
  })

  it('when the form is submitted, input gets emptied', () => {
      // wrapped.find('input').simulate('change', {
      //   target: { value: 'new term' }
      // })
      // wrapped.update();
    // this expectation should be here, but since we have already checked it in the test above, we can skip it
    // expect(wrapped.find('input').prop('value')).toEqual('new term');

    wrapped.find('form').simulate('submit')
    wrapped.update();
    expect(wrapped.find('input').prop('value')).toEqual('')
  })
})



