import React, { Component } from 'react'
import List from '../components/list'
import Modal from '../components/modal'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isContactModalOpen: false
        }

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this) 
    }

    openModal() {
        this.setState({isContactModalOpen: true})        
    }

    closeModal() {
        console.log(0)
        this.setState({isContactModalOpen: false})
    }

    render() {
        const {isContactModalOpen} = this.state

        return (
            <section>
                { isContactModalOpen && <Modal onClose={this.closeModal} />}
                <div className="container">
                    <List openModal={this.openModal}/>
                </div>
            </section>
        )
    }
}

export default Home;