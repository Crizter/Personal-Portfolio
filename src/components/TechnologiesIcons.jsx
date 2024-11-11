import React from 'react';

// Font Awesome Icons
import { 
  FaBeer,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaPython
} from 'react-icons/fa';

// Ionicons
import { 
  IoLogoFirebase 
} from 'react-icons/io5';

// Tabler Icons
import { 
  TbBrandCpp,
  TbBrandReactNative,
  TbBrandJavascript 
} from 'react-icons/tb';

// Simple Icons
import { 
  SiExpress,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiMongodb 
} from 'react-icons/si';

// Material Design Icons
import { 
  MdHttp 
} from 'react-icons/md';

// Devicon Icons
import { 
  DiMysql,
  DiPostgresql 
} from 'react-icons/di';

function TechnologiesIcons() {
  return (
    <div className="overflow-hidden">
      <div className="flex space-x-4 animate-scroll">
    
        <div className="flex space-x-2">
          <MdHttp size={40} />
          <FaBeer size={40} />
          <TbBrandCpp size={40} />
          <SiExpress size={40} />
          <FaNodeJs size={40} />
          <SiPostman size={40} />
          <TbBrandReactNative size={40} />
          <FaHtml5 size={40} />
          <FaCss3 size={40} />
          <FaBootstrap size={40} />
          <SiRedux size={40} />
          <TbBrandJavascript size={40} />
          <SiTailwindcss size={40} />
          <DiMysql size={40} />
          <SiMongodb size={40} />
          <FaGit size={40} />
          <FaGithub size={40} />
          <IoLogoFirebase size={40} />
          <DiPostgresql size={40} />
          <FaPython size={40} />
        </div>
       
      </div>
    </div>
  );
}

export default TechnologiesIcons;
