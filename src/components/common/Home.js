import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavMenu from './NavMenu'
import SearchTable from '../search/searchTable';
import ContainedButtons from "./containedButtons";
import StepperControl from '../tools/steppers'
import ProjectTool from '../tools/index';

import {debounce} from 'lodash';

const mainImageUrl = "https://spiraldocs.blob.core.windows.net/spiraldocs/dds-lg.jpg";

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
        this.state = {isSearchTable: true ,
            typing: false, typingTimeout: 0, loading: true,
            searchQuery: '', loadSearch: false,
            pageToLoad: 0};
        this.navRef = React.createRef();
        this.docSearchTable = React.createRef();
        this.goToHome = this.goToHome.bind(this);
        this.goToTools = this.goToTools.bind(this);
        this.handleSearchChanged = this.handleSearchChanged.bind(this);
        this.updateQuery = this.updateQuery.bind(this);
    }
    componentDidMount() {
        this.hydrateWithLocalStorage();
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
    }

    saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
            // save to localStorage
            localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
    }

    hydrateWithLocalStorage() {
        for (let key in this.state) {
            if (localStorage.hasOwnProperty(key)) {
                let value = localStorage.getItem(key);
                try {
                    value = JSON.parse(value);
                    this.setState({[key]: value});
                } catch (e) {
                    // handle empty string
                    this.setState({[key]: value});
                }
            }
        }
    }
    goToTools() {
        this.setState({
            pageToLoad: 1
        });

    }
    goToHome() {
        this.setState({
            pageToLoad: 0
    });

    }


    handleSearchChanged(searchQuery){
        let debounced = debounce(this.updateQuery, 4000);

        debounced(searchQuery);
        // this.setState({searchQuery: searchQuery})
        // this.setState({ searchQuery: event.target.value });
    }

    updateQuery(query){
        this.setState({searchQuery: query});
        localStorage.setItem('searchQuery', query);
    }


    render() {
        /*  If the Search table is currently showing. the button says "show Users"
           * If the  */
        const { classes } = this.props;
        const isSearch = this.state.isSearchTable;
        const searchQuery = this.state.searchQuery;
        let content;
        if(searchQuery.length > 0){
            content = <SearchTable ref={this.docSearchTable} searchQuery={this.state.searchQuery}/>
        }
        else{
            let loadThis = this.state.pageToLoad;
            content = <div> </div>
            // switch (loadThis) {
            //     case 0: content = <div> Hello 0 </div>;
            //     case 1: content = <div> <ProjectTool/> </div>
            // }
            // content = <img src={mainImageUrl} className={classes.mainImage}/>
        }
        // if(!isSearch) {
        //     button = <Button onClick={this.handleButton}> Show Search</Button>;
        //     renderedTable = <Users/>
        // } else {
        //     button = <Button onClick={this.handleChangeTable}> Show Users </Button>
        //     renderedTable = <SearchTable ref={this.docSearchTable} searchQuery={this.state.searchQuery}/>
        // }
        return (
            <Grid item xs={12}>
                <NavMenu ref={this.navRef} onSearchChanged={this.handleSearchChanged} />
                <ContainedButtons handleToolsClicked={this.goToTools} handleHomeClicked={this.goToHome}/>
            <Grid item xs={12}>
                            {content}
            </Grid>
            </Grid>
        );
    }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);