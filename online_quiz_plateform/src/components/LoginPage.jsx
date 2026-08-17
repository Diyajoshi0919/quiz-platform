import RoleSelector from "./RoleSelector";
import InputField from "./InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const [role, setRole] = useState("student");
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    function handleLogin() {

        if (identifier === "") {
            setError("Please enter your email.");
            return;
        }

        if (!emailRegex.test(identifier)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (password === "") {
            setError("Please enter your password.");
            return;
        }

        if (!passwordRegex.test(password)) {
            setError(
                "Please enter a valid password. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
            );
            return;
        }

        // Validation successful
        setError("");

        // Navigate according to selected role
        if (role === "student") {
            navigate("/student-dashboard");
        } else {
            navigate("/faculty-dashboard");
        }
    }


    return (
        <div className="login-container">

            <div className="institute-name">
                🎓 Dr. B R Ambedkar National Institute of Technology Jalandhar
            </div>

            <div className="platform-heading">
                <h1>Quiz Platform</h1>
            </div>

            <div className="form-group">

                <RoleSelector
                    role={role}
                    setRole={setRole}
                />

                <InputField
                    label="Email"
                    type="text"
                    placeholder="Enter your email"
                    value={identifier}
                    setValue={setIdentifier}
                />

                <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    setValue={setPassword}
                />

            </div>

            <div className="forgot-password">
                <a href="#">Forgot Password?</a>
            </div>

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}

            <button
                className="login-button"
                onClick={handleLogin}
            >
                Login
            </button>

            <p className="login-footer">
                Facing issues? Contact your administrator or{" "}
                <a href="#">Sign up</a>
            </p>

        </div>
    );
}

export default LoginPage;