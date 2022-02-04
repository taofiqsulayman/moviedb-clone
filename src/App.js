import { ButtonGroup, Container, TextField } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import Footer from './components/Footer';
import styled from 'styled-components';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


import SearchIcon from '@material-ui/icons/Search';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Movie from './components/Movie';
import Menu from './components/Menu';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import VideocamIcon from '@material-ui/icons/Videocam';


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMG_API = "https://image.tmdb.org/t/p/w1280";


const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const TRENDING = "https://api.themoviedb.org/3/trending/movie/day?api_key=04c35731a5ee918f014970082a0088b1"

const NOW_PLAYING = "https://api.themoviedb.org/3/movie/now_playing?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1"

const POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1"

const DISCOVER_MOVIES = "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"

const UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1"

// const DISCOVER_TV = "https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"




function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  
  
  // STUFFS FOR THE DROPDOWN BUTTON

  const [open, setOpen] = React.useState(false);

  const handleDropdown = (event) => {
    getMovies(event.target.value)

    document.getElementById("footertext").innerText = "";
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  // END OF DROPDOWN STUFFS



  const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
      color: "rgb(255, 136, 0)", 
      backgroundColor: "rgb(6, 6, 6)" , 
      borderStyle: "solid" , 
      borderWidth: 2 , 
      borderColor: "rgb(255, 136, 0)", 
      borderRadius: 3,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      color: "rgb(255, 136, 0)", 
      backgroundColor: "rgb(6, 6, 6)",
    },
  }));

  const classes = useStyles();
  

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
    document.getElementById("footertext").innerText = "Featured";
  }

  const nowPlaying = (e) => {
    getMovies(NOW_PLAYING);
    document.getElementById("footertext").innerText = "Now playing";
  }

  const getTrending = (e) => {
    getMovies(TRENDING);
    document.getElementById("footertext").innerText = "Trending";
  }



  const popularMovies = (e) => {
    getMovies(POPULAR);
    document.getElementById("footertext").innerText = "Popular Movies";
  }

  const fetchSearch = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies (SEARCH_API + searchTerm);
    }
    
    setSearchTerm("");

    document.getElementById("footertext").innerText = "Search Results";

  };


  // TO GET MOVIES BY YEAR



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
          <h5>Powered by <br></br>TMDb</h5>
        </Button>

        <NormalMenu>
        <Button
          onClick={nowPlaying} 
          variant="outlined"
          style={{ color: "rgb(255, 136, 0)", backgroundColor: "rgb(6, 6, 6)" , borderStyle: "solid" , borderWidth:1 , borderColor: "rgb(255, 136, 0)", borderRadius: 0, textTransform: 'none', margin: 5
         }}
        >
          <h4>Now Playing</h4>
  
          <VideocamIcon />
          
        </Button>

        <Button
          onClick={getTrending}
          variant="outlined"
          className="MButton"
          style={{ color: "rgb(255, 136, 0)", backgroundColor: "rgb(6, 6, 6)" , borderStyle: "solid" , borderWidth:1 , borderColor: "rgb(255, 136, 0)", borderRadius: 0, textTransform: 'none', margin: 5
         }}
        >
          <h4>Trending</h4>
          <WhatshotIcon />
        </Button>
          
        <Button
          onClick={popularMovies}
          variant="outlined"
          className="mButton"
          style={{ color: "rgb(255, 136, 0)", backgroundColor: "rgb(6, 6, 6)" , borderStyle: "solid" , borderWidth:1 , borderColor: "rgb(255, 136, 0)", borderRadius: 0, textTransform: 'none', margin: 5
         }}
        >
          <h4>Popular Movies</h4>
          <StarBorderIcon />
        </Button>

        <div className='dropDownB'>
          <div>
          <Button className={classes.button} onClick={handleOpen}>
            Check Different Categories
          </Button>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label"> </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              
              onChange={handleDropdown}
            >
              <MenuItem>
                <em>None</em>
              </MenuItem>
              <MenuItem value={DISCOVER_MOVIES}>Discover Movies</MenuItem>
              
              <MenuItem value={UPCOMING_MOVIES}>Upcoming Movies</MenuItem>
            </Select>
          </FormControl>
          </div>
        </div>


        <div className="search">
        
        <ButtonGroup size="small" aria-label="small outlined button group">

        <TextField
          variant='outlined'
          size='small'
          style={{ color: " rgb(255, 136, 0)", backgroundColor: "#72471f" , borderStyle: "solid" , borderWidth:1 , borderColor: "rgb(250, 130, 0)" }}
          className="searchBox"
          value={searchTerm}
          onChange={handleChange}
          onSubmit={fetchSearch}
        />

        <Button
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

        

        </NormalMenu>

        

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