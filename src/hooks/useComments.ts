// src/hooks/useComments.ts
import { useState } from "react";
import { CommentService } from "../services/commentService";
import type { Comment } from "../types/comment";

export const useComments = () => {
  const service = new CommentService();
  const [comments, setComments] = useState<Comment[]>(service.getAllComments());

  const addComment = (comment: Comment) => {
    service.addComment(comment);
    setComments(service.getAllComments());
  };

  const updateComment = (index: number, comment: Comment) => {
    service.updateComment(index, comment);
    setComments(service.getAllComments());
  };

  const deleteComment = (index: number) => {
    service.deleteComment(index);
    setComments(service.getAllComments());
  };

  return { comments, addComment, updateComment, deleteComment };
};
