import React, {Component} from 'react'

import './Quiz.scss'
import QuizBox from '../Components/QuizBox/QuizBox'

export default class Quiz extends Component {
    state = {
        quiz: [{id: 0, txtHeader: 'Quiz 1?', txtAnswer: ['A1', 'A2', 'A3'], rightAsnwer: 1},
                {id: 1, txtHeader: 'Quiz 2?', txtAnswer: ['B1', 'B2', 'B3'], rightAsnwer: 2},
                {id: 2, txtHeader: 'Quiz 3?', txtAnswer: ['C1', 'C2', 'C3'], rightAsnwer: 2},
                {id: 3, txtHeader: 'Quiz 4?', txtAnswer: ['D1', 'D2', 'D3'], rightAsnwer: 0},
                {id: 4, txtHeader: 'Quiz 5?', txtAnswer: ['E1', 'E2', 'E3'], rightAsnwer: 1}]
    }


    checkRightAnswer = (answerId) => {
        console.log('Answer key -', answerId)
    }


    render() {
        return(
            <div className={'Quiz'}>
                <span className={'TxtHeader'}>Quiz</span>
                {this.state.quiz.map((item)=>{
                    return(
                        <QuizBox key={item.id}
                            id={item.id +1} 
                            txtHeader={item.txtHeader}
                            txtAnswer={item.txtAnswer}
                            rightAsnwer={item.rightAsnwer}
                            numberAllQuiz={this.state.quiz.length}
                            checkRightAnswer={this.checkRightAnswer} />
                    )
                })}
            </div>
        )
    }
}