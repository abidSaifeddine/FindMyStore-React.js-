import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import TrendingPage from "./Sections/TrendingSection";
import StylesSection from  "./Sections/StylesSection";

class DiscoverPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        const { classes, ...rest } = this.props;
        return(
            <div>
                <TrendingPage/>
                <StylesSection/>
                <Footer />
            </div>
        )
    }
}

export default withStyles(landingPageStyle)(DiscoverPage);