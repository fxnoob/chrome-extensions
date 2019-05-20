import React from 'react';
import { ProductCard } from 'react-ui-cards';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    home: {
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
            <div className={classes.home}>
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
