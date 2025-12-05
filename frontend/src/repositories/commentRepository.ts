import type { Comment } from "../types/comment";

const BASE_URL = "http://localhost:4000/api/comments";

export class CommentRepository {
  // Remove local test data
  // private comments: Comment[] = [...commentsTestData];

  // Get all comments from back-end
  async getAll(): Promise<Comment[]> {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch comments");
    return response.json();
  }

  // Add a new comment via POST
  async add(comment: Comment): Promise<Comment> {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
    if (!response.ok) throw new Error("Failed to add comment");
    return response.json();
  }

  // Update comment via PUT
  async update(id: number, updatedComment: Partial<Comment>): Promise<Comment> {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedComment),
    });
    if (!response.ok) throw new Error("Failed to update comment");
    return response.json();
  }

  // Remove comment via DELETE
  async remove(id: number): Promise<void> {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete comment");
  }
}
