import type { Comment } from "../types/comment";
import { commentsTestData } from "../data/commentsTestData";

export class CommentRepository {
  private comments: Comment[] = [...commentsTestData];

  getAll(): Comment[] {
    return this.comments;
  }

  add(comment: Comment): void {
    this.comments.push(comment);
  }

  update(index: number, updatedComment: Comment): void {
    if (index >= 0 && index < this.comments.length) {
      this.comments[index] = updatedComment;
    }
  }

  remove(index: number): void {
    if (index >= 0 && index < this.comments.length) {
      this.comments.splice(index, 1);
    }
  }
}
