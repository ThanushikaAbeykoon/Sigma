const WHATSAPP_NUMBER = "443300584444";
const WHATSAPP_MESSAGE =
  "Hi, I'd like to find out more about business funding options.";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .102 5.36.1 11.949c0 2.105.549 4.162 1.594 5.984L0 24l6.223-1.63a11.92 11.92 0 0 0 5.821 1.482h.005c6.582 0 11.943-5.361 11.945-11.949a11.87 11.87 0 0 0-3.474-8.454zM12.05 21.771h-.004a9.83 9.83 0 0 1-5.01-1.377l-.359-.213-3.694.968.986-3.6-.233-.369a9.815 9.815 0 0 1-1.51-5.24C2.229 6.586 6.618 2.2 12.055 2.2c2.634 0 5.109 1.026 6.971 2.889a9.79 9.79 0 0 1 2.888 6.975c-.003 5.437-4.428 9.87-9.864 9.87z" />
      </svg>
    </a>
  );
}
