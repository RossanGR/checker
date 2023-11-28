"use client";
import CardPersons from "@/app/components/cardPersons";
import ApplicationConstants from "@/app/constants/ApplicationConstants";
import { DataPersons } from "@/app/interfaces/DataPersons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Persons = () => {
  const [person, setPerson] = useState<DataPersons[]>([]);
  const [loading, setLoading] = useState(false);
  const router = usePathname();
  const id = router.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${ApplicationConstants.NEXT_PUBLIC_API_URL}persons`,
          { next: { revalidate: 3600 } }
        );
        const data: DataPersons[] = await response.json();
        setPerson(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log("Errouuu", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Caregando...</h2>
      ) : (
        <>
          <button className="block mt-5 ml-auto outline outline-2 p-2 px-7 rounded-full hover:bg-green-500 hover:outline-none hover:text-white transition hover:delay-0">
            <Link href="/cam">Realizar chamada</Link>
          </button>
          {person.map((p) => (
            <CardPersons
              key={p.id}
              name={p.name}
              avatar={p.avatar}
              ra={p.ra}
              curse={p.curse}
              id={p.id}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Persons;
