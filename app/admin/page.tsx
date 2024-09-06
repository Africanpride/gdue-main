"use client"

import useSWR from 'swr';
import { Avatar } from '@nextui-org/react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Users() {
  const { data, error, isLoading } = useSWR('/api/fetchUsers', fetcher, {
    refreshInterval: 5 * 60 * 1000, // Re-fetch every 5 minutes
  });

  if (error) return <div>Error loading users</div>;
  if (isLoading) return <div>Loading...123</div>;

  const users = data.data || [];

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user._id}>
            <Avatar src={user.imageUrl} className="w-6 h-6 text-tiny" /> : {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
