import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import recommendedStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/recommendedStyle.jsx";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Link from "@material-ui/core/Link/Link";

class RecommendedSection extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <h2 className={classes.title}>Recommended For you</h2>
                <div className={classNames(classes.container)}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={3}>
                            <Card>
                                <img
                                    style={{height: "auto", width: "100%", display: "block"}}
                                    className={classes.imgCardTop}
                                    src={require("assets/img/examples/studio-4.jpg")}
                                    alt="Card-img-cap"
                                />
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Card title</h4>
                                    <Button color="rose">Wichlist</Button>
                                </CardBody>
                            </Card>
                            <Card>
                                <img
                                    style={{height: "auto", width: "100%", display: "block"}}
                                    className={classes.imgCardTop}
                                    src={require("assets/img/examples/studio-5.jpg")}
                                    alt="Card-img-cap"
                                />
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Card title</h4>
                                    <Button color="rose">Wichlist</Button>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <Card>
                                <img

                                    style={{height: "auto", width: "100%", display: "block"}}
                                    className={classes.imgCardTop}
                                    src={require("assets/img/examples/studio-3.jpg")}
                                    alt="Card-img-cap"
                                />
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Card title</h4>
                                    <Button color="rose">Wichlist</Button>
                                </CardBody>
                            </Card>
                            <Card>
                                <img
                                    style={{height: "auto", width: "100%", display: "block"}}
                                    className={classes.imgCardTop}
                                    src={require("assets/img/examples/studio-4.jpg")}
                                    alt="Card-img-cap"
                                />
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Card title</h4>
                                    <Button color="rose">Wichlist</Button>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <Card>
                                <img
                                    style={{height: "auto", width: "100%", display: "block"}}
                                    className={classes.imgCardTop}
                                    src={require("assets/img/examples/studio-2.jpg")}
                                    alt="Card-img-cap"
                                />
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Card title</h4>
                                    <Button color="rose">Wichlist</Button>
                                </CardBody>
                            </Card>
                            <Card>
                                <img
                                    style={{height: "auto", width: "100%", display: "block"}}
                                    className={classes.imgCardTop}
                                    src={require("assets/img/examples/studio-4.jpg")}
                                    alt="Card-img-cap"
                                />
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Card title</h4>
                                    <Button color="rose">Wichlist</Button>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <Card>
                                <img
                                    style={{height: "auto", width: "100%", display: "block"}}
                                    className={classes.imgCardTop}
                                    src={require("assets/img/examples/studio-1.jpg")}
                                    alt="Card-img-cap"
                                />
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Card title</h4>
                                    <Button color="rose">Wichlist</Button>

                                </CardBody>
                            </Card>
                            <Card>
                                <img
                                    style={{height: "auto", width: "100%", display: "block"}}
                                    className={classes.imgCardTop}
                                    src={require("assets/img/examples/studio-5.jpg")}
                                    alt="Card-img-cap"
                                />
                                <CardBody>
                                    <h4 className={classes.cardTitle}>Card title</h4>
                                    <Button color="rose">Wichlist</Button>

                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(recommendedStyle)(RecommendedSection);

