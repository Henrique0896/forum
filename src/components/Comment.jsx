import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/59373464?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Henrique Lima</strong>
              <time
                title="30 de Novembro às 12:05h"
                dateTime="2022-11-30 12:05:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, Dev, parabéns!!</p>
        </div>

        <footer>
          <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
