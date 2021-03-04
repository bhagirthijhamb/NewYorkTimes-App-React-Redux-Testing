import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from './../actions';

class ArticleBox extends React.Component {
  state = { term: '' };

  // fetchArticles = async (term) => {
  //   try {
  //     const response = axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?', {
  //       params: {
  //         q: term,
  //         'api-key': 'uXiSZXYADR9VvLuUkUqDWxnFIzAtZpy6'
  //       }
  //     })
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  handleChange = (e) => {
    this.setState({ term: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.fetchArticles(this.state.term);
    this.props.fetchArticles(this.state.term);
    this.setState({ term: '' });
  }

  render(){
    return(
      // <div>Article Box</div>
      <form onSubmit={this.handleSubmit}>
        <h4></h4>
        <input type="text" value={this.state.term} onChange={this.handleChange} />
        <button>Search</button>
      </form>
    )
  }
}

export default connect(null, actions)(ArticleBox);