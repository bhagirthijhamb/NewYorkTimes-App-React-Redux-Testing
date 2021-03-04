import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from './../Root';
import App from './../components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=&api-key=uXiSZXYADR9VvLuUkUqDWxnFIzAtZpy6', {
    status: 200,
    response: {
        response: {
          docs: [{ abstract: 'Fetched #1' }, { abstract: 'Fetched #2' }]
        }
    }
  })
});

afterEach(() => {
  moxios.uninstall();
})

it('can fetch a list of articles and display them', (done) => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  wrapped.find('input').prop
  // find the 'Search' button and click it
    wrapped.find('.fetch-articles').simulate('submit');

  // Expect to find a list of camments!
  // expect(wrapped.find('li').length).toEqual(10)
  
  // setTimeout(() => {
  //   wrapped.update()
  
  //   // Expect to find a list of camments!
  //   expect(wrapped.find('li').length).toEqual(2);

  //   done()
  //   wrapped.unmount()
  // }, 100)

   moxios.wait(() => {
    wrapped.update()

    // Expect to find a list of camments!
    expect(wrapped.find('li').length).toEqual(2);

    done()
    wrapped.unmount()
  })
})