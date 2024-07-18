import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0rem] left-[1.125rem] rounded-11xl bg-darkslateblue-200 box-border w-[66.688rem] h-[51.181rem] text-left text-[2.25rem] text-color font-good-times border-[3px] border-solid border-color1 ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-darkslateblue-200 box-border w-full h-full hidden border-[3px] border-solid border-color1" />
      <div className="absolute top-[5.625rem] left-[17.063rem] [filter:blur(164.9px)] rounded-[50%] [background:linear-gradient(0deg,_#27374d,_#526d82)] w-[32.313rem] h-[32.313rem] [mix-blend-mode:linear-dodge] z-[2]" />
      <div className="absolute top-[5.625rem] left-[17.063rem] [filter:blur(164.9px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(47,_41,_97,_0.7),_rgba(1,_195,_253,_0.7)_13.41%,_rgba(73,_63,_149,_0.7)_39.01%,_rgba(34,_29,_69,_0.7)_80.68%,_rgba(33,_28,_73,_0.7))] w-[32.313rem] h-[32.313rem] mix-blend-color-dodge z-[3]" />
      <div className="absolute top-[0.375rem] left-[15.75rem] w-[34.938rem] h-[34.375rem]">
        <img
          className="absolute top-[0rem] left-[0rem] w-full h-full object-cover mix-blend-luminosity"
          alt=""
          src="/abstractenergyvortex838xyv4wbrv3zzca838xyv4wbrv3zzca-1@2x.png"
        />
        <h2 className="m-0 absolute top-[15.938rem] left-[2.75rem] text-inherit leading-[2.5rem] uppercase font-normal font-inherit z-[5] mq450:text-[1.375rem] mq450:leading-[1.5rem] mq767:text-[1.813rem] mq767:leading-[2rem]">{`your energy today `}</h2>
        <img
          className="absolute top-[18.813rem] left-[15.375rem] w-[4.213rem] h-[5.313rem] object-contain z-[5]"
          loading="lazy"
          alt=""
          src="/vector1.svg"
        />
        <div className="absolute top-[19.563rem] left-[19.813rem] text-[3.375rem] leading-[110%] uppercase text-transparent !bg-clip-text [background:linear-gradient(169.87deg,_#f7c243,_#fd902b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[5] mq450:text-[2rem] mq450:leading-[2.25rem] mq767:text-[2.688rem] mq767:leading-[3rem]">
          0
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
