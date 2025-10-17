import { motion } from "framer-motion"
import { CodeSquare, ToolCase, Wallpaper } from "lucide-react"

export default function ServicesSection() {
  const skills = [
    {
      title: "Frontend",
      icon: <Wallpaper className="w-8 h-8 text-pink-400" />,
      items: [
        ["HTML", "https://img.icons8.com/?size=100&id=20909&format=png&color=FFFFFF"],
        ["CSS", "https://img.icons8.com/?size=100&id=21278&format=png&color=FFFFFF"],
        ["JS", "https://img.icons8.com/?size=100&id=108784&format=png&color=FFFFFF"],
        ["React", "https://img.icons8.com/?size=100&id=Y8UPqrI8Yp7V&format=png&color=02DBF9"],
        ["Flutter", "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=FFFFFF"],
        ["Dart", "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"],
      ],
    },
    {
      title: "Backend",
      icon: <CodeSquare className="w-8 h-8 text-pink-400" />,
      items: [
        ["C", "https://img.icons8.com/?size=100&id=40670&format=png&color=FFFFFF"],
        ["C++", "https://img.icons8.com/?size=100&id=40669&format=png&color=FFFFFF"],
        ["Python", "https://img.icons8.com/?size=100&id=lXPUSRCongH1&format=png&color=FFFFFF"],
        ["PHP", "https://img.icons8.com/?size=100&id=XNQU0Xcm2I9s&format=png&color=FFFFFF"],
        ["MySQL", "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=FFFFFF"],
      ],
    },
    {
      title: "Tools & Databases",
      icon: <ToolCase className="w-8 h-8 text-pink-400" />,
      items: [
        ["Docker", "https://img.icons8.com/?size=100&id=qGZRK3KTK57F&format=png&color=FFFFFF"],
        ["Firebase", "https://img.icons8.com/?size=100&id=87330&format=png&color=FFFFFF"],
        ["GitHub", "https://img.icons8.com/?size=100&id=106562&format=png&color=FFFFFF"],
        ["Android", "https://img.icons8.com/?size=100&id=04OFrkjznvcd&format=png&color=FFFFFF"],
        ["Play Store", "https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=FFFFFF"],
        ["Tensorflow", "https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=FFFFFF"],
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="min-h-[75vh] flex flex-col justify-center items-center bg-[#0a0a12] text-gray-200 font-mono px-6 py-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-pink-400 mb-12 pixel-font">
        Habilidades
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl max-auto">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="border border-pink-400/20 bg-[#141425] rounded-2xl p-6 shadow-md hover:border-pink-400/40 transition-all"
          >
            <div className="flex items-center mb-4 gap-2">
              {s.icon}
              <h3 className="text-xl font-bold text-pink-400">
                {s.title}
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
                {s.items.map(([name, src]) => (
                  <div key={name} className="group flex flex-col items-center">
                    <img
                      src={src}
                      alt={name}
                      className="h-12 opacity-80 group-hover:opacity-100 transition-all group-hover:scale-110"
                    />
                    <span className="text-xs text-pink-400 mt-2 opacity-0 group-hover:opacity-100 transition-all">
                      {name}
                    </span>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
