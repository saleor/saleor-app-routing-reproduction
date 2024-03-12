import Link from "next/link";

export default function Config1Page() {
  return (
    <div>
      <h1>Subpage 1</h1>
      <Link href="/config/2">Go to 2</Link>
      <Link href="/config">Go to config</Link>
    </div>
  );
}
