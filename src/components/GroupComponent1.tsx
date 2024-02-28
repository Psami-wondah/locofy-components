import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  fillednavigationmoreVert?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  fillednavigationmoreVert,
  propTop,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.xLGroupParent} style={groupDivStyle}>
      <div className={styles.xLGroup} />
      <div className={styles.usPollutionDataParent}>
        <b className={styles.usPollutionData}>House price prediction</b>
        <div className={styles.thisDatasetDeals}>
          To train our machine learning model with boston housing data, we will
          be using scikit-learn’s boston dataset.
        </div>
      </div>
      <img
        className={styles.fillednavigationmoreVertIcon}
        alt=""
        src={fillednavigationmoreVert}
      />
      <div className={styles.rectangleGroupFrame}>
        <div className={styles.aaGeographicAreaName}>
          <img
            className={styles.aaGeographicAreaNameChild}
            alt=""
            src="/group-2392-3@2x.png"
          />
        </div>
        <div className={styles.filleddeviceaccessTimeParent}>
          <img
            className={styles.filleddeviceaccessTimeIcon}
            alt=""
            src="/filleddeviceaccesstime.svg"
          />
          <div className={styles.february2023}>February 2023</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
