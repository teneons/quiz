import React, {Component} from 'react'

import './Quiz.scss'
import QuizNow from '../Components/QuizNow/QuizNow'

export default class Quiz extends Component {
    state = {
        quiz: []
    }

    render() {
        return(
            <div className={'Quiz'}>
                <span className={'TxtHeader'}>Quiz App</span>
                <QuizNow />
            </div>
        )
    }
}