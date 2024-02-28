import { FunctionComponent } from "react";
import styled from "styled-components";

const USPollutionDatasetLabel = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  background-color: var(--secondary-white);
`;
const UsPollutionData = styled.b`
  width: 7.325rem;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
`;
const ThisDatasetDeals = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  font-size: var(--font-size-3xs);
  letter-spacing: 0.37px;
  color: var(--color-darkslategray-100);
  display: flex;
  align-items: center;
  z-index: 1;
`;
const DatasetInfo = styled.div`
  align-self: stretch;
  height: 2.813rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem;
  box-sizing: border-box;
  gap: 0.25rem 0rem;
`;
const FillednavigationmoreVertIcon = styled.img`
  width: 1.513rem;
  height: 1.506rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  z-index: 2;
`;
const RectangleRectangleChild = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
`;
const RectangleRectangle = styled.div`
  align-self: stretch;
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-11xs);
  box-sizing: border-box;
`;
const FilleddeviceaccessTimeIcon = styled.img`
  height: 0.8rem;
  width: 0.806rem;
  position: relative;
  min-height: 0.813rem;
  z-index: 1;
`;
const February = styled.div`
  height: 0.75rem;
  flex: 1;
  position: relative;
  letter-spacing: 0.37px;
  line-height: 0.689rem;
  display: inline-block;
  z-index: 1;
`;
const FilleddeviceaccessTimeParent = styled.div`
  width: 4.875rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem;
  box-sizing: border-box;
  gap: 0rem 0.25rem;
`;
const GroupGroup = styled.div`
  align-self: stretch;
  height: 4.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0rem var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
  gap: var(--gap-xl);
  font-size: var(--font-size-4xs-8);
  color: var(--primary-dark);
`;
const USPollutionDatasetLabelParent = styled.div`
  flex: 0.9231;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-xs) 0rem var(--padding-2xs);
  box-sizing: border-box;
  position: relative;
  gap: 1.438rem 0rem;
  min-width: 14rem;
  min-height: 10.125rem;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const UsPollutionData1 = styled.b`
  width: 8.75rem;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
`;
const UsPollutionDataParent = styled.div`
  align-self: stretch;
  height: 2.813rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-xs) 0rem;
  box-sizing: border-box;
  gap: 0.25rem 0rem;
`;
const FrameParent = styled.div`
  align-self: stretch;
  height: 4.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0rem var(--padding-xs) 0rem;
  box-sizing: border-box;
  gap: var(--gap-xl);
  font-size: var(--font-size-4xs-8);
  color: var(--primary-dark);
`;
const RectangleParent = styled.div`
  flex: 1;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base) 0rem 0rem;
  box-sizing: border-box;
  position: relative;
  gap: 1.438rem 0rem;
  min-width: 14rem;
  min-height: 10.125rem;
`;
const UsPollutionData2 = styled.b`
  width: 13.188rem;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
`;
const GroupTopBar = styled.div`
  width: 57.063rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem;
  box-sizing: border-box;
  gap: 0rem 0.5rem;
  max-width: 100%;
  @media screen and (max-width: 975px) {
    flex-wrap: wrap;
  }
`;
const FrameUSPollutionDatasetRoot = styled.section`
  width: 70.063rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--body-button-size);
  color: var(--primary-dark1);
  font-family: var(--font);
`;

const FrameUSPollutionDataset: FunctionComponent = () => {
  return (
    <FrameUSPollutionDatasetRoot>
      <GroupTopBar>
        <USPollutionDatasetLabelParent>
          <USPollutionDatasetLabel />
          <DatasetInfo>
            <UsPollutionData>U.S. Pollution Data</UsPollutionData>
            <ThisDatasetDeals>
              This dataset deals with pollution in the U.S. Pollution in the
              U.S. has been well documented by the U.S. EPA
            </ThisDatasetDeals>
          </DatasetInfo>
          <FillednavigationmoreVertIcon alt="" />
          <GroupGroup>
            <RectangleRectangle>
              <RectangleRectangleChild alt="" src="/group-2392-9@2x.png" />
            </RectangleRectangle>
            <FilleddeviceaccessTimeParent>
              <FilleddeviceaccessTimeIcon alt="" />
              <February>February 2023</February>
            </FilleddeviceaccessTimeParent>
          </GroupGroup>
        </USPollutionDatasetLabelParent>
        <RectangleParent>
          <USPollutionDatasetLabel />
          <UsPollutionDataParent>
            <UsPollutionData1>House price prediction</UsPollutionData1>
            <ThisDatasetDeals>
              To train our machine learning model with boston housing data, we
              will be using scikit-learn’s boston dataset.
            </ThisDatasetDeals>
          </UsPollutionDataParent>
          <FillednavigationmoreVertIcon alt="" />
          <FrameParent>
            <RectangleRectangle>
              <RectangleRectangleChild alt="" src="/group-2392-9@2x.png" />
            </RectangleRectangle>
            <FilleddeviceaccessTimeParent>
              <FilleddeviceaccessTimeIcon alt="" />
              <February>February 2023</February>
            </FilleddeviceaccessTimeParent>
          </FrameParent>
        </RectangleParent>
        <USPollutionDatasetLabelParent>
          <USPollutionDatasetLabel />
          <DatasetInfo>
            <UsPollutionData2>Temperature change dataset 2023</UsPollutionData2>
            <ThisDatasetDeals>
              The FAOSTAT Temperature Change domain disseminates statistics of
              mean surface temperature change by country
            </ThisDatasetDeals>
          </DatasetInfo>
          <FillednavigationmoreVertIcon alt="" />
          <GroupGroup>
            <RectangleRectangle>
              <RectangleRectangleChild alt="" src="/group-2392-9@2x.png" />
            </RectangleRectangle>
            <FilleddeviceaccessTimeParent>
              <FilleddeviceaccessTimeIcon alt="" />
              <February>February 2023</February>
            </FilleddeviceaccessTimeParent>
          </GroupGroup>
        </USPollutionDatasetLabelParent>
      </GroupTopBar>
    </FrameUSPollutionDatasetRoot>
  );
};

export default FrameUSPollutionDataset;
