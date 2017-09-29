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
        this.setState({isContactModalOpen: false})
    }

    render() {
        const {isContactModalOpen} = this.state

        const ModalBody = (
            <div>
                Testando Corpo
            </div>
        )

        const ModalFooter = (
            <div>
                <button className="btn btn-black">Pagar</button>
            </div>
        )

        return (
            <section>
                { isContactModalOpen && 
                    <Modal onClose={this.closeModal}
                    title="Pagar"
                    body={ModalBody}
                    footer={ModalFooter}
                    />
                }
                <div className="container">
                    <List openModal={this.openModal}/>
                </div>
            </section>
        )
    }
}

export default Home;