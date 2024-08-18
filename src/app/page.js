import { getSetting } from "../server/server";
import Home from "./_components/home/Home";

export default async function Page() {
  const data = await getSetting();
  return <Home setting={data} />;
}
