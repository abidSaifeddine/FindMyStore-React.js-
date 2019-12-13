import React from 'react';

// @material-ui/core components
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

// Styles
import workStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle";
import { Link } from "react-router-dom";

class RenderShopsFragment extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            shops : []
        }
    }

    componentDidMount() {
        this.populateUsersShopList().then(res => this.setState({ shops : res }) );
    }

    populateUsersShopList = () =>{
        return fetch('http://localhost:8080/shops/user',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Token ${localStorage.getItem("jwtToken")}`
                }
            }).then(response => response.json())
    };

    render() {
        const { classes } = this.props;
        const { shops } = this.state;

        return (
            <div className={classes.section}>

                <h2 className={classNames(classes.title)}>Select a shop to manage</h2>
                <div className="col-md-12 d-flex justify-content-between align-items-center">
                    <Link to="/myshop/create">
                        Establish new
                    </Link>
                </div>
                <div>
                    {
                        shops.map((shop, index) =>
                            <div key={index} className="col-md-12 d-flex justify-content-between align-items-center">
                                <div>
                                    {
                                        shop.name
                                    }
                                </div>
                                <div>
                                    <Button simple href={shop.name} color="info">View page</Button>
                                    <Link to={
                                        {
                                            pathname: `/myshop/${shop.name}`,
                                            state: {
                                                shop : shop
                                            }
                                        }
                                    }>
                                    <Button simple color="warning">modify</Button>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default withStyles(workStyle)(RenderShopsFragment);