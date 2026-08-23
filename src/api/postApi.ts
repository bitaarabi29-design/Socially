import api from "../lib/axios";
import type { PostsResponse } from "../types/post.types";

export const getAllPosts = async () => {
  const response = await api.get<PostsResponse>("/api/posts");

  return response.data.data;
};