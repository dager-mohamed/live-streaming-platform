import Navbar from '@components/platform/Navbar';
import VideosList from '@components/platform/VideosList';

export default async function Page() {
  return (
    <>
      <Navbar />
      <VideosList />
    </>
  );
}