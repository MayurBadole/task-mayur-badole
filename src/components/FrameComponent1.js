import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.625rem] box-border max-w-full ${className}`}
    >
      <header className="flex-1 flex flex-col items-end justify-start gap-[2.5rem] max-w-full text-left text-[2.131rem] text-radial font-square721-bt mq800:gap-[1.25rem]">
        <div className="w-[78.375rem] flex flex-row items-start justify-end py-[0rem] px-[1rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
            <div className="w-[19.25rem] flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch relative leading-[2.375rem] uppercase whitespace-nowrap z-[1]">
                <span>HELLO</span>
                <span className="text-color2"> NIKHIL134</span>
              </div>
            </div>
            <div className="w-[16.875rem] relative leading-[2.375rem] uppercase font-good-times text-transparent !bg-clip-text [background:linear-gradient(169.87deg,_#f7c243,_#fd902b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap z-[1]">
              my NFT free
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[4.875rem] max-w-full text-center text-[2.625rem] text-backgrounds-primary mq450:gap-[1.188rem] mq800:gap-[2.438rem]">
          <div className="h-[6.413rem] flex-1 flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border max-w-full text-left">
            <div className="self-stretch h-[5.475rem] [filter:drop-shadow(0px_5.3px_14.6px_rgba(0,_0,_0,_0.25))] rounded-[77.28px] box-border flex flex-row items-start justify-center pt-[0.875rem] px-[1.25rem] pb-[0.956rem] gap-[1.418rem] z-[1] border-[2.5px] border-solid border-color1">
              <img
                className="h-[3.331rem] w-[3.331rem] relative"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className="w-[16.125rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch relative leading-[110%] whitespace-nowrap">
                  Referral Link
                </div>
              </div>
            </div>
          </div>
          <div className="w-[6.25rem] relative text-[2.281rem] leading-[110%] uppercase font-good-times inline-block shrink-0 z-[1]">
            en
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border max-w-full text-[1rem] font-btn-large-normal">
            <div className="self-stretch h-[5.163rem] relative max-w-full">
              <div className="absolute top-[0rem] left-[0rem] shadow-[0px_4px_4px_#dda23c_inset] rounded-149xl [background:linear-gradient(90.63deg,_#dda23c,_#facc6c_21.74%,_#ffb337_54.03%,_#976002_85.28%)] w-full h-full flex flex-row items-start justify-center py-[1.831rem] px-[1.25rem] box-border max-w-full z-[1]">
                <b className="self-stretch w-[0rem] relative leading-[1.5rem] inline-block" />
              </div>
              <div className="absolute top-[0.938rem] left-[10.25rem] w-[18.688rem] flex flex-row items-start justify-start gap-[1.562rem] z-[2] text-left text-[2.625rem] text-miscellaneous-floating-tab-text-unselected font-square721-bt">
                <img
                  className="h-[3.125rem] w-[3.125rem] relative overflow-hidden shrink-0 min-h-[3.125rem]"
                  loading="lazy"
                  alt=""
                  src="/ouiappupgradeassistant.svg"
                />
                <div className="h-[3.125rem] max-w-max flex flex-col items-center justify-center pt-[0.187rem] px-[0rem] pb-[0rem] box-border shrink-0">
                  <div className="self-stretch relative leading-[3.125rem] capitalize shrink-0 z-[3]">
                    Upgrade
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
