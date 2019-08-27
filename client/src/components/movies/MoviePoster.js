import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Dimmer, Header, Image } from 'semantic-ui-react'

class MoviePoster extends React.Component {
    state = {}

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })

    render() {
        const { active } = this.state
        const content = (
        <div>
            <Header as='h2' inverted>
            {this.props.movie.title.original_name}
            </Header>

            <Link to={`movies/${this.props.movie.id}`}>Info</Link>
        </div>
        )

        return (
        <Dimmer.Dimmable
            as={Image}
            dimmed={active}
            dimmer={{ active, content }}
            onMouseEnter={this.handleShow}
            onMouseLeave={this.handleHide}
            src={this.props.movie.poster_image}
        />
        )
    }
}

export default MoviePoster;