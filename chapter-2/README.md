# Form Inputs with JS

membuat form inputan dan fungsi paste/tempel

> [JS Dokumentasi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

## Play With Form App

- ritual awal yang perlu dilakukan untuk memanipulasi elemen yang ada di HTML

```javascript

const inputForm = document.querySelector("[name= veritifikasi]");
const inputVerit = document.querySelectorAll(".container input");

...

// DOM
inputForm[0].addEventListener("paste", handlePaste);
inputForm.addEventListener("input", handleSubmit);
```

- Mari kita buat kedua Fungsi 'handlePaste' dan 'handleSubmit'

```javascript
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
```

<h2>Dah Gitu aja laa yaa </h2>
