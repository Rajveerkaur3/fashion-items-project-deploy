import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

const NotificationsPage = () => {
  const { getToken, isLoaded } = useAuth();
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const loadAlerts = async () => {
      if (!isLoaded) return;

      try {
        const token = await getToken(); // simple token

        const response = await fetch("http://localhost:4000/api/v1/alerts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setAlerts(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadAlerts();
  }, [isLoaded, getToken]);

  return (
    <div>
      <h2>Notifications</h2>

      {alerts.length === 0 ? (
        <p>No notifications.</p>
      ) : (
        <ul>
          {alerts.map((item: any) => (
            <li key={item.id}>{item.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationsPage;
