import { useState, type FormEvent } from "react";
import { AppService } from "../../services/appService";
import { useInteractions } from "../../hooks/useInteractions";
import { useReviews } from "../../hooks/useReviews";

export function CustomerReviews() {
  const { addReview: addReviewHook, deleteReview } = useReviews();
  const [reviews, setReviews] = useState<string[]>([]);
  const [text, setText] = useState("");

  const { addInteraction } = useInteractions();

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const updatedReviews = AppService.addReview(reviews, text);
    setReviews(updatedReviews);
    addReviewHook(text);
    setText("");
    addInteraction();
  };

  const handleRemove = (index: number) => {
    const updated = reviews.filter((_, i) => i !== index);
    setReviews(updated);
    deleteReview(index);
  };

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
        <button type="submit">Add Review</button>
      </form>

      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((review, i) => (
            <li key={i}>
              {review}{" "}
              <button onClick={() => handleRemove(i)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
