import Card from "components/Card";

export const CardsCollection = ({ recipes }) => {
  return (
    <section className="p-2">
      <h2 className="px-2 text-lg">Your Recipes:</h2>
      <div className="flex w-full">
        <ul className="flex-grid w-1/2">
          {recipes &&
            recipes.map((recipe, index) => {
              if (index % 2 === 0)
                return (
                  <li tabIndex="0" key={index}>
                    <Card recipe={recipe} key={index} />
                  </li>
                );
            })}
        </ul>
        <ul className="flex-grid w-1/2">
          {recipes &&
            recipes.map((recipe, index) => {
              if (index % 2 === 1)
                return (
                  <li tabIndex="0" key={index}>
                    <Card recipe={recipe} />
                  </li>
                );
            })}
        </ul>
      </div>
    </section>
  );
};

export default CardsCollection;
