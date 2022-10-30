import style from "./Post.module.css";

export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img
            className={style.avatar}
            src="https://avatars.githubusercontent.com/u/59373464?v=4"
          />
          <div className={style.authorInfo}>
            <strong>Henrique Lima</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11">
          {" "}
          Publicado há 1h
        </time>
      </header>

      <div className={style.content}>
        <p>Fala Turma!</p>
        <p>Este é um novo projeto</p>
        <p>
          <a href="">#React</a>
        </p>
      </div>

      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
