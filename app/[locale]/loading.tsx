export default function Loading() {
  return (
    <main className="flex-1 pt-24">
      <section className="h-[70vh] animate-pulse bg-gray-200" />
      <section className="container py-12 space-y-6">
        <div className="h-8 w-56 rounded bg-gray-200" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="h-64 rounded bg-gray-200" />
          <div className="h-64 rounded bg-gray-200" />
          <div className="h-64 rounded bg-gray-200" />
          <div className="h-64 rounded bg-gray-200" />
        </div>
        <div className="h-40 rounded bg-gray-200" />
      </section>
    </main>
  );
}
