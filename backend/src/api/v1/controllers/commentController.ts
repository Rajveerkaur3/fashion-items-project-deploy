import { Request, Response } from "express";
import * as commentService from "../services/commentService";

export const listComments = async (req: Request, res: Response) => {
  try {
    const data = await commentService.getComments();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

export const getComment = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const item = await commentService.getComment(id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch {
    res.status(500).json({ error: "Failed to fetch comment" });
  }
};

export const createComment = async (req: Request, res: Response) => {
  try {
    const created = await commentService.createComment(req.body);
    res.status(201).json(created);
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Failed to create" });
  }
};

export const updateComment = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const updated = await commentService.updateComment(id, req.body);
    res.json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Failed to update" });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await commentService.deleteComment(id);
    // Send success message instead of 204 No Content
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch {
    res.status(400).json({ error: "Failed to delete" });
  }
};

