import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { commentAdded } from "../../app/commentsSlice";
import isEmail from "validator/lib/isEmail";

const AddCommentForm = ({ postId }) => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ body, setBody ] = useState('');
  const [ emailError, setEmailError] = useState('');

  const dispatch = useDispatch();

  const onNameChange = e => setName(e.target.value);
  const onEmailChange = e => {
    setEmail(() => {
      let correctEmail = e.target.value;
      if (isEmail(correctEmail)) {
        setEmailError('Valid Email :)')
        return correctEmail;
      } else {
        setEmailError('Enter valid Email!');
      }
    })
  };
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
      <form>
        <label htmlFor="commentName">Name:</label>
        <input
          type="text"
          id="commentName"
          name="commentName"
          value={name}
          onChange={onNameChange}
        />
        <label htmlFor="commentEmail">Email:</label>
        <input
          type="email"
          id="commentEmail"
          name="commentEmail"
          value={email}
          onChange={onEmailChange}
        />
        <p>
          { emailError }
        </p>
        <label htmlFor="commentBody">Body:</label>
        <textarea
          id="commentBody"
          name="commentBody"
          value={body}
          onChange={onBodyChange}
        />
        <br/>
        <button type="button" onClick={onSaveCommentClicked}>Save Comment</button>
      </form>
    </div>
  )
};

export default AddCommentForm;