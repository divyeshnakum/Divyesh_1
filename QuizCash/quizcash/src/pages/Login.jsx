import AuthLayout from "../components/AuthLayout";
import AuthForm from "../components/AuthForm";
import loginImg from "../assets/images/Login-cuate-1.png";
import Header from "../HeaderLogin";
const Login = () => {
  return (
    <>
      <Header />
      <AuthLayout image={loginImg}>
        <AuthForm
          title="Welcome Back"
          subtitle="Enter your email and password to sign in"
          buttonText="Sign In"
          fields={[
            {
              label: "Email",
              type: "email",
              placeholder: "Your email address",
            },
            {
              label: "Password",
              type: "password",
              placeholder: "Your password",
            },
          ]}
          showRememberMe
          showForgotPassword
          footerText="Don't have an account?"
          footerLinkText="Sign up"
          footerLinkAction="/pages/Signup"
        />
      </AuthLayout>
    </>
  );
};

export default Login;
