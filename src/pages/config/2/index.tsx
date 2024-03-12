import Link from "next/link";

export default function Config2Page() {
  return (
    <div>
      <h1>Subpage 2</h1>
      <Link href="/config/1">Go to 1</Link>
      <Link href="/config">Go to config</Link>
    </div>
  );
}
