import React from 'react'

import './QuizBox.scss'

const QuizNow = props => {


    return(<div className={'QuizBox'}>
        <div className={'HeaderTxtQuiz'}>
            <span>Whats app?</span>
            <span>2/10</span>
        </div>
        <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
        </ul>
    </div>
    )
}

export default QuizNow