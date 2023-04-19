import logo from "../components/assets/images/admin-logo.png";

const LogoImage = () => {
  return (
    <div className="header">
      <div className="login-logo-top">
        <img src={logo} alt="Fitness Center" className="login-image" />
      </div>
    </div>
  );
};

export default LogoImage;
