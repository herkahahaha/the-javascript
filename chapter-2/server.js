const inputForm = document.querySelector("[name= veritifikasi]");
const inputVerit = document.querySelectorAll(".container input");

const handleSubmit = (e) => {
  const input = e.target;
  console.log(input.nextElementSibling);

  input.nextElementSibling && input.value
    ? input.nextElementSibling.focus()
    : null;
};

// fungsi paste kedalam inputan form
const handlePaste = (e) => {
  const paste = e.clipboardData.getData("text");
  console.log(paste);
  inputVerit.forEach((num, i) => {
    console.log(num);
    num.value += paste[i] || "";
  });
  //   123444
};

// DOM
inputForm[0].addEventListener("paste", handlePaste);
inputForm.addEventListener("input", handleSubmit);
