import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';

it('shows a Article Box', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  // Looks inside the div
  // and checks to see if the CommentBox is in there
  
  // console.log(div.innerHTML); // <div><div>Article Box</div><div>Article List</div></div>

  expect(div.innerHTML).toContain('Article Box');

  ReactDOM.unmountComponentAtNode(div);
})