interface HeaderProps {
  user?: any;
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="flex justify-between p-4 bg-neutral-200">
      <h1>MyVideoApp</h1>
      {user && <p>{user.name}</p>}
    </header>
  )
}