import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.widgetParent}>
      <div className={styles.widget}>
        <div className={styles.topStatesFrame}>
          <div className={styles.chatsParent}>
            <h3 className={styles.chats}>Chats</h3>
            <div className={styles.unreadMessages}>2 unread messages</div>
          </div>
          <div className={styles.customer}>
            <div className={styles.customerAvatarFrame}>
              <img
                className={styles.avatarIcon}
                alt=""
                src="/avatar-2@2x.png"
              />
              <div className={styles.walmart} />
            </div>
            <div className={styles.chatsFrame}>
              <img
                className={styles.avatarIcon1}
                alt=""
                src="/avatar-7@2x.png"
              />
              <div className={styles.k} />
            </div>
            <div className={styles.avatar}>
              <img
                className={styles.avatarIcon2}
                alt=""
                src="/avatar-8@2x.png"
              />
            </div>
            <div className={styles.customerFrame}>
              <img
                className={styles.avatarIcon3}
                alt=""
                src="/avatar-9@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.cCNT}>
          <div className={styles.bar}>
            <div className={styles.allMessages}>All messages</div>
            <img
              className={styles.iconFromTablerio}
              alt=""
              src="/icon-from-tablerio-11.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.widget1}>
        <div className={styles.topStatesWrapper}>
          <h3 className={styles.topStates}>Top states</h3>
        </div>
        <div className={styles.barParent}>
          <div className={styles.bar1}>
            <div className={styles.ny}>NY</div>
            <div className={styles.k1}>120k</div>
          </div>
          <div className={styles.bar2}>
            <div className={styles.ma}>MA</div>
            <div className={styles.k2}>80k</div>
          </div>
          <div className={styles.bar3}>
            <div className={styles.nh}>NH</div>
            <div className={styles.k3}>70k</div>
          </div>
          <div className={styles.bar4}>
            <div className={styles.or}>OR</div>
            <div className={styles.k4}>50k</div>
          </div>
        </div>
      </div>
      <div className={styles.widget2}>
        <div className={styles.heading}>
          <h3 className={styles.newDeals}>New deals</h3>
        </div>
        <div className={styles.fruitGoMarshallsMKTFrame}>
          <div className={styles.iconFromTablerioParent}>
            <img
              className={styles.iconFromTablerio1}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.fruit2go}>Fruit2Go</div>
          </div>
          <div className={styles.iconFromTablerioGroup}>
            <img
              className={styles.iconFromTablerio2}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.marshallsMkt}>Marshall's MKT</div>
          </div>
          <div className={styles.iconFromTablerioContainer}>
            <img
              className={styles.iconFromTablerio3}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.ccnt}>CCNT</div>
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.iconFromTablerio4}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.joanaMiniMarket}>Joana Mini-market</div>
          </div>
          <div className={styles.iconFromTablerioParent1}>
            <img
              className={styles.iconFromTablerio5}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.littleBrazilVegan}>Little Brazil Vegan</div>
          </div>
          <div className={styles.iconFromTablerioParent2}>
            <img
              className={styles.iconFromTablerio6}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.target}>Target</div>
          </div>
          <div className={styles.iconFromTablerioParent3}>
            <img
              className={styles.iconFromTablerio7}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.organicPlace}>Organic Place</div>
          </div>
          <div className={styles.iconFromTablerioParent4}>
            <img
              className={styles.iconFromTablerio8}
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className={styles.morellos}>Morello's</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
