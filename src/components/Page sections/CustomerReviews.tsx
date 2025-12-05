import { useState, type FormEvent } from "react";
import { useReviews } from "../../hooks/useReviews";
import { useAuth } from "@clerk/clerk-react";

export function CustomerReviews() {
  const { isSignedIn } = useAuth(); 
  const { reviews, addReview, deleteReview } = useReviews();
  const [text, setText] = useState("");

  const handleAdd = async (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    await addReview(text);
    setText("");
  };


  if (!isSignedIn) {
    return (
      <div>
        <h2>Customer Reviews</h2>
        <p>Please log in to see and write reviews.</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Customer Reviews</h2>
      <p>Total Reviews: {reviews.length}</p>

      <form onSubmit={handleAdd}>
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
          {reviews.map((r) => (
            <li key={r.id}>
              {r.text}{" "}
              <button onClick={() => deleteReview(r.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
