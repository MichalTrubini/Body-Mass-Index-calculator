import siteIcon from "../assets/site.png";

const Hero = () => {
  return (
    <section className="text-center ">
      <div className="hero px-6 pt-8 pb-52">
        <img src={siteIcon} alt="site icon" className="w-10 inline" />
        <h1 className="mt-6 mb-6 text-5xl/[53px] font-semibold text-gunmetal">
          Body Mass Index Calculator
        </h1>
        <p className="text-base/6 text-darkGrey">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <div className="p-6 rounded-2xl">
        <form>
          <h2 className="mb-6 text-2xl text-gunmetal font-semibold tracking-tighter">
            Enter your details below
          </h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <input type="radio" name="metric" />
              <label
                htmlFor="metric"
                className="text-gunmetal text-base font-semibold"
              >
                Metric
              </label>
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" name="imperial" />
              <label
                htmlFor="imperial"
                className="text-gunmetal text-base font-semibold"
              >
                Imperial
              </label>
            </div>
          </div>
          <div>
            <div>
              <label
                htmlFor="height"
                className="block text-darkGrey text-base "
              >
                Height
              </label>
              <input
                type="text"
                name="height"
                id="height"
                className="w-full p-2 mt-2 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="weight" className="block text-darkGrey text-base">
                Weight
              </label>
              <input
                type="text"
                name="weight"
                id="weight"
                className="w-full p-2 mt-2 rounded-md"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
