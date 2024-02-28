import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  fillednavigationmoreVert?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  fillednavigationmoreVert,
  propTop,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.rectangleParent} style={groupDiv1Style}>
      <div className={styles.instanceChild} />
      <div className={styles.usPollutionDataParent}>
        <b className={styles.usPollutionData}>
          Temperature change dataset 2023
        </b>
        <div className={styles.thisDatasetDeals}>
          The FAOSTAT Temperature Change domain disseminates statistics of mean
          surface temperature change by country
        </div>
      </div>
      <img
        className={styles.fillednavigationmoreVertIcon}
        alt=""
        src={fillednavigationmoreVert}
      />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <img
            className={styles.frameChild}
            alt=""
            src="/group-2392-3@2x.png"
          />
        </div>
        <div className={styles.filleddeviceaccessTimeParent}>
          <img
            className={styles.filleddeviceaccessTimeIcon}
            alt=""
            src="/filleddeviceaccesstime-2.svg"
          />
          <div className={styles.february2023}>February 2023</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
