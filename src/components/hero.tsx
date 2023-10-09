import { useState } from "react";
import siteIcon from "../assets/site.png";

const Hero = () => {
  const [measure, setMeasure] = useState("metric");

  return (
    <section className="text-center ">
      <div className="hero px-6 pt-8 pb-52 sm:px-10 sm:pb-80">
        <img src={siteIcon} alt="site icon" className="w-10 inline" />
        <h1 className="mt-6 mb-6 text-5xl/[53px] font-semibold text-gunmetal sm:mt-10">
          Body Mass Index Calculator
        </h1>
        <div className="relative">
          <p className="text-base/6 text-darkGrey">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
          <div className="bg-white rounded-2xl shadow-base mt-12 sm:mt-16">
            <form className="p-6 sm:p-8" autoComplete="off">
              <h2 className="mb-6 text-2xl font-semibold tracking-tighter sm:text-left sm:mb-8">
                Enter your details below
              </h2>
              <div className="flex justify-between mb-6 relative sm:mb-8">
                <div className="flex items-center gap-4">
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
                <div className="flex items-center gap-4 relative">
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
                <div className="relative">
                  <label
                    htmlFor="height"
                    className="block text-darkGrey text-base text-left"
                  >
                    Height
                  </label>
                  <div
                    className={
                      measure === "imperial" ? "flex gap-4" : undefined
                    }
                  >
                    <div className="relative">
                      <input
                        type="number"
                        name="height"
                        id="height"
                        className="w-full py-5 pl-6 pr-20 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue focus:outline-none focus:border-blue"
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
                          id="height"
                          className="w-full py-5 pl-6 pr-20 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue focus:outline-none focus:border-blue"
                        />
                        <p className="text-blue font-semibold text-2xl absolute right-6 bottom-5">
                          in
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="weight"
                    className="block text-darkGrey text-base text-left"
                  >
                    Weight
                  </label>
                  <div
                    className={
                      measure === "imperial" ? "flex gap-4" : undefined
                    }
                  >
                    <div className="relative">
                      <input
                        type="number"
                        name="weight"
                        id="weight"
                        className="w-full py-5 pl-6 pr-20 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue focus:outline-none focus:border-blue"
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
                          id="height"
                          className="w-full py-5 pl-6 pr-20 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue focus:outline-none focus:border-blue"
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
                <div>
                  <p className="text-base font-semibold text-white mb-2">
                    Your BMI is...
                  </p>
                  <p className="text-5xl font-semibold text-white mb-6 sm:mb-0">23.4</p>
                </div>
                <div>
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
      </div>
    </section>
  );
};

export default Hero;
