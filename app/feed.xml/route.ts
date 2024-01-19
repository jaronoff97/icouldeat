import RSS from "rss";
import { getAllPosts } from "../../lib/api";

export async function GET() {
  const feed = new RSS({
    title: "Eh I Could Eat",
    description:
      "Jacob Aronoff's food blog, recording what I eat and what I make.",
    generator: "RSS for Node and Next.js",
    feed_url: "https://ehicouldeat.com/feed.xml",
    site_url: "https://ehicouldeat.com/",
    managingEditor: "me@jaronoff.com (Jacob Aronoff)",
    webMaster: "me@jaronoff.com (Jacob Aronoff)",
    copyright: `Copyright ${new Date().getFullYear().toString()}, Jacob Aronoff`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  const allPosts = getAllPosts([
    "title",
    "date",
    "excerpt",
    "coverImage",
    "slug",
    "rating",
  ]);

  if (allPosts) {
    allPosts.map((post) => {
      feed.item({
        title: post.title,
        description: post.description,
        url: `https://ehicouldeat.com/posts/${post.slug}`,
        categories: post.tags || [],
        author: "Jacob Aronoff",
        date: post.date,
      });
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
