import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import CardFooter from "../../components/Card/CardFooter";
import {any} from "prop-types";

class ShopsPage extends React.Component {
    rateSelected = (e) =>{
        console.log(this);
    };


        constructor(props){
            super(props);
            this.state = {
                data: []
            }
        }


    componentDidMount(){
        this.getDataFromDb().then(res => {

            this.setState({
                data: res.shops
            })

        });

    }

    fillData = ()=>{
        const { classes, ...rest } = this.props;
        return this.state.data.map(item =>
            <GridItem xs={6} sm={6} md={2}>
                <Card>
                    {/*<img*/}
                        {/*style={{height: "auto", width: "100%", display: "block"}}*/}
                        {/*className={classes.imgCardTop}*/}
                        {/*src={require(item.image)}*/}
                        {/*alt="Card-img-cap"*/}
                    {/*/>*/}
                    <CardBody>
                        <h4 className={classes.cardTitle}>{item._id}</h4>
                        <Button color="rose" className={"btn-xs"}>WishList</Button>
                    </CardBody>
                    <CardFooter>
                        <label htmlFor="s">Rate :</label>
                        <select id={"s"} className="form-control" style={{width: "auto"}} onChange={this.rateSelected}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </CardFooter>
                </Card>
            </GridItem>
        );

    };

    getDataFromDb = () => {
       return fetch('http://localhost:3001/shops')
            .then((data) => data.json());
    };
    render() {
        const { classes, ...rest } = this.props;
        return (
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
                            <div>
                                <GridContainer>
                                    {this.fillData()}

                                </GridContainer>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(profilePageStyle)(ShopsPage);
