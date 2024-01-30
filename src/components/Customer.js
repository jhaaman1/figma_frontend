import { useMemo } from "react";
import styles from "./Customer.module.css";

const Customer = ({
  avatar,
  chrisFriedkly,
  supermarketVillanova,
  propMarginTop,
  propPadding,
  propHeight,
}) => {
  const customerStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
      padding: propPadding,
    };
  }, [propMarginTop, propPadding]);

  const textStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.customer} style={customerStyle}>
      <img className={styles.avatarIcon} alt="" src={avatar} />
      <div className={styles.text} style={textStyle}>
        <div className={styles.chrisFriedkly}>{chrisFriedkly}</div>
        <div className={styles.supermarketVillanova}>
          {supermarketVillanova}
        </div>
      </div>
      <div className={styles.iconFromTablerioWrapper}>
        <img
          className={styles.iconFromTablerio}
          alt=""
          src="/icon-from-tablerio-15.svg"
        />
      </div>
      <div className={styles.iconFromTablerioContainer}>
        <img
          className={styles.iconFromTablerio1}
          alt=""
          src="/icon-from-tablerio-16.svg"
        />
      </div>
      <div className={styles.iconFromTablerioFrame}>
        <img
          className={styles.iconFromTablerio2}
          alt=""
          src="/icon-from-tablerio-17.svg"
        />
      </div>
    </div>
  );
};

export default Customer;
