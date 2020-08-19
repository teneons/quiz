import React, {Component} from 'react'

import './Quiz.scss'
import QuizBox from '../Components/QuizBox/QuizBox'

export default class Quiz extends Component {
    state = {
        quiz: [{txtHeader: 'Quiz 1 ?', txtAnswer: ['A1', 'A2', 'A3'], rightAsnwer: 1},
                {txtHeader: 'Quiz 2 ?', txtAnswer: ['B1', 'B2', 'B3'], rightAsnwer: 2},
                {txtHeader: 'Quiz 3 ?', txtAnswer: ['C1', 'C2', 'C3'], rightAsnwer: 2},
                {txtHeader: 'Quiz 4 ?', txtAnswer: ['D1', 'D2', 'D3'], rightAsnwer: 0},
                {txtHeader: 'Quiz 5 ?', txtAnswer: ['E1', 'E2', 'E3'], rightAsnwer: 1}]
    }

    render() {
        return(
            <div className={'Quiz'}>
                <span className={'TxtHeader'}>Quiz</span>
                {this.state.quiz.map((item, index)=>{
                    return(
                        <QuizBox key={index} txtHeader={item.txtHeader} txtAnswer={item.txtAnswer} rightAsnwer={item.rightAsnwer} />
                    )
                })}
            </div>
        )
    }
}