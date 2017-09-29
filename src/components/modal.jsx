import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Modal extends Component {
    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>{this.props.title}</h3>
                        <div className="close" onClick={this.props.onClose}>
                            <i className="fa fa-close"></i>
                        </div>
                        {this.props.header}
                    </div>
                    <div className="modal-body">{this.props.body}</div>
                    <div className="modal-footer">{this.props.footer}</div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func
}

export default Modal