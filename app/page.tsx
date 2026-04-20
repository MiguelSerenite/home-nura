import { permanentRedirect } from "next/navigation";

export default function RootPage() {
  // 308 permanent redirect → Google treats /fr as canonical, not the root URL
  permanentRedirect("/fr");
}
