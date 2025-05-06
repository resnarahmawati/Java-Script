function InputOutput(){
  const input = document.getElementById("txtInput");
  const labelOutput = document.getElementById("txtOutput");
  const detik = input.value * 3600;
  let output = (input.value) + " jam sama dengan " + (detik) + " detik.";
  labelOutput.innerHTML = output
}