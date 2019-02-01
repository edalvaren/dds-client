import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import NavMenu from './NavMenu'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class MainLayout extends React.Component {
    state = {userLoggedIn: false};

    render() {
        const { classes } = this.props;
        const renderNavMenu = (
            <NavMenu/>
        );
        return (
            <div className={classes.root}>
                {renderNavMenu}
                <Grid container spacing={24}>
                    <Grid item xs={12}>

                        {this.props.children}

                    </Grid>

                </Grid>
            </div>
        );
    }
}

MainLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainLayout);
