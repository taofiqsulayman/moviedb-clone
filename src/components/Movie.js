import React from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



// MAKING THE POP UP MODAL AND THE TABS

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "black",
    // width: 500,
  },
  paper: {
    position: 'absolute',
    width: 550,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "black",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}




const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title, poster_path, overview, favourite, release_date, genre_ids, vote_average, vote_count}) => {


  // things needed by the modal tabs

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  
  
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
// to make the modal body
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" style={{color: "rgb(255, 136, 0)"}}>{title}</h2>

      <div className={classes.root}>
      <AppBar position="static" color="primary" style={{backgroundColor: "black"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="white"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Movie Info" {...a11yProps(0)} />
          <Tab label="Movie Cast" {...a11yProps(1)} />
          <Tab label="Rate Movie" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div style={{backgroundColor: "black"}}>
            <div class="row" style={{ display: "flex", flexDirection: "row"}}>
              <div class="col-3 col-sm-3 col-md-3" style={{marginRight:20}}>
                <p>Genre: </p>
              </div>
              <div class="col-9 col-sm-9 col-md-9">
                <p class="text-primary" style={{ color: "#2a9fd6"}}>{genre_ids}</p>
              </div> 
            </div>

            <div class="row" style={{ display: "flex", flexDirection: "row"}}>
              <div class="col-3 col-sm-3 col-md-3" style={{marginRight:20}}>
                <p>Released: </p>
              </div>
              <div class="col-9 col-sm-9 col-md-9">
                <p class="text-primary" style={{ color: "#2a9fd6"}}>{release_date}</p>
              </div> 
            </div>

            <div class="row" style={{ display: "flex", flexDirection: "row"}}>
              <div class="col-3 col-sm-3 col-md-3" style={{marginRight:20}}>
                <p>Rating: </p>
              </div>
              <div class="col-9 col-sm-9 col-md-9">
                <p class="text-primary" style={{ color: "#2a9fd6"}}>{vote_average}({vote_count} votes)</p>
              </div> 
            </div>

            <div class="row" style={{ display: "flex", flexDirection: "row"}}>
              <div class="col-3 col-sm-3 col-md-3" style={{marginRight:20}}>
                <p>Open In: </p>
              </div>
              <div class="col-9 col-sm-9 col-md-9">
                <p class="text-primary" style={{ color: "#2a9fd6"}}></p>
              </div> 
            </div>

            <div class="row" style={{ display: "flex", flexDirection: "row"}}>
              <div class="col-3 col-sm-3 col-md-3" style={{marginRight:20}}>
                <p>Story: </p>
              </div>
              <div class="col-9 col-sm-9 col-md-9">
                <p class="text-primary" style={{ color: "#2a9fd6"}}>{overview}</p>
              </div> 
            </div>

          </div>
          
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
      
        </TabPanel>
      </SwipeableViews>
    </div>

    </div>
  );



  return (
    <div className="movie">
      <div className="movie-title">
        <h5>{title}</h5>
      </div>

      <div>
        <img src={IMG_API + poster_path} alt={title} onClick={handleOpen} />
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
      
      <div className="movie-info">
        <h5>{release_date}</h5>
        <a>
        <FavoriteBorderIcon />
        </a>
      </div>
    </div>
  );
};

export default Movie;
