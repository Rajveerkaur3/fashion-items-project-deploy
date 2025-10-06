import { useState } from "react";
import websiteVideo from "../../../assets/Website Video.mp4";
import FashionList from "../../FashionList/FashionList";
import "./Body.css";

interface Comment {
  category: string;
  text: string;
}

export const Body = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");

  const handleDelete = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <main>
      <div className="hero-video">
        <video className="logo-video" autoPlay loop muted>
          <source src={websiteVideo} type="video/mp4" />
        </video>
      </div>

      <FashionList />

      {/* Comment Section */}
      <section className="comment-section">
        <h2>Leave a Comment</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (newComment.length < 3) {
              setError("Comment must be at least 3 characters");
              return;
            }
            if (!selectedCategory) {
              setError("Please select a category");
              return;
            }

            setComments([...comments, { category: selectedCategory, text: newComment }]);
            setNewComment("");
            setSelectedCategory("");
            setError("");
          }}
        >
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

          <button type="submit">Add Comment</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>

        <div className="comments-display">
          <h3>Comments</h3>
          {comments.map((c, index) => (
            <div key={index} className="comment-item">
              <strong>{c.category}:</strong> {c.text}{" "}
              <button onClick={() => handleDelete(index)}>Remove</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
