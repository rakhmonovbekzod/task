
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const MyModal = (props) => {

    const { children, title, show,handleClose  } = props

    return (
        <Modal
           onHide={handleClose}
            show={show}
            contentLabel={title}
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            {children}
        </Modal>
    )
}

MyModal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    handleClose:PropTypes.func,
    show: PropTypes.bool
}


export default MyModal