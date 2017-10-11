import React, { Component } from 'react'
import List from '../components/list'
import Modal from '../components/modal'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ModalOpen: false,
            userSelected: null,
            list: [
                { name: 'Edson', value: '50,00' },
                { name: 'Raphael', value: '20,00' },
                { name: 'Henrique', value: '500,00' }
            ]
        }

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    openModal() {
        if(!this.state.userSelected) return
        this.setState({ModalOpen: true})
    }

    closeModal() {
        this.setState({ModalOpen: false})
    }

    receiver(value) {
        console.log(value)
        this.closeModal()
    }

    handleChange(event) {
        this.state.userSelected.value = event.target.value
    }

    render() {
        const {ModalOpen} = this.state
        let ModalBody, ModalFooter,
        value,
        user = this.state.userSelected

        if(user) {
            value = user.value

            ModalBody = (<div>
                <p>Deseja realmente receber o pagamento do {user.name} ?</p>
                <div className="form-group">
                    <input type="number" placeholder="valor" onChange={this.handleChange}/>
                </div>
            </div> )
        }

        ModalFooter = ( <button className="btn btn-black" onClick={() => this.receiver(value)}>Receber</button> )

        return (
            <section>
                { ModalOpen && 
                    <Modal onClose={this.closeModal}
                    title="Receber"
                    body={ModalBody}
                    footer={ModalFooter}
                    />
                }
                <div className="container">
                    <div className="list-container">
                        <List items={this.state.list}
                        onUserSelect={userSelected => this.setState({userSelected})}/>
                        <button className={'btn' + (!this.state.userSelected ? ' btn-red': '')} onClick={this.openModal}>Receber</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;