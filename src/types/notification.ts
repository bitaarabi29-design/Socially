export type NotificationType = "comment" | "like" | "follow";
export interface SocialNotificaion {
  id: number;
  avatarUrl: string;
  username: string;
  type: NotificationType;
  postTitle?: string;
  comment?: string;
  createdAt: string;
  isRead: boolean;
}
