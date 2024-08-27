import { Avatar, AvatarImage, AvatarFallback } from '@components/ui/avatar';
import Image from 'next/image';
import Link from 'next/link';

export default function VideosList() {
  const data = [
    {
      image: 'https://placehold.co/300x200.png',
      imageAlt: 'Thumbnail',
      badge: 'Live',
      avatarImage:
        'https://unsplash.com/photos/R8bNESnnKR8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHx8fDE3MjIxMDc4NTl8MA&force=true&w=640',
      avatarAlt: 'Avatar',
      avatarFallback: 'JD',
      title: 'Cooking with Jamie: Delicious Recipes',
      author: 'Jamie Doe',
    },
    {
      image: 'https://placehold.co/300x200.png',
      imageAlt: 'Thumbnail',
      badge: 'Live',
      avatarImage:
        'https://unsplash.com/photos/R8bNESnnKR8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHx8fDE3MjIxMDc4NTl8MA&force=true&w=640',
      avatarAlt: 'Avatar',
      avatarFallback: 'SM',
      title: 'Fitness Motivation: Crush Your Goals',
      author: 'Sarah Miller',
    },
    {
      image: 'https://placehold.co/300x200.png',
      imageAlt: 'Thumbnail',
      badge: 'Live',
      avatarImage:
        'https://unsplash.com/photos/R8bNESnnKR8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHx8fDE3MjIxMDc4NTl8MA&force=true&w=640',
      avatarAlt: 'Avatar',
      avatarFallback: 'JB',
      title: 'Exploring the World of Woodworking',
      author: 'John Bauer',
    },
    {
      image: 'https://placehold.co/300x200.png',
      imageAlt: 'Thumbnail',
      badge: 'Live',
      avatarImage:
        'https://unsplash.com/photos/R8bNESnnKR8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHx8fDE3MjIxMDc4NTl8MA&force=true&w=640',
      avatarAlt: 'Avatar',
      avatarFallback: 'EM',
      title: 'Painting Masterclass: Unleash Your Creativity',
      author: 'Emily Martinez',
    },
    {
      image: 'https://placehold.co/300x200.png',
      imageAlt: 'Thumbnail',
      badge: 'Live',
      avatarImage:
        'https://unsplash.com/photos/R8bNESnnKR8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHx8fDE3MjIxMDc4NTl8MA&force=true&w=640',
      avatarAlt: 'Avatar',
      avatarFallback: 'TL',
      title: 'Gardening 101: Grow Your Own Veggies',
      author: 'Tom Lowe',
    },
  ];
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 px-4 md:gap-8 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.map((item, index) => (
            <div key={index} className="relative group">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width={300}
                  height={200}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 inline-flex items-center rounded-sm bg-red-500 px-2 py-1 text-xs font-medium text-white">
                  {item.badge}
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <Avatar>
                  <AvatarImage src={item.avatarImage} />
                  <AvatarFallback>{item.avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium tracking-tight line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {item.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
