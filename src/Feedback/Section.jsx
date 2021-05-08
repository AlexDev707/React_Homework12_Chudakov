import React, { Component } from 'react'
import FeedbackOptions from './FeedbackOption'
import Statistics from './Statistics'

export default class Section extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercent: 0,
    }

    handleGood = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1,
        }));
        this.countTotalFeedback()
    };

    handleNeutral = () => {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
        }))
        this.countTotalFeedback()
    }

    handleBad = () => {
        this.setState((prevState) => ({
            bad: prevState.bad + 1,
        }))
        this.countTotalFeedback()
    }

    countTotalFeedback = () => {
        this.setState((prevState) => ({
            total: prevState.total + 1,
        }))
        this.countPositiveFeedbackPercentage()
    }

    countPositiveFeedbackPercentage = () => {
        this.setState({
        positivePercent: Math.round(this.state.good * 100/ this.state.total),
        });
    };


    render() {
        const {good, neutral, bad, total, positivePercent } = this.state; 
        return (
            <div>
                <h1>Please leave feedback</h1>
                <FeedbackOptions handleGood={this.handleGood} handleNeutral={this.handleNeutral} handleBad={this.handleBad}/>
                <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercent}></Statistics>
            </div>
        )
    }
}
