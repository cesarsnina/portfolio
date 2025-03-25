const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const { default: Post } = await import(`../../../content/${slug}.mdx`);

  return <Post />;
};

export const generateStaticParams = () => {
  return [
    { slug: "career" },
    { slug: "goals" },
    { slug: "dream-job" },
    { slug: "learning" },
  ];
};

export const dynamicParams = false;

export default Page;
