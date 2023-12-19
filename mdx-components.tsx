import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// hack to fix image props
type NewImageProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height" | "placeholder"
> & {
  src?: ImageProps["src"] | undefined;
  alt?: ImageProps["alt"] | undefined;
  width?: ImageProps["width"] | string | undefined;
  height?: ImageProps["height"] | string | undefined;
  placeholder?: ImageProps["placeholder"] | string | undefined;
};

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    img: (props: NewImageProps) => {
      const newAlt: string =
        typeof props.alt === "string" ? props.alt : "no alt provided";
      const newSrc: string =
        typeof props.src === "string" ? props.src : "nosrc";
      return (
        <Image
          alt={newAlt}
          width={Number(props.width)}
          height={Number(props.height)}
          src={newSrc}
          loading="lazy"
        />
      );
    },
    ...components,
  };
}
