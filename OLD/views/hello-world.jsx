var React = require('react');
var DefaultLayout = require('./default');

class HelloMessage extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <h1>{this.props.title}</h1>
                <div>{this.props.msg}</div>
            </DefaultLayout>
        );
    }
}

module.exports = HelloMessage;