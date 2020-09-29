//////Use D3 to get JSON data
function getBBData(sample){
    d3.json("samples.json").then(function(data) {
        console.log(data);
        var metadata = data.metadata;
        console.log(metadata);
        //var samples = data.samples;
       // console.log(samples);
        var name = data.names;
        ///Define sample variables
        // var sampleID = samples.id;
        // var otuID = samples.otuID;
        // var sampleValue = samples.sampleValue;
        // var otuLabel = samples.otuLabel;


        //filter?
      });
   
///////////////Build plots from dropdown selection////////////
//function buildPlots(sample) {
//////Create dropdown variable to filter data
// function init(){
//     //d3.event.preventDefault();
//     var id_select = d3.select("#selDataset");
//     d3.json("samples.json").then((data) => {
//         name.forEach((sample) => {id_select
//            .append("selection")
//            .text(sample)
//            .property("value", sample);
//         });   
//        var defaultSample = id_select[0];
//        buildPlots(defaultSample);
//        getBBData(defaultSample);
//     });
//   }
//       function dropdownSelection (newSample) {
//       buildPlots(newSample);
//       getBBData(newSample);
//   }
///////////////
///////////////Build Bar chart from dropdown////////////
//   function buildPlots(sample) {
//         var barChart ={
//         type: "bar",
//         orientation: "h",
//         x: sampleValue.slice(0,10).reverse,
//         y: otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse,
//         text: otuLabel.slice(0,10).reverse,
//     };
//     var barLayout = {
//         title: "Top 10 OTUs Found",
//         margin: { t: 50, l: 100 }
//     };
//     Plotly.newPlot("bar", barChart, barLayout);
///////////////
// ///////////////Build bubble Chart/////////
      
    // var bubbleChart = {
    //     x: otu_ids,
    //     y: sample_values,
    //     text: otu_labels,
    //     mode: "markers",
    //     marker: {
    //         size: sample_values,
    //         colorscale: "tropic"
    //     }
    // }
    // var bubbleLayout = {
    //         title: "sample",
    //         margin: {t:50},
    //         hovermode: "closest",
    //         xaxis: { title: "OTU ID" },
    //         margin: { t:50}    
    //     };
    //    Plotly.newPlot("bubble", bubbleChart, bubbleLayout);
///////////////
///////////////////////**Bonus** Build Gauge////////
//     buildGaugeChart(wfreq)
//         var gaugeChart = {
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
//      Plotly.newPlot('gauge', data, layout);
//      };
//}
}
//init();