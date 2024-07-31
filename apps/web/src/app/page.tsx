import Navbar from '../components/Navbar';
import VideosList from '../components/VideosList';
import getUsers from '../../utils/API/getUsers';
import { User } from '@clerk/nextjs/server';

export default async function Page() {
  const users = await getUsers();
  return (
    <>
      <Navbar />
      <VideosList />
      <ol>
        {users.data && users.data.map((user: User) => (
          <li key={user.id}>{user?.username}</li>
        ))}
      </ol>
    </>
  );
}
