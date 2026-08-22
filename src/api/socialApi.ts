import api from "../lib/axios";
import type { recommendedUserResponse } from "../types";

export const getRecommendedUser =
  async (): Promise<recommendedUserResponse> => {
    const response = await api.get("/api/users/recommend");
    return response.data;
  };

export const getUserPosts = async () => {
  const res = await api.get(`/api/users/${userId}/posts`);
  console.log("API response:", res.data);

  return res.data;
};

export const getUserLikes = async () => {
  const res = await api.get("/api/users/likes");
  return res.data;
};
