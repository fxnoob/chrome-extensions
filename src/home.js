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
                    url='https://chrome.google.com/webstore/detail/jiofi-extension/ngpdiefgknbemaecamolneblgoiaiokj'
                />
                <ProductCard
                    photos={[
                        'https://raw.githubusercontent.com/fxnoob/chrome-extensions/master/src/history.jpg'
                    ]}
                    price='$0'
                    productName='IM'
                    description='IM (Incognito Mode) - A chrome extension to delete sensitive websites history without opening page in  incognito mode.'
                    rating={3}
                    url='https://chrome.google.com/webstore/detail/incognito-mode/mohhhmnkpenbolekdahofkkbdeaakdei'
                />
                <ProductCard
                    photos={[
                        'https://raw.githubusercontent.com/fxnoob/chrome-extensions/master/src/fs.png'
                    ]}
                    price='$0'
                    productName='FS'
                    description='FS ( Fast Input ) - Fastest way to interact with web pages on chrome browser including speech, gesture recognition'
                    rating={3}
                    url='https://github.com/fxnoob/fast-input'
                />
                <ProductCard
                    photos={[
                        'https://raw.githubusercontent.com/fxnoob/chrome-extensions/master/src/phe.png'
                    ]}
                    price='$0'
                    productName='PHE'
                    description='PHE ( Paytm History Extension ) - A chrome extension to show stats based on paytm purchase history.'
                    rating={3}
                    url='https://github.com/fxnoob/paytm-history-extension'
                />

            </div>
        );
    }
}

export default withStyles(styles)(IconLabelTabs);
