import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">      
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>             
          <li>
            <Link href="/random">Random</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;