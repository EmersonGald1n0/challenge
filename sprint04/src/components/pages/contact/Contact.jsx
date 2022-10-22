import React from "react";
import styles from "./Contact.module.css";
import contato from "../../../img/contato.png";

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <div>
        <div className={styles.img}>
          <img className={styles.img1} src={contato} alt="contato" />
        </div>

        <h1 className={styles.text1}>CONTATO</h1>

        <div className={styles.linha} />

        <p>
          Envie suas <span>dúvidas ou sugestões</span> em um dos nossos canais
          de atendimento.
        </p>

        <p>
          contato@<span>emprega+</span>.com.br | Telefone: <span>0800 080 080</span>
        </p>

        <p>
          Nosso horário de atendimento é de segunda a sexta-feira das{" "}
          <span>8:00 às 18:00</span>.
        </p>

        <div className={styles.linha2} />

        <form action="">
          <div>
            <input type="text" placeholder=" Nome..." />
          </div>

          <div>
            <input type="text" placeholder=" Email..." />
          </div>

          <div>
            <input type="text" placeholder=" Assunto..." />
          </div>

          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Descreva..."
            ></textarea>
          </div>

          <div>
            <button className={styles.btn} type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
