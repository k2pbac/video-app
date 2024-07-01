import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "next/link";

function FormFloatingBasicExample() {
  return (
    <>
      <Form.Control type="text" placeholder="Email address" />
      <Form.Control type="text" placeholder="Password" />
      <Form.Control type="text" placeholder="Repeat password" />
      <Button>Create an account</Button>
      <Link href="/login">
        Already have an account? <span>Login</span>
      </Link>
    </>
  );
}

export default FormFloatingBasicExample;
