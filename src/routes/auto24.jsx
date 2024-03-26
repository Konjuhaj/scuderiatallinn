import { useEffect, useState } from "react";
import CarDetails from "../components/carDetails";
import ImageSlider from "../components/imageSlider";
import PreLoader from "../components/preLoader";

function parseVehicleDetails(htmlTable) {
	const table = document.createElement("table");
	table.innerHTML = htmlTable;

	const data = {};
	const rows = table.querySelectorAll("tr");

	rows.forEach((row) => {
		const cells = row.querySelectorAll("td, th");

		if (cells.length === 2) {
			console.log("Key:", cells[0], "Value:", cells[1]);
			const key = cells[0].textContent.trim().replace(":", "");
			let value = cells[1].textContent.trim();


			if (value.includes("EUR")) {
				const priceAndVAT = value.split("EUR")[1].trim();
				const price = priceAndVAT.split("VAT")[0].trim();
				const vat = priceAndVAT.split("VAT")[1].trim();
				if (!data.hasOwnProperty("Price")) {
					if (price.includes("Price includes")) {
						data["Price"] = price.split("Price includes")[0].trim();
					} else {
						data["Price"] = price;
					}
				}
				if (!data.hasOwnProperty("VAT")) {
					data["VAT"] = vat;
				}
			} else if (key === "Mileage") {
				const mileage = value.split(" ")[0].replace(",", "");
				if (!data.hasOwnProperty(key)) {
					data[key] = mileage;
				}
			} else {
				if (!data.hasOwnProperty(key)) {
					data[key] = value;
				}
			}
		}
	});

	return data;
}
const DummyComponen = () => {
	const htmlContent = `
  <table width="100%" cellpadding="0" cellspacing="0" class="vehicle_details">
	<tbody><tr>
		<th class="make_and_model_title">Make and model:</th>
		<th class="make_and_model">Ferrari 612 Scaglietti</th>
	</tr><tr>
			<td class="name">Type:</td>
			<td class="value">passenger car</td>
		</tr>
<tr>
			<td class="name">Bodytype:</td>
			<td class="value">coupe</td>
		</tr>
<tr>
			<td class="name">First registration:</td>
			<td class="value">08/2006</td>
		</tr>



<tr>
			<td class="name">Color:</td>
			<td class="value">black (Nero DS)</td>
		</tr>
<tr>
			<td class="name">Mileage:</td>
			<td class="value">16,600 km<p style="padding: 0px; margin: 0px;">service book</p></td>
		</tr>

<tr>
			<td class="name">Price:</td>
			<td class="value price">
				EUR&nbsp;114,900<br><small class="km">VAT 0%</small>
			</td>
		</tr>




<tr class="field-tehasetahis">
			<td class="name">VIN:</td>
			<td class="value">ZFFAY54B000148255</td>
		</tr>
<tr class="field-reg_nr">
			<td class="name">Reg. number:</td>
			<td class="value">684MKT</td>
		</tr>
<tr>
			<td class="name">Number of doors:</td>
			<td class="value">2</td>
		</tr>
<tr>
			<td class="name">Seats:</td>
			<td class="value">4</td>
		</tr>
<tr>
			<td class="name">Engine:</td>
			<td class="value">5.7 V12 (397 kW)</td>
		</tr>
<tr>
			<td class="name">Base curb weight:</td>
			<td class="value">1940 kg</td>
		</tr>
<tr>
			<td class="name">Gross vehicle weight rating:</td>
			<td class="value">2250 kg</td>
		</tr>
<tr>
			<td class="name">Load carring capacity:</td>
			<td class="value">310 kg</td>
		</tr>
<tr>
			<td class="name">Wheelbase:</td>
			<td class="value">2950 mm</td>
		</tr>
<tr>
				<td class="name">Axle:</td>
				<td class="value">4x2</td>
			</tr>


<tr>
			<td class="name">Transmission:</td>
			<td class="value">automatic </td>
		</tr>

<tr>
			<td class="name">Max speed:</td>
			<td class="value">315 km/h</td>
		</tr>
<tr>
			<td class="name">Fuel:</td>
			<td class="value">petrol</td>
		</tr>







<tr>
			<td class="name">Length x Width x Height:</td>
			<td class="value">4902 x 1951 x 1377 (mm)</td>
		</tr>


<tr>
			<td class="name" valign="top">Equipment:</td>
			<td class="value">				<dl class="used_vehicle_equipment">
										<dt>safety and security equipment</dt>
						<dd>
						power steering (speed-proportional), central locking (with remote control), ABS brakes, airbag, anti-theft alarm system, immobilizer, stability control, traction control, third brake light, rain sensor						</dd>
												<dt>comfort equipment</dt>
						<dd>
						climate control, automatic anti-dazzle mirrors (inner), parking aid (front, rear), mirrors in sunshields						</dd>
												<dt>interior</dt>
						<dd>
						leather interior, electrically adjustable seats (2x with memory), adjustable seat height (driver's seat, front passenger seat), 2x seat heating, leather steering wheel, multifunctional steering wheel, gear change from steering wheel, steering wheel adjustment (height and depth, electrical, with memory), black roof liner, rear armrest, cup holders, interior mats (textile)						</dd>
												<dt>audio, video, communication</dt>
						<dd>
						BOSE car stereo, onboard computer						</dd>
												<dt>tires and wheels</dt>
						<dd>
						summer tires, light alloy wheels						</dd>
												<dt>lights</dt>
						<dd>
						Xenon headlight (low beam), headlight washers						</dd>
												<dt>other equipment</dt>
						<dd>
						12v power outlet, rear window heating						</dd>
										</dl>
				</td>
		</tr>
<tr>
			<td class="name" valign="top">Other:</td>
			<td class="value">Registered in Estonia, inspection valid until <b>08.2023</b><br>Brought from: <b>Germany</b><br>Location of a vehicle: <b>Tallinn</b>, Estonia<br>- Väga pika Eesti ajalooga sõiduk, kuid talvel pole sõitnud
- Sama omanik Eestis aastast 2007
- Äsja tehtud suur hooldus Soome Ferrari Esinduses
- Uus sidur
- Uus esiklaas
- Uued rehvid
- Seisukord nagu uus auto</td>
		</tr>
<tr>
			<td class="name" valign="top">E-mail:</td>
			<td class="value"><a href="mailto:torsten.kihlman@scuderiatallinn.ee?subject=Ferrari&nbsp;612 Scaglietti&nbsp;5.7 V12&nbsp;coupe&nbsp;2006">torsten.kihlman@scuderiatallinn.ee</a></td>
		</tr>
<tr>
			<td class="name" valign="top">Contact:</td>
			<td class="value">Scuderia Tallinn <br>+372 566 30 469<br>Peterburi tee 50d/1, Tallinn 11415 <br><a href="www.scuderiatallinn.ee" target="_blank">www.scuderiatallinn.ee</a></td>
		</tr>
</tbody></table>`;
	return (
		<div
			dangerouslySetInnerHTML={{
				__html: htmlContent,
			}}
		></div>
	);
};

export default function Template() {
	const [imageLinks, setImageLinks] = useState([]);
	const [carDetails, setCarDetails] = useState({});
	const auto24Callback = () => {
		console.log("auto24Callback");
		const aTags = document.querySelectorAll("#vehicleImagesContentDiv a");
		const imageLinks = Array.from(aTags)
			.map((aTag) => aTag.href)
			.filter((link) => link.toLowerCase().endsWith(".jpg"));
		setImageLinks(imageLinks);

		setCarDetails(
			parseVehicleDetails(document.querySelector(".vehicle_details").innerHTML)
		);
	};
	window.auto24Callback = auto24Callback;
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
			<ImageSlider imageLinks={imageLinks} />
			{/* <DummyComponen /> */}
			<CarDetails carDetails={carDetails} />
			<div className="auto24" id="auto24Content">
				{divContent}{" "}
			</div>
		</>
	);
}
