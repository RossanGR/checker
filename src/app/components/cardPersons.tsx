import Image from "next/image";
import { DataPersons } from "../interfaces/DataPersons";

const CardPersons:React.FC<DataPersons> = ({name, avatar, ra, curse }) => {
 

  
  return (
    <div className="grid grid-cols-3 items-center mt-5 px-20 py-3 bg-stone-300 rounded-lg">   
      <div className="flex items-center">    
        <Image width={200} height={200} className="w-12" src={avatar} alt="Classe" title="Classe" />
        <p className="pl-4">{name}</p>
      </div>      
      <div>
        <p className="text-center">RA: {ra}</p>
      </div>
      <div>
        <p className="text-center">Curso: {curse}</p>
      </div>
    </div>
  );
};

export default CardPersons;
