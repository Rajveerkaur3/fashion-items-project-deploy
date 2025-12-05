import { useState } from "react";
import { Header } from "../Header/Header";
import websiteVideo from "../../../assets/Website Video.mp4";
import newCollectionVideo from "../../../assets/New Collection.mp4";
import FashionList from "../../FashionList/FashionList";
import { useComments } from "../../../hooks/useComments";
import { useCommentForm } from "../../../hooks/useCommentForm";

import "./Body.css";

export const Body = () => {
  const { comments, addComment, updateComment, deleteComment } = useComments();

  const {
    newComment,
    setNewComment,
    selectedCategory,
    setSelectedCategory,
    error,
    editId, 
    handleSubmit,
    handleEdit,
    handleDelete,
  } = useCommentForm(comments, addComment, updateComment, deleteComment);

  const [showComments, setShowComments] = useState(false);

  return (
    <main>
      <Header />  
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
                {editId !== null ? "Update Comment" : "Add Comment"}
              </button>

              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>

            <div className="comments-display">
              <h3>Comments</h3>
              {comments.map((c) => (
                <div key={c.id} className="comment-item">
                  <strong>{c.category}:</strong> {c.text}{" "}
                  <button onClick={() => handleEdit(c.id)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(c.id)}>Remove</button>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
};
