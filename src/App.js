import { ButtonGroup, Container, TextField } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import Footer from './components/Footer';
import styled from 'styled-components';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Movie from './components/Movie';
import Menu from './components/Menu';
import { FaCompactDisc, FaHeart, FaVideo } from 'react-icons/fa';





const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMG_API = "https://image.tmdb.org/t/p/w1280";


const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

 


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const getMovies = (API) => {
    fetch(API) 
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results); 
    });
  }

  useEffect ( () => {
    getMovies (FEATURED_API);
  }, []);


  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const goHome = (e) => {
    getMovies (FEATURED_API);
  }

  const fetchSearch = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies (SEARCH_API + searchTerm);
    }
    
    setSearchTerm("");

  };

  return (
    <div>
      <Container>
        
        <Header >

        <Button
          onClick={goHome}
          variant="outlined"
          style={{ color: "rgb(255, 136, 0)", backgroundColor: "rgb(6, 6, 6)" , borderStyle: "solid" , borderWidth:1 , borderColor: "rgb(255, 136, 0)", borderRadius: 0  }}
          >
        <HomeOutlinedIcon />
        </Button>

        <Button
          variant="outlined"
          style={{ color: "green", backgroundColor: "rgb(6, 6, 6)" , borderStyle: "solid" , borderWidth:1 , borderColor: "green", borderRadius: 0, textTransform: 'none', margin: 5
         }}
        >
          <h4>Powered by TMDb</h4>
        </Button>

        <NormalMenu>
        <Button 
          variant="outlined"
          className="MButton"
          style={{ color: "rgb(255, 136, 0)", backgroundColor: "rgb(6, 6, 6)" , borderStyle: "solid" , borderWidth:1 , borderColor: "rgb(255, 136, 0)", borderRadius: 0, textTransform: 'none', margin: 5
         }}
        >
          <h4>Now Playing</h4>
          <FaVideo />
        </Button>

        <Button
          variant="outlined"
          className="MButton"
          style={{ color: "rgb(255, 136, 0)", backgroundColor: "rgb(6, 6, 6)" , borderStyle: "solid" , borderWidth:1 , borderColor: "rgb(255, 136, 0)", borderRadius: 0, textTransform: 'none', margin: 5
         }}
        >
          <h4>On Media</h4>
          <FaCompactDisc />
        </Button>
          
        <Button
          variant="outlined"
          className="mButton"
          style={{ color: "rgb(255, 136, 0)", backgroundColor: "rgb(6, 6, 6)" , borderStyle: "solid" , borderWidth:1 , borderColor: "rgb(255, 136, 0)", borderRadius: 0, textTransform: 'none', margin: 5
         }}
        >
          <h4>Favorites</h4>
          <span> <FaHeart /> </span>
        </Button>

        <div id="moviesbyyear">

        </div>

        

        </NormalMenu>

        <div className="search">
        
        <ButtonGroup size="small" aria-label="small outlined button group">

        <TextField
          variant='outlined'
          size='small'
          style={{ color: " rgb(255, 136, 0)", backgroundColor: "#72471f" , borderStyle: "solid" , borderWidth:1 , borderColor: "rgb(250, 130, 0)" }}
          className="searchBox"
          value={searchTerm}
          onChange={handleChange}
        />

        <Button
          // onClick={fSearch}
          variant="outlined"
          size='large'
          style={{ color: "rgb(255, 136, 0)", backgroundColor: "rgb(6, 6, 6)" , borderStyle: "solid" , borderWidth:1 , borderColor: "rgb(255, 136, 0)", borderRadius: 0 }}
        >
          <BackspaceIcon />
        </Button>

        <Button
          onClick={fetchSearch}
          variant="outlined"
          size='large'
          style={{ color: "rgb(255, 136, 0)", backgroundColor: "rgb(6, 6, 6)" , borderStyle: "solid" , borderWidth:1 , borderColor: "rgb(255, 136, 0)", borderRadius: 0  }}
          >
        <SearchIcon />
        </Button>

        </ButtonGroup>
        </div>

        <Menu />
        </Header>


        <div className="movie-container">
          {movies.length > 0 && 
          movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}    
        </div>


      </Container>
      
    <Footer />
    </div>
  );
}

export default App;









const Header = styled.div`
  min-height: 60px;
  // position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  flex:1;
`

const NormalMenu = styled.div`
  display: flex;
  align-items: centre;
  justify-content: space-between;
  flex:1;
  margin: 5px;


  // a {
  //   font-weight: 600;
  //   text-transform: uppercase;
  //   padding: 0 10px;
  //   flex-wrap: nowrap;
  // }

  @media (max-width: 768px){
    display: none;
  }

`

// const HomeButton = styled(HomeOutlinedIcon)`
//   cursor: pointer;
//   color: rgb(255, 136, 0);
//   border: 1px solid rgb(255, 136, 0);
// `