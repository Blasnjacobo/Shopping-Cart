import { Modal, Form, Button, Card } from 'react-bootstrap';

interface ShowProps {
    show: boolean;
    handleClose: () => void
}

const ModalSign: React.FC<ShowProps> = ({ show, handleClose }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center">Sign In</h2>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" style={{ marginTop: '1rem' }}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <div className="text-center" style={{ marginTop: '2rem' }}>
                                    <Button variant="dark" type="submit" onClick={handleClose}>
                                        Log In
                                    </Button>
                                </div>
                            </Form>

                            <div className="mt-3 text-center">
                                <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Forgot password?</a>
                            </div>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalSign;
