import moonIcon from "../assets/moon.svg";
import foodIcon from "../assets/food.svg";
import barbellIcon from "../assets/barbell.svg";

const Advice = () => {
  return (
    <div className="mt-32 px-6 flex flex-col gap-10">
      <div>
        <div className="w-16 h-16 bg-pink rounded-full flex justify-center items-center">
          <img src={foodIcon} alt="moon" />
        </div>
        <div className="mt-8">
          <h3 className="text-2xl mb-6">Healthy eating</h3>
          <p>
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>
      </div>

      <div>
        <div className="w-16 h-16 bg-orange rounded-full flex justify-center items-center">
          <img src={barbellIcon} alt="moon" />
        </div>
        <div className="mt-8">
          <h3 className="text-2xl mb-6">Regular exercise</h3>
          <p>
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>
      </div>

      <div>
        <div className="w-16 h-16 bg-green rounded-full flex justify-center items-center">
          <img src={moonIcon} alt="moon" />
        </div>
        <div className="mt-8">
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
