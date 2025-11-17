import { useState } from "react";
import type { Comment } from "../types/comment";

export const useCommentForm = (
  comments: Comment[],
  addComment: (comment: Comment) => void,
  updateComment: (id: number, comment: Comment) => void,
  deleteComment: (id: number) => void
) => {
  const [newComment, setNewComment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

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
      text: newComment,
      category: selectedCategory,
      id: editId ?? 0,         // temporary id for new comment
      customerId: 1,            // replace with logged-in customer id
      fashionItemId: 1,         // replace with current fashion item id
    };

    if (editId !== null) {
      updateComment(editId, comment);
      setEditId(null);
    } else {
      addComment(comment);
    }

    setNewComment("");
    setSelectedCategory("");
    setError("");
  };

  const handleEdit = (id: number) => {
    const comment = comments.find((c) => c.id === id);
    if (!comment) return;

    setEditId(id);
    setNewComment(comment.text);
    setSelectedCategory(comment.category);
  };

  const handleDelete = (id: number) => {
    deleteComment(id);
    if (editId === id) setEditId(null);
  };

  return {
    newComment,
    setNewComment,
    selectedCategory,
    setSelectedCategory,
    error,
    editId,
    handleSubmit,
    handleEdit,
    handleDelete,
  };
};
