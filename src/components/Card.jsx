// Card.jsx
import Image from 'next/image';
import Tag from './Tag.jsx';
import Github from 'public/svg/github.svg';
const Card = ({ title, imageSrc, description, tags, gitHref }) => {
    return (
        <div className="flex flex-col sm:flex-row sm:max-w-2xl w-full mx-auto overflow-hidden bg-gray-700 rounded-lg shadow-lg dark:bg-gray-800 p-2">
            <div className="p-2 sm:w-1/2">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={400}  // Ajusta estos valores según tus necesidades
                    height={300}
                    className="rounded object-cover w-full sm:h-80 h-60"
                />
            </div>
            <div className="sm:p-4 p-2 sm:w-1/2 flex flex-col gap-3 justify-between">
                <div>
                    <h3 className="block sm:mt-2 text-2xl font-semibold text-gray-50 dark:text-white hover:text-gray-400 hover:underline">
                        {title}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-start my-2">
                        {tags && tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                    </div>
                    <p className="mt-2 text-sm text-gray-200 dark:text-gray-400">{description}</p>
                </div>
                <a href={gitHref} className="w-2/3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 inline-flex rounded items-center">
                    <Github className="w-6 h-6 mr-2" />
                    <span>Github</span>
                </a>
            </div>

        </div>
    );
};

export default Card;
