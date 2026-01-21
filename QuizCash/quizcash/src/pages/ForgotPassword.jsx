import AuthLayout from "../components/AuthLayout";
import AuthForm from "../components/AuthForm";
import forgotImg from "../assets/images/forget-password.png";
import Header from "../HeaderLogin";

const ForgotPassword = () => {
  return (
    <>
    <Header/>
    <AuthLayout image={forgotImg}>
      <AuthForm
        title="Forgot Password"
        subtitle="Enter your email or phone"
        buttonText="Reset Password"
        fields={[
          { label: "Email or Phone", type: "text", placeholder: "Enter here" },
        ]}
        footerText="Back to"
        footerLinkText="Sign in"
        footerLinkAction="/"
      />
    </AuthLayout>
    </>
  );
};

export default ForgotPassword;
