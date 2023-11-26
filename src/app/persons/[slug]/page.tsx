'use client'
import CardPersons from "@/app/components/cardPersons";
import { DataPersons } from "@/app/interfaces/DataPersons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Persons =  () => {
  const [person, setPerson] = useState<DataPersons>()
  const router = usePathname()
  const id = router.split("/")[2]
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}persons/${id}`)
        const data:DataPersons = await response.json()
        setPerson(data)
      }catch(error){
        console.log('Errouuu', error)
      }
    }
    fetchData()
  },[])

  return (
    <div>

      <CardPersons name={person?.name} avatar={person?.avatar} ra={person?.ra} curse={person?.curse}/>
    </div>
  );
};

export default Persons;
