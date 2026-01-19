import { bgColor } from "./ColorLayout";
const AuthLayout = ({ children, image }) => {
  return (
    <div className={`max-h-screen ${bgColor} flex items-center justify-center pt-8 sm:pt-14 md:pt-16
`}>
      <div className="w-full max-w-6xl rounded-xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden 20 md:px-16 lg:px-0">
        
        {/* Left Form */}
        <div className="flex items-center justify-center text-left px-5 sm:px-10 md:p-0 lg:p-0 my-12 sm:my-18 md:my-20">
          {children}
        </div>  

        {/* Right Image */}
        <div className="hidden lg:flex items-center justify-center">
          <img
            src={image}
            alt="Auth Illustration"
            className="max-w-xl w-full"
          />
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;
