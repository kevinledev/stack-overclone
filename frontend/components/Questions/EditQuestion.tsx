import React, { useState, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Question } from "../../types/question";
import { User } from "../../types/user";


const EditQuestion = (props) => {
  const { question, asker, updateQuestion, fetchQuestion, match } = props;

  const [state, setState] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    fetchQuestion(parseInt(match.params.questionId));
  }, [fetchQuestion, match.params.questionId]);

  useEffect(() => {
    if (question) {
      setState(question);
    }
  }, [question]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedQuestion = {
      ...question,
      title: state.title,
      body: state.body,
    } as Question;
    updateQuestion(updatedQuestion).then(() => window.location.reload());
  };

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, title: e.target.value });
  };

  const updateBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({ ...state, body: e.target.value });
  };

  if (!question) return null;
  return (
    <div className="edit-question">
      <form onSubmit={handleSubmit}>
        <div className="edit-question-form-container">
          <div className="edit-question-form">
            <label className="eq-title-container">
              <div className="eq-title-text">
                <h1 className="eq-input-headings">Title</h1>
              </div>

              <input
                type="text"
                value={state.title}
                onChange={updateTitle}
                className="eq-title-input"
              />
            </label>
            <label className="eq-body-container">
              <h1 className="eq-input-headings">Body</h1>
              <textarea
                spellCheck={false}
                value={state.body}
                onChange={updateBody}
              />
              <div className="question-edit-preview">
                <h1 className="eq-input-headings">Preview</h1>
                <h2>{state.body}</h2>
              </div>
            </label>
          </div>
          <div className="question-show-sub-body">
            <div className="question-show-options">
              <input type="submit" className="save-edits" value="Save edits" />
              <button className="question-show-delete-button">Cancel</button>
            </div>
            <div className="asker-details">
              <h1>asked&nbsp;on {question.createdAt.slice(0, 10)}</h1>
              <Link to={`/users/${question.askerId}`}>{asker?.username}</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditQuestion;
