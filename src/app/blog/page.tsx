// export default async function Page({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) {
//   const { slug } = await params
//   const { default: Post } = await import(`@/content/${slug}.mdx`)
//
//   return <Post />
// }
//
// export function generateStaticParams() {
//   return [{ slug: 'welcome' }, { slug: 'about' }]
// }
//
// export const dynamicParams = false

// import Post from "../../content/learning.mdx";

// const Blog = ({ slug }: { slug: string }) => {
//   console.log("props: ", slug);
//   const Post = import(`../../content/${slug}.mdx`);
//   // return <h1>Testing {slug} here!</h1>;
//   return <Post />;
//   // return <div>{Post}</div>;

const Blog = async ({ slug }: { slug: string }) => {
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return <Post />;
};

export default Blog;
