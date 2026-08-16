import { useState } from "react";
import "./FacultyDashboard.css";

function FacultyDashboard() {
    const [filter, setFilter] = useState("all");

    const quizzes = [
        {
            id: 1,
            title: "Data Structures and Algorithms",
            date: "16 Aug 2026",
            time: "11:00 AM - 11:30 AM",
            students: 62,
            status: "upcoming",
        },
        {
            id: 2,
            title: "Operating System Quiz",
            date: "18 Aug 2026",
            time: "11:00 AM - 11:30 AM",
            students: 58,
            status: "upcoming",
        },
        {
            id: 3,
            title: "Database Management Systems",
            date: "20 Aug 2026",
            time: "02:00 PM - 02:30 PM",
            students: 72,
            status: "upcoming",
        },
        {
            id: 4,
            title: "Computer Networks Quiz",
            date: "10 Aug 2026",
            time: "11:00 AM - 11:30 AM",
            students: 65,
            status: "completed",
        },
    ];

    const filteredQuizzes =
        filter === "all"
            ? quizzes
            : quizzes.filter((quiz) => quiz.status === filter);

    return (
        <div className="faculty-dashboard">

            {/* SIDEBAR */}
            <aside className="faculty-sidebar">

                <div className="faculty-logo">
                    🎓
                    <span>Quiz Platform</span>
                </div>

                <nav className="faculty-nav">

                    <div className="faculty-nav-item active">
                        <span>▦</span>
                        Dashboard
                    </div>

                    <div className="faculty-nav-item">
                        <span>➕</span>
                        Create Quiz
                    </div>

                    <div className="faculty-nav-item">
                        <span>▣</span>
                        My Quizzes
                    </div>

                    <div className="faculty-nav-item">
                        <span>◉</span>
                        Live Quizzes
                    </div>

                    <div className="faculty-nav-item">
                        <span>▥</span>
                        Results
                    </div>

                    <div className="faculty-nav-item">
                        <span>📊</span>
                        Analytics
                    </div>

                    <div className="faculty-nav-item">
                        <span>♧</span>
                        Notifications
                    </div>

                    <div className="faculty-nav-item">
                        <span>◯</span>
                        Profile
                    </div>

                    <div className="faculty-nav-item">
                        <span>?</span>
                        Help & Support
                    </div>

                </nav>


                <div className="faculty-tip-card">

                    <div className="tip-icon">
                        💡
                    </div>

                    <h3>Make learning interactive!</h3>

                    <p>
                        Create engaging quizzes and track your students'
                        performance.
                    </p>

                    <button>
                        Create Quiz →
                    </button>

                </div>


                <button className="faculty-theme-button">
                    ☀️ &nbsp; Light Mode
                </button>

            </aside>


            {/* MAIN CONTENT */}
            <main className="faculty-main">

                {/* TOPBAR */}
                <header className="faculty-topbar">

                    <button className="faculty-menu">
                        ☰
                    </button>

                    <div className="faculty-top-right">

                        <div className="faculty-notification">
                            🔔
                            <span>4</span>
                        </div>

                        <div className="faculty-profile">

                            <div className="faculty-avatar">
                                F
                            </div>

                            <div>
                                <strong>Faculty</strong>
                                <small>Administrator</small>
                            </div>

                            <span>⌄</span>

                        </div>

                    </div>

                </header>


                <div className="faculty-content">

                    {/* WELCOME */}
                    <section className="faculty-welcome">

                        <div>
                            <h1>Good afternoon! 👋</h1>

                            <p>
                                Here's an overview of your quizzes and
                                student performance.
                            </p>

                            <button className="create-quiz-button">
                                + Create New Quiz
                            </button>
                        </div>

                        <div className="faculty-welcome-icon">
                            📝
                        </div>

                    </section>


                    {/* STATISTICS */}
                    <section className="faculty-stats">

                        <div className="faculty-stat-card">

                            <div className="faculty-stat-icon purple">
                                📝
                            </div>

                            <div>
                                <h2>12</h2>
                                <p>Total Quizzes</p>
                                <small>Created by you</small>
                            </div>

                        </div>


                        <div className="faculty-stat-card">

                            <div className="faculty-stat-icon green">
                                ●
                            </div>

                            <div>
                                <h2>2</h2>
                                <p>Active Quizzes</p>
                                <small>Currently running</small>
                            </div>

                        </div>


                        <div className="faculty-stat-card">

                            <div className="faculty-stat-icon blue">
                                👥
                            </div>

                            <div>
                                <h2>284</h2>
                                <p>Total Students</p>
                                <small>Across your quizzes</small>
                            </div>

                        </div>


                        <div className="faculty-stat-card">

                            <div className="faculty-stat-icon yellow">
                                ⭐
                            </div>

                            <div>
                                <h2>81%</h2>
                                <p>Average Score</p>
                                <small>All quizzes</small>
                            </div>

                        </div>

                    </section>


                    {/* TWO COLUMN AREA */}
                    <div className="faculty-dashboard-grid">

                        {/* QUIZ MANAGEMENT */}
                        <section className="faculty-quiz-section">

                            <div className="faculty-section-header">

                                <h2>My Quizzes</h2>

                                <button>
                                    View All →
                                </button>

                            </div>


                            {/* FILTERS */}
                            <div className="faculty-filters">

                                <button
                                    className={
                                        filter === "all"
                                            ? "faculty-filter active"
                                            : "faculty-filter"
                                    }
                                    onClick={() => setFilter("all")}
                                >
                                    All
                                </button>

                                <button
                                    className={
                                        filter === "upcoming"
                                            ? "faculty-filter active"
                                            : "faculty-filter"
                                    }
                                    onClick={() => setFilter("upcoming")}
                                >
                                    Upcoming
                                </button>

                                <button
                                    className={
                                        filter === "completed"
                                            ? "faculty-filter active"
                                            : "faculty-filter"
                                    }
                                    onClick={() => setFilter("completed")}
                                >
                                    Completed
                                </button>

                            </div>


                            {/* QUIZ LIST */}
                            <div className="faculty-quiz-list">

                                {filteredQuizzes.map((quiz) => (

                                    <div
                                        className="faculty-quiz-card"
                                        key={quiz.id}
                                    >

                                        <div className="faculty-quiz-icon">
                                            &lt;/&gt;
                                        </div>


                                        <div className="faculty-quiz-info">

                                            <h3>
                                                {quiz.title}
                                            </h3>

                                            <div className="faculty-quiz-details">

                                                <span>
                                                    📅 {quiz.date}
                                                </span>

                                                <span>
                                                    🕐 {quiz.time}
                                                </span>

                                                <span>
                                                    👥 {quiz.students} students
                                                </span>

                                            </div>

                                        </div>


                                        <div className="faculty-quiz-actions">

                                            <span
                                                className={
                                                    quiz.status === "completed"
                                                        ? "faculty-status completed"
                                                        : "faculty-status upcoming"
                                                }
                                            >
                                                {quiz.status}
                                            </span>

                                            <button>
                                                Manage
                                            </button>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </section>


                        {/* RIGHT COLUMN */}
                        <aside className="faculty-right-column">

                            {/* QUICK ACTIONS */}
                            <section className="faculty-side-card">

                                <h2>Quick Actions</h2>

                                <div className="quick-actions">

                                    <button>
                                        <span>➕</span>
                                        <div>
                                            <strong>Create Quiz</strong>
                                            <small>Create a new assessment</small>
                                        </div>
                                    </button>

                                    <button>
                                        <span>📊</span>
                                        <div>
                                            <strong>View Results</strong>
                                            <small>Check student performance</small>
                                        </div>
                                    </button>

                                    <button>
                                        <span>📈</span>
                                        <div>
                                            <strong>Analytics</strong>
                                            <small>View quiz statistics</small>
                                        </div>
                                    </button>

                                </div>

                            </section>


                            {/* STUDENT PERFORMANCE */}
                            <section className="faculty-side-card">

                                <div className="faculty-side-header">

                                    <h2>Student Performance</h2>

                                    <a href="#">
                                        View all
                                    </a>

                                </div>


                                <div className="performance-row">

                                    <div className="performance-icon green">
                                        ✓
                                    </div>

                                    <div className="performance-info">
                                        <strong>Excellent</strong>
                                        <div className="progress">
                                            <div
                                                className="progress-fill"
                                                style={{ width: "72%" }}
                                            ></div>
                                        </div>
                                    </div>

                                    <span>72%</span>

                                </div>


                                <div className="performance-row">

                                    <div className="performance-icon yellow">
                                        ★
                                    </div>

                                    <div className="performance-info">
                                        <strong>Good</strong>
                                        <div className="progress">
                                            <div
                                                className="progress-fill yellow-progress"
                                                style={{ width: "18%" }}
                                            ></div>
                                        </div>
                                    </div>

                                    <span>18%</span>

                                </div>


                                <div className="performance-row">

                                    <div className="performance-icon red">
                                        !
                                    </div>

                                    <div className="performance-info">
                                        <strong>Needs Improvement</strong>
                                        <div className="progress">
                                            <div
                                                className="progress-fill red-progress"
                                                style={{ width: "10%" }}
                                            ></div>
                                        </div>
                                    </div>

                                    <span>10%</span>

                                </div>

                            </section>


                            {/* UPCOMING */}
                            <section className="faculty-side-card">

                                <div className="faculty-side-header">

                                    <h2>Upcoming Quizzes</h2>

                                    <a href="#">
                                        View all
                                    </a>

                                </div>


                                {quizzes
                                    .filter(
                                        (quiz) => quiz.status === "upcoming"
                                    )
                                    .slice(0, 3)
                                    .map((quiz) => (

                                        <div
                                            className="faculty-upcoming"
                                            key={quiz.id}
                                        >

                                            <div className="faculty-date">
                                                <strong>
                                                    {quiz.date.split(" ")[0]}
                                                </strong>

                                                <small>
                                                    AUG
                                                </small>
                                            </div>

                                            <div>
                                                <strong>
                                                    {quiz.title}
                                                </strong>

                                                <p>
                                                    {quiz.time}
                                                </p>
                                            </div>

                                        </div>

                                    ))}

                            </section>

                        </aside>

                    </div>

                </div>

            </main>

        </div>
    );
}

export default FacultyDashboard;