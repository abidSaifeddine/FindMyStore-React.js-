/*eslint-disable*/
import React from "react";

import { Redirect } from "react-router-dom";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import profileImage from "assets/img/faces/avatar.jpg";
import Email from "@material-ui/core/SvgIcon/SvgIcon";
import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

import WhichlistComponent from '../../views/Whichlist/WhichlistComponent';

function logout() {
    localStorage.removeItem("jwtToken");
    window.location.href='/'
}

function HeaderLinks({ ...props }) {

  const { classes } = props;
  const userLinks = (
          <ListItem className={classes.listItem}>
              <CustomDropdown
                  left
                  caret={false}
                  hoverColor="black"
                  dropdownHeader="Dropdown Header"
                  buttonText={
                      <img
                          src={profileImage}
                          className={classes.img}
                          alt="profile"
                      />
                  }
                  buttonProps={{
                      className:
                          classes.navLink + " " + classes.imageDropdownButton,
                      color: "transparent"
                  }}
                  dropdownList={[
                      <Link to='/profile'>
                        <div>Me</div>
                      </Link>,
                      <div>Settings and other stuff</div>,
                      <div onClick={logout}
                      >Sign Out</div>
                  ]}
              />
          </ListItem>
  );
  const guestLinks = (
      <ListItem className={classes.listItem}>
          <Button
              href="/login"
              className={classes.registerNavLink}
              color="rose"
              round
          >
              Login
          </Button>
      </ListItem>
  );
  return (
      <List className={classes.list}>
          <ListItem className={classes.listItem}>
              <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
              >
                  Discover
              </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
              <WhichlistComponent />
          </ListItem>
          { localStorage.getItem("jwtToken") == null ? guestLinks : userLinks}
      </List>
  );
}

export default withStyles(navbarsStyle)(HeaderLinks);
