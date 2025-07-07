import { useEffect, useState } from "react";
import "./App.css";

type Menu = {
  id: number;
  name: string;
  price: number;
};
function App() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const version = APP_VERSION;

  useEffect(() => {
    fetch("asian-food-api-service:3000/v1/menus")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
      })
      .catch((error) => {
        console.error("Error fetching menus:", error);
      });
  }, []);
  console.log(`App version: ${version}`);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <p className="label">v{version}</p>
      <h1 className="title-text">
        Asian Food Menu
        <br />
        <span className="jp-menu">メニュー</span>
      </h1>
      <div className="title" />
      {menus.length > 0 ? (
        <ul>
          {menus.map((menu) => (
            <li key={menu.id} className="menu-item">
              <p>{menu.name}</p>
              <p>{menu.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading menus...</p>
      )}
    </>
  );
}

export default App;
