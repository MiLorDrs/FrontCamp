import React from 'react'
import Article from './Article'

export default React.createClass({
    getInitialState: function () {
        return {
            articles: []
        };
    },

    componentWillMount(){
        this.fetchArticles();
    },

    fetchArticles () {
        fetch('/process/articles')
            .then(response => {
                if (response.ok) {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(new Error(response.statusText))
                }
            })
            .then(response => {
                return response.json();
            })
            .then(response => {
                this.setState({articles: response});
            })

    },

    render() {
        return (
            <div id="content">
                {this.state.articles.map((article) =>
                    <Article mode={this.props.mode} key={article._id} {...article}/>
                )}
            </div>
        )
    }
})
