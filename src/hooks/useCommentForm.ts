import { useState } from "react";
import type { Comment } from "../types/comment";

export const useCommentForm = (
  comments: Comment[],
  addComment: Function,
  updateComment: Function,
  deleteComment: Function
) => {
  const [newComment, setNewComment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newComment.length < 3) {
      setError("Comment must be at least 3 characters");
      return;
    }

    if (!selectedCategory) {
      setError("Please select a category");
      return;
    }

    const comment: Comment = {
      category: selectedCategory,
      text: newComment,
    };

    if (editIndex !== null) {
      updateComment(editIndex, comment);
      setEditIndex(null);
    } else {
      addComment(comment);
    }

    setNewComment("");
    setSelectedCategory("");
    setError("");
  };

  const handleEdit = (index: number) => {
    const c = comments[index];
    setEditIndex(index);
    setNewComment(c.text);
    setSelectedCategory(c.category);
  };

  const handleDelete = (index: number) => {
    deleteComment(index);
    if (editIndex === index) setEditIndex(null);
  };

  return {
    newComment,
    setNewComment,
    selectedCategory,
    setSelectedCategory,
    error,
    editIndex,
    handleSubmit,
    handleEdit,
    handleDelete,
  };
};
