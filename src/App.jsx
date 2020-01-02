var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'movie'>{this.props.movie.title}</div>
    )
  }
}

var MovieList = (props) => (
  <div>
    {props.movies.map((movie, i) => <MovieListItem key={i} movie={movie} />)}
  </div>
)

var App = () => (
  <div>
    <MovieList movies ={movies}/>
  </div>
)

export default App;