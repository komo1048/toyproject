//frontend/src/app.js
import React, { Component } from 'react';
import "./App.css";
class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                테스트입니다. 메인페이지;
            </div>
        );
    }
}

export default App;
