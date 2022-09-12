import Movie from "./components/Movie";
import GenreList from "./components/GenreList";

const thrillers = [
  {
    title: "Psycho",
    director: "Alfred Hitchcock",
    year: "1960",
  },
  {
    title: "Silence of the Lambs",
    director: "Jonathan Demme",
    year: "1991",
  },
  {
    title: "Eyes Wide Shut",
    director: "Stanley Kubrick",
    year: "1999",
  },
];

const scifi = [
  {
    title: "Metropolis",
    director: "Fritz Lang",
    year: "1927",
  },
  {
    title: "2001: A Space Odyssey",
    director: "Stanley Kubrick",
    year: "1968",
  },
  {
    title: "Robocop",
    director: "Paul Verhoeven",
    year: "1987",
  },
];

const comedy = [
  {
    title: "Luokkakokous",
    director: "Taneli Mustonen",
    year: "2015",
  },
  {
    title: "Free Guy",
    director: "Shawn Levy",
    year: "2021",
  },
  {
    title: "21 Jump Street",
    director: "Phil Lord and Christopher Miller",
    year: "2012",
  },
];


const App = () => {

  return (
    <div>
      <h1>Movies</h1>
      <GenreList movies={thrillers} genreName="Thriller" />
      <GenreList movies={scifi} genreName="Scifi" />
      <GenreList movies={comedy} genreName="Comedy" />
    </div>
  );
};

//export the component in the end
export default App;
