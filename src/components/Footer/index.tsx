import { APP_NAME } from "../../utils/constants";

export default function Footer() {
  return (
    <footer className="p-4 bg-neutral-200">
      <p>© 2024 {APP_NAME}. All rights reserved.</p>
    </footer>
  )
}