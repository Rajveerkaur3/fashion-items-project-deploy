// src/services/commentService.ts
import { CommentRepository } from "../repositories/commentRepository";
import type { Comment } from "../types/comment";

export class CommentService {
  private repo: CommentRepository;

  constructor() {
    this.repo = new CommentRepository();
  }

  async getAllComments(): Promise<Comment[]> {
    return await this.repo.getAll();
  }

  async addComment(comment: Comment): Promise<Comment> {
    if (comment.text.length < 3) throw new Error("Comment too short");
    const added = await this.repo.add(comment);
    return added; // <-- return the created comment
  }

  async updateComment(id: number, comment: Comment): Promise<Comment> {
    const updated = await this.repo.update(id, comment);
    return updated; // <-- return the updated comment
  }

  async deleteComment(id: number): Promise<void> {
    await this.repo.remove(id);
  }
}
