import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import classNames from "classnames";

import trendingPage from "../../../assets/jss/material-kit-react/views/discoverPageSections/trendingPage.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import Parallax from "../../../components/Parallax/Parallax";

class TrendingSection extends React.Component{

    render() {
        const { classes } = this.props;
        return(
            <div>
                <Parallax filter image={require("assets/img/bg-par.jpg")}>
                    <div className={classNames(classes.container)}>
                        <GridContainer>
                            <GridItem>
                                <h2 className={classes.title}>Hello</h2>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>

            </div>
        );
    }
}

export default withStyles(landingPageStyle)(TrendingSection)