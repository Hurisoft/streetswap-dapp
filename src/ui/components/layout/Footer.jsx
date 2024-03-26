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
              <li>Home</li>
              <li>Trade</li>
              <li>Earn</li>
            </ul>
          </div>
          <div>
            <h2 className="uppercase text-orange font-semibold mb-6">
              $Street
            </h2>
            <ul className="flex flex-col gap-3">
              <li>Buy $Street</li>
              <li>BSCScan</li>
              <li>PooCoin</li>
              <li>DexTools</li>
            </ul>
          </div>
          <div>
            <h2 className="uppercase text-orange font-semibold mb-6">Links</h2>
            <ul className="flex flex-col gap-3">
              <li>X (Twitter)</li>
              <li>Telegram</li>
              <li>Medium</li>
              <li>Contact</li>
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
