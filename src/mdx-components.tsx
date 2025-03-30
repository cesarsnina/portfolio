import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="text-5xl font-extrabold m-3" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="text-4xl font-bold m-3" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-3xl font-bold m-3" {...props} />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="text-2xl font-bold m-3" {...props} />
  ),
  h5: (props: HeadingProps) => (
    <h5 className="text-xl font-bold m-3" {...props} />
  ),
  h6: (props: HeadingProps) => (
    <h6 className="text-lg font-bold m-3" {...props} />
  ),
  p: (props: ParagraphProps) => <p className="" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => <em className="" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="" {...props} />
  ),
  ol: (props: ListProps) => <ol className="list-decimal pl-5" {...props} />,
  ul: (props: ListProps) => <ul className="list-disc pl-5" {...props} />,
  li: (props: ListItemProps) => <li className="" {...props} />,
  blockquote: (props: BlockquoteProps) => (
    <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 ">
      <p className="text-xl italic font-medium leading-relaxed" {...props} />
    </blockquote>
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export const useMDXComponents = (): MDXProvidedComponents => {
  return components;
};
