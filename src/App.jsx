import { Header } from "../src/components/Header";
import { Sidebar } from "../src/components/Sidebar";
import { Post } from "../src/components/Post";

import styles from "./app.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
