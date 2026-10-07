import { permanentRedirect } from "next/navigation";

export default function RootPage() {
  // Safety net only: middleware.ts answers `/` with a language-negotiated
  // 302 before this page renders. Reached only if the middleware matcher
  // stops covering `/`.
  permanentRedirect("/fr");
}
