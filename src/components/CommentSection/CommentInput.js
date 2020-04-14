// You do not need to do anything in this file
import React from 'react';

const CommentInput = ({comment, changeComment, submitComment}) => {
  return (
    <form className="comment-form" onSubmit={submitComment}>
      <input
        type="text"
        value={comment}
        placeholder="Add comment... "
        onChange={changeComment}
      />
    </form>
  );
};

export default CommentInput;
