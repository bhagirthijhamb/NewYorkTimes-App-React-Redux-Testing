import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './../App';
import ArticleBox from './../ArticleBox';
import ArticleList from '../ArticleList';

// it('shows a Article Box', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);

//   // Looks inside the div
//   // and checks to see if the CommentBox is in there
  
//   // console.log(div.innerHTML); // <div><div>Article Box</div><div>Article List</div></div>

//   expect(div.innerHTML).toContain('Article Box');

//   ReactDOM.unmountComponentAtNode(div);
// })

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
})


it('shows a ArticleBox component', () => {
  // const wrapped = shallow(<App />);
  expect(wrapped.find(ArticleBox).length).toEqual(1);
});

it('shows a ArticleList component', () => {
  // const wrapped = shallow(<App />);
  expect(wrapped.find(ArticleList).length).toEqual(1);
})