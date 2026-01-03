import { NavLink } from "react-router";
import { APP_NAME } from "../../utils/constants";
import { useUser } from "../../utils/useUser";

export default function Header() {
  const user = useUser((state) => state.user);

  return (
    <header className="bg-primary">
      <div className="flex justify-between py-8 max-w-(--max-width) mx-auto">
        <h1><NavLink to="/">{APP_NAME}</NavLink></h1>
        <nav className="flex items-center gap-12">
          <NavLink to="/" className={({isActive}) => ("relative" + (isActive ? " text-white after:content[''] after:block after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:w-4 after:h-px after:rounded-full after:bg-neutral-200" : ""))}>Home</NavLink>
          <NavLink to="/videos" className={({isActive}) => ("relative" + (isActive ? " text-white after:content[''] after:block after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:w-4 after:h-px after:rounded-full after:bg-neutral-200" : ""))}>Videos</NavLink>
          <NavLink to="/live" className={({isActive}) => ("relative" + (isActive ? " text-white after:content[''] after:block after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:w-4 after:h-px after:rounded-full after:bg-neutral-200" : ""))}>Live</NavLink>
          <NavLink to="/about" className={({isActive}) => ("relative" + (isActive ? " text-white after:content[''] after:block after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:w-4 after:h-px after:rounded-full after:bg-neutral-200" : ""))}>About</NavLink>
        </nav>
        {user && <NavLink to="/profile">{user.name}</NavLink>}
      </div>
    </header>
  )
}