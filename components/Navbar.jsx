import Link from "next/link";
import Icons from "./Icons";
export default function Navbar({ routes }, { currentRoute }) {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        {routes.map((route, index) => {
          return (
            <Link href={route.href} key={index}>
              <a className={currentRoute === route.href ? "active" : ""}>
                <div className="navbar__icon">
                  <Icons icon={route.handle} theme={"dark"} />
                </div>
                <div className="navbar__label">{route.label}</div>
              </a>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
