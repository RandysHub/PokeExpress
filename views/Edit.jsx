const React = require('react');
const Pokemon = require('../models/pokemon');


class Edit extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        return (
            <html>
                <head>
                    <title>Edit Pokemon!</title>
                </head>
                <body >
                    <h1 >Update Your Pokedex Entry</h1>
                    <h3 >Tell me about the Pokemon!</h3>
                    {/* NOTE: action will be the route, method will be the HTTP verb */}
                    <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="POST">
                        Name: <input type="text" name="name" placeholder='Name' /><br />
                        {/* Image: <input type="text" name="img" placeholder='Image URL' /><br /> */}
                        <input type="submit" name="" value="Edit Entry" />
                    </form>
                </body>
            </html>
        );
    }
}

module.exports = Edit;