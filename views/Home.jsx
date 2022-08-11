const React = require('react');


class Home extends React.Component {
    render() {
        return (
            <html >
                <head>
                    <title>Pokemon App</title>
                </head>
                <body >
                    <h1 >Pokemon App</h1>
                    <h3 >DO SOMETHING</h3>
                    <div>
                        <a href='/pokemon'><button ><h3>Browse Pokemon</h3></button></a>
                        <a href='/pokemon/new'><button ><h3>Add New Pokemon</h3></button></a>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Home;