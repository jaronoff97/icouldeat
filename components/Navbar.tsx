import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="container mx-auto py-2">
        <ul className="flex justify-center space-x-6 text-lg">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/posts">Blog</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archives</NavLink>
          </li>
          <li>
            <NavLink href="/webring">Webring</NavLink>
          </li>
          <li>
            <NavLink href="https://github.com/jaronoff97/icouldeat">
              Github
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

type NavLink = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLink) => {
  return (
    <Link className="hover:text-gray-300 hover:underline" href={href}>
      {children}
    </Link>
  );
};
