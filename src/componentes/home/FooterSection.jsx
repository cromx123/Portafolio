export default function FooterSection() {
  return (
    <footer className="py-6 bg-[#0a0a12] border-t border-pink-400/20 text-center text-gray-400 font-mono text-sm">
      <p>
        © {new Date().getFullYear()} CromxDev - Todos los derechos reservados.
      </p>
      <p className="mt-1 text-pink-400">"Stay retro. Build the future."</p>
    </footer>
  );
}