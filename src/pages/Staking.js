import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";

const Staking = () => {
  return (
    <div className="w-full h-[143.188rem] relative rounded-6xl bg-darkslateblue-200 overflow-hidden leading-[normal] tracking-[normal] text-left text-[2.625rem] text-color1 font-good-times">
      <main className="absolute top-[0rem] left-[0rem] w-full h-full">
        <section className="absolute top-[-5.875rem] left-[-5.5rem] w-[111.594rem] h-[167.275rem]" />
        <section className="absolute top-[49.75rem] left-[-0.875rem] w-[91.75rem] h-[93.438rem] mix-blend-soft-light z-[1]" />
      </main>
      <div className="absolute top-[calc(50%_-_1070.5px)] left-[calc(50%_-_663px)] shadow-[-17px_4px_84.6px_rgba(82,_109,_130,_0.05),_52px_4px_74.2px_#203046,_4px_4px_113.5px_19px_rgba(154,_232,_255,_0.7)] [backdrop-filter:blur(15px)] rounded-t-31xl rounded-b-11xl bg-gray-100 box-border w-[83.25rem] overflow-hidden flex flex-col items-start justify-start pt-[2.281rem] px-[6.937rem] pb-[5.625rem] gap-[2.031rem] max-w-full z-[2] border-[3px] border-solid border-lightsteelblue">
        <div className="w-[50.65rem] flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[5.313rem] w-[4.213rem] absolute !m-[0] top-[calc(50%_-_42.5px)] left-[18.375rem] object-contain"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
          <div className="flex-1 flex flex-row items-start justify-end max-w-full">
            <h2 className="m-0 w-[26.938rem] relative text-inherit leading-[110%] uppercase font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(169.87deg,_#f7c243,_#fd902b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full mq450:text-[1.563rem] mq450:leading-[1.75rem] mq767:text-[2.125rem] mq767:leading-[2.313rem]">
              ENEGRY STAKING
            </h2>
          </div>
        </div>
        <div className="w-[68.375rem] h-[120.938rem] relative max-w-full text-[1.375rem]">
          <GroupComponent1 />
          <div className="absolute top-[15.563rem] left-[5.5rem] w-[55.813rem] h-[55.813rem] z-[1] flex items-center justify-center">
            <img
              className="w-full h-full z-[1] object-contain absolute left-[1.125rem] top-[12.188rem] [transform:scale(1.759)]"
              alt=""
              src="/group-47.svg"
            />
          </div>
          <GroupComponent />
          <div className="absolute top-[70.375rem] left-[14.75rem] shadow-[3px_4px_51.9px_#fd902b,_0px_0px_200px_#ffb337] rounded-[12.95px] [background:linear-gradient(169.87deg,_#f7c243,_#fd902b)] w-[39.5rem] h-[12.313rem] z-[7]">
            <div className="absolute top-[0rem] left-[0rem] shadow-[3px_4px_51.9px_#fd902b,_0px_0px_200px_#ffb337] rounded-[12.95px] [background:linear-gradient(169.87deg,_#f7c243,_#fd902b)] w-full h-full hidden" />
            <div className="absolute top-[0rem] left-[0rem] rounded-[12.95px] box-border w-full h-full border-[1.5px] border-solid border-linear1" />
            <div className="absolute top-[5.063rem] left-[14.3rem] leading-[110%] uppercase z-[9] mq450:text-[1.125rem] mq450:leading-[1.188rem]">{`your balance `}</div>
            <div className="absolute top-[7.25rem] left-[11.063rem] text-[2.875rem] leading-[3.188rem] uppercase overflow-hidden text-ellipsis whitespace-nowrap z-[9] mq450:text-[1.75rem] mq450:leading-[1.875rem] mq767:text-[2.313rem] mq767:leading-[2.5rem]">
              0.355652 smt
            </div>
          </div>
          <img
            className="absolute top-[66.688rem] left-[30.875rem] w-[7.244rem] h-[7.325rem] object-contain z-[9]"
            loading="lazy"
            alt=""
            src="/layer-1-11@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Staking;
