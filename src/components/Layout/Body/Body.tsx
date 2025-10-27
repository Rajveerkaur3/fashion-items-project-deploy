/**
 * Body Component
 * 
 * This component displays the hero video, fashion list, and comment section.
 * 
 * It uses the useComments custom hook to manage comments. The hook internally
 * calls the CommentService, which applies business logic and then delegates
 * CRUD operations to the CommentRepository. This structure separates
 * responsibilities and follows the architecture layers:
 * 
 * Component → Hook → Service → Repository
 */

import { useState } from "react";
import websiteVideo from "../../../assets/Website Video.mp4";
import FashionList from "../../FashionList/FashionList";
import { useComments } from "../../../hooks/useComments";
import type { Comment } from "../../../types/comment";
import newCollectionVideo from "../../../assets/New Collection.mp4";


import "./Body.css";

export const Body = () => {
  // Use the custom hook instead of directly calling repository
  const { comments, addComment, updateComment, deleteComment } = useComments();

  const [newComment, setNewComment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [showComments, setShowComments] = useState(false);

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

    const comment: Comment = { category: selectedCategory, text: newComment };

    try {
      if (editIndex !== null) {
        updateComment(editIndex, comment);
        setEditIndex(null);
      } else {
        addComment(comment);
      }

      setNewComment("");
      setSelectedCategory("");
      setError("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    const c = comments[index];
    setNewComment(c.text);
    setSelectedCategory(c.category);
  };

  const handleDelete = (index: number) => {
    deleteComment(index);
    if (editIndex === index) setEditIndex(null);
  };

  return (
    <main>
      <div className="hero-video">
        <video className="logo-video" autoPlay loop muted>
          <source src={websiteVideo} type="video/mp4" />
        </video>
      </div>

      <FashionList />
      

      <section className="comment-section">
        <h2>Leave a Comment</h2>

        <div className="extra-video">
  <video className="new-collection-video" controls>
    <source src={newCollectionVideo} type="video/mp4" />
  </video>
</div>


        {!showComments && (
          <button
            style={{ marginTop: "15px", padding: "5px 10px" }}
            onClick={() => setShowComments(true)}
          >
            Comment Here
          </button>
        )}

        {showComments && (
          <>
            <form onSubmit={handleSubmit}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>

              <input
                type="text"
                placeholder="Your comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />

              <button type="submit">
                {editIndex !== null ? "Update Comment" : "Add Comment"}
              </button>

              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>

            <div className="comments-display">
              <h3>Comments</h3>
              {comments.map((c, index) => (
                <div key={index} className="comment-item">
                  <strong>{c.category}:</strong> {c.text}{" "}
                  <button onClick={() => handleEdit(index)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(index)}>Remove</button>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
};
