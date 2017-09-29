import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            userSelected: null
        }
    }

    componentWillMount() {
        console.log("Lista Completa!");
    }

    selectUser(item) {
        this.state.items.forEach((value) => value.active = false)
        item.active = true

        this.setState({ userSelected: item })
    }

    render() {
        const Items = this.state.items.map((item) => {
            return (
                <li className={'list-item' + (item.active ? ' active' : '')} key={item.name}>
                    <div className="content-list" onClick={this.selectUser.bind(this, item)}>
                        <div>{item.name}</div>
                        <div>R$ {item.value}</div>
                    </div>
                </li>
            )
        })

        return (
            <ul className="list">
                <li className="list-header">
                    <div className="content-list">
                        <div>Nome</div>
                        <div>Valor</div>
                    </div>
                </li>
                {Items}
                {this.state.userSelected ? this.state.userSelected.name : ''}
            </ul>
        )
    }
}

export default List