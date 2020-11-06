import React, {Component} from "react";

export default class ClockTime extends Component {

    render() {
        const {date} = this.props;
        const daysArr = ["Niedziela", "Poniedziałek", "Wtorek", "Środa",
            "Czwartek", "Piątek", "Sobota"];


        return(
            <>
                <section className='navtop'>
                    <div className='navtop__el'>{daysArr[date.getDay()]} {date.toLocaleDateString()}</div>
                    <div className='navtop__el'>{date.toLocaleTimeString()}</div>
                </section>
            </>

        )
    }
}