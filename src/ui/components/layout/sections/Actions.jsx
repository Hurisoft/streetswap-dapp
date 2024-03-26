import imgUrl from "../../../../assets/streetswap-full.png";

export default function Actions() {
  return (
    <section className="grid place-items-center relative pb-10">
      <img src={imgUrl} width={750} height={400} alt="" />

      <div className="flex flex-col items-center md:flex-row p-4 md:p-0 gap-5">
        <button className="btn px-6 py-3">Connect Wallet</button>
        <button className="btn px-6 py-3">Buy $Street</button>
        <button className="btn px-6 py-3">Join Community</button>
      </div>

      <div className="absolute right-0 left-0 bottom-0 mt-10 shadow-md shadow-orange h-1 text-[#15151F]">
        w
      </div>
    </section>
  );
}
