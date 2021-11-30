import Nav from "./Nav";
import SideBar from "./SideBar";
import Table from "./Table";
import Toolbar from "./Toolbar";
import ContentFooter from "./ContentFooter";

export default function Content() {
  const __date = new Date();
  const date = `${__date.toTimeString().split(" ")[0]}`;

  return (
    <main>
      <Nav />
      <SideBar />

      <div className="content">
        <div className="p-4">
          <Toolbar />

          <Table />
        </div>

        <ContentFooter />
      </div>

      <div className="date">
        <p>{date}</p>
      </div>
    </main>
  );
}
