import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "A simple weather app built with Flutter & OpenWeatherMap API",
      image: "/Weather.png",
      githubUrl: "https://github.com/AsifulAhsan/weather_v0",
    },
    {
      id: 2,
      title: "Notes App",
      description: "A simple notes app built with Flutter & SQFlite database",
      image: "/Notes.jpg",
      githubUrl: "https://github.com/AsifulAhsan/notes",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-b from-emerald-800 to-emerald-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4"> {/* Changed px-8 to px-4 */}
          <div className="flex flex-col items-start space-y-8 animate-fade-in">
            <div className="relative w-48 h-48">
              <Image
                src="/me.jpeg"
                alt="Asiful Ahsan Wasif"
                fill
                className="rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I’m Asiful Ahsan Wasif
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-prose">
              Front-End Developer | Crafting with Next.js & Flutter
            </p>
            {/* Optional: Add a tagline or social icons to fill space */}
            <p className="text-sm text-gray-300">Follow me on LinkedIn</p>
            <Link
              href="#contact"
              className="px-8 py-4 bg-emerald-700 text-white rounded-full font-semibold text-lg hover:bg-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-8 py-20">
        <div className="border-t border-gray-200">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6 pt-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            I’m a front-end developer passionate about building clean, modern web apps. I’m currently mastering
            Next.js, TypeScript, and Tailwind CSS to create projects like this portfolio. When I’m not coding,
            I enjoy exploring new technologies and learning about web development.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-8 py-20 bg-gray-50">
        <div className="border-t border-gray-200">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8 pt-6">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 block"
              >
                <div className="w-full flex justify-center p-6">
                  <div className="relative w-48 h-48 flex items-center justify-center overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="max-w-full max-h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-emerald-900">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-8 py-20 bg-gray-100">
        <div className="border-t border-gray-200">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6 pt-6">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            Reach out to me for collaborations or just to say hi!
          </p>
          <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://github.com/AsifulAhsan"
              className="px-6 py-3 bg-emerald-700 text-white rounded-full font-semibold hover:bg-emerald-900 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Github
            </a>
            <a
              href="mailto:asifulahsan@outlook.com"
              className="px-6 py-3 bg-emerald-700 text-white rounded-full font-semibold hover:bg-emerald-900 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/asiful-ahsan-2538b4238/"
              className="px-6 py-3 bg-emerald-700 text-white rounded-full font-semibold hover:bg-emerald-900 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}