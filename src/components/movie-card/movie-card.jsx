import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

/*sources of all Individual files and folders*/
import "./movie-card.scss";

export class MovieCard extends Component {
render() {
  const { movie, click } = this.props;
  const host = window.location.href;
    return (
      <Card className="mb-3 mb-sm-4" style={{ width: '16rem' }}>
        <Card.Img variant="top" src={ movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Button onClick={() => click(movie)} variant="link">Open</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string,
      Birth: PropTypes.string
    }),
    Featured: PropTypes.boolean
  }).isRequired,
  Actors:PropTypes.array,
  click: PropTypes.func.isRequired
};