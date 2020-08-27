import React from 'react';
import axios from 'axios';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from "../registration-view/registration-view";

export class MainView extends React.Component {
  constructor() {
      super();
  
      this.state = {
          movies: null,
          selectedMovie: null,
          user: null,
          register: false,
      };
  }    
  
  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie,
    });
  }

  getMovies(token) {
    axios.get('https://my1980smoviesapi.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      // Assign the result to the state
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }  
    
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });
  
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);      
  }
    
  onRegister = () => {
    const { register } = this.state;

    if (!register) {
      this.setState({ register: true });
    } else {
      this.setState({ register: false });
    }
  }  
    
    
  render() {
    const { movies, selectedMovie, user, register } = this.state;
    if (!user && !register) return <LoginView onClick={this.onRegister} onLoggedIn={user => this.onLoggedIn(user)} />
    if (register) return <RegistrationView onCLick={() => this.alreadyMember()}onloggedIn={(user) => this.onloggedIn(user)}  />
    if (!movies) return <div className="main-view" />;

    return (
      <div className="main-view">
        <Container>
          <Row>
            {selectedMovie ? (
              <MovieView
                movie={selectedMovie}
                previous={(movie) => this.onMovieClick(!movie)}
              />
            ) : (
                movies.map((movie) => (
                <Col key={movie._id} xs={12} sm={6} md={4}>
                  <MovieCard
                    key={movie._id}
                    movie={movie}
                    click={(movie) => this.onMovieClick(movie)}
                  />
                </Col>
              ))
            )}
          </Row>
        </Container>

      </div>
    );
  }
}