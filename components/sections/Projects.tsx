import { ProjectCard } from "../ui/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A full-stack admin dashboard built with Next.js, Prisma, and Tailwind CSS. Features real-time revenue tracking and inventory management.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2560&auto=format&fit=crop",
    liveUrl: "https://my-demo.com",
    githubUrl: "https://github.com/yourusername/repo",
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "An application that generates images from text prompts using OpenAI's DALL-E 3 API.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2560&auto=format&fit=crop",
    githubUrl: "https://github.com/yourusername/repo2",
    // Notice liveUrl is omitted here; the card will naturally adjust!
  }
];

export default function Projects() {
  return (
    <section className="py-20 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
      
      {/* Grid container for the cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-4 w-full max-w-7xl mx-auto">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
}