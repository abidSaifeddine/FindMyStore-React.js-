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
import ProductCard from "../../components/ProductCard";

import {Link, Redirect} from "react-router-dom";

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class WhichlistComponent extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            classicModal: false,
            openLeft: false,
            openTop: false,
            openBottom: false,
            openRight: false,
            wishlist : {
                products :[],
                shops : []
            }
        }
    }
    componentDidMount() {

    }

    handleClickOpen(modal) {
        var x = [];
        x[modal] = true;
        this.setState(x);
        fetch("http://localhost:8080/wishlists/current", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Token ${localStorage.getItem("jwtToken")}`
            },
        }).then(response => response.json()).then(data =>{
            if(data.wishlist)
                this.setState({
                    wishlist : {
                        products : data.wishlist.products,
                        shops : data.wishlist.shops
                    }
                })
        })
    }
    handleClose(modal) {
        var x = [];
        x[modal] = false;
        this.setState(x);
    }
    render() {
        const { classes } = this.props;
        const { wishlist } = this.state;

        return(

            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Button
                            className={classes.navLink}
                            onClick={() => this.handleClickOpen("classicModal")}
                            color="transparent"
                        >
                            Wishlist
                        </Button>

                    </GridItem>
                </GridContainer>
                <Dialog
                    classes={{
                        root: classes.center,
                        paper: classes.modal
                    }}
                    className={classNames("container-fluid")}
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
                        <h4 className={classes.modalTitle}>Wishlist</h4>
                    </DialogTitle>
                    <DialogContent
                        id="classic-modal-slide-description"
                        className={classNames(classes.modalBody)}
                    >
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <div>
                                    <h3>Pinned Products</h3>
                                    <p>You pinned {wishlist.products.length} products</p>
                                    <GridContainer>
                                        {
                                            wishlist.products.map((product, index) =>
                                            <GridItem xs={4} sm={4} md={4}>
                                                <ProductCard product={product} key={index}/>
                                            </GridItem>

                                        )}
                                    </GridContainer>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                        <Button color="transparent" simple>
                            Nice Button
                        </Button>
                        <Button
                            onClick={() => this.handleClose("classicModal")}
                            color="danger"
                            simple
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(javascriptStyles)(WhichlistComponent);