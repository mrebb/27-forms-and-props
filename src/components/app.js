import React from 'react';
import superagent from 'superagent'
import RedditList from './reddit/SearchResultList'
import SearchForm from './reddit/SearchForm'
const redditAPI = 'http://www.reddit.com/r';
import '../style/app.scss'
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            redditList: [],
            boardName: '',
            limit: '',
            error: null
        }
    }
    isLoading = (loading) => {
        this.setState(Object.assign(...this.state, { loading }));
    }
    componentDidUpdate() {
        console.log('__STATE__', this.state);
    }
    buildAPIUrl = (data) => {
        this.updateState(data)
    }
    updateState = (data) => {
        let boardName = data.boardName;
        let limit = data.limit;
        let url = `${redditAPI}/${boardName}.json?limit=${limit}`;
        return this
            .fetchList(url)
            .then(redditList => this.setState(Object.assign(...this.state, { redditList, boardName, limit })))
    }

    fetchList = (url) => {
        this.isLoading(true);
        return superagent
            .get(url)
            .then(result => {
                this.isLoading(false);
                this.setState(Object.assign(...this.state, { error: null }))
                return result.body.data.children;
            })
            .catch((err) => {
                this.isLoading(false);
                let error = err.message;
                this.setState(Object.assign(...this.state, { error }))
            })
    }
    render() {
        return (
            <main>
                <SearchForm searchMethod={this.buildAPIUrl} errorMsg={this.state.error} />
                <RedditList reddit={this.state.redditList} />

            </main>
        )
    }

}