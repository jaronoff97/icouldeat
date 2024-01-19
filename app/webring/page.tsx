type Blog = {
  name: string;
  year: number;
  url: string;
  emoji: string;
  description?: string;
  rss_url?: string;
};

export default function Webring() {
  const ring: Blog[] = [
    {
      name: "Steve Gattuso",
      year: 2013,
      url: "https://www.stevegattuso.me",
      rss_url: "https://www.stevegattuso.me/feed.xml",
      emoji: "💌",
      description:
        "My blog and personal wiki. Step right up for thoughts on programming, vegan cooking, urbanism, and whatever else pops into my mind.",
    },
    {
      name: "Ray Berger",
      rss_url: "https://blog.rayberger.org/rss.xml",
      year: 2018,
      url: "https://www.rayberger.org/",
      emoji: "🍔",
    },
    {
      name: "Shy Ruparel",
      year: 2014,
      url: "https://shy.dev",
      emoji: "🫗",
    },
    {
      name: "Kevin Liao",
      year: 2018,
      url: "http://liaokev.in",
      rss_url: "http://liaokev.in/feed.xml",
      emoji: "🚌",
      description:
        "Personal blog. Rarely updated. Want it to be a space for thoughts on urbanism, Taiwan, language learning, and progressive Christian theology.",
    },
    {
      name: "Jacob Aronoff",
      year: 2017,
      url: "https://ehicouldeat.com/",
      emoji: "🥪",
      description:
        "Food blog where I talk about all the things I cook and eat. Tech blog with some random content at https://jaronoff.com/",
    },
  ];

  return (
    <div className="container mx-auto px-5">
      <h1 className="text-center text-3xl">Webring</h1>
      <h2 className="text-center">
        This is the hackNY webring. A list of blogs from hackNY alums
      </h2>
      <div className="h-12"></div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-32">
        <ul>
          {ring.map((blog: Blog, index: number) => (
            <li key={`blog-${index}`} className="blog">
              <span className="blog--emoji">{blog.emoji}</span>
              <div className="blog--text">
                <a className="blog--title" href={blog.url} target="_blank">
                  {blog.name}
                </a>
                <div className="blog--meta">
                  by <a href={blog.url}>{blog.name}</a>
                </div>
                <div className="blog--description">{blog.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
