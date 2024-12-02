import Image from "next/image";
import velvetBackground from "public/close-up-velvet-texture.jpg";
import flake4 from "public/flake4.svg"
import { tangerine } from "./layout";
import { clsx } from "clsx";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.bg_image}
        src={velvetBackground}
        alt="Red Velvet Fabric"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          opacity: 0.3,
        }}
      />
      <div className={styles.titles}>
        <h2 className={styles.pretitle}>Carolina & Hannah invite you to</h2>
        <h1 className={clsx(tangerine.className, styles.title)}>
          Velvet and Polka Dots
        </h1>
        <h3 className={styles.subtitle}>A Holiday Party</h3>
      </div>
      <div className={styles.info_container}>
        <div className={styles.date_container}>
          <p>December 14th</p>
          <p> 7 PM</p>
          <p>&nbsp;</p>
        </div>
        <svg className={styles.line} height="100" width="3">
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="100"
            style={{ stroke: "rgb(256,256,256)", strokeWidth: 3 }}
          />
          Sorry, your browser does not support inline SVG.
        </svg>
        <div className={styles.address_container}>
          <p>&nbsp;</p>
          <p>542</p>
          <p>Lorimer Street</p>
        </div>
      </div>
      <p className={styles.details}>
        Join us for an evening of revelry and merrymaking! Velvet or polkadot
        attire encouraged.
      </p>
      <p className={styles.details}>
        Please call Carolina or Hannah upon arrival, as the buzzer is broken.
      </p>
      <Image src={flake4} height="100" width="100" />
    </main>
  );
}
