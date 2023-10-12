import manImage from "../assets/man.png";
import bmiResult from "../functions/bmiResult";
import bmiRange from "../functions/bmiRange";

const Interpretation:React.FC<{bmi: string}> = (props) => {

  const bmiRes = bmiResult(props.bmi);
  const bmiRng = bmiRange(props.bmi);

  return (
    <section className="marginFix-1 sm:mt-[277px] sm:flex sm:justify-between md:items-center lg:mt-[77px] xl:px-[140px] xl:mt-[66px]">
      <div className="relative flex justify-center sm:w-2/5 sm:-left-4 md:w-1/2 md:-left-10 xl:left-0">
        <img
          src={manImage}
          alt="about your bmi"
          className="relative z-10 w-5/6 sm:w-auto md:w-[360px] md:h-[411px] xl:w-[468px] xl:h-[534px]"
        />
        <div className="bg-lightBlue rounded-radius w-full h-64 absolute z-0 bottom-0 xl:w-[564px] xl:h-[388px]"></div>
      </div>
      <div className="px-6 mt-12 sm:w-3/5 sm:mr-10 sm:mt-0 md:w-1/2 xl:pl-20 xl:pr-0 xl:mr-0 xl:pt-32">
        <h3 className="font-semibold text-[32px]/9 mb-8 xl:text-5xl xl:mb-9 ">What your BMI result means</h3>
        <p>{`A BMI range ${bmiRng} is considered a '${bmiRes}' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.`}</p>
      </div>
    </section>
  );
};

export default Interpretation;
