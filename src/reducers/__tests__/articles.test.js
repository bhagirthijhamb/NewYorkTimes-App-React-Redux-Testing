import articlesReducer from './../../reducers/articles';

it('handles action with unknown type', () => {
  // passing in an ampty object counts like passing in an unknown type
  const newState = articlesReducer([], {});
  expect(newState).toEqual([]);
})