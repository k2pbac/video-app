"use client";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "next/link";

function FormFloatingBasicExample(props: { type: string }) {
  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const isRegistered = props.type === "login";
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="validationEmail">
        <Form.Control type="email" placeholder="Email address" required />
        <Form.Control.Feedback type="invalid">
          Please choose a valid email address
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="validationPassword">
        <Form.Control type="text" placeholder="Password" required />
        <Form.Control.Feedback type="invalid">
          {"Can't be empty"}
        </Form.Control.Feedback>
      </Form.Group>
      {!isRegistered ? (
        <Form.Group controlId="validationPasswordRepeat">
          <Form.Control type="text" placeholder="Repeat password" required />
          <Form.Control.Feedback type="invalid">
            {"Can't be empty"}
          </Form.Control.Feedback>
        </Form.Group>
      ) : null}
      <Button type="submit">
        {!isRegistered ? "Create an account" : "Login to your account"}
      </Button>
      <Link href="/login">
        {!isRegistered ? "Already have an account?" : "Don't have an account?"}{" "}
        <span>{!isRegistered ? "Login" : "Sign Up"}</span>
      </Link>
    </Form>
  );
}

export default FormFloatingBasicExample;
