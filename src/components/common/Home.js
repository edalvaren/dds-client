import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {flexbox} from '@material-ui/system';
import Users from '../users/UsersTable';
// import SingleLineGrid from '../SingleLineGrid';
import NavMenu from './NavMenu'
import Button from '@material-ui/core/Button';

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
    constructor(props){
        super(props);
        this.state = {searchTable: false , value: '', docs: [], loading: true, searchQuery: '', loadSearch: false };
        this.navRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTable = this.handleChangeTable.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton() {
        this.setState({
            searchTable: false
        });
    }



        handleChangeTable(event) {
            alert("works");
        this.setState({searchTable: true});
    }

    handleChange(event){
        event.preventDefault();
        alert("works?");
        // this.setState({ searchQuery: event.target.value });
    }


    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={12}>
                <NavMenu ref={this.navRef} handleSearchChanged={this.handleChange} />
                    {/*<img className={classes.mainImage} src="https://spiraldocs.blob.core.windows.net/spiraldocs/dds-lg.jpg" alt="background" />*/}
                <Button type='button' color="primary" handleClick={this.handleChangeTable}>
                    Click Here
                </Button>
                    <div className={classes.paper}>
                    <Users/>
                </div>
            </Grid>
        );
    }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);