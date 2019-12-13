import React from 'react';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

// Styles
import workStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle";

class CreateShopFragment extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    handleCreateShop = (e) => {
        e.preventDefault();
        var form = new FormData(e.target);
        var object = {};

        var shop = {}
        shop['name'] = form.get("name");
        shop['image'] = "default";
        shop['rate'] = 0;
        shop['address'] = form.get("email");

        object['shop'] = shop;
        fetch('http://localhost:8080/shops',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Token ${localStorage.getItem("jwtToken")}`
                },
                method: 'POST',
                body: JSON.stringify(object)
            })
    };


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <h2 className={classes.title}>Populate !</h2>
                <form onSubmit={this.handleCreateShop}>
                    <GridContainer justify="center">

                        <GridItem xs={12} sm={12} md={10}>
                            <CustomInput
                                labelText="Shop Name"
                                id="name"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={
                                    {
                                        name : "name"
                                    }
                                }
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={10}>
                            <CustomInput
                                labelText="Contact e-mail"
                                id="email"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={
                                    {
                                        type : "email",
                                        name: "email"
                                    }
                                }
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={10}>
                            <CustomInput
                                labelText="Address"
                                id="name"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={
                                    {
                                        name: "address"
                                    }
                                }
                            />
                        </GridItem>

                        <GridItem xs={12} sm={12} md={10}>
                            <input type="file" accept="image/x-png,image/gif,image/jpeg" />
                        </GridItem>

                        <GridItem>
                            <GridContainer justify="center">
                                <GridItem
                                    xs={12}
                                    sm={12}
                                    md={4}
                                    className={classes.textCenter}
                                >
                                    <Button type="submit" color="primary">Create !</Button>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                    </GridContainer>
                </form>
            </div>
        )
    }
}

export default withStyles(workStyle)(CreateShopFragment);