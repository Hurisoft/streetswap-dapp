/* eslint-disable react/prop-types */
export default function FeatureCard({ bgImgUrl, btnText, title, subtitle }) {
  return (
    <div
      className={`bg-cover border border-orange rounded-lg p-[1.875rem]`}
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      <button className="btn">{btnText}</button>
      <p className="mt-[150px] font-oswald text-[1.875rem] capitalize">
        {title}
      </p>
      <p className="pt-[10px] text-sm">{subtitle}</p>
    </div>
  );
}
