window.onload = function () {
  const changeImgFillColor = document.querySelector("#redheart path");
  const colorBtns = document.querySelectorAll(".colorBtn");
  const redSlider = document.getElementById("redSlider");
  const greenSlider = document.getElementById("greenSlider");
  const blueSlider = document.getElementById("blueSlider");
  const saveBtn = document.getElementById("save");
  const userColorList = document.querySelector(".userColor");
  const maxColorBtns = 10; // 최대 colorBtn 개수

  // 버튼 클릭 시 이미지 색상 변경 함수
  const changeImageColor = function (button) {
    const backgroundColor = window.getComputedStyle(button).backgroundColor;
    changeImgFillColor.style.fill = backgroundColor;

    const colorValues = backgroundColor.match(/\d+/g);
    redSlider.value = parseInt(colorValues[0]);
    greenSlider.value = parseInt(colorValues[1]);
    blueSlider.value = parseInt(colorValues[2]);
  };

  // 각 colorBtn 클릭시 색상 변경
  colorBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      changeImageColor(btn);
    });
  });

  // 슬라이더 색상 변경 함수
  const sliderColor = function () {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    changeImgFillColor.style.fill = rgbColor;

    document.getElementById("redValue").textContent = red;
    document.getElementById("greenValue").textContent = green;
    document.getElementById("blueValue").textContent = blue;
  };

  // 슬라이더에 이벤트 리스너 추가
  redSlider.addEventListener("input", sliderColor);
  greenSlider.addEventListener("input", sliderColor);
  blueSlider.addEventListener("input", sliderColor);

  // 슬라이더 초기 색상 값 설정
  const pathColor = changeImgFillColor.style.fill;
  const colorValues = pathColor.match(/\d+/g);
  redSlider.value = parseInt(colorValues[0]);
  greenSlider.value = parseInt(colorValues[1]);
  blueSlider.value = parseInt(colorValues[2]);

  // 초기 색상 값 표시
  document.getElementById("redValue").textContent = colorValues[0];
  document.getElementById("greenValue").textContent = colorValues[1];
  document.getElementById("blueValue").textContent = colorValues[2];

  // Save 버튼 클릭 시 색상 버튼 생성
  saveBtn.addEventListener("click", function () {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    if (userColorList.children.length >= maxColorBtns) {
      // 최대 개수에 도달하면 가장 처음 버튼 삭제
      userColorList.removeChild(userColorList.firstChild);
    }

    console.log(userColorList.children.length);
    const colorBtn = document.createElement("button");
    colorBtn.classList.add("colorBtn");
    colorBtn.style.backgroundColor = rgbColor;
    colorBtn.addEventListener("click", function () {
      changeImageColor(colorBtn);
    });
    userColorList.appendChild(colorBtn);
  });
};
