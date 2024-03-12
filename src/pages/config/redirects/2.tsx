import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Redirect1Page() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      void router.replace("/config/redirects/3");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1>Redirecting to 3 in two seconds…</h1>
    </div>
  );
}
