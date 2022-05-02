<p align="center">
<img src="https://user-images.githubusercontent.com/96442866/161406299-29bd4320-0939-45ce-8f68-1e4230709418.png"/></p>

<h2 align="center">
<a href="https://stackoverclone.herokuapp.com/#/">View Live</a>
</h2>


<img width="1520" alt="screenshot_SO" src="https://user-images.githubusercontent.com/96442866/166328236-3fbe911a-751a-4682-adc0-2f27a14efce4.png">
<br>
<img width="1198" alt="Screen Shot 2022-05-02 at 2 10 51 PM" src="https://user-images.githubusercontent.com/96442866/166328343-dd13b618-97b6-4aac-ad9f-8da0572cd79f.png">
<br>
<img width="1198" alt="Screen Shot 2022-05-02 at 2 13 53 PM" src="https://user-images.githubusercontent.com/96442866/166328778-3124ce7e-4c22-40f9-beec-a130b65e82d9.png">


## Overview

Stack Overclone is a pixel-perfect clone of the popular q&a site for programmers Stack Overflow, only difference being the green logo. Similarly to Stack Overflow, users have the ability to:
* create an account / login
* post and answer questions
* edit/delete their questions and answers
* upvote/downvote questions and answers
* search for specific questions

Feel free to make an account, browse questions, or ask a question on Stack Overclone, the robot clones will respond to your question as soon as possible.


## Technologies
* React
* Redux
* Ruby on Rails
* PostgreSQL
* Webpack
* CSS

## Code Highlights
Stack Overclone contains some features that improve from Stack Overflow's current user experience. On the real Stack Overflow site, to edit your question, Stack Overflow takes you to a separate page. Here, I've added the edit form directly on the page to improve the user experience.

```  toggleEditQuestion() {
    this.state.editingQuestion
      ? this.setState({ editingQuestion: false })
      : this.setState({ editingQuestion: true });
      
      
     const editQuestionForm = editingQuestion ? <EditQuestionContainer /> : null;
```

Also, when editing the question, the user can see a preview of their edited question before posting, and compare to the unedited version, all on the same page.
```
 <label className="eq-body-container">
                <h1 className="eq-input-headings">Body</h1>
                <textarea
                  spellcheck="false"
                  value={this.state.body}
                  // value=""
                  onChange={this.updateBody}
                />
                <div className="question-edit-preview">
                  <h1 className="eq-input-headings">Preview</h1>
                  <h2>{this.state.body}</h2>
                </div>
              </label>
```

## In Progress
* user profile pages that displays the user's questions asked and answers
* custom code snippets for questions and answers
