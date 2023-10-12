   const bmiResult = (value:string) => {
  
    const bmiValue = parseFloat(value);

    if (bmiValue < 18.5) {
      return "underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      return "a healthy weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return "overweight";
    } else if (bmiValue >= 30) {
      return "obese";
    }
  };

  export default bmiResult;