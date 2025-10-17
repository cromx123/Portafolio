export default function SocialSection() {
    return (
        <section className="py-12 text-center bg-[#0a0a12]">
          <h2 className="text-3xl font-bold mb-4">Social Media</h2>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/_cris.ogc" className="text-neutral-400 hover:text-white">Instagram</a>
            <a href="https://www.linkedin.com/in/cristobal-gallardo-cromxdev/" className="text-neutral-400 hover:text-white">LinkedIn</a>
            <a href="https://github.com/cromx123" className="text-neutral-400 hover:text-white">GitHub</a>
            <a href="https://www.facebook.com/cristobal.o.gallardo" className="text-neutral-400 hover:text-white">Facebook</a>
          </div>
        </section>
    );
}