import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, error, isLoading } = trpc.useQuery(["test-trpc"]);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="font-bold text-red-600">{JSON.stringify(error)}</p>;
  }

  return <p className="font-bold text-green-600">{JSON.stringify(data)}</p>;
};

export default Home;
