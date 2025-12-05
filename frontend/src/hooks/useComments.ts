// src/hooks/useComments.ts
import { useState, useEffect } from "react";
import { CommentService } from "../services/commentService";
import type { Comment } from "../types/comment";

export const useComments = () => {
  const service = new CommentService();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all comments on mount
  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await service.getAllComments();
        setComments(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch comments");
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, []);

  const addComment = async (comment: Comment) => {
    try {
      const added: Comment = await service.addComment(comment); // ensure it returns Comment
      setComments((prev) => [...prev, added]);
    } catch (err: any) {
      setError(err.message || "Failed to add comment");
    }
  };

  const updateComment = async (id: number, updatedComment: Comment) => {
    try {
      const updated: Comment = await service.updateComment(id, updatedComment); // return updated comment
      setComments((prev) =>
        prev.map((c) => (c.id === id ? updated : c))
      );
    } catch (err: any) {
      setError(err.message || "Failed to update comment");
    }
  };

  const deleteComment = async (id: number) => {
    try {
      await service.deleteComment(id);
      setComments((prev) => prev.filter((c) => c.id !== id));
    } catch (err: any) {
      setError(err.message || "Failed to delete comment");
    }
  };

  return { comments, addComment, updateComment, deleteComment, loading, error };
};
