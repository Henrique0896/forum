import { Header } from "../src/components/Header";
import { Sidebar } from "../src/components/Sidebar";
import { Post } from "../src/components/Post";

import styles from "./app.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/59373464?v=4",
      name: "Henrique Lima",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galera, tudo bem?" },
      { type: "paragraph", content: "Este é um novo projeto React" },
      { type: "link", content: "github.com/Henrique0896" },
    ],
    publishedAt: new Date("2022-10-31T10:00:00Z"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Educator",
    },
    content: [
      { type: "paragraph", content: "Faaala Dev" },
      { type: "paragraph", content: "Veja estes projetos a baixo que massa" },
      { type: "link", content: "github.com/Henrique0896" },
    ],
    publishedAt: new Date("2022-10-31T12:00:00Z"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
