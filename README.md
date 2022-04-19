<p align="center">
<img src="https://user-images.githubusercontent.com/96442866/161406299-29bd4320-0939-45ce-8f68-1e4230709418.png"/></p>


<p align="center">
<a href="https://stackoverclone.herokuapp.com/#/">LIVE SITE</a>
</p>

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

## Coming Soon
* user profile pages that displays the user's questions asked and answers
* custom code snippets for questions and answers
