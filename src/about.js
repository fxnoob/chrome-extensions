import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    main: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    root: {
        textAlign: 'center',
        flexGrow: 1,
        maxWidth: 500,
    },
};

class IconLabelTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes, value } = this.props;

        return (
            <div className="about">
               About
            </div>
        );
    }
}

export default withStyles(styles)(IconLabelTabs);
