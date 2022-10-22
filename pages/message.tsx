import { NextPage } from "next";
import React from "react";
import Head from "next/dist/shared/lib/head";
import styles from "./../styles/message/message.module.css";

const Message: NextPage = () => {
  return <>
    <Head>
      <title>Message</title>
    </Head>
    <main className={styles.main}>
      <h3>Annette Softwareentwicklung präsentiert</h3>
      <h1 style={{marginTop: 0}}>Annette-App 4.0</h1>
      <section className={styles.section}>
        <h2>Nachricht von Rui Zhang</h2>
        <p>Es ist uns, den Entwicklern bei der Arbeitsgemeinschaft {'"'}Annette-Softwareentwicklung{'"'} eine Freude, euch Annette-App 4.0 zu präsentieren. Seit Anfang des Jahres 2022 arbeiten wir zusammen fleißig an diversen Software-Projekten der Schule, inklusive der Annette-App.</p>

<p>Falls ihr Feedback, Wünsche oder Kritik habt, so schreibt eine Email an annettesoftware@gmail.com
        </p>
      </section>
      <section className={styles.section}>
        <h2>Stand 22.10.2022 - 23:32</h2>
        <p>
          Version 4.0.5 ist auch jetzt raus! Es gibt wieder Bugfixes und Verbesserungen im Stundenplan.
        </p>
      </section>
      <section className={styles.section}>
      <i>Viel Spaß und hoffentlich viel Zufriedenheit mit der neuen Annette-App!</i>

      <i>Eure Softwareentwicklungs AG</i>
      </section>
    </main>
  </>
}

export default Message;