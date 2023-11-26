import CardClasses from "./components/cardClasses";
import { DataClasses } from "./interfaces/DataClasses";

export default async function Home() {
  // Chama pra API
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}turmas`);
  const result: DataClasses[] = await response.json();
  console.log(result) 
  return (
    <div className="scroll-custom">
      {result.map((classes: any) => (
        <CardClasses key={classes.id} name={classes.name} image={classes.avatar} id={classes.id} />
      ))}
    </div>
  );
}
