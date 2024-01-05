import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "../../../lib/api";

export function generateStaticParams() {
  const posts = getAllPosts(["slug", "date"]);
  return posts.map((post) => ({
    slug: encodeURI(post.slug),
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);

  return (
    <div className="prose container mx-auto">
      <p className="text-2xl">{post.title}</p>
      <p className="text-gray-400">{post.author.name}</p>
      <MDXRemote source={post.content} />
    </div>
  );
}
