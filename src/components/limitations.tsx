import genderIcon from "../assets/gender.svg";
import ageIcon from "../assets/age.svg";
import muscleIcon from "../assets/muscle.svg";
import pregnancyIcon from "../assets/pregnancy.svg";
import raceIcon from "../assets/race.svg";

const Limitations = () => {
  return (
    <div className="mt-16 px-6 md:mt-24 md:px-10 mb-[95px] med:mb-[120px] lg:px-[140px] xl:relative xl:mt-[120px]">
      <div className="mb-20 md:mb-14 xl:absolute xl:w-1/2 xl:pr-40">
        <h2 className="text-3xl mb-8 sm:text-center lg:text-left lg:text-5xl">Limitations of BMI</h2>
        <p className="sm:text-center lg:text-left">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="gridAreas flex flex-col gap-4 sm:grid sm:gap-x-4 sm:gap-y-6 lg:gap-8">
        <div className="p-6 shadow-card rounded-2xl" id="gender">
          <div className="flex items-center gap-4 mb-4">
            <img src={genderIcon} alt="gender" />
            <h3>Gender</h3>
          </div>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>

        <div className="p-6 shadow-card rounded-2xl" id="age">
          <div className="flex items-center gap-4 mb-4">
            <img src={ageIcon} alt="age" />
            <h3>Age</h3>
          </div>
          <p>
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>

        <div className="p-6 shadow-card rounded-2xl" id="muscle">
          <div className="flex items-center gap-4 mb-4">
            <img src={muscleIcon} alt="muscle" />
            <h3>Muscle</h3>
          </div>
          <p>
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </p>
        </div>

        <div className="p-6 shadow-card rounded-2xl" id="pregnancy">
          <div className="flex items-center gap-4 mb-4">
            <img src={pregnancyIcon} alt="pregnancy" />
            <h3>Pregnancy</h3>
          </div>
          <p>
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>

        <div className="p-6 shadow-card rounded-2xl" id="race">
          <div className="flex items-center gap-4 mb-4">
            <img src={raceIcon} alt="race" />
            <h3>Race</h3>
          </div>
          <p>
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Limitations;
