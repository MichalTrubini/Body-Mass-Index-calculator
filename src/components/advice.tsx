import moonIcon from "../assets/moon.svg";
import foodIcon from "../assets/food.svg";
import barbellIcon from "../assets/barbell.svg";

const Advice = () => {
  return (
    <div className="advice mt-16 px-6 py-14 flex flex-col gap-10 sm:px-10 xl:mt-24 xl:px-[140px] xl:pt-[72px] xl:pb-24 xl:flex-row xl:gap-8">
      <div className="sm:flex sm:items-center sm:gap-10 xl:flex-col xl:items-start xl:gap-11">
        <div>
          <div className="w-16 h-16 bg-pink rounded-full flex justify-center items-center">
            <img src={foodIcon} alt="moon" />
          </div>
        </div>
        <div className="mt-8 xl:mt-0">
          <h3 className="text-2xl mb-6">Healthy eating</h3>
          <p>
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>
      </div>

      <div className="sm:flex sm:items-center sm:gap-10 xl:flex-col xl:items-start xl:gap-11">
        <div>
          <div className="w-16 h-16 bg-orange rounded-full flex justify-center items-center">
            <img src={barbellIcon} alt="moon" />
          </div>
        </div>
        <div className="mt-8 xl:mt-0">
          <h3 className="text-2xl mb-6">Regular exercise</h3>
          <p>
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>
      </div>

      <div className="sm:flex sm:items-center sm:gap-10 xl:flex-col xl:items-start xl:gap-11">
        <div>
          <div className="w-16 h-16 bg-green rounded-full flex justify-center items-center">
            <img src={moonIcon} alt="moon" />
          </div>
        </div>
        <div className="mt-8 xl:mt-0">
          <h3 className="text-2xl mb-6">Adequate sleep</h3>
          <p>
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advice;
