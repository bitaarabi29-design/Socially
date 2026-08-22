import api from "../lib/axios";
import type { recommendedUserResponse } from "../types";

export const getRecommendedUser =
  async (): Promise<recommendedUserResponse> => {
    const response = await api.get("/api/users/recommend");
    return response.data;
  };

export const getUserPosts = async (userId: string) => {
  const res = await api.get(`/api/users/${userId}/posts`);

  return res.data.data;
};

export const getUserLikes = async () => {
  const res = await api.get("/api/users/likes");
  return res.data;
};
