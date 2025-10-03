import { useState, useEffect } from "react";
import { getNotifications, markAsRead } from "../api/notificationsApi";

export default function Notifications({ courseId }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const data = await getNotifications(courseId);
      setNotifications(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (courseId) fetchNotifications();
  }, [courseId]);

  const handleMarkRead = async (notificationId) => {
    try {
      await markAsRead(notificationId);
      fetchNotifications(); // refresh
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      {notifications.length === 0 && <p>No notifications yet.</p>}
      <ul>
        {notifications.map((n) => (
          <li
            key={n._id}
            className={`border p-3 rounded-lg mb-2 ${
              n.readBy.includes(n.userId) ? "bg-gray-100" : "bg-pink-50"
            }`}
          >
            <p>{n.message}</p>
            <small>From: {n.createdBy.name}</small>
            {!n.readBy.includes(n.userId) && (
              <button
                onClick={() => handleMarkRead(n._id)}
                className="ml-2 text-sm text-pink-600 underline"
              >
                Mark as read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
