import UserIcon from "icons/user";
import Menu from "components/Menu";
import Title from "components/Title";

export default function Nav() {
  return (
    <>
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Menu />
          <Title />
        </div>
        <button className="w-8 m-4">
          <UserIcon color="#6366F1" />
        </button>
      </nav>
    </>
  );
}
