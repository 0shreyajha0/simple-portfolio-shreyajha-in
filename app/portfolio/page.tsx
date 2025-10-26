import Link from "next/link";
import type {Metadata} from "next";
import {portfolio} from "./portfolio-data";
import {PortfolioItem} from "../components/Portfolio/PortfolioItem";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Shreya Jha Portfolio",
};

export default function Projects() {
    return (
        <>
            <section>
                <h1 className="mb-1 text-2xl font-medium tracking-tight">Case Studies</h1>
                <p className="mb-6">Here are some case studies I have worked on:</p>
                <div>
                    {portfolio.caseStudies.map((project, index) => (
                        <PortfolioItem
                            title={project.title}
                            description={project.description}
                            url={project.url}
                            imageUrl={project.imageUrl}
                            dateAndTime={project.dateAndTime}
                            index={index}
                        />
                    ))}
                </div>
            </section>
            <section className="mt-3">
                <h1 className="mb-1 text-2xl font-medium tracking-tight">PRDs</h1>
                <p className="mb-6">Here are some PRDs I have worked on:</p>
                <div>
                    {portfolio.prd.map((project, index) => (
                        <PortfolioItem
                            title={project.title}
                            description={project.description}
                            url={project.url}
                            imageUrl={project.imageUrl}
                            dateAndTime={project.dateAndTime}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
