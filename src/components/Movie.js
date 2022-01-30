import React from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FaBlackberry } from "react-icons/fa";







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

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "black",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title, poster_path, overview, favourite, release_date}) => {

  const classes = useStyles();
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
      <h2 id="simple-modal-title">{title}</h2>
      <p id="simple-modal-description">
       {overview}
      </p>
      
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
}

export default Movie;


