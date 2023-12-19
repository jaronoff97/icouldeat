import DateFormatter from "./DateFormatter";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../lib/api";

type Items = {
  [key: string]: string;
};

export default function PostHero() {
  const heroPost = getAllPosts([
    "title",
    "excerpt",
    "slug",
    "date",
    "coverImage",
  ])[0];

  return (
    <Link href={`/posts/${heroPost.slug}`}>
      <div className="group mx-auto w-full">
        {heroPost.coverImage && (
          <Image
            alt={`cover image for ${heroPost.title}`}
            src={heroPost.coverImage}
            width={400}
            height={400}
            style={{ width: "100%" }}
          />
        )}

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
          <div className="mb-2">
            <p className="text-xl font-semibold group-hover:underline">
              {heroPost.title}
            </p>
            <DateFormatter dateString={heroPost.date} />
          </div>
          <p>{heroPost.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
