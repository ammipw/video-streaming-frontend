import { APP_NAME } from "../../utils/constants";
import { useUser } from "../../utils/useUser";

export default function Header() {
  const user = useUser((state) => state.user);

  return (
    <header className="flex justify-between p-4 bg-neutral-200">
      <h1><a href="/">{APP_NAME}</a></h1>
      {user && <a href="/profile">{user.name}</a>}
    </header>
  )
}