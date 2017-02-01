import React from 'react'
import {Link} from 'react-router'
import Articles from './Articles'

export default React.createClass({
    render() {
        return (
            <div>
                <aside>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </aside>
                <Articles/>
            </div>
        )
    }
})
