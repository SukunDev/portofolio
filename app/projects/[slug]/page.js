import fs from "fs";
import path from "path";
import matter from "gray-matter";
import md from "markdown-it";
import { notFound } from "next/navigation";
import Headings from "@/app/components/headings";
import HireMe from "@/app/components/hireMe";
import Projects from "@/app/components/projects";
import DefaultButton from "@/app/components/DefaultButton";
import { PiArrowRight } from "react-icons/pi";

const getProjects = async ({ params: { slug } }) => {
  try {
    const configDirectory = path.resolve(process.cwd(), "public", "projects");
    const fileName = fs.readFileSync(
      path.join(configDirectory, `${slug}.md`),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(fileName);

    return { frontmatter, content };
  } catch (error) {
    notFound();
  }
};

export async function generateMetadata({ params }) {
  const { frontmatter, content } = await getProjects({ params });
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function SingleProject({ params }) {
  const { frontmatter, content } = await getProjects({ params });
  return (
    <>
      <Headings title={"Projects"} />
      <article
        className="m-2 sm:m-4 article"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
      <div className="px-4 pt-4 pb-8 mt-4 bg-gray-100 dark:bg-white/10 rounded-xl">
        <Headings title={"Other Projects"}>
          <DefaultButton title={"View All"} href={"/projects"} type={2}>
            <PiArrowRight className="text-gray-500" />
          </DefaultButton>
        </Headings>
        <Projects max={true} />
      </div>
      <HireMe />
    </>
  );
}
