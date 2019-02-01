import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {flexbox} from '@material-ui/system';

// import SingleLineGrid from '../SingleLineGrid';

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'auto',
    },
    mainImage: {
      alignSelf: "stretch",
      display: "flex",
        width: "auto",
        height: "auto",
        transition: "1.5s ease",
        backfaceVisibility: "hidden"
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 1}px`,
    },
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing.unit,
    },
    divider: {
        margin: `${theme.spacing.unit * 1}px 0`,
    },
});

class Home extends Component {
    static displayName = Home.name;

    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={12}>
                <flexbox display="flex" overflow="auto" margin="0, 0, 0, 0" justifyContent="center">
                    {/*<img className={classes.mainImage} src="https://spiraldocs.blob.core.windows.net/spiraldocs/dds-lg.jpg" alt="background" />*/}
                <div className={classes.paper}>

                </div>
                </flexbox>
            </Grid>
        );
    }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);