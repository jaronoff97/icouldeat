import Link from "next/link";
import PostPreview from "../components/PostPreview";
import PostHero from "../components/PostHero";
import { getAllPosts } from "../lib/api";

export default function Home() {
  const posts = getAllPosts([
    "title",
    "date",
    "excerpt",
    "coverImage",
    "slug",
    "rating",
  ]);
  const recentPosts = posts.slice(0, 2);

  return (
    <div className="container mx-auto px-5">
      <main>
        <div className="space-y-4">
          <h1 className="text-center text-5xl">Eh... I Could Eat!</h1>
          <p className="text-center text-xl">
            Welcome to Jacob{"'"}s food blog :)
          </p>
        </div>

        <div className="h-12"></div>

        <PostHero />

        <div className="h-16"></div>

        <p className="mb-6 text-3xl">Recent Posts</p>
        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-32">
          {recentPosts.map((post) => (
            <div key={post.title}>
              <PostPreview post={post} path="posts" />
            </div>
          ))}
        </div>
        <div className="h-16"></div>
        <Link
          href="/posts"
          className="text-3xl hover:text-gray-300 hover:underline"
        >
          Read More{" -> "}
        </Link>
      </main>
    </div>
  );
}
