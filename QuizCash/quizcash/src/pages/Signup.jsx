import AuthLayout from "../components/AuthLayout";
import AuthForm from "../components/AuthForm";
import signupImg from "../assets/images/Login-cuate-2.png";
import Header from "../HeaderLogin";
const Signup = () => {
  return (
    <>
      <Header />
      <AuthLayout image={signupImg}>
        <AuthForm
          title="Create Account"
          subtitle="Enter your details to create an account"
          buttonText="Sign Up"
          fields={[
            {
              label: "Email",
              type: "email",
              placeholder: "Your email address",
            },
            { label: "Password", type: "password", placeholder: "Password" },
            {
              label: "Confirm Password",
              type: "password",
              placeholder: "Confirm password",
            },
          ]}
          showRememberMe
          showForgotPassword
          footerText="Already have an account?"
          footerLinkText="Sign in"
          footerLinkAction="/pages/Login"
        />
      </AuthLayout>
    </>
  );
};

export default Signup;
