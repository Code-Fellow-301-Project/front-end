import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { withAuth0 } from "@auth0/auth0-react";
import "../style/Community.css";

class SideBarCommunityModal extends Component {
  render() {
    const { user } = this.props.auth0;
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text">
              Add Post for <b>{user.name}</b>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.addPost}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text">Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="image_url..."
                  name="image"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text">Title</Form.Label>
                <Form.Control type="text" placeholder="Title..." name="title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text">description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description..."
                  name="description"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Add Post
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default withAuth0(SideBarCommunityModal);
