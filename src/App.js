
import MovieCard from './moviecard/MovieCard';
import { useState } from 'react';
import React from 'react'
import Rating from './rating/Rating';
import './App.css'
import"bootstrap/dist/css/bootstrap.min.css";
import AddMovie from './AddMovie/AddMovie';
// import MovieList from './movielist/MovieList';

function App() {
  const data = [
    {
      id : Math.random() , 
      title : 'Aquaman' , 
      description : 'The film was directed by James Wan, from a screenplay by David Leslie Johnson-McGoldrick and Will Beall. It stars Jason Momoa as Arthur Curry / Aquaman, who sets out to lead the underwater kingdom of Atlantis and stop his half-brother, King Orm, from uniting the seven underwater kingdoms to destroy the surface world.' ,
      posterURL:'https://m.media-amazon.com/images/I/81m6Y9w6WGL._AC_SY606_.jpg',
      rating:'5'
    },
{
  id : Math.random() , 
  title : 'Spiderman' , 
  description : 'Spider-Man is a 2002 American superhero film based on the Marvel Comics character of the same name. Directed by Sam Raimi from a screenplay by David Koepp, it is the first installment in Raimis Spider-Man trilogy, and stars Tobey Maguire as the titular character, alongside Willem Dafoe, Kirsten Dunst, James Franco, Cliff Robertson, and Rosemary Harris. ',
  posterURL:'https://www.themoviedb.org/t/p/original/ynyDOCwNuYqqR6p1d6Nbk7ehpfv.jpg', 
  rating:'5'
},
{
  id : Math.random() ,
  title : 'Knives out' , 
  description : 'Knives Out is a 2019 American mystery film written and directed by Rian Johnson and produced by Johnson and Ram Bergman. It follows a master detective investigating the death of the patriarch of a wealthy, dysfunctional family.',
  posterURL:'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg',
  rating:'3'
},
{
  id : Math.random() ,
  title : 'Oceans 8' ,
  description : 'Oceans 8 ou Debbie Ocean 8 au Québec1 est un film américain réalisé par Gary Ross, sorti en 2018. Il sagit dun dérivé de la Trilogie Ocean de Steven Soderbergh.',
  posterURL:'https://www.avoir-alire.com/local/cache-vignettes/L240xH351/arton38265-dfc96.jpg?1578256957' ,
  rating:'4'
}]
const [movie, setMovie] = useState(data)
const [text, setText] = useState("")
const handleSubmit=(e)=> setText(e.target.value);
const [rating, setRating] = useState(1)
const handleAdd=(newMovie)=>setMovie([...movie, newMovie]);
const handleRating=(x)=>setRating(x);

  return (
    <div className="App">
       <header>
        <h1> My movie app</h1>
            <input type = 'text' onChange={handleSubmit}  placeholder='Search...' value={text}/>
           <Rating rating={rating} handleRating={handleRating}/>
        </header>
        <Rating />
      
    <MovieCard movie={data.filter(el=>(el.title.toLowerCase().includes(text.toLowerCase()))&& el.rating>= rating) } />
    <AddMovie add={handleAdd}/>
        
    </div>
  );
}

export default App;
