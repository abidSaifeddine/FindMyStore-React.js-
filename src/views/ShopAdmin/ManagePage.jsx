import React from "react";
import {Link, Route, Switch} from 'react-router-dom';

import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import CreateShopFragment from "./Fragments/CreateShopFragment";
import RenderShopsFragment from "./Fragments/RenderShopsFragment";
import UpdateShopFragment from "./Fragments/UpdateShopFragment";

class ManagePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        return(
            <div>
                <Header
                    color="transparent"
                    brand="#EasyShopping"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>

                            <Switch>

                                <Route path={'/myshop'} exact component={RenderShopsFragment} />
                                <Route path={'/myshop/create'} exact component={CreateShopFragment} />
                                <Route path={'/myshop/:shopid'} exact component={UpdateShopFragment} />
                                <Route render={() => <div>No match</div>} />

                            </Switch>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

export default withStyles(profilePageStyle)(ManagePage);