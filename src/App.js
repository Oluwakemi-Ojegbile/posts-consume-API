import React, { Component } from 'react';
import Posts from './components/Posts'
import './App.css';

class App extends Component {

  state = {
    posts: []
  }
  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts}/>
      </div>
    );
  }
  componentDidMount() {
    return fetch('http://jsonplaceholder.typicode.com/posts/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ posts: data })
    })
    .catch(console.log)
  }
}

export default App;
