import React from 'react'

import Articles from './Articles'
import CreateForm from './CreateForm'

export default React.createClass({
    render() {
        return (
            <div>
                <aside>
                    <h1 className="user-name">You are logged.</h1>
                    <a href="/auth/logout" className="logout">
                        <button>Logout</button>
                    </a>
                    <CreateForm/>
                </aside>
                <Articles mode="user"/>
            </div>
        )
    }
})
