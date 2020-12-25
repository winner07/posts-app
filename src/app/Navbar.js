import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllNotifications, fetchNotifications } from '../features/notifications/notificationsSlice';

export const Navbar = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(selectAllNotifications);
  const numUnreadNotifications = notifications.filter(n => !n.read).length;
  let numUnreadNotificationsBadge;

  if(numUnreadNotifications > 0) {
    numUnreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    );
  }

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications());
  };

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">Notifications {numUnreadNotificationsBadge}</Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  )
}
