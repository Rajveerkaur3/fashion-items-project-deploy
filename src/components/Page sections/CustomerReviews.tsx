import { useState, type FormEvent } from "react";
import { AppService } from "../../services/appService";
import { useInteractions } from "../../hooks/useInteractions";

export function CustomerReviews() {
  const [reviews, setReviews] = useState<string[]>([]);
  const [text, setText] = useState("");

  const { addInteraction } = useInteractions();

  const addReview = (e: FormEvent) => {
    e.preventDefault();
    if (text === "") return;

    const updatedReviews = AppService.addReview(reviews, text);
    setReviews(updatedReviews);
    setText("");
    addInteraction(); 
  };

  const removeReview = (index: number) => {
    const updated = reviews.filter((_, i) => i !== index);
    setReviews(updated);
  };

  return (
    <div>
      <h2>Customer Reviews</h2>
      <p>Total Reviews: {reviews.length}</p>

      <form onSubmit={addReview}>
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
              <button onClick={() => removeReview(i)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
