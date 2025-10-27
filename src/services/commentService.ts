import { CommentRepository } from "../repositories/commentRepository";
import type { Comment } from "../types/comment";

export class CommentService {
  private repo: CommentRepository;

  constructor() {
    this.repo = new CommentRepository();
  }

  getAllComments(): Comment[] {
    return this.repo.getAll();
  }

  addComment(comment: Comment) {
    if (comment.text.length < 3) throw new Error("Comment too short");
    this.repo.add(comment);
  }

  updateComment(index: number, comment: Comment) {
    this.repo.update(index, comment);
  }

  deleteComment(index: number) {
    this.repo.remove(index);
  }
}
