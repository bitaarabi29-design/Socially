import { ChatIcon, HeartIcon } from "../../assets/icons";
import { UserRoundPlus } from "lucide-react";
import type { SocialNotificaion } from "../../types/notification";

interface NotificationCardProps {
  notification: SocialNotificaion;
}

function NotificationCard({ notification }: NotificationCardProps) {
  const Icon =
    notification.type === "like"
      ? HeartIcon
      : notification.type === "follow"
        ? UserRoundPlus
        : ChatIcon;
  const message =
    notification.type === "like"
      ? "liked your post"
      : notification.type === "follow"
        ? "started following you"
        : "commented on your post";
  const iconColor =
    notification.type === "like"
      ? "text-error"
      : notification.type === "follow"
        ? "text-green-500"
        : "text-primary";
  const backgroundColor = notification.isRead
    ? "bg-base-100"
    : "bg-base-300/35";

  return (
    <section
      className={`border-base-300 relative flex items-start gap-2 border-b px-4 py-5 ${backgroundColor}`}
    >
      <img
        src={notification.avatarUrl}
        alt={`${notification.username}'s avatar`}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1 pr-5">
        <p className="text-base-content flex cursor-pointer items-center gap-2 text-sm">
          <Icon className={`${iconColor} h-4 w-4 shrink-0`} />
          <span>
            <span className="font-semibold">{notification.username}</span>{" "}
            {message}
          </span>
        </p>
        {notification.postTitle && (
          <p className="bg-base-200 text-base-content/70 mt-3 ml-6 rounded-md px-3 py-2 text-sm">
            {notification.postTitle}
          </p>
        )}
        {notification.comment && (
          <p className="bg-base-300/50 text-base-content/70 mt-2 ml-6 rounded-md px-3 py-2 text-sm">
            {notification.comment}
          </p>
        )}
        <p className="text-base-content/50 mt-2 ml-6 text-xs">
          {notification.createdAt}
        </p>
      </div>
      {!notification.isRead && (
        <span className="bg-primary absolute top-6 right-4 h-2 w-2 rounded-full" />
      )}
    </section>
  );
}
export default NotificationCard;
