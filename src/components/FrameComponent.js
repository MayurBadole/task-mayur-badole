import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-[0rem] pr-[2.312rem] pl-[2.687rem] box-border max-w-full text-center text-[2.375rem] text-color font-square721-bt mq1350:pl-[1.313rem] mq1350:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[4.1rem] max-w-full mq450:gap-[1rem] mq800:gap-[2.063rem]">
        <div className="w-[75.669rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[16.75rem] relative leading-[88%] capitalize inline-block z-[4] mq450:text-[1.438rem] mq450:leading-[1.25rem] mq800:text-[1.875rem] mq800:leading-[1.688rem]">
            saffron mount
          </div>
        </div>
        <div className="self-stretch [backdrop-filter:blur(4px)] rounded-mini [background:linear-gradient(0deg,_#27374d,_rgba(82,_109,_130,_0))] overflow-hidden flex flex-row items-start justify-start pt-[2.875rem] px-[4rem] pb-[2.931rem] box-border gap-[3.437rem] max-w-full w-[90%] z-[3] mq800:gap-[1.688rem] mq1350:flex-wrap mq1350:justify-center mq1350:pl-[2rem] mq1350:pr-[2rem] mq1350:box-border">
          <div className="h-[6.194rem] w-[20.875rem] relative shadow-[-7px_-6px_25.5px_rgba(157,_178,_191,_0.21),_6px_12px_20.6px_rgba(0,_0,_0,_0.25),_11px_11px_16.9px_rgba(32,_48,_70,_0.24)_inset] rounded-[108.08px] [background:linear-gradient(0deg,_#27374d,_#132338)] box-border hidden max-w-full border-[2px] border-solid border-color1" />
          <div className="h-[6.194rem] w-[20.875rem] relative shadow-[-7px_-6px_25.5px_rgba(157,_178,_191,_0.21),_6px_12px_20.6px_rgba(0,_0,_0,_0.25),_11px_11px_16.9px_rgba(32,_48,_70,_0.24)_inset] rounded-[108.08px] [background:linear-gradient(0deg,_#27374d,_#132338)] box-border hidden max-w-full border-[2px] border-solid border-color1" />
          <button className="cursor-pointer pt-[1.375rem] pb-[1.312rem] pr-[4.625rem] pl-[4.687rem] bg-[transparent] w-[20.763rem] shadow-[8px_8px_47.2px_6px_rgba(255,_179,_55,_0.46),_0px_7px_37.5px_#976002] rounded-[108.08px] [background:linear-gradient(74.33deg,_#ffd566,_#ffb337)] box-border flex flex-row items-start justify-start whitespace-nowrap max-w-full border-[2.2px] border-solid border-goldenrod hover:bg-darkgoldenrod-200 hover:box-border hover:border-[2.2px] hover:border-solid hover:border-darkgoldenrod-100 mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
            <div className="h-[6.081rem] w-[20.763rem] relative shadow-[8px_8px_47.2px_6px_rgba(255,_179,_55,_0.46),_0px_7px_37.5px_#976002] rounded-[108.08px] [background:linear-gradient(74.33deg,_#ffd566,_#ffb337)] box-border hidden max-w-full border-[2.2px] border-solid border-goldenrod" />
            <div className="flex-1 relative text-[2.625rem] leading-[110%] capitalize font-square721-bt text-miscellaneous-floating-tab-text-unselected text-left z-[1]">
              buy smt
            </div>
          </button>
          <button className="cursor-pointer py-[1.375rem] px-[2.625rem] bg-[transparent] w-[20.875rem] shadow-[-7px_-6px_25.5px_rgba(157,_178,_191,_0.21),_6px_12px_20.6px_rgba(0,_0,_0,_0.25),_11px_11px_16.9px_rgba(32,_48,_70,_0.24)_inset] rounded-[108.08px] [background:linear-gradient(0deg,_#27374d,_#132338)] box-border flex flex-row items-start justify-start gap-[1.25rem] max-w-full z-[1] border-[2px] border-solid border-color1 mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
            <div className="h-[6.194rem] w-[20.875rem] relative shadow-[-7px_-6px_25.5px_rgba(157,_178,_191,_0.21),_6px_12px_20.6px_rgba(0,_0,_0,_0.25),_11px_11px_16.9px_rgba(32,_48,_70,_0.24)_inset] rounded-[108.08px] [background:linear-gradient(0deg,_#27374d,_#132338)] box-border hidden max-w-full border-[2px] border-solid border-color1" />
            <img src="/stats.svg" className="m-0 h-[2.313rem] w-[1.75rem]" alt="stats" />
            <div className="flex-1 relative text-[2.625rem] leading-[110%] capitalize font-square721-bt text-backgrounds-primary text-left inline-block min-w-[7.875rem] z-[2] mq450:text-[1.563rem] mq450:leading-[1.75rem] mq800:text-[2.125rem] mq800:leading-[2.313rem]">
              my stats
            </div>
          </button>
          <button className="cursor-pointer py-[1.625rem] px-[3.937rem] bg-[transparent] w-[20.875rem] shadow-[-7px_-6px_25.5px_rgba(157,_178,_191,_0.21),_6px_12px_20.6px_rgba(0,_0,_0,_0.25),_11px_11px_16.9px_rgba(32,_48,_70,_0.24)_inset] rounded-[108.08px] [background:linear-gradient(0deg,_#27374d,_#132338)] box-border flex flex-row items-start justify-start gap-[0.956rem] max-w-full z-[1] border-[2px] border-solid border-color1 mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:flex-wrap">
            <div className="h-[6.194rem] w-[20.875rem] relative shadow-[-7px_-6px_25.5px_rgba(157,_178,_191,_0.21),_6px_12px_20.6px_rgba(0,_0,_0,_0.25),_11px_11px_16.9px_rgba(32,_48,_70,_0.24)_inset] rounded-[108.08px] [background:linear-gradient(0deg,_#27374d,_#132338)] box-border hidden max-w-full border-[2px] border-solid border-color1" />
            <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[2.044rem] h-[1.75rem] relative z-[2]"
                alt=""
                src="/vector-5.svg"
              />
            </div>
            <div className="relative text-[2.131rem] leading-[2.375rem] capitalize font-square721-bt text-backgrounds-primary text-left z-[2] mq450:text-[1.25rem] mq450:leading-[1.438rem] mq800:text-[1.688rem] mq800:leading-[1.875rem]">
              my team
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
