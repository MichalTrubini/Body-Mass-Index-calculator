import { useEffect, useState } from "react";
import siteIcon from "../assets/site.png";
import bmiResult from "../functions/bmiResult";

type Data = {
  metric: {
    heightOne: string | null;
    weightOne: string | null;
  };
  imperial: {
    height: {
      heightOne: string | null;
      heightTwo: string | null;
    };
    weight: {
      weightOne: string | null;
      weightTwo: string | null;
    };
  };
};

const Hero: React.FC<{ setBMI: (value: string) => void }> = (props) => {
  const [measure, setMeasure] = useState("metric");

  const [data, setData] = useState<Data>({
    metric: { heightOne: null, weightOne: null },
    imperial: {
      height: { heightOne: null, heightTwo: null },
      weight: { weightOne: null, weightTwo: null },
    },
  });

  const hasNullValue = () => {
    const metricValues = Object.values(data.metric);
    const imperialValues = Object.values(data.imperial).flatMap((innerObj) =>
      Object.values(innerObj)
    );

    if (measure === "metric") {
      // Check if any metric value is null, an empty string, or "0"
      return metricValues.some(
        (value) => value === null || value === "" || value === "0"
      );
    } else if (measure === "imperial") {
      // Check if any imperial value is null
      return imperialValues.some((value) => value === null || value === "");
    }

    return false; // Return false for other cases
  };

  const bmi = () => {
    let bmi = 0;
    let height = 0;
    let weight = 0;

    if (measure === "metric" && !hasNullValue()) {
      height = Number(data.metric.heightOne) / 100;
      weight = Number(data.metric.weightOne);
    } else if (measure === "imperial") {
      height =
        (Number(data.imperial.height.heightOne) * 12 +
          Number(data.imperial.height.heightTwo)) *
        0.0254;
      // Convert weightOne from stones to kilograms
      const weightOneStones = Number(data.imperial.weight.weightOne);
      const weightOneKilograms = weightOneStones * 6.35029;

      // Convert weightTwo from pounds to kilograms
      const weightTwoPounds = Number(data.imperial.weight.weightTwo);
      const weightTwoKilograms = weightTwoPounds * 0.45359237;

      // Combine the two weights to get the total weight in kilograms
      weight = weightOneKilograms + weightTwoKilograms;
    }

    if (height !== 0 && weight !== 0) bmi = weight / (height * height);
    return bmi.toFixed(1);
  };

  useEffect(() => {
    if (bmi() !== '0.0') props.setBMI(bmi());
  }, [data]);

  const bmiRes = bmiResult(bmi());

  const suggestedWeight = () => {
    let minWeight = 0;
    let maxWeight = 0;

    const minHealthyBmi = 18.5;
    const maxHealthyBmi = 24.9;

    if (measure === "metric") {
      const heightSquared = (Number(data.metric.heightOne) / 100) ** 2;
      minWeight = minHealthyBmi * heightSquared;
      maxWeight = maxHealthyBmi * heightSquared;

      return `${minWeight.toFixed(1)}kg - ${maxWeight.toFixed(1)}kg`;
    }
    if (measure === "imperial") {
      const heightSquared =
        ((Number(data.imperial.height.heightOne) * 12 +
          Number(data.imperial.height.heightTwo)) *
          0.0254) **
        2;
      minWeight = minHealthyBmi * heightSquared;
      maxWeight = maxHealthyBmi * heightSquared;

      // Convert minWeight and maxWeight to stones and pounds
      const minWeightStones = Math.floor(minWeight / 6.35029);
      const minWeightPounds = Math.min(
        Math.round((minWeight % 6.35029) * 14),
        13 // Limit pounds to 13 (one stone minus one pound)
      );

      const maxWeightStones = Math.floor(maxWeight / 6.35029);
      const maxWeightPounds = Math.min(
        Math.round((maxWeight % 6.35029) * 14),
        13 // Limit pounds to 13 (one stone minus one pound)
      );

      return `${minWeightStones}st ${minWeightPounds}lb - ${maxWeightStones}st ${maxWeightPounds}lb`;
    }
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const elName = e.target.name;
    const elID = e.target.id;
    const elValue = e.target.value;

    if (measure === "metric") {
      setData({
        ...data,
        metric: { ...data.metric, [elID]: elValue },
      });
    } else {
      setData({
        ...data,
        imperial: {
          ...data.imperial,
          [elName]: {
            ...(data.imperial as { [key: string]: any })[elName], // Type assertion
            [elID]: elValue,
          },
        },
      });
    }
  };

  const getValue = (elementID: string) => {
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
          <img src={siteIcon} alt="site icon" className="w-10 inline lg:w-14" />
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
        <div className="bg-white rounded-2xl shadow-base mt-12 sm:mt-16 lg:mt-0 lg:absolute lg:right-10 xl:right-[140px] xl:top-[167px]">
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
                  className="w-8 aspect-square border border-solid border-grey rounded-full appearance-none inline-grid place-content-center customCheck hover:cursor-pointer hover:border-blue"
                  onClick={() => setMeasure("metric")}
                  defaultChecked
                />
                <label
                  htmlFor="metric"
                  className="text-gunmetal text-base font-semibold hover:cursor-pointer"
                >
                  Metric
                </label>
              </div>
              <div className="flex items-center gap-4 relative sm:w-1/2">
                <input
                  type="radio"
                  name="select"
                  id="imperial"
                  className="w-8 aspect-square border border-solid border-grey rounded-full appearance-none inline-grid place-content-center customCheck hover:cursor-pointer hover:border-blue"
                  onClick={() => setMeasure("imperial")}
                />
                <label
                  htmlFor="imperial"
                  className="text-gunmetal text-base font-semibold hover:cursor-pointer"
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
                      value={getValue("heightOne")}
                      className="w-full py-5 pl-6 pr-16 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue hover:cursor-pointer focus:outline-none focus:border-blue"
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
                        value={getValue("heightTwo")}
                        className="w-full py-5 pl-6 pr-16 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue hover:cursor-pointer focus:outline-none focus:border-blue"
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
                      value={getValue("weightOne")}
                      className="w-full py-5 pl-6 pr-16 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue hover:cursor-pointer focus:outline-none focus:border-blue"
                    />
                    <p className="text-blue font-semibold text-2xl absolute right-6 bottom-5">
                      {measure === "imperial" ? "st" : "kg"}
                    </p>
                  </div>
                  {measure === "imperial" && (
                    <div className="relative">
                      <input
                        type="number"
                        name="weight"
                        placeholder="0"
                        id="weightTwo"
                        onChange={inputHandler}
                        value={getValue("weightTwo")}
                        className="w-full py-5 pl-6 pr-16 mt-2 border border-solid border-grey rounded-xl text-gunmetal font-semibold text-2xl hover:border-blue hover:cursor-pointer focus:outline-none focus:border-blue"
                      />
                      <p className="text-blue font-semibold text-2xl absolute right-6 bottom-5">
                        lbs
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bmiResult text-left p-8 mt-6 sm:mt-8">
              {hasNullValue() ? (
                <div>
                  <h3 className="text-white text-2xl mb-4">Welcome!</h3>
                  <p className="text-white text-sm">
                    Enter your height and weight and you’ll see your BMI result
                    here
                  </p>
                </div>
              ) : (
                <div className="sm:flex sm:items-center sm:gap-12">
                  <div className="md:w-1/2">
                    <p className="text-base font-semibold text-white mb-2">
                      Your BMI is...
                    </p>
                    <p className="text-5xl font-semibold text-white mb-6 sm:mb-0">
                      {bmi()}
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-sm/5 text-white">
                      {`Your BMI suggests you’re ${bmiRes}. Your ideal
                      weight is between `}
                      <span className="font-bold">{suggestedWeight()}</span>.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
