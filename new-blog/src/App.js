import React, { Component } from 'react';
import './App.css';
import blogs from './blogs.js';
import './blogs.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {blogs.items.map((blog) => {
          return (
            <div className="blog-item">
              <a href="#p" className="title"><h2>{blog.title}</h2></a>
              <a href="#p"><span className="author-name"><h3>{blog.author.name}</h3></span></a>
              <span className="author-avatar">{blog.author.avatar}</span>
              <article className="article">{blog.article}</article>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
