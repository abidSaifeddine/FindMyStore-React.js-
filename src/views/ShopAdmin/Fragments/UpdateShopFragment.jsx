import React from 'react';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import classNames from 'classnames';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
// Styles
import dashboardStyle from "../../../assets/jss/material-kit-react/views/componentsSections/dashboardStyle.jsx";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import {Link, Redirect} from "react-router-dom";
import CreateProductModal from "../CreateProductModal";
import ProductAdminCard from "../../../components/ProductAdminCard";

class UpdateShopFragment extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            shop : {
                followers: [],
                products : []
            }
        }
    }
    componentDidMount() {
        let self = this;
        const {shop} = this.props.location.state;
        this.setState({
            shop : {
                ...this.state.shop,
                _id : shop._id,
                name : shop.name,
                address : shop.address,
                products : shop.products,
                owner : shop.owner,
                image : shop.image,
                rate : shop.rate,
                followers : shop.followers
            }
        });
    }

    render() {
        if(!this.props.location.state)
            return <Redirect to="/myshop/create" />;

        const { classes, match : { params } } = this.props;
        const { shop } = this.state;


        return (
            <div className={classes.section}>
                <h2 className={classes.title}>{shop.name}</h2>
                <div>
                    <GridContainer>
                        <GridItem xs={4} sm={4} md={4}>
                            <div>
                                <CustomInput
                                    labelText="Contact E-mail"
                                    id="mail"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={
                                        {
                                            type: "email",
                                            name : "email",
                                            value : `${shop.address}`
                                        }
                                    }
                                />
                            </div>
                        </GridItem>
                        <GridItem xs={4} sm={4} md={4}>
                            <div>
                                Followers to this moment :
                                <div>{shop.followers.length}</div>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
                <div>
                    <h3 className={classes.titleNoMargin}>List of products</h3>
                    {
                        shop.products.length > 0 ?
                            <div>You have {shop.products.length} items</div>
                            :<div>No products in your shop, try to add some</div>
                    }
                </div>

                <CreateProductModal shop={shop}/>


                    <GridContainer>
                        {
                            shop.products.map((product, index) =>
                        <GridItem key={index} xs={2} sm={2} md={2}>
                            <ProductAdminCard product={product} key={index}/>
                        </GridItem>
                            )}
                    </GridContainer>

            </div>
        )
    }
}

export default withStyles(dashboardStyle)(UpdateShopFragment);