import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                <form action="/process/add" method="post" className="adding-form">
                    <h4>Add News:</h4>
                    <span>Title:</span>
                    <input type="text" name="title"/>
                    <br/>
                    <span>Description:</span>
                    <input type="text" name="description"/>
                    <br/>
                    <span>Author:</span>
                    <input type="text" name="author"/>
                    <br/>
                    <span>Image url:</span>
                    <input type="text" name="img"/>
                    <br/>
                    <button type="submit">Add News</button>
                </form>
            </div>
        )
    }
})
