import React from 'react';
import axios from 'axios';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
    constructor() {
        super();
    
        this.state = {
          movies: null,
          selectedMovie: null
        };
    }    
  
    componentDidMount() {
        // axios.get('<my-api-endpoint/movies>')
        //   .then(response => {
        //     // Assign the result to the state
        //     this.setState({
        //       movies: response.data
        //     });
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        // Workaround for testing without API
        this.setState({
            movies: [
                {
                    Title: 'Gladiator',
                    Year: 2008,
                    Description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
                    Genre: { Name : 'Action', Description : 'Action film is a film Genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, and frantic chases. Action films tend to Feature a resourceful hero struggling against incredible odds, which include life-threatening situations, a villain, or a pursuit which usually concludes in victory for the hero.'
                    },
                    Director :{ Name: 'Ridley Scott', Bio: 'Sir Ridley Scott is an English filmmaker', Birth: 1937
                    },
                    Actors : ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
                    ImagePath: 'https://i.pinimg.com/originals/05/9b/43/059b435de672ead5fc0bba6bd757aedf.jpg',
                    Featured: true
                },
                {
                     Title : 'Schindler\'s List',
                     Year : 1993,
                     Description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
                     Genre: { Name : 'Drama', Description : 'In film and television, drama is a Genre of narrative fiction or semi-fiction intended to be more serious than humorous in tone. All forms of cinema or television that involve fictional stories are forms of drama in the broader sense if their storytelling is achieved by means of actors who represent (mimesis) characters.'
                     },
                     Director: { Name: 'Steven Spielberg', Bio: 'Steven Allan Spielberg is an American director and producer', Birth: 1946
                     },
                     Actors : ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley'],
                    ImagePath: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
                    Featured: true
                },
                {
                    Title : 'Indiana Jones and the Kingdom of the Crystal Skull',
                    Year : 2008,
                    Description: 'A renowned archaeologist and explorer, Indiana Jones, teams up with a young man in order to unearth the mystery behind the legendary crystal skulls.',
                    Genre: { Name : 'Thriller', Description : 'Thriller film, also known as suspense film or suspense thriller, is a broad film Genre that evokes excitement and suspense in the audience. Tension is created by delaying what the audience sees as inevitable, and is built through situations that are menacing or where escape seems impossible.'
                    },
                    Director: { Name: 'Steven Spielberg', Bio: 'Steven Allan Spielberg is an American director and producer', Birth: 1946
                    },
                    Actors : ['Harrison Ford', 'Sean Connery', 'Alison Doody'],
                    ImagePath: 'https://vignette.wikia.nocookie.net/indianajones/images/9/92/IJATKOTCS_novel.jpg',
                    Featured: 'true'
                },
                {
                    Title : 'Jurassic Park',
                    Year : 1993,
                    Description: 'John Hammond, an entrepreneur, opens a wildlife park containing cloned dinosaurs. However, a breakdown of the island\'s security system causes the creatures to escape and bring about chaos.',
                    Genre: { Name: 'Fantasy', Description: 'Fantasy films are films that belong to the fantasy Genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The Genre is considered a form of speculative fiction alongside science fiction films and horror films, although the Genres do overlap. Fantasy films often have an element of magic, myth, wonder, escapism, and the extraordinary.'
                    },
                    Director: { Name: 'Steven Spielberg', Bio: 'Steven Allan Spielberg is an American director and producer', Birth: 1946
                    },
                    Actors : ['Sam Neill', 'Laura Dern', 'Jeff Goldblum'],
                    ImagePath: 'https://i.ytimg.com/vi/f5C7dqrAItM/movieposter.jpg',
                    Featured: true
                },
                {
                    Title : 'Indiana Jones and the Temple of Doom',
                    Year : 1984,
                    Description: 'Indiana Jones, a legendary archaeologist, finds himself in India, where a bunch of poor villagers reach out to him to track down an ancient stone that has been stolen by an evil priest.',
                    Genre: { Name : 'Thriller', Description : 'Thriller film, also known as suspense film or suspense thriller, is a broad film Genre that evokes excitement and suspense in the audience. Tension is created by delaying what the audience sees as inevitable, and is built through situations that are menacing or where escape seems impossible.'
                    },
                    Director: {	Name: 'Steven Spielberg',	Bio: 'Steven Allan Spielberg is an American director and producer', Birth: 1946
                    },
                    Actors : ['Harrison Ford', 'Kate Capshaw', 'Ke Huy Quan'],
                    ImagePath: 'https://c8.alamy.com/comp/T0JGWM/film-poster-indiana-jones-and-the-temple-of-doom-1984-T0JGWM.jpg',
                    Featured: true
                },
                {
                    Title : 'Avatar',
                    Year : 1998,
                    Description: 'Jake, a paraplegic marine, replaces his brother on the Navi inhabited Pandora for a corporate mission. He is accepted by the natives as one of their own but he must decide where his loyalties lie.',
                    Genre: { Name: 'Fantasy', Description: 'Fantasy films are films that belong to the fantasy Genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The Genre is considered a form of speculative fiction alongside science fiction films and horror films, although the Genres do overlap. Fantasy films often have an element of magic, myth, wonder, escapism, and the extraordinary.'
                    },
                    Director: {	Name: 'James Cameron', Bio: 'James Francis Cameron CC is a Canadian filmmaker, artist, and environmentalist, who is best known for making science fiction and epic films for the Hollywood mainstream', Birth: 1954
                    },
                    Actors : ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
                    ImagePath: 'https://pics.filmaffinity.com/Avatar-993297010-large.jpg',
                    Featured: true
                },
                {
                    Title : 'Kill Bill',
                    Year : 2003,
                    Description: 'A pregnant assassin, code-Named The Bride, goes into a coma for four Years after her ex-boss Bill brutally attacks her. When she wakes up, she sets out to seek revenge on him and his associates.',
                    Genre: { Name : 'Action', Description : 'Action film is a film Genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, and frantic chases. Action films tend to Feature a resourceful hero struggling against incredible odds, which include life-threatening situations, a villain, or a pursuit which usually concludes in victory for the hero.'
                    },
                    Director: { Name: 'Quentin Tarantino', Bio: 'Quentin Jerome Tarantino is an American filmmaker and actor', Birth: 1963
                    },
                    Actors : ['Uma Thurman', 'David Carradine', 'Daryl Hannah'],
                    ImagePath: 'https://i.pinimg.com/originals/64/82/ef/6482ef51ce0b437986ec477e0d46f30c.jpg',
                    Featured: true
                  },
            ]
        });
    }

    onMovieClick(movie) {
        this.setState({
            selectedMovie: movie
        });
    }    
    
    
    render() {
        const { movies, selectedMovie } = this.state;

        // Before the movies have been loaded
        if (!movies) return <div className="main-view"/>;

        return (
        <div className="main-view">
        {selectedMovie
            ? <MovieView movie={selectedMovie} previous={movie => this.onMovieClick(!movie)}/>
            : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)}/>
            ))
        }
        </div>
        );
    }
}
      