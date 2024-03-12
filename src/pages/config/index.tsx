import Link from "next/link";

export default function ConfigPage() {
  return (
    <div>
      <h1>Config page</h1>
      <Link href="/config/1">Go to 1</Link>
      <Link href="/config/2">Go to 2</Link>
      <Link href="/config">Go to self</Link>
      <Link href="/config/redirects/1">Go to redirects chain</Link>
    </div>
  );
}
