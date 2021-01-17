import Ingredient from "components/Ingredient";
import Step from "components/Step";
import MainLayout from "layouts/MainLayout";
import { ALL_RECIPES, RECIPE_BY_ID } from "api/queries";
import { useQuery } from "@apollo/client";
import { client } from "api/apolloClient";

export async function getStaticPaths() {
  const apolloClient = client;
  const { data } = await apolloClient.query({ query: ALL_RECIPES });
  const paths = data.recipes.map(recipe => ({
    params: {
      recipe: recipe.id
    }
  }));
  return {
    paths,
    fallback: false
  };
}

export const getStaticProps = async ({ params }) => {
  const apolloClient = client;
  await apolloClient.query({
    query: RECIPE_BY_ID,
    variables: { id: params.recipe }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      recipeId: params.recipe
    },
    revalidate: 1
  };
};

const Recipe = ({ recipeId }) => {
  const { loading, error, data } = useQuery(RECIPE_BY_ID, { variables: { id: recipeId } });

  if (error) return <div>Error...</div>;
  if (loading) return <div>Loading...</div>;

  const { title, description, thumbnail, ingredients, method, time, notes, serving, cuisine, badges } = data.recipe;

  return (
    <MainLayout>
      <section className="my-4 mx-2 border border-gray ">
        <h2 className="text-4xl p-2">{title}</h2>
        {description && (
          <div className="border-t border-gray p-1">
            <p>{description}</p>
          </div>
        )}
        <div className="flex border-t border-gray overflow-hidden">
          {thumbnail && (
            <div className=" border-r border-gray p-1">
              <div className="h-52 w-52 border border-gray rounded-full overflow-hidden relative">
                <img
                  src={thumbnail.url}
                  alt={thumbnail.alt}
                  className="h-full max-w-none w-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          )}
          <div className="w-1/2">
            <div className="border-gray border-b h-1/3 p-1">
              <p className="font-bold">Total Time: </p>
              {time && <p className="text-center p-1.5">{time}</p>}
            </div>
            <div className="border-gray border-b h-1/3 p-1">
              <p className="font-bold">Serves: </p>
              {serving && (
                <p className="text-lg text-center p-1.5">
                  {serving.quantity} {serving.type ? serving.type : ""}
                </p>
              )}
            </div>
            <div className="h-1/3 p-1">{cuisine && <p className="text-center p-1.5">{cuisine}</p>}</div>
          </div>
        </div>

        {ingredients && (
          <div className="p-2 border-t border-gray">
            <h3 className="text-lg  font-bold">INGREDIENTS:</h3>
            <ul className="px-1">
              {ingredients.map(cluster =>
                cluster.ingredients.map((item, index) => <Ingredient item={item} key={index} />)
              )}
            </ul>
          </div>
        )}
        {method && (
          <div className="p-2 border-t border-gray">
            <h3 className="text-lg  font-bold">METHOD:</h3>
            <ol className="p-0.5">
              {method.map((step, index) => (
                <Step num={index + 1} direction={step} key={index} />
              ))}
            </ol>
          </div>
        )}
        {notes && (
          <div className="p-2 border-t border-gray">
            <h3 className="text-lg font-bold">NOTES:</h3>
            <ol className="p-0.5">
              {notes.map((note, index) => (
                <p className="py-1" key={index}>
                  {note}
                </p>
              ))}
            </ol>
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default Recipe;
