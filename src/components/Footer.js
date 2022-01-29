import React from "react";


import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import { Container } from "@material-ui/core";
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "rgb(85, 85, 85) !important",
    zIndex: 100,
    color: "rgb(255, 136, 0) !important"
  },

  bottomnavarrows: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "centre",
    alignItems: "middle",
    
  }

});




const Footer = () => {

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Container>
        
        <div className="footernav">
          <div className="bottomnavtxt">
          <h3> Now playing in theatres</h3>
          </div>
          <div className="bottomnavarrows" 
          // style={{ textAlign: "center", justifyItems:"center", alignItems: "middle" }} 
          >
            <BottomNavigation>
            
                <BottomNavigationAction
                  style={{ color: "rgb(255, 136, 0)", backgroundColor: "rgb(85, 85, 85)", paddingTop: 35, paddingRight: 0 }}
                  label="Go To Bottom"
                  // icon={<ArrowDownwardIcon />}
                  icon={ <FaArrowCircleDown size={30} />}
                />
                <BottomNavigationAction
                  style={{ color: "rgb(255, 136, 0)", backgroundColor: "rgb(85, 85, 85)", paddingLeft: 0 }}
                  label="Go To Top"
                  icon={<FaArrowCircleUp size={30} />}

                  onClick = {() => window.scroll(0,0)}
                />
            </BottomNavigation>
          </div>
        </div>

      </Container>
    </div>

    
  )
}

export default Footer
