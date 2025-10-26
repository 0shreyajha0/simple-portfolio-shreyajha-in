import Link from "next/link";

export interface PortfolioItemProps {
    title: string;
    description: string;
    url: string;
    dateAndTime: string;
    index: number;
    imageUrl: string;
}

export const PortfolioItem = (props: PortfolioItemProps) => {
    const {index, title, description, url, dateAndTime, imageUrl} = props;
    return (
        <div
            key={`portfolio-item-${index}`}
            className="flex flex-col mb-8 border border-gray-200 dark:border-black rounded-lg shadow-md transition-transform duration-500 hover:shadow-gray-400 dark:hover:shadow-gray-700"
        >
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-50 object-cover rounded-t-lg"
            />

            <div className="flex flex-col p-4 justify-between space-y-4">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-xl font-semibold text-black dark:text-white">{title}</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">{description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{dateAndTime}</p>
                </div>
                <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start underline underline-offset-2 mt-4  font-medium hover:text-blue-800 dark:hover:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Read more
                </Link>
            </div>
        </div>
    );
};
