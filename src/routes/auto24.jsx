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

  document.addEventListener("DOMContentLoaded", function (event) {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.vehicleImageDiv0, .vehicleImageDiv1');
    console.log(slides);

    function showSlide(index) {
      const container = document.querySelector('#vehicleImagesContentDiv');
      const slideWidth = slides[0].getBoundingClientRect().width;
      container.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    slides.forEach((slide, index) => {
      slide.removeEventListener('click', () => { });
      slide.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
      });
    });
  });

  return (
    <>
      <PreLoader></PreLoader>
      <div className="auto24" id="auto24Content">
        {divContent}{" "}
      </div>
    </>
  );
}
