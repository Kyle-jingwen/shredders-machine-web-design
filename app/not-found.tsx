import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-7xl font-bold text-brand-500">404</span>
      <h1 className="mt-4 font-display text-2xl font-bold text-white">
        Page not found
      </h1>
      <p className="mt-2 max-w-md text-sm text-steel-400">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-primary">
          Back Home
        </Link>
        <Link href="/products" className="btn-ghost">
          Browse Products
        </Link>
      </div>
    </section>
  );
}
