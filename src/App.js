import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import HomeComponent from './home'
import AboutComponent from './about'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

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
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (event, value) => {
        console.log(value)
        this.setState({ value: value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div>
            <div className={classes.main}>
            <Paper square className={classes.root}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                >
                    <Tab icon={<HomeIcon />} label="Home" />
                    <Tab icon={<FavoriteIcon />} label="About" />
                    <Tab icon={<PersonPinIcon />} label="Github" />
                </Tabs>
            </Paper>
            </div>
                <Typography component="p">
                    {value === 0 && <TabContainer>
                        <HomeComponent/>
                    </TabContainer>}
                    {value === 1 && <TabContainer>
                        <AboutComponent/>
                    </TabContainer>}
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(IconLabelTabs);
