import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,

    },
    input: {
        display: 'none',
    },
});



class ContainedButtons extends React.Component {
    constructor(props) {
        super(props);
        this.setState({currentPage: 'Home'});
        this.handleHomeClicked = this.handleHomeClicked.bind(this);
        this.handleToolsClicked = this.handleToolsClicked.bind(this);

    }

    handleToolsClicked(event)
    {
        this.props.handleToolsClicked(event.target.value)
    }

    handleHomeClicked(event) {
        this.props.handleHomeClicked(event.target.value)
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button onClick={this.handleHomeClicked} type={'button'} variant="contained" color="primary"    //onClick={this.handleHomeClicked}
                        className={classes.button}>
                    Home
                </Button>
                <Button onClick={this.handleToolsClicked} variant="contained" color="primary" className={classes.button}>
                    More Tools
                </Button>
                {/*<Button variant="contained" color="secondary" disabled className={classes.button}>*/}
                {/*Disabled*/}
                {/*</Button>*/}

                <input
                    accept="application/pdf"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className={classes.button}>
                        Upload
                    </Button>
                </label>
            </div>
        );
    }
}

ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);