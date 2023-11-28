import CardClasses from "./components/cardClasses";
import ApplicationConstants from "./constants/ApplicationConstants";
import { DataClasses } from "./interfaces/DataClasses";

export default async function Home() {
  const response = await fetch(`${ApplicationConstants.NEXT_PUBLIC_API_URL}turmas`);
  const result: DataClasses[] = [{
    name: "Gaguisse",
    image: "ApplicationConstants.BASE64_IMAGE",
    id: "1"
  }] || await response.json();

  return (
    <div className="scroll-custom">
      {result.map((classes: any) => (
        <CardClasses key={classes.id} name={classes.name} image={classes.avatar} id={classes.id} />
      ))}
    </div>
  );
}
