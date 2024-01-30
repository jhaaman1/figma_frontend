import styles from "./Bar.module.css";

const Bar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.widget}>
        <div className={styles.heading}>
          <h3 className={styles.revenues}>Revenues</h3>
        </div>
        <div className={styles.bigNumber}>
          <div className={styles.lineChart}>15%</div>
          <img
            className={styles.iconFromTablerio}
            alt=""
            src="/icon-from-tablerio-10.svg"
          />
        </div>
        <div className={styles.increaseComparedTo}>
          Increase compared to last week
        </div>
        <div className={styles.icon}>
          <div className={styles.revenuesReportParent}>
            <div className={styles.revenuesReport}>Revenues report</div>
            <img
              className={styles.iconFromTablerio1}
              alt=""
              src="/icon-from-tablerio-11.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.widget1}>
        <div className={styles.heading1}>
          <h3 className={styles.lostDeals}>Lost deals</h3>
        </div>
        <div className={styles.bigNumber1}>
          <div className={styles.div}>4%</div>
        </div>
        <div className={styles.youClosed96}>You closed 96 out of 100 deals</div>
        <div className={styles.widgetInner}>
          <div className={styles.allDealsParent}>
            <div className={styles.allDeals}>All deals</div>
            <img
              className={styles.iconFromTablerio2}
              alt=""
              src="/icon-from-tablerio-11.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.widget2}>
        <div className={styles.text}>
          <h3 className={styles.quarterGoal}>Quarter goal</h3>
          <div className={styles.line}>
            <img className={styles.lineChild} alt="" src="/ellipse-4.svg" />
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                loading="eager"
                alt=""
                src="/ellipse-3.svg"
              />
              <div className={styles.vectorGroup}>
                <img className={styles.frameItem} alt="" src="/ellipse-5.svg" />
                <div className={styles.frame}>84%</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.widget3}>
          <div className={styles.allGoals}>All goals</div>
          <img
            className={styles.iconFromTablerio3}
            alt=""
            src="/icon-from-tablerio-11.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Bar;
