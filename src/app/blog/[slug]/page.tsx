const Blog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const { default: Post } = await import(`../../../content/${slug}.mdx`);

  return <Post />;
};

export const generateStaticParams = () => {
  return [
    { slug: "career" },
    { slug: "dream-job" },
    { slug: "goals" },
    { slug: "learning" },
    { slug: "welcome" },
  ];
};

export const dynamicParams = false;

export default Blog;
