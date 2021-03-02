import React from 'react';
import axios from 'axios';

class ArticleBox extends React.Component {
  state = { term: '' };

  fetchArticles = async (term) => {
    try {
      const response = axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?', {
        params: {
          q: term,
          'api-key': 'uXiSZXYADR9VvLuUkUqDWxnFIzAtZpy6'
        }
      })
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = (e) => {
    this.setState({ term: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchArticles(this.state.term)
  }

  render(){
    return(
      // <form onSubmit={this.handleSubmit}>
      //   <input type="text" value={this.state.term} onChange={this.handleChange} />
      //   <button>Search</button>
      // </form>
      <div>Article Box</div>
    )
  }
}

export default ArticleBox;