import { useState } from "react";
function CreateQuiz() {
    const [quiz, setQuiz] = useState({
        title: "",
        subject: "",
        date: "",
        startTime: "",
        duration: "",
        targetClass: "",
        questions: []
    });
    const [error, setError] = useState("");
    // Handle normal quiz fields
    function handleChange(e) {
        const { name, value } = e.target;

        setQuiz({
            ...quiz,
            [name]: value
        });
    }
    // Add a new question
    function addQuestion() {
        const newQuestion = {
            question: "",
            options: ["", "", "", ""],
            correctAnswer: ""
        };
        setQuiz({
            ...quiz,
            questions: [
                ...quiz.questions,
                newQuestion
            ]
        });
    }
    // Change question text
    function handleQuestionChange(index, value) {
        const updatedQuestions = [...quiz.questions];
        updatedQuestions[index].question = value;
        setQuiz({
            ...quiz,
            questions: updatedQuestions
        });
    }
    // Change option
    function handleOptionChange(questionIndex, optionIndex, value) {
        const updatedQuestions = [...quiz.questions];
        updatedQuestions[questionIndex].options[optionIndex] = value;
        setQuiz({
            ...quiz,
            questions: updatedQuestions
        });
    }
    // Change correct answer
    function handleCorrectAnswerChange(index, value) {
        const updatedQuestions = [...quiz.questions];
        updatedQuestions[index].correctAnswer = value;
        setQuiz({
            ...quiz,
            questions: updatedQuestions
        });
    }
    // Delete question
    function deleteQuestion(index) {
        const updatedQuestions = quiz.questions.filter(
            (_, questionIndex) => questionIndex !== index
        );
        setQuiz({
            ...quiz,
            questions: updatedQuestions
        });
    }
    // Validate quiz
    function validateQuiz() {
        if (quiz.title.trim() === "") {
            setError("Please enter the quiz title.");
            return false;
        }

        if (quiz.subject.trim() === "") {
            setError("Please enter the subject.");
            return false;
        }

        if (quiz.date === "") {
            setError("Please select a quiz date.");
            return false;
        }

        if (quiz.startTime === "") {
            setError("Please select a start time.");
            return false;
        }

        if (quiz.duration === "") {
            setError("Please select the quiz duration.");
            return false;
        }

        if (quiz.targetClass === "") {
            setError("Please select the target class.");
            return false;
        }

        if (quiz.questions.length === 0) {
            setError("Please add at least one question.");
            return false;
        }

        // Check every question
        for (let i = 0; i < quiz.questions.length; i++) {

            const question = quiz.questions[i];

            if (question.question.trim() === "") {
                setError(`Please enter Question ${i + 1}.`);
                return false;
            }

            // Check all options
            for (let j = 0; j < question.options.length; j++) {

                if (question.options[j].trim() === "") {

                    setError(
                        `Please fill Option ${String.fromCharCode(65 + j)} of Question ${i + 1}.`
                    );

                    return false;
                }
            }

            // Check correct answer
            if (question.correctAnswer === "") {

                setError(
                    `Please select the correct answer for Question ${i + 1}.`
                );

                return false;
            }
        }

        setError("");
        return true;
    }
    // Create quiz
    function handleCreateQuiz() {

        if (!validateQuiz()) {
            return;
        }

        console.log("Quiz is valid:", quiz);
    }
    // JSX
    return (
        <div className="create-quiz">

            <h1>Create New Quiz</h1>

            <div className="quiz-form">

                {/* Quiz Title */}
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


                {/* Subject */}
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


                {/* Date */}
                <div className="form-group">

                    <label>Quiz Date</label>

                    <input
                        type="date"
                        name="date"
                        value={quiz.date}
                        onChange={handleChange}
                    />

                </div>


                {/* Start Time */}
                <div className="form-group">

                    <label>Start Time</label>

                    <input
                        type="time"
                        name="startTime"
                        value={quiz.startTime}
                        onChange={handleChange}
                    />

                </div>


                {/* Duration */}
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

                        <option value="10">
                            10 Minutes
                        </option>

                        <option value="15">
                            15 Minutes
                        </option>

                        <option value="20">
                            20 Minutes
                        </option>

                        <option value="30">
                            30 Minutes
                        </option>

                        <option value="45">
                            45 Minutes
                        </option>

                        <option value="60">
                            60 Minutes
                        </option>

                    </select>

                </div>


                {/* Target Class */}
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


                {/* Questions */}
                <div className="questions-section">

                    <h2>Questions</h2>

                    {quiz.questions.map((question, index) => (

                        <div
                            className="question-card"
                            key={index}
                        >

                            <h3>
                                Question {index + 1}
                            </h3>


                            {/* Question */}
                            <label>Question</label>

                            <input
                                type="text"
                                placeholder="Enter your question"
                                value={question.question}
                                onChange={(e) =>
                                    handleQuestionChange(
                                        index,
                                        e.target.value
                                    )
                                }
                            />


                            {/* Option A */}
                            <label>Option A</label>

                            <input
                                type="text"
                                placeholder="Enter option A"
                                value={question.options[0]}
                                onChange={(e) =>
                                    handleOptionChange(
                                        index,
                                        0,
                                        e.target.value
                                    )
                                }
                            />


                            {/* Option B */}
                            <label>Option B</label>

                            <input
                                type="text"
                                placeholder="Enter option B"
                                value={question.options[1]}
                                onChange={(e) =>
                                    handleOptionChange(
                                        index,
                                        1,
                                        e.target.value
                                    )
                                }
                            />


                            {/* Option C */}
                            <label>Option C</label>

                            <input
                                type="text"
                                placeholder="Enter option C"
                                value={question.options[2]}
                                onChange={(e) =>
                                    handleOptionChange(
                                        index,
                                        2,
                                        e.target.value
                                    )
                                }
                            />


                            {/* Option D */}
                            <label>Option D</label>

                            <input
                                type="text"
                                placeholder="Enter option D"
                                value={question.options[3]}
                                onChange={(e) =>
                                    handleOptionChange(
                                        index,
                                        3,
                                        e.target.value
                                    )
                                }
                            />


                            {/* Correct Answer */}
                            <label>Correct Answer</label>

                            <select
                                value={question.correctAnswer}
                                onChange={(e) =>
                                    handleCorrectAnswerChange(
                                        index,
                                        e.target.value
                                    )
                                }
                            >

                                <option value="">
                                    Select correct answer
                                </option>

                                <option value="A">
                                    Option A
                                </option>

                                <option value="B">
                                    Option B
                                </option>

                                <option value="C">
                                    Option C
                                </option>

                                <option value="D">
                                    Option D
                                </option>

                            </select>


                            {/* Delete Question */}
                            <button
                                type="button"
                                onClick={() =>
                                    deleteQuestion(index)
                                }
                            >
                                Delete Question
                            </button>

                        </div>

                    ))}


                    {/* Add Question */}
                    <button
                        type="button"
                        onClick={addQuestion}
                    >
                        + Add Question
                    </button>

                </div>


                {/* Error */}
                {error && (
                    <p className="error-message">
                        {error}
                    </p>
                )}


                {/* Create Quiz */}
                <button
                    type="button"
                    className="create-quiz-button"
                    onClick={handleCreateQuiz}
                >
                    Create Quiz
                </button>

            </div>

        </div>
    );
}
export default CreateQuiz;