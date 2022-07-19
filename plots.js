function init() {
    var selector = d3.select('#selDataset');

    d3.json('samples.json').then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
                .append('option')
                .text(sample)
                .property('value', sample);
        });
    })};
    init();
    function optionChanged(newSample) {
        //Prints id number to the console
        console.log(newSample);
        //Fetch new data each time a new sample is selected
        buildMetadata(newSample);
        buildCharts(newSample);
    }
    function buildMetadata(sample) {
        //Reads in the dataset referred to as 'data'
        d3.json('samples.json').then((data) => {
            //metadata array is assigned variable metadata
            var metadata = data.metadata;
            //filter for object in array whose id matches ID number passed into metadata as sample
            var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
            //First item in array is selected and assigned variable 'result'
            var result = resultArray[0];
            //id of Demorgraphic Info panel is sample-metadata, d3 selects div, variable PANEL is assigned to it.
            var PANEL = d3.select('#sample-metadata');
            //Contents of panel are cleared when another ID number is chosen
            PANEL.html("");
            //Chained methods to append a H6 heading to panel and print location
            PANEL.append('h6').text(result.id);
            PANEL.append('h6').text(result.ethnicity);
            PANEL.append('h6').text(result.gender);
            PANEL.append('h6').text(result.age);
            PANEL.append('h6').text(result.location);
            PANEL.append('h6').text(result.bbtype);
            PANEL.append('h6').text(result.wfreq);
    });
    }