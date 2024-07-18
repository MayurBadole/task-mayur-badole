import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[76.563rem] left-[0rem] w-full h-[44.375rem] mix-blend-normal z-[6] text-left text-[1.844rem] text-backgrounds-primary font-good-times ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-darkslateblue-100 box-border w-full h-full mix-blend-multiply border-[3.6px] border-solid border-linear1" />
      <div className="absolute top-[9.313rem] left-[4.063rem] shadow-[14.8px_34.9px_50px_rgba(0,_0,_0,_0.3)] [backdrop-filter:blur(12.35px)] rounded-[13.42px] bg-gray-200 box-border w-[60.813rem] h-[8.725rem] z-[7] border-[1.3px] border-solid border-white">
        <div className="absolute top-[0rem] left-[0rem] shadow-[14.8px_34.9px_50px_rgba(0,_0,_0,_0.3)] [backdrop-filter:blur(12.35px)] rounded-[13.42px] bg-gray-200 box-border w-full h-full hidden mix-blend-normal border-[1.3px] border-solid border-linear1" />
        <div className="absolute top-[5.2rem] left-[1.594rem] leading-[110%] uppercase whitespace-pre-wrap z-[8] mq450:text-[1.5rem] mq450:leading-[1.625rem]">
          energy + 0.20015 smt
        </div>
        <div className="absolute top-[3.356rem] left-[49.406rem] leading-[110%] uppercase text-skyblue z-[8] mq450:text-[1.5rem] mq450:leading-[1.625rem]">
          + 0.335
        </div>
        <div className="absolute top-[2.431rem] left-[1.594rem] leading-[110%] uppercase font-square721-bt text-color2 z-[8] mq450:text-[1.5rem] mq450:leading-[1.625rem]">
          2024-10-05 00.55
        </div>
      </div>
      <div className="absolute top-[22.081rem] left-[5.656rem] leading-[110%] uppercase whitespace-pre-wrap z-[7] mq450:text-[1.5rem] mq450:leading-[1.625rem]">
        energy + 0.20015 smt
      </div>
      <div className="absolute top-[29.65rem] left-[5.656rem] leading-[110%] uppercase whitespace-pre-wrap z-[7] mq450:text-[1.5rem] mq450:leading-[1.625rem]">
        energy + 0.20015 smt
      </div>
      <div className="absolute top-[37.213rem] left-[5.656rem] leading-[110%] uppercase whitespace-pre-wrap z-[7] mq450:text-[1.5rem] mq450:leading-[1.625rem]">
        energy + 0.20015 smt
      </div>
      <div className="absolute top-[20.238rem] left-[53.469rem] leading-[110%] uppercase text-skyblue z-[7] mq450:text-[1.5rem] mq450:leading-[1.625rem]">
        + 0.335
      </div>
      <div className="absolute top-[27.8rem] left-[53.469rem] leading-[110%] uppercase text-skyblue z-[7] mq450:text-[1.5rem] mq450:leading-[1.625rem]">
        + 0.335
      </div>
      <div className="absolute top-[35.369rem] left-[53.469rem] leading-[110%] uppercase text-skyblue z-[7] mq450:text-[1.5rem] mq450:leading-[1.625rem]">
        + 0.335
      </div>
      <div className="absolute top-[19.313rem] left-[5.656rem] leading-[110%] uppercase font-square721-bt text-color2 z-[7] mq450:text-[1.5rem] mq450:leading-[1.625rem]">
        2024-10-05 00.55
      </div>
      <div className="absolute top-[26.881rem] left-[5.656rem] leading-[110%] uppercase font-square721-bt text-color2 z-[7] mq450:text-[1.5rem] mq450:leading-[1.625rem]">
        2024-10-05 00.55
      </div>
      <div className="absolute top-[34.45rem] left-[5.656rem] leading-[110%] uppercase font-square721-bt text-color2 z-[7] mq450:text-[1.5rem] mq450:leading-[1.625rem]">
        2024-10-05 00.55
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
