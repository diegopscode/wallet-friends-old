import React, { Component } from 'react'
import List from '../components/list'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
                <div className="container">
                    <List />
                </div>
            </section>
        )
    }
}

export default Home;