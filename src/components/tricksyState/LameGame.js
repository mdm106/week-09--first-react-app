import React, { Component } from "react";

class LameGame extends Component {
    constructor(props) {
        super(props);

        this.state = { elapsedTime: 0, guess: 0, started: false };

        this.handleStart = this.handleStart.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
    }
    
    handleStart() {
        const startTime = Date.now() - this.state.elapsedTime;
        this.timer = setInterval(() => {
            this.setState({ elapsedTime: ((Date.now() - startTime) / 1000).toPrecision(2) });
        });
        this.setState({started: !this.state.started});
    }

    handleFinish() {
        this.setState({guess: +((this.state.elapsedTime - this.props.aim).toPrecision(2)),
                        started: false});
        clearInterval(this.timer);
    }

    render() {
        const { aim } = this.props;
        const { started, guess, elapsedTime } = this.state;
        return (
            <>  
                <h4>Play the lame game</h4>
                <p>{ aim } seconds</p>
                { started ? (
                    <button className="btn-primary mb-3" onClick={ this.handleFinish }>Finish</button>
                ) : (
                    <button className="btn-primary mb-3" onClick={ this.handleStart }>Start</button>
                )}
                { !started && elapsedTime ? guess < 0 ? 
                    <p className="shadow-sm">You were under by {Math.abs(guess)} seconds</p> :
                    <p className="shadown-sm">You were over by {guess} seconds </p> : null }
            </>
        )
    }
};

LameGame.defaultProps = {
    aim: 6,
};

export default LameGame;