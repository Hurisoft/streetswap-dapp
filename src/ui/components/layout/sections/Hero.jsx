import logo from "../../../../assets/hero-img.svg";

export default function Hero() {
  return (
    <section className="py-10 px-[10%]">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-orange font-semibold text-[30px]">Welcome to</p>
            <h1 className="font-bold text-[36.8px] md:text-[75px] uppercase font-oswald">
              Streetswap
            </h1>
          </div>
          <h2 className="font-semibold text-lg">
            Secure decentralized transactions at lightning-fast speeds. Powered
            by $STREET on Binance Smart Chain
          </h2>

          <div className="flex flex-col md:flex-row gap-3">
            <button className="btn flex gap-1 pr-6 text-[16px]">
              <span>Trade</span>
              <span>now</span>
            </button>
            <button className="btn flex gap-1 pr-6 text-[16px]">
              <span>Buy</span>
              <span>$Street</span>
            </button>
            <button className="btn flex gap-1  pr-6 text-[16px]">
              <span>Join</span>
              <span>Community</span>
            </button>
            <button className="btn !bg-none !capitalize flex justify-between items-center gap-6 pr-6 text-[16px]">
              <span className="flex gap-1">
                <span>Learn</span>
                <span>More</span>
              </span>

              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_39)">
                  <g clipPath="url(#clip1_1_39)">
                    <g clipPath="url(#clip2_1_39)">
                      <path
                        d="M0.299988 2.62737V18.5522C0.299988 19.7665 1.6373 20.5044 2.66719 19.8434L15.1795 11.881C16.1326 11.2815 16.1326 9.89808 15.1795 9.28323L2.66719 1.33618C1.6373 0.675204 0.299988 1.41303 0.299988 2.62737Z"
                        fill="white"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_39">
                    <rect
                      width="16.14"
                      height="20"
                      fill="white"
                      transform="translate(0.299988 0.589966)"
                    />
                  </clipPath>
                  <clipPath id="clip1_1_39">
                    <rect
                      width="16.14"
                      height="20"
                      fill="white"
                      transform="translate(0.299988 0.589966)"
                    />
                  </clipPath>
                  <clipPath id="clip2_1_39">
                    <rect
                      width="16.14"
                      height="19.9829"
                      fill="white"
                      transform="translate(0.299988 0.598511)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="mt-5 font-oswald flex md:flex-row flex-col justify-between font-bold uppercase">
        <div className="flex flex-col items-center">
          <span className="text-[40px]">0</span>
          <span className="text-lg">Holders</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[40px]">0</span>
          <span className="text-lg">Market Cap</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[40px]">0</span>
          <span className="text-lg">TVL</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[40px]">0</span>
          <span className="text-lg">Total $Street Supply</span>
        </div>
      </div>
    </section>
  );
}
