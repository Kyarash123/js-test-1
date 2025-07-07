function findLargest() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const n3 = parseFloat(document.getElementById("num3").value);
  let resultText = "";

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    resultText = "لطفاً هر سه عدد را به درستی وارد کنید.";
  } else {
    let max;
    if (n1 > n2) {
      if (n1 > n3) {
        max = n1;
      } else {
        max = n3;
      }
    } else {
      if (n2 > n3) {
        max = n2;
      } else {
        max = n3;
      }
    }
    resultText = `بزرگ‌ترین عدد وارد شده: ${max}`;
  }

  document.getElementById("result").textContent = resultText;
}
