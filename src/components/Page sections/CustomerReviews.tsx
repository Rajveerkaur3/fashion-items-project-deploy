import { useState } from "react";

export function CustomerReviews() {
  const [reviews, setReviews] = useState<string[]>([]);
  const [text, setText] = useState("");

  const addReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (text === "") return; 

    setReviews([text, ...reviews]);
    setText(""); 
  };

  return (
    <div>
      <h2>Customer Reviews</h2>

      <form onSubmit={addReview}>
        <input
          type="text"
          placeholder="Write a review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}
    </div>
  );
}