import { useEffect } from "react";
import PreLoader from "../components/preLoader";

export default function Template() {
  useEffect(() => {
    const root = document.querySelector("#root");
    const script = document.createElement("script");
    const javascriptCode = `
    auto24API.load("80023381ff22186911bc932eff366eab");
`;

    // Create a text node containing the JavaScript code
    const scriptContent = document.createTextNode(javascriptCode);

    // Append the text node to the script element
    script.appendChild(scriptContent);
    const auto24Content = document.querySelector("#auto24");
    root.insertBefore(script, auto24Content);
  }, []);
  const divContent = "{AUTO24CONTENT}";

  // remove unnecessary information
  document.querySelectorAll('tr').forEach(tr => {
    if (tr.querySelector('.name').textContent.includes('E-mail') ||
      tr.querySelector('.name').textContent.includes('Kontaktandmed')) {
      tr.classList.add('hidden');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const headerToRemove = document.querySelector('.make_and_model_title');
    if (headerToRemove) {
      headerToRemove.remove();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const makeAndModelCell = document.querySelector('.make_and_model');
    if (makeAndModelCell) {
      makeAndModelCell.setAttribute('colspan', '2'); // Or the number of columns in your table
    }
  });

  return (
    <>
      <PreLoader></PreLoader>
      <div className="auto24" id="auto24Content">
        {divContent}{" "}
      </div>
      <div className="flex flex-col justify-center">
        <h1>Contact</h1>
        <h2>Scuderia Tallinn</h2>
        <h3>+372 566 30 469</h3>
        <h3>Peterburi tee 50d/1, Tallinn 11415</h3>
      </div>
    </>
  );
}
