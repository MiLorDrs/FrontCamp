import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                <form action="/auth/login" method="post" className="auth">
                    <h4>Login to your account</h4>
                    <br/>
                    <span>Username:</span>
                    <input type="text" name="username"/>
                    <br/>
                    <span>Password:</span>
                    <input type="password" name="password"/>
                    <br/>
                    <button type="Login">Login</button>
                </form>
            </div>
        )
    }
})
