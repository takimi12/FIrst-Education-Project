import NavLink from "./NavLink";

export default function NavBar() {
    return (
        <nav>
        <ul className="flex gap-2">
            <li className="font-bold font-orbitron">
                <NavLink
                href="/">Indie Gamer </NavLink>
            </li>
            <li className="ml-auto ">
                <NavLink
              
                href="/reviews">Reviews</NavLink>
            </li>
            <li>
                <NavLink prefetch={false}
                 href="/about">About</NavLink>
            </li>
        </ul>
       </nav>
    );
}