import api from "../lib/axios";
<<<<<<< HEAD
import type {  user } from "../types";
=======
import type { recommendedUserResponse, user } from "../types";
>>>>>>> dev

export const getRecommendedUser =
  async (): Promise<user[]> => {
    const response = await api.get("/api/users/recommend");
    return response.data.data;
  };

export const getUserPosts = async (userId: string) => {
  const res = await api.get(`/api/users/${userId}/posts`);

  return res.data.data;
};

export const getUserLikes = async (userId: string) => {
  const res = await api.get(`/api/users/${userId}/likes`);
  return res.data;
};
