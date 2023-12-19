import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getArchivedPosts } from "../../../lib/api";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);

  return (
    <div className="prose container mx-auto">
      <main>
        <h3 className="bg-yellow-100 text-center">This post is an archive</h3>
        <div className="h-16 w-full">
          <p className="text-2xl">{post.title}</p>
          <p className="text-gray-400">{post.author.name}</p>
          <MDXRemote source={post.content} />
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getArchivedPosts(["slug", "date"]);
  return posts.map((post) => ({
    slug: encodeURI(post.slug),
  }));
}
