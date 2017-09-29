import React, { Component } from 'react'
import List from '../components/list'
import Modal from '../components/modal'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isContactModalOpen: false,
            list: [
                { name: 'Edson', value: '50,00' },
                { name: 'Raphael', value: '20,00' },
                { name: 'Henrique', value: '2.000,00' }
            ]
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
                    <div className="list-container">
                        <List openModal={this.openModal}
                        items={this.state.list}
                        selectUser={this.state.userSelected}/>
                        <button className='btn' onClick={this.openModal}>Pagar</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;