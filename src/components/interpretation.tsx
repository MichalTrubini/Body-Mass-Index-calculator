import manImage from "../assets/man.png";

const Interpretation = () => {
  return (
    <section className="mt-desc">
      <div className="bg-lightBlue rounded-radius h-64 relative flex justify-center">
        <img
          src={manImage}
          alt="about your bmi"
          className="w-5/6 absolute bottom-0 "
        />
      </div>
      <div className="px-6 mt-12">
        <h3 className="font-semibold text-[32px]/9 mb-8">What your BMI result means</h3>
        <p>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
      </div>
    </section>
  );
};

export default Interpretation;
