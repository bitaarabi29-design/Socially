import { useState } from "react";
import NotificationCard from "../components/cards/NotificationCard";
import type { SocialNotification } from "../types/notification";
import Spinner from "../components/ui/Spinner";
// Static Data
const notifications: Array<SocialNotification> = [
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
];

function NotificationPage() {
  const [notificationItems, setNotificationItems] = useState(notifications);
  const [isLoading, setIsLoading] = useState(false);
  // Error State for simulating an error scenario
  const [error, setError] = useState<string | null>(null);
  // #######################
  const unreadCount = notificationItems.filter((item) => !item.isRead).length;

  function markOneAsRead(id: number) {
    const updatedList = notificationItems.map((item) =>
      item.id === id ? { ...item, isRead: true } : item,
    );
    setNotificationItems(updatedList);
  }

  function markAllAsRead() {
    setIsLoading(true);
    // Error State for simulating an error scenario
    setError(null);
    // #######################
    const updatedList = notificationItems.map((item) => ({
      ...item,
      isRead: true,
    }));
    setTimeout(() => {
      setNotificationItems(updatedList);
      setIsLoading(false);
    }, 1000);
  }
  // Error State for simulating an error scenario
  const handleRetry = () => {
    setError(null);
  };
  // #######################
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
              disabled={isLoading}
              onClick={markAllAsRead}
              className="text-base-content hover:bg-base-300 cursor-pointer rounded-md p-2 text-xs font-medium transition duration-300 ease-in-out"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Spinner />
                  <span className="font-mono">Loading...</span>
                </div>
              ) : (
                "Mark as read"
              )}
            </button>
          )}
        </div>
      </header>
      <main>
        {error ? (
          <div className="text-error bg-error/10 border-error/20 m-4 flex flex-col items-center gap-3 rounded-lg border p-4">
            <p className="font-medium">{error}</p>
            <button
              type="button"
              onClick={handleRetry}
              className="text-error hover:bg-error/20 rounded-md px-3 py-1 text-sm font-medium transition duration-300 ease-in-out"
            >
              Try Again
            </button>
          </div>
        ) : notificationItems.length === 0 ? (
          <div className="text-base-content/50 flex h-40 flex-col items-center justify-center gap-2">
            <p>Your notifications are taking a nap.😴</p>
            <p>Check back later!</p>
          </div>
        ) : (
          notificationItems.map((item) => (
            <NotificationCard
              key={item.id}
              notification={item}
              onMarkAsRead={() => markOneAsRead(item.id)}
            />
          ))
        )}
      </main>
    </section>
  );
}

export default NotificationPage;
