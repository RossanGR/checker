import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";
import Link from "next/link";
import { DataClasses } from "../interfaces/DataClasses";

const CardClasses: React.FC<DataClasses> = ({ name, image, id }) => {
  return (
    <div className="flex justify-between items-center mt-5 px-20 py-3 bg-stone-300 rounded-lg">
      <div className="flex items-center justify-between">
        <Image width={100} height={100} className="rounded-full" src={image} alt="Classe" title="Classe" />
        <p className="ml-2">{name}</p>
      </div>
      <div>
        <Link href={`/persons/${id}`} className="bg-neutral-100 rounded-lg p-2">
          <VisibilityIcon /> Visualizar
        </Link >
      </div>
    </div>
  );
};

export default CardClasses;
