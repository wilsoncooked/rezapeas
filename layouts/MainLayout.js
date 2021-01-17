import Nav from "components/Nav";
import Search from "components/Search";

export const MainLayout = props => {
  return (
    <main>
      <Nav />
      <Search />
      {props.children}
    </main>
  );
};

export default MainLayout;
