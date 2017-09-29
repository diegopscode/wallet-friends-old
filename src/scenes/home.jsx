import React, { Component } from 'react'
import List from '../components/list'
import Modal from '../components/modal'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ModalOpen: false,
            selectedUser: null,
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
        this.setState({ModalOpen: true})        
    }

    closeModal() {
        this.setState({ModalOpen: false})
    }

    render() {
        const {ModalOpen} = this.state
        let ModalBody, ModalFooter

        if(this.state.userSelected)
            ModalBody = ( <div>Deseja realmente pagar o {this.state.userSelected.name} ?</div> )

        ModalFooter = ( <button className="btn btn-black">Pagar</button> )

        return (
            <section>
                { ModalOpen && 
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
                        onUserSelect={userSelected => this.setState({userSelected})}/>
                        <button className='btn' onClick={this.openModal}>Pagar</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;