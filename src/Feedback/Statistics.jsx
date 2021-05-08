import React from 'react'

export default function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
        <div>
            {total === 0 ? <p>No feedback was given </p> : (
                <div>
                <h2>Statistics</h2>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive Percenrage: {positivePercentage}%</p>
                </div> 
            )}
        </div>
    )
}
