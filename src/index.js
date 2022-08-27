import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

var weather = [
  { placename: "東京", temperature: 30 },
  { placename: "神奈川", temperature: 27 },
  { placename: "千葉", temperature: 32 }
];

weather.sort(function (a, b) {
  return a.temperature - b.temperature;
});

/* const weatherInfo = weather.map(weather => weather.placename)
  console.log(weatherInfo);
   */
for (var i = 0; i < weather.length; i++) {
  console.log(weather[i].placename + "は" + weather[i]["temperature"]);
}
