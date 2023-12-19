import { getArchivedPosts } from "../../lib/api";
import PostPreview from "../../components/PostPreview";

export default function Blog() {
  const posts = getArchivedPosts([
    "title",
    "date",
    "rating",
    "excerpt",
    "coverImage",
    "slug",
  ]);

  return (
    <div className="container mx-auto px-5">
      <main>
        <h1 className="text-center text-3xl">All Archives</h1>

        <div className="h-12"></div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-32">
          {posts.map((post) => (
            <div key={post.title}>
              <PostPreview post={post} path="archive" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
