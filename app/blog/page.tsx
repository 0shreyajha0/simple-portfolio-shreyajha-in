import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Shreya Jha Blogs",
};

// Have to update this config for adding new blogs
const BlogsConfig = [
  {
    metadata: {
      title: "What is PRD??",
      publishedAt: "Jul 14, 2024",
    },
    url: "https://medium.com/@0shreyajha0/what-is-prd-ac3b44760bfa",
    image:
      "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*poVv-ii2PtIJ4Xt-MAv0Zg.jpeg",
    content: "Understanding PRD: An Interactive Guide",
  },
  {
    metadata: {
      title:
        "Product Manager Vs Product Analyst : With Zomato’s Veg Only Example",
      publishedAt: "Jun 23, 2024",
    },
    url: "https://medium.com/@0shreyajha0/product-manager-vs-product-analyst-bda610f15c7a",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Q106g8S-XhAwUZdxS178nQ.jpeg",
    content:
      "As a fresher, I use to thought Product Manager and Product Analyst are same. After getting into industry, I got to know that they play…",
  },
  {
    metadata: {
      title: "Types of Errors in JavaScript",
      publishedAt: "Jan 26, 2024",
    },
    url: "https://medium.com/@0shreyajha0/types-error-in-javascript-66f45b60e9ef",
    image:
      "https://www.datocms-assets.com/48401/1627664298-javascript.png?fit=max&fm=webp&w=900",
    content:
      "In JavaScript, mistakes can happen while a program is running. These mistakes are divided into a number of kinds, each of which reveals…",
  },
  {
    metadata: {
      title: "The Art of Balancing Multiple Responsibilities",
      publishedAt: "Jan 26, 2024",
    },
    url: "https://medium.com/@0shreyajha0/the-art-of-balancing-multiple-responsibilities-47cc7c6a24a9",
    image:
      "https://blogs.uww.edu/organizationandinspiration/files/2020/09/020fe1.png",
    content:
      "This is a myth that you have to focus on one thing at a time You will have to take care of a lot of things at the same time which is very…",
  },
  {
    metadata: {
      title:
        "Clearing the Air: A Glimpse into Delhi’s Air Quality During the 18th G20 Summit",
      publishedAt: "Jan 15, 2024",
    },
    url: "https://medium.com/@0shreyajha0/clearing-the-air-a-glimpse-into-delhis-air-quality-during-the-18th-g20-summit-f8bf4f7191e6",
    image:
      "https://i.guim.co.uk/img/media/efafbbda64a4245a9a2c5264d3d55b4517a8410b/48_13_2484_1492/master/2484.jpg?width=1900&dpr=2&s=none&crop=none",
    content:
      "Wrote a research paper based on assessment of air quality pattern change in Delhi during G20 summit.",
  },
  {
    metadata: {
      title:
        "The Intersection of Environmental Science and Tech: A Promising Future",
      publishedAt: "Jan 15, 2024",
    },
    url: "https://medium.com/@0shreyajha0/the-intersection-of-environmental-science-and-tech-a-promising-future-2cf72d9a7818",
    image: "https://energyanalysis.lbl.gov/sites/default/files/est-ghg.jpg",
    content:
      "The symbiotic relationship between environmental science and technology is a powerful force in our dynamic and ever-changing world, providing answers to difficult problems and laying the groundwork for sustainable development.",
  },
];

export default function BlogPosts() {
  let allBlogs = BlogsConfig;

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">My Blogs</h1>
      <div>
        {allBlogs.map((post) => (
          <a
            target="_blank"
            key={post.url}
            className="flex flex-col space-y-1 mb-8 transition-opacity duration-100 hover:opacity-70 group"
            href={post.url}
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <div className="w-96">
                <h2 className="text-black dark:text-white group-hover:text-blue-900">
                  {post.metadata.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm group-hover:text-blue-900">
                  {post.content}
                </p>
                <p className="text-neutral-600 mt-3 mb-2 dark:text-neutral-400 tabular-nums text-sm group-hover:text-blue-900">
                  {post.metadata.publishedAt}
                </p>
              </div>
              <div className="w-34 h-24">
                <img
                  src={post.image}
                  alt={post.metadata.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
