const React = require('react');


class Home extends React.Component {
    render() {
        return (
            <html >
                <head>
                    <title>PokeDex</title>
                </head>
                <body >
                    <h1 >Pokedex!</h1>
                    <h3 >What would you like to do?</h3>
                    <div>
                        <a href='/pokemon'><button ><h3>View Pokemon</h3></button></a>
                        <a href='/pokemon/new'><button ><h3>Add New Entry</h3></button></a>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Home;