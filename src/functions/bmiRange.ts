export default function bmiRange(value:string) {
    const bmiValue = parseFloat(value);

    if (bmiValue < 18.5) {
      return "below 18.5";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      return "of 18.5 to 24.9";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return "of 25 to 29.9";
    } else if (bmiValue >= 30) {
      return "above 30";
    }
} 