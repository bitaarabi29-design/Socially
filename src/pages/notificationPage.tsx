import { useState } from "react";
import NotificationCard from "../components/cards/NotificationCard";
import type { SocialNotification } from "../types/notification";
// Static Data
const notifications: SocialNotification[] = [
  {
    id: 1,
    avatarUrl:
      "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
    username: "Farhan",
    type: "comment",
    postTitle: "Test Post",
    comment: "Test Comment",
    createdAt: "3 minutes ago",
    isRead: false,
  },
  {
    id: 2,
    avatarUrl:
      "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
    username: "Farhan",
    type: "like",
    postTitle: "Test Post",
    createdAt: "3 minutes ago",
    isRead: false,
  },
  {
    id: 3,
    avatarUrl:
      "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
    username: "Farhan",
    type: "comment",
    postTitle: "Test Post",
    comment: "Test Comment",
    createdAt: "3 minutes ago",
    isRead: true,
  },
  {
    id: 4,
    avatarUrl:
      "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
    username: "Farhan",
    type: "like",
    postTitle: "Test Post",
    createdAt: "3 minutes ago",
    isRead: true,
  },
  {
    id: 5,
    avatarUrl:
      "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
    username: "Farhan",
    type: "follow",
    createdAt: "3 minutes ago",
    isRead: false,
  },
  {
    id: 6,
    avatarUrl:
      "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
    username: "Farhan",
    type: "follow",
    createdAt: "3 minutes ago",
    isRead: true,
  },
];

function notificationPage() {
  const [notificationItems, setNotificationItems] = useState(notifications);
  const unreadCount = notificationItems.filter(
    (notification) => !notification.isRead,
  ).length;

  function markAllAsRead() {
    setNotificationItems((currentNotifications) =>
      currentNotifications.map((notification) => ({
        ...notification,
        isRead: true,
      })),
    );
  }

  return (
    <section className="bg-base-100 border-base-300 mb-20 flex max-w-233 flex-col overflow-hidden rounded-xl border shadow-sm">
      <header className="border-base-300 flex items-center justify-between border-b px-5 py-4">
        <h1 className="text-base-content text-lg font-bold">Notifications</h1>
        <div className="flex items-center gap-3">
          <span className="text-base-content/50 text-xs">
            {unreadCount} unread
          </span>
          {unreadCount > 0 && (
            <button
              type="button"
              onClick={markAllAsRead}
              className="text-base-content hover:bg-base-300 cursor-pointer rounded-md p-2 text-xs font-medium transition duration-300 ease-in-out"
            >
              Mark as read
            </button>
          )}
        </div>
      </header>
      <main>
        {notificationItems.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </main>
    </section>
  );
}

export default notificationPage;
