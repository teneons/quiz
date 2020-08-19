import React, {Component} from 'react'

import './Quiz.scss'
import QuizBox from '../Components/QuizBox/QuizBox'

export default class Quiz extends Component {
    state = {
        quiz: []
    }

    render() {
        return(
            <div className={'Quiz'}>
                <span className={'TxtHeader'}>Quiz App</span>
                <QuizBox />
            </div>
        )
    }
}