import React, {Component} from 'react';
import './NavTop.scss';
import ClockTime from "./date";

export default class NavTop extends Component {
    state = {
        state: new Date(),
    }


    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(() => {
                return {
                    state: new Date(),
                }
            })
        }, 1000)
    }

    render() {
        const {state} = this.state;
        return(
            <>
                <ClockTime date={state}/>
            </>
        )
    }

}