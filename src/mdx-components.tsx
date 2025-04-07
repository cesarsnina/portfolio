import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type StrongProps = ComponentPropsWithoutRef<"strong">;
type EmProps = ComponentPropsWithoutRef<"em">;
type UnorderListProps = ComponentPropsWithoutRef<"ul">;
type OrderListProps = ComponentPropsWithoutRef<"ol">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type PreProps = ComponentPropsWithoutRef<"pre">;
type CodeProps = ComponentPropsWithoutRef<"code">;
type ImgProps = ComponentPropsWithoutRef<"img">;

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
  strong: (props: StrongProps) => <strong className="" {...props} />,
  em: (props: EmProps) => <em className="" {...props} />,
  ul: (props: UnorderListProps) => <ul className="list-disc pl-5" {...props} />,
  ol: (props: OrderListProps) => (
    <ol className="list-decimal pl-5" {...props} />
  ),
  li: (props: ListItemProps) => <li className="" {...props} />,
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="p-2 my-2 pl-4 border-l-5 border-green-600 bg-gray-400 text-black italic text-md leading-tight"
      {...props}
    />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = "text-blue-400 hover:text-blue-600";
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
  pre: (props: PreProps & CodeProps) => (
    <pre className="p-2 my-2 pl-8 text-black bg-gray-400">
      <code {...props} />
    </pre>
  ),
  code: (props: CodeProps) => (
    <code className="text-black bg-gray-400" {...props} />
  ),
  img: (props: ImgProps) => <img className="w-40 h-30" {...props} />,
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export const useMDXComponents = (): MDXProvidedComponents => {
  return components;
};
