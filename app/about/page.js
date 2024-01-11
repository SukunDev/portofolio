import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import md from "markdown-it";
import Projects from "../components/projects";
import Headings from "../components/headings";
import HireMe from "../components/hireMe";

const getPost = async () => {
  try {
    const configDirectory = path.resolve(process.cwd(), "public", "posts");
    const fileName = fs.readFileSync(
      path.join(configDirectory, `about.md`),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(fileName);

    return { frontmatter, content };
  } catch (error) {
    notFound();
  }
};

export const metadata = {
  title: "About Me",
};
export default async function About() {
  const { frontmatter, content } = await getPost();
  return (
    <>
      <Headings title={frontmatter.title} />
      <article
        className="m-2 sm:m-4 article"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
      <div className="px-4 pt-4 pb-8 mt-4 bg-gray-100 dark:bg-white/10 rounded-xl">
        <Projects max={true} />
      </div>
      <HireMe />
    </>
  );
}
