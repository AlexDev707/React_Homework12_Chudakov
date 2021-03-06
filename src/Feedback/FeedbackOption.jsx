import React from 'react'

export default function FeedbackOption({handleGood, handleNeutral, handleBad}) {
    return (
        <div>
            <button onClick={handleGood}>Good</button>
            <button onClick={handleNeutral}>Neutral</button>
            <button onClick={handleBad}>Bad</button>
        </div>
    )
}
