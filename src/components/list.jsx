import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { name: 'Edson', value: '50,00' },
                { name: 'Raphael', value: '20,00' },
                { name: 'Henrique', value: '2.000,00' }
            ],
            userSelected: false
        }
    }

    selectUser(item, index) {
        this.state.items.forEach((value) => {
            this.setState({ ...value, active: false });
            value.active = false;
        });

        item.active = true;
        this.setState({ item: item });

        this.setState({ ...this.state, userSelected: item });
    }

    pay() {
        if(!this.state.userSelected) return false;

        console.log("Pago!");
    }

    render() {
        const Items = this.state.items.map((item, index) => {
            return (
                <li className={'list-item' + (item.active ? ' active' : '')} key={item.name}>
                    <div className="content-list" onClick={() => this.selectUser(item, index)}>
                        <div>{item.name}</div>
                        <div>R$ {item.value}</div>
                    </div>
                </li>
            )
        })

        return (
            <div className="list-container">
                <ul className="list">
                    <li className="list-header">
                        <div className="content-list">
                            <div>Nome</div>
                            <div>Valor</div>
                        </div>
                    </li>
                    {Items}
                </ul>
                <div className="actions">
                    <button className={'btn pay'+(this.state.userSelected ? ' active':'')} onClick={this.pay.bind(this)}>Pagar</button>
                </div>
            </div>
        )
    }
}

export default List;