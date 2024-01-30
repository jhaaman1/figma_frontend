import Sidebar from "../components/Sidebar";
import Bar from "../components/Bar";
import Customer from "../components/Customer";
import FrameComponent from "../components/FrameComponent";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <main className={styles.text}>
        <section className={styles.barParent}>
          <Bar />
          <div className={styles.text1}>
            <div className={styles.widget}>
              <div className={styles.headingParent}>
                <div className={styles.heading}>
                  <h3 className={styles.customers}>Customers</h3>
                  <div className={styles.tablerioIconGroup}>
                    <div className={styles.sortByNewestContainer}>
                      <span>{`Sort by `}</span>
                      <span className={styles.newest}>Newest</span>
                    </div>
                    <img
                      className={styles.iconFromTablerio}
                      alt=""
                      src="/icon-from-tablerio-14.svg"
                    />
                  </div>
                </div>
                <div className={styles.customer}>
                  <Customer
                    avatar="/avatar-1@2x.png"
                    chrisFriedkly="Chris Friedkly"
                    supermarketVillanova="Supermarket Villanova"
                    propPadding="16px 24px 12px"
                  />
                  <div className={styles.customer1}>
                    <div className={styles.text2}>
                      <img
                        className={styles.avatarIcon}
                        alt=""
                        src="/avatar-2@2x.png"
                      />
                      <div className={styles.text3}>
                        <div className={styles.maggieJohnson}>
                          Maggie Johnson
                        </div>
                        <div className={styles.oasisOrganicInc}>
                          Oasis Organic Inc.
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameSet}>
                      <img
                        className={styles.iconFromTablerio1}
                        alt=""
                        src="/icon-from-tablerio-18.svg"
                      />
                      <img
                        className={styles.iconFromTablerio2}
                        alt=""
                        src="/icon-from-tablerio-19.svg"
                      />
                      <img
                        className={styles.iconFromTablerio3}
                        alt=""
                        src="/icon-from-tablerio-20.svg"
                      />
                      <div className={styles.iconFromTablerio4} />
                      <img
                        className={styles.iconFromTablerio5}
                        alt=""
                        src="/icon-from-tablerio-21.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.customerParent}>
                    <Customer
                      avatar="/avatar-3@2x.png"
                      chrisFriedkly="Gael Harry"
                      supermarketVillanova="New York Finest Fruits"
                      propMarginTop="unset"
                      propPadding="var(--padding-base) var(--padding-base) var(--padding-mid)"
                      propHeight="34px"
                    />
                    <Customer
                      avatar="/avatar-4@2x.png"
                      chrisFriedkly="Jenna Sullivan"
                      supermarketVillanova="Walmart"
                      propMarginTop="-1px"
                      propPadding="16px 24px 12px"
                      propHeight="unset"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.allCustomers}>
                <div className={styles.widgetHeader}>
                  <div className={styles.allCustomers1}>All customers</div>
                  <img
                    className={styles.iconFromTablerio6}
                    alt=""
                    src="/icon-from-tablerio-11.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.chatsUnreadMessages}>
              <div className={styles.widget1}>
                <div className={styles.heading1}>
                  <h3 className={styles.growth}>Growth</h3>
                  <div className={styles.yearlyParent}>
                    <div className={styles.yearly}>Yearly</div>
                    <img
                      className={styles.iconFromTablerio7}
                      alt=""
                      src="/icon-from-tablerio-14.svg"
                    />
                  </div>
                </div>
                <div className={styles.widgetInner}>
                  <div className={styles.numbersParent}>
                    <div className={styles.numbers}>
                      <div className={styles.kParent}>
                        <div className={styles.k}>100k</div>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/line-3.svg"
                        />
                      </div>
                      <div className={styles.kGroup}>
                        <div className={styles.k1}>50k</div>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/line-3-1.svg"
                        />
                      </div>
                      <div className={styles.kContainer}>
                        <div className={styles.k2}>20k</div>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/line-3-2.svg"
                        />
                      </div>
                      <div className={styles.frameDiv}>
                        <div className={styles.k3}>10k</div>
                        <img
                          className={styles.lineIcon}
                          alt=""
                          src="/line-3-3.svg"
                        />
                      </div>
                      <div className={styles.parent}>
                        <div className={styles.div}>0</div>
                        <img
                          className={styles.frameChild1}
                          alt=""
                          src="/line-3-4.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.years}>
                      <div className={styles.yearLine}>
                        <img
                          className={styles.maskGroupIcon}
                          loading="eager"
                          alt=""
                          src="/mask-group.svg"
                        />
                        <div className={styles.threeYears} />
                        <div className={styles.threeYears1} />
                        <div className={styles.threeYears2} />
                        <div className={styles.threeYears3} />
                        <div className={styles.threeYears4} />
                        <div className={styles.threeYears5} />
                        <div className={styles.threeYears6} />
                        <div className={styles.threeYears7} />
                      </div>
                      <div className={styles.widgetFrame}>
                        <div className={styles.topMonthFrame}>2016</div>
                        <div className={styles.topMonthFrame1}>2017</div>
                        <div className={styles.topMonthFrame2}>2018</div>
                        <div className={styles.topMonthFrame3}>2019</div>
                        <div className={styles.topMonthFrame4}>2020</div>
                        <div className={styles.topMonthFrame5}>2021</div>
                        <div className={styles.topMonthFrame6}>2022</div>
                        <div className={styles.topMonthFrame7}>2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.novemberFrame}>
                <div className={styles.widget2}>
                  <div className={styles.topMonth}>Top month</div>
                  <div className={styles.novemberParent}>
                    <h2 className={styles.november}>November</h2>
                    <div className={styles.chatsFrame}>2019</div>
                  </div>
                </div>
                <div className={styles.widget3}>
                  <div className={styles.topYear}>Top year</div>
                  <div className={styles.group}>
                    <div className={styles.div1}>2023</div>
                    <div className={styles.kSoldSo}>96K sold so far</div>
                  </div>
                </div>
                <div className={styles.widget4}>
                  <div className={styles.topBuyer}>Top buyer</div>
                  <div className={styles.avatarParent}>
                    <img
                      className={styles.avatarIcon1}
                      alt=""
                      src="/avatar-5@2x.png"
                    />
                    <div className={styles.maggieJohnsonParent}>
                      <div className={styles.maggieJohnson1}>
                        Maggie Johnson
                      </div>
                      <div className={styles.oasisOrganicInc1}>
                        Oasis Organic Inc.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
