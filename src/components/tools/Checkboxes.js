import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
});

class CheckboxesGroup extends React.Component {
    state = {
        directDrive: true,
        jason: false,
        antoine: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        const { directDrive, jason, antoine } = this.state;
        const error = [directDrive, jason, antoine].filter(v => v).length !== 2;

        return (
            <div className={classes.root}>
                <FormControl required error={error} component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Pick at least two..</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={directDrive} onChange={this.handleChange('gilad')} value="gilad" />
                            }
                            label="Direct Drive"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason" />
                            }
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={antoine}
                                    onChange={this.handleChange('antoine')}
                                    value="antoine"
                                />
                            }
                            label=""
                        />
                    </FormGroup>
                    <FormHelperText> </FormHelperText>
                </FormControl>
            </div>
        );
    }
}

CheckboxesGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);
