import { CommentRepository } from "../repositories/commentRepository";

const repo = new CommentRepository();

export const getComments = async () => {
  return repo.getAll();
};

export const getComment = async (id: number) => {
  return repo.getById(id);
};

export const createComment = async (payload: {
  text: string;
  customerId: number;
  fashionItemId: number;
}) => {
  if (!payload.text || payload.text.length < 3) {
    throw new Error("Comment must be at least 3 characters");
  }
  return repo.create(payload);
};

export const updateComment = async (
  id: number,
  payload: {
    text?: string;
    customerId?: number;
    fashionItemId?: number;
  }
) => {
  return repo.update(id, payload);
};

export const deleteComment = async (id: number) => {
  return repo.remove(id);
};
