import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type GroupComponent1Type = {
  fillednavigationmoreVert?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const XLGroup = styled.div`
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
  width: 10rem;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
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
  padding: 0rem var(--padding-8xs);
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
const AaGeographicAreaNameChild = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
`;
const AaGeographicAreaName = styled.div`
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
const RectangleGroupFrame = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0rem var(--padding-8xs);
  gap: var(--gap-xl);
  font-size: var(--font-size-4xs-8);
  color: var(--primary-dark);
`;
const XLGroupParentRoot = styled.div<{ propTop?: CSSProperties["top"] }>`
  position: absolute;
  top: 12.688rem;
  left: 20.438rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  width: 18.688rem;
  height: 10.125rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-6xs) var(--padding-6xs);
  box-sizing: border-box;
  gap: 1.438rem 0rem;
  z-index: 1;
  text-align: left;
  font-size: var(--body-button-size);
  color: var(--primary-dark1);
  font-family: var(--font);
  top: ${(p) => p.propTop};
`;

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  fillednavigationmoreVert,
  propTop,
}) => {
  return (
    <XLGroupParentRoot propTop={propTop}>
      <XLGroup />
      <UsPollutionDataParent>
        <UsPollutionData>House price prediction</UsPollutionData>
        <ThisDatasetDeals>
          To train our machine learning model with boston housing data, we will
          be using scikit-learn’s boston dataset.
        </ThisDatasetDeals>
      </UsPollutionDataParent>
      <FillednavigationmoreVertIcon alt="" src={fillednavigationmoreVert} />
      <RectangleGroupFrame>
        <AaGeographicAreaName>
          <AaGeographicAreaNameChild alt="" src="/group-2392-3@2x.png" />
        </AaGeographicAreaName>
        <FilleddeviceaccessTimeParent>
          <FilleddeviceaccessTimeIcon
            alt=""
            src="/filleddeviceaccesstime.svg"
          />
          <February>February 2023</February>
        </FilleddeviceaccessTimeParent>
      </RectangleGroupFrame>
    </XLGroupParentRoot>
  );
};

export default GroupComponent1;
