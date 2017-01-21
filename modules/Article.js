import React from 'react'

export default React.createClass({

    confirmDelete(e){
        if (!confirm('Do you really want to delete this news?')) {
            e.preventDefault();
        }
    },

    render() {
        let deleteForm = '';
        if (this.props.mode === 'user') {
            deleteForm = (
                <form action="/process/del"
                      method="post"
                      onSubmit={this.confirmDelete}
                      className="delete-form">
                    <input type="hidden" name="id" value={this.props._id}/>
                    <button type="submit">Delete</button>
                </form>
            )
        }
        return (
            <article>
                <div className="block-header">
                    <h3 className="title">{this.props.title}</h3>
                    <span>by </span>
                    <span className="author">{this.props.author}</span>
                </div>
                <div className="block-content">
                    <h4 className="description">{this.props.text}</h4>
                    <img className="image" src={this.props.img}/>
                    {deleteForm}
                </div>
            </article>
        )
    }
})
