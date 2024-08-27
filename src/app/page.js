import { getSetting, getWishList } from "../server/server";
import Home from "./_components/home/Home";

const dynamic = "force-dynamic";

export default async function Page() {
  const data = await getSetting();
  const data2 = await getWishList();
  return <Home setting={data} wishList={data2} />;
}
