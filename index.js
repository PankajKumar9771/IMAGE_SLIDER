console.log("hello word");
const slides = document.querySelectorAll(".slider");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
  //   console.log(index * 100);
  //   console.log(index);
  //   console.log("slide is" + slide);
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const goNext = () => {
  let p = counter;
  if (p < 3) {
    p = counter++;
    slideImage();
  }
  // console.log(p);
 
};

const goPrev = () => {
  let p = counter;
  if (p > 0) {
    p = counter--;
    slideImage();
  }
  // console.log(p);
 
};

// console.log("hello world");
// const slides = document.querySelectorAll(".slider");
// let counter = 0;

// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });

// const slideImage = () => {
//   slides.forEach((slide) => {
//     slide.style.transform = `translateX(-${counter * 100}%)`;
//   });
// };

// const goNext = () => {
//   if (counter < 3) {
//     counter++;
//     slideImage();
//   }
//   console.log(counter);
// };

// const goPrev = () => {
//   if (counter > 0) {
//     counter--;
//     slideImage();
//   }
//   console.log(counter);
// };
