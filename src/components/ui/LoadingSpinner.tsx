export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin"></div>
        <p className="text-brand-primary font-medium">Loading...</p>
      </div>
    </div>
  )
}
