import Form from "@/components/form";

export default function Login() {
  return (
    <div className="sign-up-page">
      <img src="./logo.svg" alt="logo" />
      <div className="sign-up-container">
        <p>Login</p>
        <Form type="login" />
      </div>
    </div>
  );
}
