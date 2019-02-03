import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {flexbox} from '@material-ui/system';
import Users from '../users/UsersTable';
// import SingleLineGrid from '../SingleLineGrid';
import NavMenu from './NavMenu'
import Button from '@material-ui/core/Button';
import SearchTable from '../search/searchTable';

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
        this.state = {isSearchTable: false , value: '', docs: [], loading: true, searchQuery: '', loadSearch: false };
        this.navRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTable = this.handleChangeTable.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton() {
        this.setState({
            isSearchTable: false
    });
        alert("show search");

    }



    handleChangeTable(event) {
        event.preventDefault();
            alert("show users");
        this.setState({isSearchTable: true});
    }

    handleChange(event){
        event.preventDefault();
        // this.setState({ searchQuery: event.target.value });
    }


    render() {
        /*  If the Search table is currently showing. the button says "show Users"
           * If the  */
        const { classes } = this.props;
        const isSearch = this.state.isSearchTable;
        let renderedTable;
        let button;
        if(isSearch) {
            button = <Button onClick={this.handleButton}> Show Search</Button>;
            renderedTable = <Users/>
        } else {
            button = <Button onClick={this.handleChangeTable}> Show Users </Button>
            renderedTable = <SearchTable/>
        }
        return (
            <Grid item xs={12}>
                <NavMenu ref={this.navRef} handleSearchChanged={this.handleChange} />
                {button}
                    <div className={classes.paper}>
                        {renderedTable}
                </div>
            </Grid>
        );
    }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);