import logo from "../../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="p-4 md:p-16">
      <img src={logo} alt="" />

      <div className="flex flex-col md:flex-row justify-between mt-10 gap-y-12">
        <div className="grid w-full gap-5 text-center md:text-left md:grid-cols-3">
          <div>
            <h2 className="uppercase text-orange font-semibold mb-6">
              Streetswap
            </h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="https://dex.streetswap.io/swap">Trade</a>
              </li>
              <li>
                <a href="https://dex.streetswap.io/pools">Earn</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="uppercase text-orange font-semibold mb-6">
              $Street
            </h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/">Buy $Street</a>
              </li>
              <li>
                <a href="/">BSCScan</a>
              </li>
              <li>
                <a href="/">PooCoin</a>
              </li>
              <li>
                <a href="/">DexTools</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="uppercase text-orange font-semibold mb-6">Links</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="https://x.com/StreetSwapDEX?t=7-j6ZQd4vJh9PVXYlgNNUA&s=09">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="https://t.me/+hTLtimnVS1o3Njlk">Telegram</a>
              </li>
              <li>
                <a href="https://medium.com/@streetswapdex">Medium</a>
              </li>
              <li>
                <a href="mailto:StreetSwapDEX@gmail.com?&subject=Streetswap Enquiries">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="uppercase text-orange font-semibold mb-3">
            SIGN UP TO RECEIVE EXCLUSIVE $STREET PRESALE OPPORTUNITIES AND MORE!
          </h2>
          <form className="flex flex-col md:flex-row gap-5">
            <input
              type="email"
              placeholder="Email address"
              className="p-2 w-full h-[48px]"
            />
            <button
              type="submit"
              className="w-full md:w-0 min-w-max min-h-[48px] btn"
            >
              Get Started
            </button>
          </form>
          <p className="mt-14 text-center md:text-right">Streetswap 2024</p>
        </div>
      </div>
    </footer>
  );
}
