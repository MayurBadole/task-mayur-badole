import PropTypes from "prop-types";

const LargeFaviconLabel = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0rem] left-[0rem] shadow-[-17px_4px_84.6px_rgba(82,_109,_130,_0.05),_52px_4px_60px_rgba(32,_48,_70,_0.5)] rounded-t-31xl rounded-b-11xl bg-gray-100 box-border w-full h-full overflow-hidden flex flex-col items-start justify-start pt-[51.625rem] px-[2.687rem] pb-[2.356rem] gap-[1.937rem] z-[1] text-left text-[2.625rem] text-backgrounds-primary font-square721-bt border-[3px] border-solid border-lightsteelblue mq800:h-auto mq800:gap-[0.938rem] mq800:pl-[1.313rem] mq800:pr-[1.313rem] mq800:box-border ${className}`}
    >
      <div className="w-[32.769rem] h-[18.938rem] relative hidden mix-blend-luminosity max-w-full" />
      <div className="mt-[-72.85rem] w-[83.75rem] flex flex-row items-start justify-start gap-[0.437rem] shrink-0 max-w-[109%]">
        <div className="w-[14.563rem] flex flex-col items-start justify-start pt-[23.662rem] px-[0rem] pb-[0rem] box-border mq1125:hidden">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.437rem]">
            <div className="self-stretch relative leading-[110%] capitalize shrink-0 z-[5] mq450:text-[1.563rem] mq450:leading-[1.75rem] mq800:text-[2.125rem] mq800:leading-[2.313rem]">
              autoClicker
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.375rem] text-[2.131rem] opacity-50">
              <div className="rounded-[4.79px] bg-color1 flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1rem] gap-[1.562rem] shrink-0">
                <div className="self-stretch w-[12.375rem] relative rounded-[4.79px] bg-color1 hidden" />
                <div className="flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem]">
                  <div className="relative leading-[2.375rem] uppercase inline-block min-w-[3.25rem] z-[1] mq450:text-[1.25rem] mq450:leading-[1.438rem] mq800:text-[1.688rem] mq800:leading-[1.875rem]">
                    ON
                  </div>
                </div>
                <div className="rounded-[4.79px] bg-darkslategray-200 flex flex-row items-start justify-start pt-[1.312rem] px-[1.187rem] pb-[1.3rem] z-[1]">
                  <div className="h-[4.988rem] w-[6.588rem] relative rounded-[4.79px] bg-darkslategray-200 hidden" />
                  <div className="relative leading-[2.375rem] uppercase text-transparent !bg-clip-text [background:linear-gradient(169.87deg,_#f7c243,_#fd902b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[4.125rem] z-[2] mq450:text-[1.25rem] mq450:leading-[1.438rem] mq800:text-[1.688rem] mq800:leading-[1.875rem]">
                    OFF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[70.913rem] flex-1 relative max-w-[calc(100%_-_240px)] mq1125:max-w-full">
          <div className="absolute top-[23.713rem] left-[41.813rem] leading-[110%] capitalize z-[3] mq450:text-[1.563rem] mq450:leading-[1.75rem] mq800:text-[2.125rem] mq800:leading-[2.313rem]">
            leaderBoard
          </div>
          <div className="absolute top-[0rem] left-[0rem] w-full h-full">
            <div className="absolute top-[23.413rem] left-[0rem] w-[47.5rem] h-[47.5rem] z-[1] flex items-center justify-center">
              <img
                className="w-full h-full z-[1] object-contain absolute left-[0rem] top-[4.688rem] [transform:scale(1.486)] "
                alt=""
                src="/group-15.svg"
              />
            </div>
            <div className="absolute top-[0rem] left-[44.844rem] w-[23.906rem] h-[41.531rem]">
              <img
                className="absolute top-[23.663rem] left-[14.406rem] w-[2.919rem] h-[2.969rem] z-[3]"
                loading="lazy"
                alt=""
                src="/group.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[3.25rem] pl-[2.875rem] box-border max-w-full shrink-0 text-color mq1350:pl-[1.438rem] mq1350:pr-[1.625rem] mq1350:box-border">
        <div className="w-[71.75rem] flex flex-col items-start justify-start gap-[1.3rem] shrink-0 max-w-full">
          <div className="self-stretch rounded-4xl-5 bg-darkslateblue-200 box-border flex flex-col items-start justify-start pt-[1.437rem] px-[2rem] pb-[1.643rem] gap-[1.437rem] max-w-full shrink-0 z-[3] border-[2px] border-solid border-radial">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0.25rem] pl-[0rem] box-border max-w-full">
              <div className="w-[25.1rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq800:flex-wrap">
                <div className="relative leading-[110%] uppercase shrink-0 mq450:text-[1.563rem] mq450:leading-[1.75rem] mq800:text-[2.125rem] mq800:leading-[2.313rem]">
                  TAPS LEFT
                </div>
                <div className="w-[7.125rem] flex flex-col items-start justify-start pt-[0.168rem] px-[0rem] pb-[0rem] box-border">
                  <div className="self-stretch flex flex-row items-start justify-start relative">
                    <img
                      className="h-[3.231rem] w-[2.563rem] absolute !m-[0] top-[-0.356rem] left-[-2.537rem] object-contain"
                      alt=""
                      src="/vector-6.svg"
                    />
                    <div className="flex-1 relative leading-[110%] uppercase text-transparent !bg-clip-text [background:linear-gradient(169.87deg,_#f7c243,_#fd902b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[1.563rem] mq450:leading-[1.75rem] mq800:text-[2.125rem] mq800:leading-[2.313rem]">
                      1000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[1.375rem] relative shadow-[2px_4px_4px_rgba(32,_48,_70,_0.3),_1px_4px_6.1px_#fbdeb1_inset] rounded-131xl [background:linear-gradient(169.87deg,_#f7c243,_#fd902b)]" />
          </div>
          <div className="self-stretch shadow-[1px_4px_5.41px_rgba(82,_109,_130,_0.76)_inset] rounded-[23.54px] [background:linear-gradient(180deg,_#144272,_#2c74b3)] box-border flex flex-col items-end justify-start pt-[0.875rem] px-[0.687rem] pb-[0.312rem] gap-[0.912rem] max-w-full shrink-0 z-[3] border-[2px] border-solid border-darkslategray-100">
            <div className="w-[72rem] h-[17.156rem] relative shadow-[1px_4px_5.41px_rgba(82,_109,_130,_0.76)_inset] rounded-[23.54px] [background:linear-gradient(180deg,_#144272,_#2c74b3)] box-border hidden mix-blend-normal max-w-full border-[2px] border-solid border-darkslategray-100" />
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full">
              <div className="flex flex-row items-start justify-start gap-[0.625rem] max-w-full mq800:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[0.075rem] px-[0rem] pb-[0rem]">
                  <div className="relative leading-[110%] uppercase z-[4] mq450:text-[1.563rem] mq450:leading-[1.75rem] mq800:text-[2.125rem] mq800:leading-[2.313rem]">
                    BALANCE
                  </div>
                </div>
                <div className="rounded-[1.85px] [background:linear-gradient(169.87deg,_#f7c243,_#fd902b)] flex flex-row items-start justify-start pt-[0.075rem] px-[0.562rem] pb-[0.081rem] z-[4] text-color1">
                  <div className="relative leading-[110%] uppercase inline-block min-w-[6.188rem] mq450:text-[1.563rem] mq450:leading-[1.75rem] mq800:text-[2.125rem] mq800:leading-[2.313rem]">
                    SMT
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.375rem]">
              <div className="w-[12.113rem] flex flex-row items-start justify-start gap-[0.506rem]">
                <div className="flex flex-col items-start justify-start pt-[0.525rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.794rem] h-[1.819rem] relative object-cover shrink-0 z-[4]"
                    loading="lazy"
                    alt=""
                    src="/layer-1-2@2x.png"
                  />
                </div>
                <div className="flex-1 relative leading-[110%] uppercase text-transparent !bg-clip-text [background:linear-gradient(169.87deg,_#f7c243,_#fd902b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] shrink-0 z-[4] mq450:text-[1.563rem] mq450:leading-[1.75rem] mq800:text-[2.125rem] mq800:leading-[2.313rem]">
                  0.0000
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full z-[4]"
              loading="lazy"
              alt=""
              src="/line-26.svg"
            />
            <div className="self-stretch relative leading-[110%] uppercase whitespace-pre-wrap text-center z-[4] mq450:text-[1.563rem] mq450:leading-[1.75rem] mq800:text-[2.125rem] mq800:leading-[2.313rem]">
              TOTAL ENERGY BALANCE
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.312rem]">
              <div className="w-[3.525rem] flex flex-row items-start justify-start gap-[0.225rem] z-[4]">
                <div className="flex flex-col items-start justify-start pt-[0.343rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.488rem] h-[2.181rem] relative object-contain"
                    alt=""
                    src="/vector-7.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[110%] uppercase text-transparent !bg-clip-text [background:linear-gradient(169.87deg,_#f7c243,_#fd902b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] shrink-0 mq450:text-[1.563rem] mq450:leading-[1.75rem] mq800:text-[2.125rem] mq800:leading-[2.313rem]">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LargeFaviconLabel.propTypes = {
  className: PropTypes.string,
};

export default LargeFaviconLabel;
