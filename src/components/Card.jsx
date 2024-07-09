const Card = ({ greenMil }) => {
  return (
    <div className="w-[200px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[10px_0px] text-center text-base text-white font-helvetica-neue">
      <img
        className="self-stretch h-[250px] rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={greenMil}
      />
      <div className="w-[82px] overflow-hidden flex flex-col items-start justify-start py-0 px-2 box-border">
        <div className="self-stretch relative tracking-[-0.41px] leading-[22px]">
          Green Mil
        </div>
        <div className="w-[62px] relative text-xs tracking-[-0.41px] leading-[22px] text-crimson inline-block">
          Chidi waves
        </div>
      </div>
    </div>
  );
};

export default Card;
