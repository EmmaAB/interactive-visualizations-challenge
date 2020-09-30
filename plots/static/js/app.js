//////Use D3 to get JSON data
var jsonData;
//function getBBData(sample){
    d3.json("samples.json").then(function(data) {
        jsonData = data;
        console.log(data);
        var metadata = data.metadata;
        //console.log(metadata);
        var names = data.names;
init(names);
      });
   

///////////////Build plots from dropdown selection////////////
//////Create dropdown variable to filter data
 function init(names){
    //d3.event.preventDefault();
    var id_select = d3.select("#selDataset");
        names.forEach((sample) => {id_select
           .append("option")
           .text(sample)
           .property("value", sample);
        });   
       optionChanged(names[0]);
  }
function optionChanged (newSample) {
    metaData(newSample);
    buildPlots(newSample);
    //   getBBData(newSample);
   }
///////////////
////////////Demographic Info Table///
function metaData(sample){
    var demData = jsonData.metadata.filter(x => x.id == sample)[0];
    //console.log(demData);
    var demTable = d3.select("#sample-metadata");
    demTable.html("")
    //Populate Demographic Information Table
    for (const [key, value] of Object.entries(demData)) {
        //console.log(`${key}: ${value}`);
        demTable
            .append("p")
            .text(`${key}: ${value}`)
      };
}
///////////////Build Bar chart from dropdown////////////
   function buildPlots(sample) {
        var samples = jsonData.samples.filter(x => x.id === sample)[0];
        //console.log(samples);
        ///Define sample variables
        var otuID = samples.otu_ids;
        var sampleValue = samples.sample_values;
        var otuLabel = samples.otu_labels;

        var barChart =[{
        type: "bar",
        orientation: "h",
        x: sampleValue.slice(0,10).reverse(),
        y: otuID.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
        text: otuLabel.slice(0,10).reverse(),
        colorscale: "Picnic",
    }];
    var barLayout = {
        title: "Top 10 OTUs Found",
        margin: { t: 50, l: 100 },
        
    };
    Plotly.newPlot("bar", barChart, barLayout);
/////////////
///////////////Build bubble Chart/////////
    var bubbleChart = [{
        x: otuID,
        y: sampleValue,
        text: otuLabel,
        mode: "markers",
        marker: {
            size: sampleValue,
            colorscale: "tropic"
        }
    }]
    var bubbleLayout = {
            title: "sample",
            margin: {t:50},
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
            margin: { t:50}    
        };
       Plotly.newPlot("bubble", bubbleChart, bubbleLayout);
///////////////
}