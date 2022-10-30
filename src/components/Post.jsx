import styles from "./Post.module.css";
import { Comment } from "./Comment.jsx";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/59373464?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Henrique Lima</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11">
          {" "}
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Turma!</p>
        <p>Este é um novo projeto</p>
        <p>
          <a href="">#React</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
