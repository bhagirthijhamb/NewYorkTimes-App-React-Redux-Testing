import React from 'react';
import { connect } from 'react-redux';

class ArticleList extends React.Component {
  renderArticles(){
    return this.props.articles.map(article => {
      return <li key={article}>{article}</li>
    })
  }
  render(){
    return(
      <div>
        <ul>
          {this.renderArticles()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { articles: state.articles };
}

export default connect(mapStateToProps)(ArticleList);