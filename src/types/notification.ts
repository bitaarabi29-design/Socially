export interface SocialNotification {
  id: number;
  avatarUrl: string;
  username: string;
  type: "comment" | "like" | "follow";
  postTitle?: string;
  comment?: string;
  createdAt: string;
  isRead: boolean;
}
