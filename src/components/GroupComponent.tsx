import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type GroupComponentType = {
  fillednavigationmoreVert?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const InstanceChild = styled.div`
  width: 18.688rem;
  height: 10.125rem;
  position: relative;
  background-color: var(--secondary-white);
  display: none;
`;
const UsPollutionData = styled.b`
  position: relative;
  z-index: 1;
`;
const ThisDatasetDeals = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-3xs);
  letter-spacing: 0.37px;
  color: var(--color-darkslategray-100);
  z-index: 1;
`;
const UsPollutionDataParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25rem 0rem;
`;
const FillednavigationmoreVertIcon = styled.img`
  width: 1.513rem;
  height: 1.506rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const FrameChild = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
`;
const FrameWrapper = styled.div`
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
  position: relative;
  letter-spacing: 0.37px;
  line-height: 0.689rem;
  z-index: 1;
`;
const FilleddeviceaccessTimeParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0rem 0.25rem;
`;
const FrameParent = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0rem var(--padding-12xs) 0rem 0rem;
  gap: var(--gap-xl);
  font-size: var(--font-size-4xs-8);
  color: var(--primary-dark);
`;
const RectangleParentRoot = styled.div<{ propTop?: CSSProperties["top"] }>`
  position: absolute;
  top: 12.688rem;
  left: 39.625rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  width: 18.688rem;
  height: 10.125rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-xs) var(--padding-6xs)
    var(--padding-2xs);
  box-sizing: border-box;
  gap: 1.438rem 0rem;
  z-index: 1;
  text-align: left;
  font-size: var(--body-button-size);
  color: var(--primary-dark1);
  font-family: var(--font);
  top: ${(p) => p.propTop};
`;

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  fillednavigationmoreVert,
  propTop,
}) => {
  return (
    <RectangleParentRoot propTop={propTop}>
      <InstanceChild />
      <UsPollutionDataParent>
        <UsPollutionData>Temperature change dataset 2023</UsPollutionData>
        <ThisDatasetDeals>
          The FAOSTAT Temperature Change domain disseminates statistics of mean
          surface temperature change by country
        </ThisDatasetDeals>
      </UsPollutionDataParent>
      <FillednavigationmoreVertIcon alt="" src={fillednavigationmoreVert} />
      <FrameParent>
        <FrameWrapper>
          <FrameChild alt="" src="/group-2392-3@2x.png" />
        </FrameWrapper>
        <FilleddeviceaccessTimeParent>
          <FilleddeviceaccessTimeIcon
            alt=""
            src="/filleddeviceaccesstime-2.svg"
          />
          <February>February 2023</February>
        </FilleddeviceaccessTimeParent>
      </FrameParent>
    </RectangleParentRoot>
  );
};

export default GroupComponent;
