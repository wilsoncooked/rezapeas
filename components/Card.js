import Badge from "components/Badge";
import Time from "components/Time";
import Link from "next/link";

export const convertStringToPath = name => {
  return name.replace(" ", "-").toLowerCase();
};

export const Card = ({ recipe }) => {
  return (
    <div className="p-1">
      {recipe && (
        <Link href={`/recipes/${recipe.id}`}>
          <div className="w-full h-auto group hover:bg-white  border border-indigo-600 rounded-lg  overflow-hidden p-1 cursor-pointer">
            <img src={recipe.thumbnail.url} alt={recipe.thumbnail.alt} className="w-full rounded" />
            <div>
              <div className="flex justify-between">
                <h3 className="text-indigo-600 text-lg font-light	px-0.5">{recipe.title}</h3>
                <Time text={recipe.time} />
              </div>
              <div className="flex flex-wrap">
                {recipe.badges && recipe.badges.map((badge, index) => <Badge text={badge} key={index} />)}
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Card;
