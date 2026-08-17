import React from 'react';
import NotificationCard from '../components/cards/notificationCard';

const NotificationPage: React.FC = () => {
  const notifications = [
    {
      id: 1,
      avatar: 'https://i.pravatar.cc/150?img=11',
      username: 'Ali Mousavi',
      action: 'commented on your post',
      preview: 'test post',
      time: '3 minutes ago',
      isRead: false,
    },
    {
      id: 2,
      avatar: 'https://i.pravatar.cc/150?img=11',
      username: 'Ali Mousavi',
      action: 'liked your post',
      preview: 'test post',
      time: '3 minutes ago',
      isRead: false,
    },
    {
      id: 3,
      avatar: 'https://i.pravatar.cc/150?img=11',
      username: 'Ali Mousavi',
      action: 'commented on your post',
      preview: 'test post',
      time: '3 minutes ago',
      isRead: true,
    },
  ];

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="bg-base-100 min-h-screen">
      <div className="container mx-auto max-w-3xl px-4 py-8">
        
        {/* هدر */}
        <div className="mb-6  flex justify-between ">
          <h2 className="text-2xl font-bold text-base-content">
            Notifications
          </h2>
          <p className="text-sm text-base-content/60 mt-1">
            {unreadCount} unread
          </p>
        </div>

        {/* لیست نوتیفیکیشن‌ها */}
        <div className="    bg-base-100 rounded-lg border border-base-300 overflow-hidden">
          {notifications.map((notif) => (
            <NotificationCard
              key={notif.id}
              avatar={notif.avatar}
              username={notif.username}
              action={notif.action}
              preview={notif.preview}
              time={notif.time}
              isRead={notif.isRead}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default NotificationPage;