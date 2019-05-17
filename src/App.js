import React from 'react';
import Test from './Test'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef();
        this.logger = this.logger.bind(this)
    }
    logger(content) {
        this.ref.current.log(content)
    }
    render() {
        return (
            <div>
                <Test ref={this.ref}/>
                <button onClick={() => {
                    this.logger("abc")
                }}>
                    Click
                </button>
            </div>


        )
    }
}

export default App;
