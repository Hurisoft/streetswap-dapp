export default function Roadmap() {
  return (
    <section className="my-10 mx-16 rounded-md p-[5%] border border-orange">
      <h2 className="uppercase font-bold text-lg md:text-xl font-oswald pb-[20px]">
        Streetswap Roadmap
      </h2>

      <div className="grid md:grid-cols-[25%_75%]">
        <div className="flex flex-col gap-3 p-5 bg-white text-[#15151F] rounded-md">
          <h3 className="text-orange font-bold text-[1.625rem] font-['Archivo',_sans-serif]">
            Info
          </h3>
          <p className="font-light text-sm leading-8">
            Web3 is always evolving. We wont hold ourselves to any hard
            deadlines, but heres a map for the vision of StreetSwap and how
            users can expect the platform to progress. Other information
            regarding StreetSwap, $STREET token, and more can be found by
            visiting our GitBook with the link below
          </p>
          <a href="#" className="flex gap-3 font-bold text-sm">
            Visit Gitbook
            <img
              src="https://assets-global.website-files.com/65bbd9309c35c0e07dc691ca/65bbdce442190d56eaf0f255_arrow-right.svg"
              alt=""
              width={16}
              height={16}
            />
          </a>
        </div>
        <div className="p-10">
          <h3 className="font-['Archivo',_sans-serif] text-orange text-2xl font-bold">
            Goals and Roadmap
          </h3>

          <div className="grid mt-10 gap-16 md:grid-rows-2 md:grid-cols-2">
            <div>
              <h4 className="uppercase font-bold md:text-xl">
                Establish Streetswap
              </h4>
              <p>
                Establish a solid foundation for StreetSwap within the BSC space
              </p>
            </div>
            <div>
              <h4 className="uppercase font-bold md:text-xl">
                Product Development
              </h4>
              <p>
                Continue developing our platform offerings and tools alongside
                growing our overall TVL
              </p>
            </div>
            <div>
              <h4 className="uppercase font-bold md:text-xl">Brand Growth</h4>
              <p>
                Once steps 1 & 2 come together cohesively we plan to bridge
                StreetSwap to other chains
              </p>
            </div>
            <div>
              <h4 className="uppercase font-bold md:text-xl">Future</h4>
              <p>
                One goal at a time. Our team aims to make StreetSwap one of the
                most recognizable brands in web3
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
