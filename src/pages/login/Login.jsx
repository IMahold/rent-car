import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import "./Login.css";

export default function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="login container mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-dark fs-4">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-dark fs-4">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-2">
          Submit
        </Button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>

        <p className="forgot-password text-right">
          Don't have an account ?{" "}
          <Button variant="primary" onClick={() => setShow(true)}>
            Register
          </Button>
        </p>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <Modal.Title>REGISTER</Modal.Title>
        </ModalHeader>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-dark fs-5">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-dark fs-5">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-dark fs-5">Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
            
            

          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
