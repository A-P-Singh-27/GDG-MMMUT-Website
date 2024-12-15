import styles from './Sponsors.module.css';

function Title  ()  {
  return (
    <section className={styles.sponsorssection}>
      <h2 className={styles.sponsorstitle}>Thanks to Our Sponsors</h2>
      <p className={styles.sponsorsdescription}>
        We extend our heartfelt gratitude to our sponsors for their invaluable support. Their generosity and commitment make everything we achieve possible.
      </p>

      <div className={styles.sponsorstier}>
        <h3 className={styles.tiertitle}>Platinum Sponsors</h3>
        <ul className={styles.sponsorslist}>
          <li>Sponsor Name 1</li>
          <li>Sponsor Name 2</li>
        </ul>
      </div>

      <div className={styles.sponsorstier}>
        <h3 className={styles.tiertitle}>Gold Sponsors</h3>
        <ul className={styles.sponsorslist}>
          <li>Sponsor Name 3</li>
          <li>Sponsor Name 4</li>
        </ul>
      </div>

      <div className={styles.sponsorstier}>
        <h3 className={styles.tiertitle}>Silver Sponsors</h3>
        <ul className={styles.sponsorslist}>
          <li>Sponsor Name 5</li>
        </ul>
      </div>
    </section>
  );
};

export default Title;
