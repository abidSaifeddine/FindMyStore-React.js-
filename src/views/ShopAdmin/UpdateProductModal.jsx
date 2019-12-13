import React from 'react';

import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";

import LibraryBooks from "@material-ui/core/SvgIcon/SvgIcon";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import IconButton from "@material-ui/core/IconButton/IconButton";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Slide from "@material-ui/core/Slide/Slide";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";
import {Link} from "react-router-dom";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import PropTypes from "prop-types";


function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class UpdateProductModal extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            classicModal: false,
            openLeft: false,
            openTop: false,
            openBottom: false,
            openRight: false
        }
    }
    handleClickOpen(modal) {
        var x = [];
        x[modal] = true;
        this.setState(x);
    }
    handleClose(modal) {
        var x = [];
        x[modal] = false;
        this.setState(x);
    }
    handleUpdateProduct = (e) => {
        e.preventDefault();
        var form = new FormData(e.target);
        var object = {};

        var product = {};
        product['name'] = form.get("name");
        product['image'] = "default";
        product['color'] = form.get("color");

        object['product'] = product;
        fetch('http://localhost:8080/shops/products',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Token ${localStorage.getItem("jwtToken")}`
                },
                method: 'PATCH',
                body: JSON.stringify(object)
            }).then(res => {
                console.log(res);
        })
    };
    render() {
        const { classes, shop, product } = this.props;

        return(

            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Button
                            className={classes.navLink}
                            onClick={() => this.handleClickOpen("classicModal")}
                            color="primary"
                        >
                            Update

                        </Button>
                        <Dialog
                            classes={{
                                root: classes.center,
                                paper: classes.modal
                            }}
                            open={this.state.classicModal}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={() => this.handleClose("classicModal")}
                            aria-labelledby="classic-modal-slide-title"
                            aria-describedby="classic-modal-slide-description"
                        >
                            <DialogTitle
                                id="classic-modal-slide-title"
                                disableTypography
                                className={classes.modalHeader}
                            >
                                <IconButton
                                    className={classes.modalCloseButton}
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={() => this.handleClose("classicModal")}
                                >
                                    <Close className={classes.modalClose} />
                                </IconButton>
                                <h5>New product added to your  store?</h5>
                                <h3 className={classes.modalTitle}>Create Product</h3>
                            </DialogTitle>
                            <form onSubmit={this.handleCreateProduct}>
                            <DialogContent
                                id="classic-modal-slide-description"
                                className={classes.modalBody}
                            >
                                    <GridContainer justify="center">

                                        <GridItem xs={12} sm={12} md={10}>
                                            <CustomInput
                                                labelText="Product Title"
                                                id="name"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={
                                                    {
                                                        name : "name",
                                                        value : `${product.name}`
                                                    }
                                                }
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={10}>
                                            <CustomInput
                                                labelText="Color"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={
                                                    {
                                                        name: "color",
                                                        value : `${product.color}`
                                                    }
                                                }
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={10}>
                                            <CustomInput
                                                labelText="Color"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={
                                                    {
                                                        type :"file",
                                                        name: "color",
                                                        accept:"image/x-png,image/gif,image/jpeg"
                                                    }
                                                }
                                            />
                                        </GridItem>

                                        <GridItem>
                                            <GridContainer justify="center">
                                                <GridItem
                                                    xs={12}
                                                    sm={12}
                                                    md={4}
                                                    className={classes.textCenter}
                                                >

                                                </GridItem>
                                            </GridContainer>
                                        </GridItem>
                                    </GridContainer>

                            </DialogContent>
                            <DialogActions className={classes.modalFooter}>
                                <Button type="submit" color="primary">Create !</Button>
                                <Button
                                    onClick={() => this.handleClose("classicModal")}
                                    color="danger"
                                    simple
                                >
                                    Close
                                </Button>
                            </DialogActions>
                        </form>
                        </Dialog>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}
UpdateProductModal.propTypes = {
    classes: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired
};
export default withStyles(javascriptStyles)(UpdateProductModal);