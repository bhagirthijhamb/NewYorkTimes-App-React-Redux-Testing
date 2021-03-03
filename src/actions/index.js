import axios from 'axios';
import { FETCH_ARTICLES } from './types';

export async function fetchArticles (term){
  try {
      const response = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?', {
        params: {
          q: term,
          'api-key': 'uXiSZXYADR9VvLuUkUqDWxnFIzAtZpy6'
        }
      })
      return {
        type: FETCH_ARTICLES,
        payload: response
      } 
    } catch (err) {
      console.log(err);
    }

}

  fetchArticles = async (term) => {
    
  }


