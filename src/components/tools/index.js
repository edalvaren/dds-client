import Stepper from './steppers';
import React from 'react';
import RadioButtons from './RadioOptions';
import Checkboxes from './Checkboxes';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

function ProjectTool(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Stepper/>
                    <Grid item xs={12} sm={6}>
                        {/*<RadioButtons/>*/}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}

ProjectTool.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectTool);