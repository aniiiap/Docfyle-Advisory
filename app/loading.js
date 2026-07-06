export default function Loading() {
  return (
    <div className="container-base py-24">
      <div className="mx-auto max-w-2xl animate-pulse space-y-5">
        <div className="h-10 w-3/4 rounded-xl bg-slate-200" />
        <div className="h-4 w-4/5 rounded-xl bg-slate-200" />
        <div className="h-4 w-3/5 rounded-xl bg-slate-200" />
        <div className="mt-8 h-56 rounded-2xl bg-slate-200" />
      </div>
    </div>
  );
}
