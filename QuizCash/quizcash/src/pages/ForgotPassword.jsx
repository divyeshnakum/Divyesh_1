import AuthLayout from "../components/AuthLayout";
import AuthForm from "../components/AuthForm";
import forgotImg from "../assets/images/forget-password.png";
import Header from "../HeaderLogin";
import { bgColor } from "../components/ColorLayout";
const ForgotPassword = () => {
  return (
    <>
      <div className={`${bgColor} h-full`}>
        <Header />
        <AuthLayout image={forgotImg}>
          <AuthForm
            title="Forgot Password"
            subtitle="Enter your email or phone"
            buttonText="Reset Password"
            fields={[
              {
                label: "Email or Phone",
                type: "text",
                placeholder: "Enter here",
              },
            ]}
            footerText="Back to"
            footerLinkText="Sign in"
            footerLinkAction="/"
          />
        </AuthLayout>
      </div>
    </>
  );
};

export default ForgotPassword;
