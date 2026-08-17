import { useNavigate } from "react-router-dom";

function FacultyDashboard() {

    const navigate = useNavigate();

    return (
        <div className="faculty-dashboard">

            <h1>Faculty Dashboard</h1>

            <p>Welcome to the Quiz Platform 👋</p>

            <button
                onClick={() => navigate("/create-quiz")}
            >
                Create Quiz
            </button>

        </div>
    );
}

export default FacultyDashboard;