import { FunctionComponent } from "react";
import styled from "styled-components";

const Toolbarbackground = styled.div`
  width: 100%;
  height: 2.306rem;
  position: absolute;
  margin: 0 !important;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  background-color: var(--secondary-white);
`;
const StoplightsIcon = styled.img`
  align-self: stretch;
  height: 0.769rem;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const XLRectangleGroup = styled.div`
  width: 3.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-5xs);
  box-sizing: border-box;
`;
const TabIcon = styled.img`
  height: 2.181rem;
  width: 15.75rem;
  position: relative;
  object-fit: contain;
  z-index: 1;
`;
const NewtabIcon = styled.img`
  height: 0.9rem;
  width: 0.875rem;
  position: relative;
  z-index: 1;
`;
const XLRectangleGroupParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0rem 0.5rem;
  max-width: 100%;
`;
const Tabbackground = styled.div`
  width: 100%;
  height: 2.694rem;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  left: 0rem;
  border-radius: 5.05px 5.05px 0px 0px;
  background-color: var(--color-gainsboro-300);
  box-shadow: 0px 1px 0px #f2f3f5 inset;
`;
const BackIcon = styled.img`
  height: 0.769rem;
  width: 0.875rem;
  position: relative;
  z-index: 1;
`;
const ForwardIcon = styled.img`
  height: 0.769rem;
  width: 0.875rem;
  position: relative;
  object-fit: contain;
  z-index: 1;
`;
const RefreshIcon = styled.img`
  height: 0.9rem;
  width: 1.031rem;
  position: relative;
  z-index: 1;
`;
const FrameXLRectangleGroup = styled.div`
  height: 0.875rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
  gap: 0rem 1.125rem;
`;
const LockIcon = styled.img`
  width: 0.5rem;
  height: 0.706rem;
  position: relative;
  object-fit: cover;
  z-index: 2;
`;
const Save = styled.div`
  height: 0.813rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0rem 0rem;
  box-sizing: border-box;
`;
const AddressareaIcon = styled.img`
  height: 1.794rem;
  width: 80.625rem;
  position: absolute;
  margin: 0 !important;
  top: -0.425rem;
  right: -65.5rem;
  z-index: 1;
`;
const Url1 = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  letter-spacing: 0.5px;
  line-height: 1.25rem;
  z-index: 2;
`;
const XLL = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Cancel = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0rem 0.75rem;
`;
const FrameSelectDatasetDefault = styled.div`
  align-self: stretch;
  width: 21rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0rem 1.688rem;
  max-width: 100%;
`;
const MenuIcon = styled.img`
  height: 0.831rem;
  width: 0.188rem;
  position: relative;
  z-index: 1;
`;
const GeographicAreaCodeISO = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
`;
const AaGeographicAreaName = styled.div`
  align-self: stretch;
  height: 1.125rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-11xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const TgfFavicon = styled.img`
  width: 1rem;
  height: 1rem;
  position: relative;
  object-fit: cover;
  display: none;
  z-index: 4;
`;
const Xlbrowser = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-lg) var(--padding-4xs)
    var(--padding-xs);
  box-sizing: border-box;
  position: relative;
  gap: 0.688rem 0rem;
  max-width: 100%;
`;
const Url2 = styled.div`
  position: absolute;
  margin: 0 !important;
  bottom: 0.625rem;
  left: 8.875rem;
  letter-spacing: 0.5px;
  line-height: 1.25rem;
  z-index: 3;
`;
const XlBrowserChild = styled.img`
  width: 1.044rem;
  height: 0.638rem;
  position: absolute;
  margin: 0 !important;
  top: 1.175rem;
  left: 5.694rem;
  z-index: 3;
`;
const XlBrowser = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100%;
`;
const FrameContainerRoot = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--body-button-size);
  color: var(--color-gray-100);
  font-family: var(--font);
`;

const FrameContainer: FunctionComponent = () => {
  return (
    <FrameContainerRoot>
      <XlBrowser>
        <Xlbrowser>
          <Toolbarbackground />
          <XLRectangleGroupParent>
            <XLRectangleGroup>
              <StoplightsIcon loading="lazy" alt="" src="/stoplights.svg" />
            </XLRectangleGroup>
            <TabIcon alt="" src="/tab@2x.png" />
            <NewtabIcon loading="lazy" alt="" src="/newtab.svg" />
          </XLRectangleGroupParent>
          <Tabbackground />
          <AaGeographicAreaName>
            <GeographicAreaCodeISO>
              <FrameSelectDatasetDefault>
                <FrameXLRectangleGroup>
                  <BackIcon alt="" src="/back.svg" />
                  <ForwardIcon alt="" src="/forward@2x.png" />
                  <RefreshIcon loading="lazy" alt="" src="/refresh.svg" />
                </FrameXLRectangleGroup>
                <Cancel>
                  <Save>
                    <LockIcon alt="" src="/lock@2x.png" />
                  </Save>
                  <XLL>
                    <AddressareaIcon alt="" src="/addressarea.svg" />
                    <Url1 />
                  </XLL>
                </Cancel>
              </FrameSelectDatasetDefault>
              <MenuIcon alt="" src="/menu.svg" />
            </GeographicAreaCodeISO>
          </AaGeographicAreaName>
          <TgfFavicon alt="" src="/tgffavicon-1@2x.png" />
        </Xlbrowser>
        <Url2>dataxplorer.org</Url2>
        <XlBrowserChild alt="" src="/group-9.svg" />
      </XlBrowser>
    </FrameContainerRoot>
  );
};

export default FrameContainer;
