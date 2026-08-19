import api from "../lib/axios"
import type { recommendedUserResponse } from "../types";

export const getRecommendedUser = async ():Promise<recommendedUserResponse> => {
const response = await api.get("/api/users/recommend")
return response.data;
}

