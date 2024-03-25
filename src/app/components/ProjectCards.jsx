import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const ProjectCards = ({ imageURL, title, description, gitURL }) => {
    return (
        <div className="group relative mb-8"> 
            <div className="h-48 md:h-64 rounded-t-xl overflow-hidden relative">
                {/* Use the Image component here */}
                <Image 
                    src={imageURL} 
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110 rounded-t-xl" 
                    alt={title} />
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all rounded-t-xl">
                    <Link href='https://github.com' target="_blank" className="h-14 w-14 relative rounded-full flex items-center justify-center"> {/*will connect to github with {gitURL} when client provides*/} 
                    <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-neutral-400 hover:text-white transition-all transform group-hover:scale-110 opacity-0 group-hover:opacity-100 absolute inset-0 m-auto"/>
                    </Link> 
                </div>
            </div>
            <div className="rounded-b-xl bg-zinc-900 py-6 px-4 transition-all group-hover:bg-[#121214]">
                <h5 className="text-white text-xl font-semibold mb-2">{title}</h5>
                <p className="text-zinc-200">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCards;
