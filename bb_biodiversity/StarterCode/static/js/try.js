//////Use D3 to get JSON data
function getBBData(sample){
    d3.json("samples.json").then(function(data) {
        console.log(data);
        var metadata = data.metadata;
        console.log(metadata);
        var samples = data.samples;
        //console.log(samples);
        ////Define metadata variables
        // var id = metadata.id;
        // var ethnicity = metadata.ethnicity;
        // var gender = metadata.gender;
        // var age = metadata.age;
        // var location = metadata.location;
        // var bbtype = metadata.bbtype;
        // var wfreq = metadata.wfreq;

        ///Define sample variables
        // var sampleID = samples.id;
        // var otuID = samples.otuID;
        // var sampleValue = samples.sampleValue;
        // var otuLabel = samples.otuLabel;
      });
    
    }
///////////////Build plots from dropdown selection////////////
 ////Create dropdown variable to filter data
// function init(){
//     //d3.event.preventDefault();
//     var id_select = d3.select("#selDataset").value;
//     d3.json("samples.json").then((data) => {
//         var name = data.names;
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
//   function dropdownSelection (newSample) {
//       buildPlots(newSample);
//       getBBData(newSample);
//   }

// init();



// function buildPlots(sample) {
//     /////////Build Bar Chart 
//         var barChart ={
//             x: sampleValue.slice(0,10).reverse(),
//             y: otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
//             type: "bar",
//             orientation: "h",
//             text: otuLabel.slice(0,10).reverse(),
//         };
    
//         var barLayout = {
//             title: "Top 10 OTUs Found",
//             margin: { t: 50, l: 100 }
//         };
    
//         Plotly.plot("bar", barChart, barLayout);
        
       
  


////////Build bubble Chart

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
    //         margin: {t: 0 },
    //         hovermode: "closest",
    //         xaxis: { title: "OTU ID" },
    //         margin: { t:50}
        
    //     };
    //    Plotly.newPlot("bubble", bubbleChart, bubbleLayout);


///////////**Bonus** Build Gauge////////
//     buildGaugeChart(.wfreq)
//         var gaugeChart = {

//         }
//         var gaugeLayout = {

//         }
// Plotly.newPlot('gauge', data, layout);

// };
    











// //////Use D3 to get JSON data
// function getBBData(sample){
//     d3.json("samples.json").then(function(data) {
//          //console.log(data);
//         var metadata = data.metadata;
//         //console.log(metadata);
//         var samples = data.samples;
//         //console.log(samples);
//         ////Define metadata variables
//         var id = metadata.id;
//         var ethnicity = metadata.ethnicity;
//         var gender = metadata.gender;
//         var age = metadata.age;
//         var location = metadata.location;
//         var bbtype = metadata.bbtype;
//         var wfreq = metadata.wfreq;

//         ///Define sample variables
//         var sampleID = samples.id;
//         var otuID = samples.otuID;
//         var sampleValue = samples.sampleValue;
//         var otuLabel = samples.otuLabel;
//       });
    


//  ////Create dropdown variable to filter data
//  function init()    {
//     //function dropdownSelect(sample){}
//         d3.event.preventDefault();
//         var id_select = d3.select("#selDataset").value;

//         d3.json("samples.json").then((data) => {
//             var name = data.names;
//             name.forEach((sample) => {id_select
//             .append("option")
//             .text(sample)
//             .property("value", sample);
//             });  
//         /////Set default sample value 
//         var defaultSample = id_select[0];
//         getBBData(defaultSample);
//         //dropdownSelect(defaultSample);
//         //buildPlots(defaultSample);
//         });
//     }
// init();


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

        
//     }
        // var bubbleChart = {
        //     x: otu_ids,
        //     y: sample_values,
        //     text: otu_labels,
        //     mode: "markers",
        //     marker: {
        //         size: sample_values,
        //         colorscale: "tropic"
        //     }
        // var bubbleLayout = {
            //     title: "sample",
            //     margin: {t: 0 },
            //     hovermode: "closest",
            //     xaxis: { title: "OTU ID" },
            //     margin: { t:50}
            //
        
         //   Plotly.newPlot("bubble", bubbleChart, bubbleLayout);
        //};
        //     };


// }













//To use unpack function
//  function unpack(rows, index) {
//     return rows.map(function(row) {
//       return row[index];
//     });
//   }


// //console.log(data);
// var metadata = data.metadata;
// //console.log(metadata);
// var samples = data.samples;
// //console.log(samples);
// 





// function buildMetadata(sample) {
//     d3.json("samples.json").then((data) => {
//       var metadata = data.metadata;
//       // Filter the data for the object with the desired sample number
//       var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//       var result = resultArray[0];
//       // Use d3 to select the panel with id of #sample-metadata
//       var PANEL = d3.select("#sample-metadata");
//       // Use `.html("") to clear any existing metadata
//       PANEL.html("");
//       // Use Object.entries to add each key and value pair to the panel
//       // Hint: Inside the loop, you will need to use d3 to append new
//       // tags for each key-value in the metadata.
//       Object.entries(result).forEach(([key, value]) => {
//         PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
       
//       });
//       // BONUS: Build the Gauge Chart
//       buildGauge(result.wfreq);
//     });
//    }
//    function buildCharts(sample) {
//     d3.json("samples.json").then((data) => {
//       var samples = data.samples;
//       var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
//       var result = resultArray[0];
//       var otu_ids = result.otu_ids;
//       var otu_labels = result.otu_labels;
//       var sample_values = result.sample_values;
     
//       console.log(sample_values);
//       var bubbleLayout = {
//         title: "sample",
//         margin: {t: 0 },
//         hovermode: "closest",
//         xaxis: { title: "OTU ID" },
//         margin: { t:30}
//       };
//       var bubbleData = [
//         {
//           x: otu_ids,
//           y: sample_values,
//           text: otu_labels,
//           mode: "markers",
//           marker: {
//             size: sample_values,
//             colorscale: "Earth"
//           }
//         }
//       ];

//       Plotly.newPlot("bubble", bubbleData, bubbleLayout);
 
//         var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
//         console.log(yticks);
 
//         var barData = [
//           {
//             y: yticks,
//             x: sample_values.slice(0, 10).reverse(),
//             text: otu_labels.slice(0, 10).reverse(),
//             type: "bar",
//             orientation: "h",
//           }
//         ];
//         var barLayout = {
//           title: "Top 10 Bacteria Cultures Found",
//           margin: { t: 30, l: 150 }
//         };
//         Plotly.newPlot("bar", barData, barLayout);
//       });
//     }
//     function init() {
//       // Grab a reference to the dropdown select element
//       var selector = d3.select("#selDataset");
//       // Use the list of sample names to populate the select options
//       d3.json("samples.json").then((data) => {
//         var sampleNames = data.names;
//         sampleNames.forEach((sample) => {
//           selector
//             .append("option")
//             .text(sample)
//             .property("value", sample);
//         });
//         // Use the first sample from the list to build the initial plots
//         var firstSample = sampleNames[0];
//         buildCharts(firstSample);
//         buildMetadata(firstSample);
//       });
//      }
//      function newSelect(newSample) {
//         // Fetch new data each time a new sample is selected
//         buildCharts(newSample);
//         buildMetadata(newSample);
//       }
//      // Initialize the dashboard
//      init();
 