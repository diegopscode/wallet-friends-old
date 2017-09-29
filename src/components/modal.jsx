import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Modal extends Component {
    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <h2>Modal Teste</h2>
                    <button className="btn btn-black" onClick={this.props.onClose}>Close</button>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func
}

export default Modal