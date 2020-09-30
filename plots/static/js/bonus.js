///////////////////////**Bonus** Build Gauge////////
//////Use D3 to get JSON data
var jsonData;
//function getBBData(sample){
    d3.json("samples.json").then(function(data) {
        jsonData = data;
        console.log(data);
        var metadata = data.metadata;
        //console.log(metadata);
        var id = metadata.id;
init(id);
      });

      function init(id){
        //d3.event.preventDefault();
        var id_select = d3.select("#selDataset");
            names.forEach((id) => {id_select
               .append("option")
               .text(id)
               .property("value", id);
            });   
           optionChanged(id[0]);
      }
    function optionChanged (newID) {
        metaData(newID);
        buildPlots(newID);
        //   getBBData(newSample);
       }


function buildGauge(newID) {
     var wfreq = metadata.wfreq;
        var gaugeChart = {
            // domain: { x: , y: },
            // value: 250,
            // title: { text: "" },
            // type: "indicator",
            // mode: "gauge+number+delta",
            // delta: { reference: 380 },
            // gauge: {
            //  axis: { range: [null, 500] },
            //  steps: [
            //     { range: [0, 250], color: "lightgray" },
            //     { range: [250, 400], color: "gray" }
            // ],
            // threshold: {
            //     line: { color: "red", width: 4 },
            //     thickness: 0.75,
            //     value: 490
//         a}
//         var gaugeLayout = {
            // width: 500,
            // height: 400,
            // margin: { t: 25, r: 25, l: 25, b: 25 },
            // paper_bgcolor:
//         }
     Plotly.plot('gauge', data, layout);
     };
 }