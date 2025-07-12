var height;
var weight;
var BMI;
function bmiCalculator(height,weight){
  BMI=Math.floor(weight/Math.pow(height,2));
  return BMI;
}

const bmiSection=document.querySelector(".BMI-section");
const bmiInfo=document.querySelector(".BMI-info");
bmiSection.addEventListener("click",function(){
  bmiInfo.classList.toggle("show");
  document.querySelector(".BMI-results").classList.toggle("show1");
});
function getVar(){
height=document.querySelector(".height").value;
weight=document.querySelector(".weight").value;
  BMI=bmiCalculator(height,weight);
  if(BMI<18.5)
  {
    document.querySelector(".BMI-1").innerHTML="<h3>your BMI:" +BMI+"</h3>";
    document.querySelector(".BMI-2").innerHTML="you are underweight";
  }
  else if(18.5<=BMI && BMI<=24.5)
  {
    document.querySelector(".BMI-1").innerHTML="<h3>your BMI:" +BMI+"</h3>";
    document.querySelector(".BMI-2").innerHTML= "you are normal";
  }
  else
  {
      document.querySelector(".BMI-1").innerHTML="<h3>your BMI:" +BMI+"</h3>";
      document.querySelector(".BMI-2").innerHTML= "you are overweight";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");

  slides.forEach(slide => {
    const img = slide.querySelector("img");
    const hiddenText = slide.querySelector(".hidden-text");

    img.addEventListener("click", () => {
      if (hiddenText.style.display === "block") {
        hiddenText.style.display = "none";
      } else {
        hiddenText.style.display = "block";
      }
    });
  });
});
