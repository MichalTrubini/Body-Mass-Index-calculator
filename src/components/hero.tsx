import { useState } from "react";
import siteIcon from "../assets/site.png";

const Hero = () => {
  const [measure, setMeasure] = useState("metric");

  const [data, setData] = useState({
    metric: { heightOne: null, weightOne: null },
    imperial: {
      height: { heightOne: null, heightTwo: null },
      weight: { weightOne: null, weightTwo: null },
    },
  });

  const inputHandler = (e) => {
    if (measure === "metric") {
      setData({
        ...data,
        metric: { ...data.metric, [e.target.id]: e.target.value },
        imperial: {
          height: { heightOne: null, heightTwo: null },
          weight: { weightOne: null, weightTwo: null },
        },
      });
    } else {
      setData({
        ...data,
        imperial: {
          ...data.imperial,
          height: { ...data.imperial.height, [e.target.id]: e.target.value },
        },
      });
    }
  };

  const getValue = (elementID:string) => {

    let value = "";

    if (measure === "metric") {
      if (elementID === "heightOne" || elementID === "weightOne") {
        value = data.metric[elementID] || "";
      }
    }

    if (measure === "imperial") {
      if (elementID === "heightOne" || elementID === "heightTwo") {
        value = data.imperial.height[elementID] || "";
      }
      if (elementID === "weightOne" || elementID === "weightTwo") {
        value = data.imperial.weight[elementID] || "";
      }
    }
    return value;
  };

  return (
    <section className="text-center lg:relative">
      <div className="hero px-6 pt-8 pb-52 sm:px-10 sm:pb-80 lg:flex lg:w-2/3 lg:pb-[140px] xl:px-[140px] xl:pt-[75px] xl:pb-[200px]">
        <div className="md:flex md:flex-col md:items-center lg:items-start lg:w-full lg:min-w-[600px] ">
          <img src={siteIcon} alt="site icon" className="w-10 inline" />
          <h1 className="mt-6 mb-6 text-5xl/[53px] font-semibold sm:mt-10 md:w-96 lg:text-left lg:mt-20 xl:mt-[127px] lg:text-[64px]/[70px] xl:w-[75%] lg:mb-9">
            Body Mass Index Calculator
          </h1>
          <p className="text-base/6 text-darkGrey lg:text-left lg:pr-44">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-base mt-12 sm:mt-16 lg:mt-0 lg:absolute lg:right-10 xl:right-[140px] xl:top-[145px]">
          <form
            className="p-6 sm:p-8 lg:w-[500px] xl:w-[564px]"
            autoComplete="off"
          >
            <h2 className="mb-6 text-2xl font-semibold tracking-tighter sm:text-left sm:mb-8">
              Enter your details below
            </h2>
            <div className="flex justify-between mb-6 relative sm:mb-8">
              <div className="flex items-center gap-4 sm:w-1/2">
                <input
                  type="radio"
                  name="select"
                  id="metric"
                  className="w-8 aspect-square border border-solid border-grey rounded-full appearance-none inline-grid place-content-center customCheck"
                  onClick={() => setMeasure("metric")}
                  defaultChecked
                />
                <label
                  htmlFor="metric"
                  className="text-gunmetal text-base font-semibold"
                >
                  Metric
                </label>
              </div>
              <div className="flex items-center gap-4 relative sm:w-1/2">
                <input
                  type="radio"
                  name="select"
                  id="imperial"
                  className="w-8 aspect-square border border-solid border-grey rounded-full appearance-none inline-grid place-content-center customCheck"
                  onClick={() => setMeasure("imperial")}
                />
                <label
                  htmlFor="imperial"
                  className="text-gunmetal text-base font-semibold "
                >
                  Imperial
                </label>
              </div>
            </div>
            <div
              className={
                measure === "metric"
                  ? "flex flex-col gap-4 sm:flex-row"
                  : "flex flex-col gap-4"
              }
            >
              <div
                className={
                  measure === "metric" ? "relative md:w-1/2" : "relative"
                }
              >
                <label
                  htmlFor="height"
                  className="block text-darkGrey text-base text-left"
                >
                  Height
                </label>
                <div
                  className={measure === "imperial" ? "flex gap-4" : undefined}
                >
                  <div className="relative">
                    <input
                      type="number"
                      name="height"
                      placeholder="0"
                      id="heightOne"
                      onChange={inputHandler}
                      value={getValue('heightOne')}
                      className="w-full py-5 pl-6 pr-16 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue focus:outline-none focus:border-blue"
                    />
                    <p className="text-blue font-semibold text-2xl absolute right-6 bottom-5">
                      {measure === "imperial" ? "ft" : "cm"}
                    </p>
                  </div>
                  {measure === "imperial" && (
                    <div className="relative">
                      <input
                        type="number"
                        name="height"
                        placeholder="0"
                        id="heightTwo"
                        onChange={inputHandler}
                        value={getValue('heightTwo')}
                        className="w-full py-5 pl-6 pr-16 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue focus:outline-none focus:border-blue"
                      />
                      <p className="text-blue font-semibold text-2xl absolute right-6 bottom-5">
                        in
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={
                  measure === "metric" ? "relative md:w-1/2" : "relative"
                }
              >
                <label
                  htmlFor="weight"
                  className="block text-darkGrey text-base text-left"
                >
                  Weight
                </label>
                <div
                  className={measure === "imperial" ? "flex gap-4" : undefined}
                >
                  <div className="relative">
                    <input
                      type="number"
                      name="weight"
                      placeholder="0"
                      id="weightOne"
                      onChange={inputHandler}
                      value={getValue('weightOne')}
                      className="w-full py-5 pl-6 pr-16 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue focus:outline-none focus:border-blue"
                    />
                    <p className="text-blue font-semibold text-2xl absolute right-6 bottom-5">
                      {measure === "imperial" ? "st" : "kg"}
                    </p>
                  </div>
                  {measure === "imperial" && (
                    <div className="relative">
                      <input
                        type="number"
                        name="height"
                        placeholder="0"
                        id="weightTwo"
                        onChange={inputHandler}
                        value={getValue('weightTwo')}
                        className="w-full py-5 pl-6 pr-16 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue focus:outline-none focus:border-blue"
                      />
                      <p className="text-blue font-semibold text-2xl absolute right-6 bottom-5">
                        lbs
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bmiResult text-left p-8 mt-6 bg-blue sm:mt-8 sm:flex sm:items-center sm:gap-12">
              <div className="md:w-1/2">
                <p className="text-base font-semibold text-white mb-2">
                  Your BMI is...
                </p>
                <p className="text-5xl font-semibold text-white mb-6 sm:mb-0">
                  23.4
                </p>
              </div>
              <div className="md:w-1/2">
                <p className="text-sm/5 text-white">
                  Your BMI suggests you’re a healthy weight. Your ideal weight
                  is between{" "}
                  <span className="font-bold">63.3kgs - 85.2kgs</span>.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
