import { FunctionComponent } from "react";
import styles from "./FrameUSPollutionDataset.module.css";

const FrameUSPollutionDataset: FunctionComponent = () => {
  return (
    <section className={styles.frameUSPollutionDataset}>
      <div className={styles.groupTopBar}>
        <div className={styles.uSPollutionDatasetLabelParent}>
          <div className={styles.uSPollutionDatasetLabel} />
          <div className={styles.datasetInfo}>
            <b className={styles.usPollutionData}>U.S. Pollution Data</b>
            <div className={styles.thisDatasetDeals}>
              This dataset deals with pollution in the U.S. Pollution in the
              U.S. has been well documented by the U.S. EPA
            </div>
          </div>
          <img className={styles.fillednavigationmoreVertIcon} alt="" />
          <div className={styles.groupGroup}>
            <div className={styles.rectangleRectangle}>
              <img
                className={styles.rectangleRectangleChild}
                alt=""
                src="/group-2392-9@2x.png"
              />
            </div>
            <div className={styles.filleddeviceaccessTimeParent}>
              <img className={styles.filleddeviceaccessTimeIcon} alt="" />
              <div className={styles.february2023}>February 2023</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.instanceChild} />
          <div className={styles.usPollutionDataParent}>
            <b className={styles.usPollutionData1}>House price prediction</b>
            <div className={styles.thisDatasetDeals1}>
              To train our machine learning model with boston housing data, we
              will be using scikit-learn’s boston dataset.
            </div>
          </div>
          <img className={styles.fillednavigationmoreVertIcon1} alt="" />
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <img
                className={styles.frameChild}
                alt=""
                src="/group-2392-9@2x.png"
              />
            </div>
            <div className={styles.filleddeviceaccessTimeGroup}>
              <img className={styles.filleddeviceaccessTimeIcon1} alt="" />
              <div className={styles.february20231}>February 2023</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.instanceItem} />
          <div className={styles.usPollutionDataGroup}>
            <b className={styles.usPollutionData2}>
              Temperature change dataset 2023
            </b>
            <div className={styles.thisDatasetDeals2}>
              The FAOSTAT Temperature Change domain disseminates statistics of
              mean surface temperature change by country
            </div>
          </div>
          <img className={styles.fillednavigationmoreVertIcon2} alt="" />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <img
                className={styles.frameItem}
                alt=""
                src="/group-2392-9@2x.png"
              />
            </div>
            <div className={styles.filleddeviceaccessTimeContainer}>
              <img className={styles.filleddeviceaccessTimeIcon2} alt="" />
              <div className={styles.february20232}>February 2023</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameUSPollutionDataset;
