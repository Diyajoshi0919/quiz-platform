import { useState } from "react";
import "./StudentDashboard.css";

function StudentDashboard() {
    const [filter, setFilter] = useState("all");

    const quizzes = [
        {
            id: 1,
            title: "Data Structures and Algorithms",
            date: "16 Aug 2026",
            time: "11:00 AM - 11:30 AM",
            duration: "30 mins",
            subject: "Computer Science",
            status: "upcoming",
        },
        {
            id: 2,
            title: "Operating System Quiz",
            date: "18 Aug 2026",
            time: "11:00 AM - 11:30 AM",
            duration: "30 mins",
            subject: "Computer Science",
            status: "upcoming",
        },
        {
            id: 3,
            title: "Database Management Systems",
            date: "20 Aug 2026",
            time: "02:00 PM - 02:30 PM",
            duration: "30 mins",
            subject: "Computer Science",
            status: "upcoming",
        },
    ];

    const filteredQuizzes =
        filter === "all"
            ? quizzes
            : quizzes.filter((quiz) => quiz.status === filter);

    return (
        <div className="student-dashboard">

            {/* SIDEBAR */}
            <aside className="sidebar">

                <div className="logo">
                    🎓
                    <span>Quiz Platform</span>
                </div>

                <nav className="sidebar-nav">

                    <div className="nav-item active">
                        <span>▦</span>
                        Dashboard
                    </div>

                    <div className="nav-item">
                        <span>▣</span>
                        Available Quizzes
                    </div>

                    <div className="nav-item">
                        <span>☷</span>
                        My Attempts
                    </div>

                    <div className="nav-item">
                        <span>▥</span>
                        Results
                    </div>

                    <div className="nav-item">
                        <span>🏆</span>
                        Leaderboard
                    </div>

                    <div className="nav-item">
                        <span>♧</span>
                        Notifications
                    </div>

                    <div className="nav-item">
                        <span>◯</span>
                        Profile
                    </div>

                    <div className="nav-item">
                        <span>?</span>
                        Help & Support
                    </div>

                </nav>

                <div className="learning-card">
                    <h3>Keep learning,<br />keep growing! 🚀</h3>
                    <p>You're doing great!</p>
                    <div className="trophy">🏆</div>
                </div>

                <button className="theme-button">
                    ☀️ &nbsp; Light Mode
                </button>

            </aside>


            {/* MAIN CONTENT */}
            <main className="main-content">

                {/* TOP BAR */}
                <header className="topbar">

                    <button className="menu-button">
                        ☰
                    </button>

                    <div className="topbar-right">

                        <div className="notification">
                            🔔
                            <span>3</span>
                        </div>

                        <div className="profile">
                            <div className="profile-avatar">
                                D
                            </div>

                            <div>
                                <strong>Diya Joshi</strong>
                                <small>Student</small>
                            </div>

                            <span>⌄</span>
                        </div>

                    </div>

                </header>


                {/* CONTENT AREA */}
                <div className="content-area">

                    {/* WELCOME */}
                    <section className="welcome-section">

                        <div>
                            <h1>Good afternoon, Diya! 👋</h1>

                            <p>
                                Here's what's happening with your quizzes today.
                            </p>
                        </div>

                        <div className="welcome-icon">
                            📝
                        </div>

                    </section>


                    {/* STATISTICS */}
                    <section className="stats-grid">

                        <div className="stat-card">
                            <div className="stat-icon purple">
                                📅
                            </div>

                            <div>
                                <h2>3</h2>
                                <p>Upcoming</p>
                                <small>Quizzes</small>
                            </div>
                        </div>


                        <div className="stat-card">
                            <div className="stat-icon green">
                                ✓
                            </div>

                            <div>
                                <h2>8</h2>
                                <p>Completed</p>
                                <small>Quizzes</small>
                            </div>
                        </div>


                        <div className="stat-card">
                            <div className="stat-icon yellow">
                                ⭐
                            </div>

                            <div>
                                <h2>87%</h2>
                                <p>Average Score</p>
                                <small>All Time</small>
                            </div>
                        </div>


                        <div className="stat-card">
                            <div className="stat-icon blue">
                                🏆
                            </div>

                            <div>
                                <h2>5</h2>
                                <p>Badges</p>
                                <small>Earned</small>
                            </div>
                        </div>

                    </section>


                    {/* LOWER CONTENT */}
                    <div className="dashboard-grid">

                        {/* QUIZZES */}
                        <section className="quiz-section">

                            <div className="section-header">
                                <h2>Available Quizzes</h2>
                            </div>


                            {/* FILTERS */}
                            <div className="filters">

                                <button
                                    className={filter === "all" ? "filter active-filter" : "filter"}
                                    onClick={() => setFilter("all")}
                                >
                                    All
                                </button>

                                <button
                                    className={filter === "upcoming" ? "filter active-filter" : "filter"}
                                    onClick={() => setFilter("upcoming")}
                                >
                                    Upcoming
                                </button>

                                <button
                                    className={filter === "ongoing" ? "filter active-filter" : "filter"}
                                    onClick={() => setFilter("ongoing")}
                                >
                                    Ongoing
                                </button>

                                <button
                                    className={filter === "completed" ? "filter active-filter" : "filter"}
                                    onClick={() => setFilter("completed")}
                                >
                                    Completed
                                </button>

                            </div>


                            {/* QUIZ CARDS */}
                            <div className="quiz-list">

                                {filteredQuizzes.map((quiz) => (

                                    <div className="quiz-card" key={quiz.id}>

                                        <div className="quiz-icon">
                                            &lt;/&gt;
                                        </div>

                                        <div className="quiz-info">

                                            <h3>{quiz.title}</h3>

                                            <div className="quiz-details">

                                                <span>
                                                    📅 {quiz.date}
                                                </span>

                                                <span>
                                                    🕐 {quiz.time}
                                                </span>

                                                <span className="duration">
                                                    {quiz.duration}
                                                </span>

                                            </div>

                                            <span className="subject">
                                                {quiz.subject}
                                            </span>

                                        </div>


                                        <div className="quiz-action">

                                            <span className="status">
                                                Upcoming
                                            </span>

                                            <button>
                                                Start Quiz →
                                            </button>

                                        </div>

                                    </div>

                                ))}

                            </div>


                            <button className="view-all">
                                View All Quizzes →
                            </button>

                        </section>


                        {/* RIGHT SIDE */}
                        <aside className="right-column">

                            {/* UPCOMING */}
                            <section className="side-card">

                                <div className="side-card-header">
                                    <h2>Upcoming Quizzes</h2>
                                    <a href="#">View all</a>
                                </div>

                                <div className="upcoming-list">

                                    {quizzes.map((quiz) => (

                                        <div className="upcoming-item" key={quiz.id}>

                                            <div className="date-box">
                                                <strong>
                                                    {quiz.date.split(" ")[0]}
                                                </strong>
                                                <small>
                                                    AUG
                                                </small>
                                            </div>

                                            <div className="upcoming-info">
                                                <strong>{quiz.title}</strong>
                                                <p>{quiz.time}</p>
                                            </div>

                                            <span className="upcoming-status">
                                                Upcoming
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </section>


                            {/* RESULTS */}
                            <section className="side-card">

                                <div className="side-card-header">
                                    <h2>Recent Results</h2>
                                    <a href="#">View all</a>
                                </div>


                                <div className="result-item">

                                    <div className="result-icon green-result">
                                        &lt;/&gt;
                                    </div>

                                    <div>
                                        <strong>Data Structures Quiz</strong>
                                        <p>10 Aug 2026</p>
                                    </div>

                                    <span className="score green-score">
                                        92%
                                    </span>

                                </div>


                                <div className="result-item">

                                    <div className="result-icon blue-result">
                                        🖥
                                    </div>

                                    <div>
                                        <strong>C Programming Quiz</strong>
                                        <p>05 Aug 2026</p>
                                    </div>

                                    <span className="score blue-score">
                                        78%
                                    </span>

                                </div>


                                <div className="result-item">

                                    <div className="result-icon yellow-result">
                                        🗄
                                    </div>

                                    <div>
                                        <strong>Database Basics Quiz</strong>
                                        <p>01 Aug 2026</p>
                                    </div>

                                    <span className="score green-score">
                                        85%
                                    </span>

                                </div>

                            </section>


                            {/* MOTIVATION */}
                            <section className="motivation-card">

                                <span className="quote">"</span>

                                <p>
                                    The more you learn,
                                    <br />
                                    the more you earn.
                                </p>

                                <span className="graduation">
                                    🎓
                                </span>

                            </section>

                        </aside>

                    </div>

                </div>

            </main>

        </div>
    );
}

export default StudentDashboard;