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
      <div className="bg-white m-6 rounded-2xl shadow-base relative bottom-42">
        <form className="p-6" autoComplete="off">
          <h2 className="mb-6 text-2xl text-gunmetal font-semibold tracking-tighter">
            Enter your details below
          </h2>
          <div className="flex justify-between mb-6 relative">
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="select"
                id="metric"
                className="hiddenRadioButton absolute left-hidden"
                checked
              />
              <label
                htmlFor="metric"
                className="text-gunmetal text-base font-semibold pl-12 customRadioButton"
              >
                Metric
              </label>
            </div>
            <div className="flex items-center gap-4 relative">
              <input
                type="radio"
                name="select"
                id="imperial"
                className="hiddenRadioButton absolute left-hidden"
              />
              <label
                htmlFor="imperial"
                className="text-gunmetal text-base font-semibold customRadioButton customRadioButtonImperial"
              >
                Imperial
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <label
                htmlFor="height"
                className="block text-darkGrey text-base text-left"
              >
                Height
              </label>
              <input
                type="number"
                name="height"
                id="height"
                className="w-full py-5 pl-6 pr-20 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue focus:outline-none focus:border-blue"
              />
              <p className="text-blue font-semibold text-2xl absolute right-6 bottom-5">
                cm
              </p>
            </div>
            <div className="relative">
              <label
                htmlFor="weight"
                className="block text-darkGrey text-base text-left"
              >
                Weight
              </label>
              <input
                type="number"
                name="weight"
                id="weight"
                className="w-full py-5 pl-6 pr-20 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue focus:outline-none focus:border-blue"
              />
              <p className="text-blue font-semibold text-2xl absolute right-6 bottom-5">
                kg
              </p>
            </div>
          </div>
          <div className="bmiResult text-left p-8 mt-6 text-white bg-blue">
            <p className="text-base font-semibold mb-2">Your BMI is...</p>
            <p className="text-5xl font-semibold mb-6">23.4</p>
            <p className="text-sm/5">
              Your BMI suggests you’re a healthy weight. Your ideal weight is
              between <span className="font-bold">63.3kgs - 85.2kgs</span>.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
