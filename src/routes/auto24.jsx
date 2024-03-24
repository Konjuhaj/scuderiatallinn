import { useEffect, useState } from "react";
import ImageSlider from "../components/imageSlider";
import PreLoader from "../components/preLoader";

const DummyComponen = () => {
  const htmlContent = `
  <div class="auto24" id="auto24Content"><div class="DetailWrapper">
  <div class="DetailsMain">
          
  <table width="100%" cellpadding="0" cellspacing="0" class="vehicle_details">
<tbody><tr>
  <th class="make_and_model_title">Mark ja mudel:</th>
  <th class="make_and_model">Audi A8 Quattro 55 TFSI</th>
</tr><tr>
    <td class="name">Liik:</td>
    <td class="value">sõiduauto</td>
  </tr>
<tr>
    <td class="name">Keretüüp:</td>
    <td class="value">sedaan</td>
  </tr>
<tr>
    <td class="name">Esmane reg.:</td>
    <td class="value">05/2018</td>
  </tr>



<tr>
    <td class="name">Värvus:</td>
    <td class="value">must met.</td>
  </tr>
<tr>
    <td class="name">Odomeetri näit:</td>
    <td class="value">62&nbsp;000 km</td>
  </tr>

<tr>
    <td class="name">Hind:</td>
    <td class="value price">
      54&nbsp;900&nbsp;EUR<br><small class="km">Hind sisaldab KM 22%</small>
    </td>
  </tr>





<tr class="field-reg_nr">
    <td class="name">Reg. number:</td>
    <td class="value">155MRX</td>
  </tr>
<tr>
    <td class="name">Uste arv:</td>
    <td class="value">4</td>
  </tr>
<tr>
    <td class="name">Istekohti:</td>
    <td class="value">5</td>
  </tr>
<tr>
    <td class="name">Mootor:</td>
    <td class="value">3.0 V6 (250 kW)</td>
  </tr>
<tr>
    <td class="name">Tühimass:</td>
    <td class="value">2156 kg</td>
  </tr>
<tr>
    <td class="name">Täismass:</td>
    <td class="value">2680 kg</td>
  </tr>
<tr>
    <td class="name">Kandevõime:</td>
    <td class="value">524 kg</td>
  </tr>
<tr>
    <td class="name">Teljevahe:</td>
    <td class="value">2998 mm</td>
  </tr>
<tr>
      <td class="name">Rattavalem:</td>
      <td class="value">4x4</td>
    </tr>


<tr>
    <td class="name">Käigukast:</td>
    <td class="value">automaat </td>
  </tr>

<tr>
    <td class="name">Tippkiirus:</td>
    <td class="value">250 km/h</td>
  </tr>
<tr>
    <td class="name">Kütus:</td>
    <td class="value">hübriid (bensiin / elekter)</td>
  </tr>

<tr>
    <td class="name">Kütusekulu maanteel:</td>
    <td class="value">6.50 (l/100 km)</td>
  </tr>
<tr>
    <td class="name">Keskmine kütusekulu:</td>
    <td class="value">8 (l/100 km)</td>
  </tr>
<tr>
    <td class="name">Kütusekulu linnas:</td>
    <td class="value">10.50 (l/100 km)</td>
  </tr>



<tr>
    <td class="name">Pikkus x Laius x Kõrgus:</td>
    <td class="value">5172 x 1945 x 1473 (mm)</td>
  </tr>



<tr>
    <td class="name" valign="top">Muu:</td>
    <td class="value">Eestis arvel, ülevaatus kuni <b>05.2024</b><br>Ostetud riigist: <b>Eesti</b><br>Sõiduki asukoht: <b>Tallinn</b>, Eesti</td>
  </tr>
<tr>
    <td class="name" valign="top">E-mail:</td>
    <td class="value"><a href="mailto:torsten.kihlman@scuderiatallinn.ee?subject=Audi&nbsp;A8 Quattro 55 TFSI&nbsp;3.0 V6&nbsp;sedaan&nbsp;2018">torsten.kihlman@scuderiatallinn.ee</a></td>
  </tr>
<tr>
    <td class="name" valign="top">Kontaktandmed:</td>
    <td class="value">Scuderia Tallinn <br>+372 566 30 469<br>Peterburi tee 50d/1, Tallinn 11415 <br><a href="www.scuderiatallinn.ee" target="_blank">www.scuderiatallinn.ee</a></td>
  </tr>
</tbody></table>    </div>
      <div class="DetailImages"><!-- IMAGES CONTENT BEGIN -->
<a name="vehicleImages"></a>
<div id="vehicleImagesContainerDiv">
<div id="vehicleImagesContentDiv">
<div class="vehicleImageDiv0"><a href="https://img12.img-bcg.eu/auto24/560/980/175747980.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/980/175747980.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/981/175747981.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv1"><a href="https://img12.img-bcg.eu/auto24/560/976/175747976.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/976/175747976.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/977/175747977.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv0"><a href="https://img12.img-bcg.eu/auto24/560/984/175747984.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/984/175747984.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/985/175747985.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv1"><a href="https://img12.img-bcg.eu/auto24/560/999/175747999.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/999/175747999.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/001/175748001.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv0"><a href="https://img12.img-bcg.eu/auto24/560/988/175747988.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/988/175747988.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/989/175747989.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv1"><a href="https://img12.img-bcg.eu/auto24/560/016/175748016.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/016/175748016.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/017/175748017.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv0"><a href="https://img12.img-bcg.eu/auto24/560/004/175748004.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/004/175748004.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/005/175748005.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv1"><a href="https://img12.img-bcg.eu/auto24/560/992/175747992.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/992/175747992.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/993/175747993.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv0"><a href="https://img12.img-bcg.eu/auto24/560/994/175747994.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/994/175747994.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/996/175747996.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv1"><a href="https://img12.img-bcg.eu/auto24/560/008/175748008.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/008/175748008.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/009/175748009.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv0"><a href="https://img12.img-bcg.eu/auto24/560/012/175748012.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/012/175748012.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/013/175748013.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv1"><a href="https://img12.img-bcg.eu/auto24/560/020/175748020.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/020/175748020.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/021/175748021.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv0"><a href="https://img12.img-bcg.eu/auto24/560/028/175748028.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/028/175748028.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/029/175748029.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv1"><a href="https://img12.img-bcg.eu/auto24/560/024/175748024.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/024/175748024.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/025/175748025.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv0"><a href="https://img12.img-bcg.eu/auto24/560/032/175748032.jpg" onclick="imageview('https://img12.img-bcg.eu/auto24/560/032/175748032.jpg', 'auto_pilt', '1250', '834'); return false;"><img src="https://img12.img-bcg.eu/auto24/320/033/175748033.jpg" border="0" width="320" height="214" alt="image_1711199183"></a></div><div class="vehicleImageDiv">
      <a style="text-decoration: none;" href="mailto:info@auto24.ee?subject=autoriõigus ja sui generis õigus">©&nbsp;2024</a>
    </div>	</div>
</div></div>
</div>
</div>`;
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: htmlContent,
      }}
    ></div>
  );
};




export default function Template() {

  window.auto24Callback = auto24Callback;
  const [aTagLinks, setATagLinks] = useState([]);

  const auto24Callback = () => {
    console.log("auto24Callback");

    const aTags = document.querySelectorAll("#vehicleImagesContentDiv a");
    const links = Array.from(aTags).map((aTag) => aTag.href);
    console.log("links from a tags");
    console.log(links);
    setATagLinks(links);
  };

  useEffect(() => {
    const root = document.querySelector("#root");
    const script = document.createElement("script");
    script.type = "text/javascript";

    const javascriptCode = `
      auto24API.setCallback(window.auto24Callback);
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



  return (
    <>
      <PreLoader></PreLoader>
      <div className="auto24" id="auto24Content">
        {/* <DummyComponen /> */}
        <ImageSlider imageLinks={aTagLinks} />
        {divContent}{" "}
      </div>
    </>
  );
}
