import FeatureCard from "../../simple/FeatureCard";

export default function Features() {
  return (
    <section className="py-10 px-[10%]">
      <h2 className="uppercase font-bold text-[50px] md:text-[64px] font-oswald pb-[20px]">
        Streetswap features
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-10">
        <FeatureCard
          bgImgUrl={"feature-swap.png"}
          link={"https://dex.streetswap.io/swap"}
          btnText="Trade Now"
          title="Swap"
          subtitle="Buy/Sell/Trade your favorite cryptocurrencies! Fast speeds with low cost!"
        />
        <FeatureCard
          bgImgUrl={"feature-liquidity.png"}
          link={"https://dex.streetswap.io/liquidity"}
          btnText="Add Now"
          title="Liquidity"
          subtitle="Fund liquidity pairings to earn your share of StreetSwap trading fees!"
        />
        <FeatureCard
          bgImgUrl={"feature-buy.png"}
          link={"/"}
          btnText="Buy Now"
          title="Buy"
          subtitle="Buy your favorite cryptos using fiat and other payment methods! (Coming Soon)"
        />
        <FeatureCard
          bgImgUrl={"feature-single-staking.png"}
          link={"https://dex.streetswap.io/pools"}
          btnText="Stake Now"
          title="Single Staking"
          subtitle="Staking made simple. Stake token to earn token!"
        />
        <FeatureCard
          bgImgUrl={"feature-liquidity-staking.png"}
          link={"https://dex.streetswap.io/pools"}
          btnText="Stake Now"
          title="Liquidity Staking"
          subtitle="Stake LP tokens to earn $STREET and other currencies!"
        />
        <FeatureCard
          bgImgUrl={"feature-pools.png"}
          link={"https://dex.streetswap.io/pools"}
          btnText="Stake Now"
          title="Pools"
          subtitle="Stake $STREET token to earn all types of partner rewards!"
        />
      </div>
    </section>
  );
}
