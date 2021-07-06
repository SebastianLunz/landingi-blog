import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { commentAdded } from "../../app/commentsSlice";

const AddCommentForm = ({ postId }) => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ body, setBody ] = useState('');

  const dispatch = useDispatch();

  const onNameChange = e => setName(e.target.value);
  const onEmailChange = e => setEmail(e.target.value);
  const onBodyChange = e => setBody(e.target.value);

  const onSaveCommentClicked = () => {
    if (name && email && body) {
      dispatch(
        commentAdded({
          postId,
          id: nanoid(),
          name,
          email,
          body
        })
      )
      setName('');
      setEmail('');
      setBody('');
    }
  }

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
        <button type="button" onClick={onSaveCommentClicked}>Save Comment</button>
      </form>
    </div>
  )
};

export default AddCommentForm;