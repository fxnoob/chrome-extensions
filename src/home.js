import React from 'react';
import { ProductCard } from 'react-ui-cards';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    home: {
        overflowX: 'scroll',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    root: {
        textAlign: 'center',
        flexGrow: 1,
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
            <div className={classes.home}>
                <ProductCard
                    photos={[
                        'https://raw.githubusercontent.com/fxnoob/chrome-extensions/master/src/stgc.png'
                    ]}
                    price='$0'
                    productName='STGC'
                    description='STGC(Save to google contacts)  chrome extension that lets you directly save contacts in phone from web pages'
                    rating={3}
                    url='https://chrome.google.com/webstore/detail/save-to-google-contacts/ofifhemkgcbeneclidajibkcjllgmjfp'
                />
                <ProductCard
                    photos={[
                        'https://raw.githubusercontent.com/fxnoob/chrome-extensions/master/src/jiofi.jpeg',
                    ]}
                    price='$0'
                    productName='JSCE'
                    description='JSCE(JioFi Stats chrome extension ) - A chrome extension to get stats about Jiofi device which a PC is connected to.'
                    rating={3}
                    url='https://github.com/nukeop'
                />
                <ProductCard
                    photos={[
                        'https://i.imgur.com/jRVDeI8.jpg',
                        'https://i.imgur.com/raPe27t.jpg',
                        'https://i.imgur.com/IpEsYSH.jpg'
                    ]}
                    price='$99'
                    productName='Headphones'
                    description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
                    rating={3}
                    url='https://github.com/nukeop'
                />
                <ProductCard
                    photos={[
                        'https://i.imgur.com/jRVDeI8.jpg',
                        'https://i.imgur.com/raPe27t.jpg',
                        'https://i.imgur.com/IpEsYSH.jpg'
                    ]}
                    price='$99'
                    productName='Headphones'
                    description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
                    rating={3}
                    url='https://github.com/nukeop'
                />
                <ProductCard
                    photos={[
                        'https://i.imgur.com/jRVDeI8.jpg',
                        'https://i.imgur.com/raPe27t.jpg',
                        'https://i.imgur.com/IpEsYSH.jpg'
                    ]}
                    price='$99'
                    productName='Headphones'
                    description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
                    rating={3}
                    url='https://github.com/nukeop'
                />

            </div>
        );
    }
}

export default withStyles(styles)(IconLabelTabs);
