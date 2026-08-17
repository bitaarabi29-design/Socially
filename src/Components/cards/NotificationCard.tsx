import React from "react";
import { ChatIcon, HeartIcon } from "../../assets/icons";


interface NotificationCardProps {
  avatar: string;
  username: string;
  action: string;
  preview: string;
  time: string;
  isRead: boolean;
  type?: "comment" | "like";
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  avatar,
  username,
  action,
  preview,
  time,
  isRead,
  type = "comment",
}) => {
  // انتخاب آیکون بر اساس نوع
  const getIcon = () => {
    switch (type) {
      case "like":
        return <HeartIcon className="text-xs text-red-500" />;
      case "comment":
      default:
        return <ChatIcon className="text-xs text-blue-500" />;
    }
  };

  return (
    <div className="border-base-300 flex items-start gap-4 border-b p-4">
      
      <div className="relative top-0">
        <div className="avatar">
          <div className="h-12 w-12 rounded-full">
            <img src={avatar} alt={username} />
          </div>
        </div>
        
        <div className="bg-base-100 absolute -right-1 -bottom-1 rounded-full p-0.5">
          <div className="bg-base-200 flex h-5 w-5 items-center justify-center rounded-full">
            {getIcon()}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-base-content text-sm">
            <span className="font-semibold">{username}</span>
            <span className="text-base-content/70 mx-1">{action}</span>
          </p>
        </div>

        <p className="text-base-content/60 mt-0.5 text-sm">{preview}</p>

        <time className="text-base-content/40 mt-1 block text-xs">{time}</time>
      </div>
    </div>
  );
};

export default NotificationCard;
