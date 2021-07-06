import React, { useState } from "react";

const AddCommentForm = ({ match }) => {
  // const { postId} = match.params;
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ body, setBody ] = useState('');

  const onNameChange = e => setName(e.target.value);
  const onEmailChange = e => setEmail(e.target.value);
  const onBodyChange = e => setBody(e.target.value);

  return (
    <div>
      <h2>Add a New Comment</h2>
      <form>
        <label htmlFor="commentName">Comment Name:</label>
        <input
          type="text"
          id="commentName"
          name="commentName"
          value={name}
          onChange={onNameChange}
        />
        <label htmlFor="commentEmail">Comment Email:</label>
        <input
          type="email"
          id="commentEmail"
          name="commentEmail"
          value={email}
          onChange={onEmailChange}
        />
        <label htmlFor="commentBody">Body:</label>
        <textarea
          id="commentBody"
          name="commentBody"
          value={body}
          onChange={onBodyChange}
        />
        <button type="button">Save Comment</button>
      </form>
    </div>
  )
};

export default AddCommentForm;