let mmap = L.map('map').setView([-1.831239,-78.183403], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
  foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}).addTo(mmap);




// read Excel file and convert to json format using fetch
fetch('./tweets.xlsx')
  .then(function (res) {
    /* get the data as a Blob */
    if (!res.ok) throw new Error("fetch failed");
    return res.arrayBuffer();
  })
  .then(function (ab) {
    /* parse the data when it is received */
    var data = new Uint8Array(ab);
    var workbook = XLSX.read(data, {
      type: "array"
    });

    /* *****************************************************************
    * DO SOMETHING WITH workbook: Converting Excel value to Json       *
    ********************************************************************/
    var first_sheet_name = workbook.SheetNames[0];
    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];

    var _JsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    /************************ End of conversion ************************/
    /************************ El JSON ************************/
    //console.log(_JsonData);
    let twtIcon = L.icon({
    iconUrl: 'twt.png',
    shadowUrl: '',

    iconSize:     [19, 42], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
    for(tweet of _JsonData){
      let id=tweet["id"];
      let lat=tweet["latitude"];
      let lon=tweet["longitude"];
      if(lat!=undefined && lon!=undefined){
        console.log(id);
        console.log(lat);
        console.log(lon);
        let coordenadas=[lat,lon];
        L.marker(coordenadas, {icon: twtIcon}).addTo(mmap);
      }

    }
  });