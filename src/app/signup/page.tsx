import Form from "@/components/form";

export default function SignUp() {
  return (
    <div className="sign-up-page">
      <img src="./logo.svg" alt="logo" />
      <div className="sign-up-container">
        <p>Sign Up</p>
        <Form type="register" />
      </div>
    </div>
  );
}
