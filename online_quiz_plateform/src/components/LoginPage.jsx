import RoleSelector from "./RoleSelector";
import InputField from './InputField';
function LoginPage(){
    return (
        <div className="login-container">
            <div className="institute-name">
              🎓  Dr. B R Ambedkar National Institute of Technology Jalandhar
            </div>
            <div className="platform-heading">
            <h1> Quiz Platform 
            </h1>
         </div>
            <div className="form-group">
            <RoleSelector />
            <InputField label="Roll Number/Email" type="text" placeholder="Enter your roll number or email" />
            <InputField label="Password" type="password" placeholder="Enter your password" />   
            </div>
            <div className="forgot-password">
                <a href="#">Forgot Password?</a>
            </div>
            <button className="login-button">Login </button>
            <p className="login-footer">
                Facing issues? Contact your administrator or <a href="#">Sign up</a>
            </p>
        </div>
    );
}
export default LoginPage;