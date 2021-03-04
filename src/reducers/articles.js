import ArticleBox from '../components/ArticleBox';
import { FETCH_ARTICLES } from './../actions/types';

export default function(state=[], action){
  switch(action.type){
    case FETCH_ARTICLES:
      // console.log(action.payload);
      const articles = action.payload.data.response.docs.map(article => article.abstract)
      return [...state, ...articles ]
    default:
      return state;
  }
}