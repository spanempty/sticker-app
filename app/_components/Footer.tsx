export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #eee",
      }}
    >
      <div className="min-h-1/5 max-h-1/5 mx-auto max-w-screen-2xl px-6 py-8 xl:px-8 xl:py-14 4xl:px-10 4xl:py-16 flex flex-col gap-5">
        <div className="flex justify-items flex-col gap-3 py-5">
          <div className="flex items-center justify-start self-stretch font-mono">
            Hairy Sticker
          </div>
          <div className="text-gray-500">Contact Us</div>
        </div>
        <small className="font-thin">&copy; 2025 Sticker Johns</small>
      </div>
    </footer>
  );
}
