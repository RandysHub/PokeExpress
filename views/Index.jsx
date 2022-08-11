const React = require('react');
class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <html >
                <head>
                    <link rel="stylesheet" href="/css/index.css" />
                    <title>Pokemon</title>
                </head>
                <body >
                    <h1 >Say hi to all the Pokemon</h1><br />
                    <ul>
                        {pokemon.map((mons) => {
                            return (
                                <li >

                                    <a href={`/pokemon/${mons.id}`}><h3>{mons.name}</h3></a>
                                    <br />
                                    <form action={`/pokemon/${mons.id}?_method=DELETE`} method="POST">
                                        <button type="submit" ><h4 >Delete Entry</h4></button>
                                    </form>
                                    <a href={`/pokemon/${mons.id}/edit`}><button type="submit" ><h4>Edit Entry</h4></button></a>
                                </li>
                            );
                        })}
                    </ul>
                    <a href="/"><button ><h3>Back to all Pokemon</h3></button></a><br />
                </body>
            </html>
        )
    };
};

module.exports = Index;