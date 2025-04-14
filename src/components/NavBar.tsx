import Link from "next/link";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link href="/">Homee</Link>
      </li>
      <li>
        <Link href="/blog/goals">About Us</Link>
      </li>
      <li>
        <Link href="/blog/career">Blog Post</Link>
      </li>
      <li>
        <Link href="/blog/test">Test Post</Link>
      </li>
    </ul>
  );
};

export default NavBar;
