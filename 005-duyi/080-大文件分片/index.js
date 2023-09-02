import { cutFile } from "./cutFile.js";

const inpFile = document.querySelector("input[type='file']");

inpFile.onchange = async (e) => {
  const file = e.target.files[0];
  console.time('cutFile');
  const chunks = await cutFile(file);
  console.timeEnd('cutFile');
  console.log(chunks);
}
