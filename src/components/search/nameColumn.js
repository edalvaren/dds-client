import React from 'react';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

class NameColumn extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        linkVal: PropTypes.string.isRequired,
        // index: PropTypes.number.isRequired,
        // change: PropTypes.func.isRequired
    };
    render() {
        let sas = "?st=2019-02-03T11%3A08%3A38Z&se=2020-02-04T11%3A08%3A00Z&sp=rl&sv=2018-03-28&sr=c&sig=MSxi8vvuU9%2B3OQolw3v8y1gBhIZRoAcSvk8tUvEPnbY%3D";
        const {value, linkVal} = this.props;
        return(
            <Link target="blank" href={`${linkVal}${sas}`}>
                {value}
            </Link>
        )
    }
    }

    export default NameColumn;