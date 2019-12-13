import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import CardBody from "./Card/CardBody";
import Card from "./Card/Card";
import Button from "./CustomButtons/Button";
// @material-ui/icons

// core components
import cardStyle from "assets/jss/material-kit-react/components/cardStyle.jsx";
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";
import UpdateProductModal from "../views/ShopAdmin/UpdateProductModal";

class ProductAdminCard extends React.Component{
    constructor(props){
        super(props);
        this.state ={
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

    }

    componentDidMount() {
    }

    handleAdd = ()=>{

    };

    handleRemove = ()=>{
    };


    render() {
        const { product, classes } = this.props;
        return(
            <Card>
                <img
                    style={{height: "auto", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={require("assets/img/examples/studio-5.jpg")}
                    alt="Card-img-cap"
                />
                <CardBody>
                    <h4 className={classes.cardTitle}>{product.name}</h4>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <UpdateProductModal product={product}/>

                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
        )
    }
}

export default withStyles(cardStyle)(ProductAdminCard);
