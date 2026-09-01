import api from "../lib/axios";
import type { SocialNotification } from "../types/notification";

export const getNotifications = async (): Promise<SocialNotification[]> => {
  const response = await api.get("/api/notifications");
  return response.data.data;
};

export const markNotificationsAsRead = async (): Promise<void> => {
  await api.patch("/api/notifications");
};
