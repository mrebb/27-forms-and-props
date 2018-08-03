import React from 'react'

export default class reddit extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    {
                        <ul>
                            {
                                this.props.reddit && this.props.reddit.map((reddit, i) =>
                                    <div key={i}>
                                        <a href={reddit.data.url}>
                                            <li>
                                            <h1>{reddit.data.title}</h1>
                                            <p>{reddit.data.ups}</p>
                                            </li>
                                        </a>
                                    </div>
                                )
                            }
                        </ul>
                    }
                </form>
            </div>
        )

    }
}
