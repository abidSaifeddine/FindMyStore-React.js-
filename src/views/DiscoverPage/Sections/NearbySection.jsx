import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

class NearbySection extends React.Component{

    render() {
        const { classes } = this.props;
        return(
            <div></div>
        );
    }
}

export default withStyles(landingPageStyle)(NearbySection)