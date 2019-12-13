import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import { Link } from "react-router-dom";

class FamousShops extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            shops : [],
            relevent : []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/shops').then(response => response.json())
            .then((json) =>{
                return json;
            })
            .then(res => this.setState({ shops : res }));
    }


    render() {
        const { classes } = this.props;
        const { shops } = this.state;

        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );


        return (
            <div className={classes.section}>
                <h2 className={classes.title}>Our famous shops</h2>
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={3}>
                            <Card plain>
                                <Link to='/shop' >
                                <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                                    <img src={team1} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Store Name
                                    <br />
                                    <small className={classes.smallTitle}>Store Type</small>
                                </h4>
                                <CardBody>
                                    <p className={classes.description}>
                                    </p>
                                </CardBody>
                                </Link>
                                <CardFooter className={classes.justifyCenter}>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-twitter"} />
                                    </Button>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-instagram"} />
                                    </Button>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-facebook"} />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <Card plain>
                                <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                                    <img src={team2} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Store Name
                                    <br />
                                    <small className={classes.smallTitle}>Store Type</small>
                                </h4>
                                <CardBody>
                                    <p className={classes.description}>
                                    </p>
                                </CardBody>
                                <CardFooter className={classes.justifyCenter}>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-twitter"} />
                                    </Button>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-instagram"} />
                                    </Button>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-facebook"} />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <Card plain>
                                <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                                    <img src={team3} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Store Name
                                    <br />
                                    <small className={classes.smallTitle}>Store Type</small>
                                </h4>
                                <CardBody>
                                    <p className={classes.description}>
                                    </p>
                                </CardBody>
                                <CardFooter className={classes.justifyCenter}>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-twitter"} />
                                    </Button>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-instagram"} />
                                    </Button>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-facebook"} />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <Card plain>
                                <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                                    <img src={team3} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Store Name
                                    <br />
                                    <small className={classes.smallTitle}>Store Type</small>
                                </h4>
                                <CardBody>
                                    <p className={classes.description}>
                                    </p>
                                </CardBody>
                                <CardFooter className={classes.justifyCenter}>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-twitter"} />
                                    </Button>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-instagram"} />
                                    </Button>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                    >
                                        <i className={classes.socials + " fab fa-facebook"} />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </GridItem>
                        <Button  href={"/allShops"}>See all shops</Button>

                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(teamStyle)(FamousShops);
