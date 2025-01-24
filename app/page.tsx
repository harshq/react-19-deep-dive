import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-teal-100 to-rose-100 w-full h-screen">
      <div className="container mx-auto flex flex-col py-6 px-4">
        <h1 className="text-4xl font-bold">React 19: Deep dive</h1>
        <section className="mt-6">
          <ul className="list-disc ml-4">
            <li><Link href={`/use-examples`} className="underline decoration-slate-400 decoration-dashed"><code className="bg-slate-100">use</code> API example</Link> (<a href="#" className="text-blue-700 underline decoration-dashed">blog post</a>)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}