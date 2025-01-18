import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:shadow-lg"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Empowering ideas, delivering excellence!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi, I’m Shreya, a Product Manager at {""}
          <a target="_blank" href="https://www.pw.live/">
            Physics Wallah
          </a>
          , where I work on creating impactful learning products that empower
          students. I love solving problems and building products that users
          genuinely enjoy. I rely on data to guide my decisions and use
          structured thinking to break down complex challenges into simple
          solutions 🍃.
        </p>
        <p>
          Collaboration is a big part of my work, I work closely with tech teams
          to ensure smooth implementation, business teams to align on goals, and
          marketing teams to help take products to users. Whether it’s
          brainstorming new ideas, analyzing data, or improving user journeys, I
          focus on creating meaningful and impactful experiences.
        </p>
        <p>
          I specialize in user research, agile methodologies, cross-functional
          collaboration, and driving products from ideation to launch 🚀.
        </p>
        <h3 className="mb-4 text-1xl font-medium tracking-tight">
          What I Bring to the Table
        </h3>
        <p>
          Collaboration and user feedback are at the heart of everything I do, I
          believe great solutions come from understanding people 👥.
        </p>
        <p>
          I love building products that solve real problems and create value for
          both users and businesses 📈.
        </p>
        <p>
          I have a knack for breaking down big challenges into simple, scalable
          steps that work.
        </p>
        <p>
          I’m experienced with tools for A/B testing, Data Centric Research,
          PRDs, Agile Methodologies and Journey mappings to ensure every product
          decision is impactful.
        </p>
      </div>
    </section>
  );
}
