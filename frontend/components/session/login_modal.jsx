import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import LoginFormContainer from './login_form_container';

class LoginModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Login</button>
        <Modal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           onRequestClose={this.handleCloseModal}
        >

        <LoginFormContainer closeModal={this.handleCloseModal} />

        <button onClick={this.handleCloseModal}>close</button>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
