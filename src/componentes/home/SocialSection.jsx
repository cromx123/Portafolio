import { useTranslation } from 'react-i18next';
export default function SocialSection() {
    const { t } = useTranslation();
    return (
        <section className="py-12 text-center bg-[#0a0a12]">
          <h2 className="text-3xl font-bold mb-4"> {t("home.socialmedia.title")}</h2>
          <div className="flex justify-center gap-8 text-sm">
            {[
              ["Instagram", "https://www.instagram.com/_cris.ogc"],
              ["LinkedIn", "https://www.linkedin.com/in/cristobal-gallardo-cromxdev/"],
              ["GitHub", "https://github.com/cromx123"],
              ["Facebook", "https://www.facebook.com/cristobal.o.gallardo"],
            ].map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-all duration-300"
              >
                {name}
              </a>
            ))}
          </div>
        </section>
    );
}