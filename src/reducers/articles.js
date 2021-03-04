import ArticleBox from '../components/ArticleBox';
import { FETCH_ARTICLES } from './../actions/types';

export default function(state=[], action){
  switch(action.type){
    case FETCH_ARTICLES:
      const articles = action.payload.map(article => article.abstract)
      return [...state, ...articles ]
    default:
      return state;
  }
}