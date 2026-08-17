import { useState } from "react";

function CreateQuiz() {

    const [quiz, setQuiz] = useState({
        title: "",
        subject: "",
        date: "",
        startTime: "",
        duration: "",
        targetClass: ""
    });


    function handleChange(e) {

        const { name, value } = e.target;

        setQuiz({
            ...quiz,
            [name]: value
        });
    }


    return (

        <div className="create-quiz">

            <h1>Create New Quiz</h1>

            <div className="quiz-form">

                <div className="form-group">

                    <label>Quiz Title</label>

                    <input
                        type="text"
                        name="title"
                        placeholder="Enter quiz title"
                        value={quiz.title}
                        onChange={handleChange}
                    />

                </div>


                <div className="form-group">

                    <label>Subject</label>

                    <input
                        type="text"
                        name="subject"
                        placeholder="Enter subject"
                        value={quiz.subject}
                        onChange={handleChange}
                    />

                </div>


                <div className="form-group">

                    <label>Quiz Date</label>

                    <input
                        type="date"
                        name="date"
                        value={quiz.date}
                        onChange={handleChange}
                    />

                </div>


                <div className="form-group">

                    <label>Start Time</label>

                    <input
                        type="time"
                        name="startTime"
                        value={quiz.startTime}
                        onChange={handleChange}
                    />

                </div>


                <div className="form-group">

                    <label>Duration</label>

                    <select
                        name="duration"
                        value={quiz.duration}
                        onChange={handleChange}
                    >

                        <option value="">
                            Select duration
                        </option>

                        <option value="10">10 Minutes</option>
                        <option value="15">15 Minutes</option>
                        <option value="20">20 Minutes</option>
                        <option value="30">30 Minutes</option>
                        <option value="45">45 Minutes</option>
                        <option value="60">60 Minutes</option>

                    </select>

                </div>


                <div className="form-group">

                    <label>Target Class</label>

                    <select
                        name="targetClass"
                        value={quiz.targetClass}
                        onChange={handleChange}
                    >

                        <option value="">
                            Select class
                        </option>

                        <option value="DSE-3">
                            DSE 3rd Year
                        </option>

                        <option value="CSE-3">
                            CSE 3rd Year
                        </option>

                        <option value="ECE-3">
                            ECE 3rd Year
                        </option>

                    </select>

                </div>


                <button
                    className="create-quiz-button"
                    onClick={() => console.log(quiz)}
                >
                    Create Quiz
                </button>

            </div>

        </div>
    );
}

export default CreateQuiz;