import { APP_NAME } from "../../utils/constants";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-(--max-width) mx-auto py-8">
        <p>© 2026 {APP_NAME}. All rights reserved.</p>
      </div>
    </footer>
  )
}