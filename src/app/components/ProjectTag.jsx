import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
   const buttonStyles = isSelected ? "text-white bg-[#27272c] border border-pink-400 transition-colors" : "text-white bg-zinc-900 border border-zinc-500 hover:bg-[#27272c] transition-colors";
   
   // Centering text using flexbox
   const containerStyles = {
      display: 'flex',
      justifyContent: 'center',
   };
   
   return (
      <button style={containerStyles} className={`${buttonStyles} px-3 py-1.5 w-20 rounded-full cursor-pointer`} onClick={() => onClick(name)}>{name}</button>
   );
};

export default ProjectTag;
