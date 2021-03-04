import axios from 'axios';
import { FETCH_ARTICLES } from './types';

export async function fetchArticles (term){
      const response = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?', {
        params: {
          q: term,
          'api-key': 'uXiSZXYADR9VvLuUkUqDWxnFIzAtZpy6'
        }
      })
      // console.log(response);
      // console.log(response.data.response.docs);
      return {
        type: FETCH_ARTICLES,
        payload: response.data.response.docs
      } 
}


