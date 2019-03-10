import React, { Component } from 'react';
import './App.css';
import blogs from './blogs.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        {blogs.items.map((blog) => {
          return (
            <div>
              {blog.title}
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
