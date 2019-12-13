import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Parallax from "../../../components/Parallax/Parallax";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";


class StylesSection extends React.Component{

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

export default withStyles(landingPageStyle)(StylesSection)