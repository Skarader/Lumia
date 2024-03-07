import "../index.css";
import Header from "./Header.jsx";
import List from "./List.jsx";

export default function Page() {
  return (
    <>
      <div className="page padding corners transp">
        <Header />
        <List />
      </div>
    </>
  );
}
