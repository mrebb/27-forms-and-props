
import React from 'react'
import './form.scss'

export default class searchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boardName: '',
            limit: ''
        }

    }

    handleBoard = (e) => {
        let boardName = e.target.value

        this.setState({ boardName })
    }
    handleLimit = (e) => {
        let limit = e.target.value
        this.setState({ limit })
    }
    submitForm = (e) => {
        e.preventDefault()
        let boardName = this.state.boardName
        let limit = this.state.limit
        this.props.searchMethod({ boardName, limit })
    }

    render() {
        return (
            <div>
               
                <form onSubmit={this.submitForm}>
                <label>Enter board name: </label>
                        <input required className={this.props.errorMsg ? "error" : ""} onChange={this.handleBoard} placeholder="ex: nba, politics, funny.." />
                       
                </form>
                <form onSubmit={this.submitForm}>
                <br>
                </br>
                <label>Limit: </label>
                    <input required className = "width" type="number" name="limit" min="1" max="99" onChange={this.handleLimit} placeholder="1-99" />
                </form>

            </div>
        )

    }
}
