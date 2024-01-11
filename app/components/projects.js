import fs from "fs";
import matter from "gray-matter";
import ProjectCard from "./projectCard";

const getProjects = async () => {
  try {
    const files = fs.readdirSync("public/projects");

    const posts = files.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`public/projects/${fileName}`, "utf-8");
      const { data: frontmatter } = matter(readFile);
      return {
        slug,
        frontmatter,
      };
    });
    posts.sort((a, b) => {
      const dateA = new Date(a.frontmatter.published_at);
      const dateB = new Date(b.frontmatter.published_at);
      return dateB - dateA;
    });
    return posts;
  } catch (error) {
    return [];
  }
};

export default async function Projects({ max = false }) {
  const projects = await getProjects();
  return (
    <div className="flex flex-col mt-6 space-y-2">
      {projects.length > 0
        ? projects.map(({ slug, frontmatter }, idx) =>
            max ? (
              idx <= 2 ? (
                <ProjectCard
                  key={idx}
                  title={frontmatter.title}
                  description={frontmatter.description}
                  src={frontmatter.thumbnail}
                  href={`/projects/${slug}`}
                />
              ) : (
                ""
              )
            ) : (
              <ProjectCard
                key={idx}
                title={frontmatter.title}
                description={frontmatter.description}
                src={frontmatter.thumbnail}
                href={`/projects/${slug}`}
              />
            )
          )
        : "Empty"}
    </div>
  );
}
