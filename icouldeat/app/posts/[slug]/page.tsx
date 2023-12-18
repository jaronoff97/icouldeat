import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHTML";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);
  const content = await markdownToHtml(post.content || "");

  return (
    <div className="container prose mx-auto">
      <main>
        <div className="w-full h-16">
          <p className="text-2xl">{post.title}</p>
          <p className="text-gray-400">{post.author.name}</p>
          <MDXRemote source={content} />
        </div>
      </main>
    </div>
  );
}
