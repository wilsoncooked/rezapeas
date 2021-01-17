import Head from "next/head";
import CardsCollection from "components/CardsCollection";
import MainLayout from "layouts/MainLayout";
import { ALL_RECIPES } from "api/queries";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { loading, error, data } = useQuery(ALL_RECIPES);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error!!!</h1>;
  }

  if (data) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <MainLayout>
          <CardsCollection recipes={data.recipes} />
        </MainLayout>
      </>
    );
  }
}
