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

class ProductCard extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            inUserWishlist : false
        };
        this.handleOnWishlistAdd = this.handleOnWishlistAdd.bind(this);
        this.handleOnWishlistRemove = this.handleOnWishlistRemove.bind(this);

    }

    componentDidMount() {
        if(localStorage.getItem('jwtToken') !== null)
            fetch("http://localhost:8080/wishlists/current", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Token ${localStorage.getItem("jwtToken")}`
                },
            }).then(response => response.json()).then(data =>{
                if(data)
                {
                    let product = data.wishlist.products.find(product => product._id === this.props.product._id);
                    if(product)
                        this.setState({
                            inUserWishlist : true
                        })
                }

            })
    }

    handleOnWishlistAdd = ()=>{
        fetch("http://localhost:8080/wishlists/products/add", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Token ${localStorage.getItem("jwtToken")}`
            },
            method: 'POST',
            body: JSON.stringify({
                "product": this.props.product._id
            })
        }).then(response => response.json()).then(data =>{
            if(data.wishlist)
            {
                let product = data.wishlist.products.find(product => product._id === this.props.product._id);
                if(product)
                    this.setState({
                        inUserWishlist : true
                    })
            }
        });

    };

    handleOnWishlistRemove = ()=>{
        fetch("http://localhost:8080/wishlists/products/remove", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Token ${localStorage.getItem("jwtToken")}`
            },
            method: 'DELETE',
            body: JSON.stringify({
                "product": this.props.product._id
            })
        }).then(response => response.json()).then(data =>{
            if(data.wishlist)
            {
                let product = data.wishlist.products.find(product => product._id === this.props.product._id);
                if(!product)
                    this.setState({
                        inUserWishlist : false
                    })
            }
        });
    };


    render() {
        const { product, classes } = this.props;
        const { inUserWishlist } = this.state;
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
                    {
                        inUserWishlist ? <i onClick={this.handleOnWishlistRemove} className="fa fa-minus-circle" role="button" />
                            :<i onClick={this.handleOnWishlistAdd} className="fa fa-star" role="button" />
                    }
                </CardBody>
            </Card>
        )
    }
}

export default withStyles(cardStyle)(ProductCard);
