//Use D3 to read in json object
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
// Initialize dropdown menu
function init(){
// Use d3 to select the HTML element ID
    let dropdown = d3.select("#selDataset")
// fetch name id from json object, 
    d3.json(url).then((data) => {
    let nameid = data.names
    nameid.forEach((id) => {dropdown.append("option").text(id).property("value", id)
    })
//Assign first sample from list
    let firstid = nameid[0]
// build charts 
    demographic(firstid)
    barchart(firstid)
    bubble(firstid)

    })
    }   

function demographic(sampleid) {
    //retreive data 
    d3.json(url).then((data) => {console.log(`Data: ${data}`)
        let metadata = data.metadata
    //filter the metadata by each sampleid
        let filtereddata = metadata.filter(meta => meta.id == sampleid)
    //assign the first sample id to a variable
        let first = filtereddata[0]
        console.log(first)
    // clear out metadata for next use
        d3.select("#sample-metadata").html("")
        Object.entries(first).forEach(([key, value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`)
        })
    })
}

init();
function barchart(sampleid) {
    //retreive data 
    d3.json(url).then((data) => {console.log(`Data: ${data}`)
        let samples = data.samples
        let filtered = samples.filter(sample => sample.id == sampleid)
        let firstset = filtered[0]
    //trace data, get the top 10 ids, plot
        let trace1 = [{
            x: firstset.sample_values.slice(0,10).reverse(),
            y: firstset.otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
            text: firstset.otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"}]

        let barlayout = {
            title: "Top 10 Bacteria Found"
            };
        Plotly.newPlot("bar", trace1, barlayout)
    })

    }

function bubble(sampleid) {
    //retreive data 
    d3.json(url).then((data) => {console.log(`Data: ${data}`)
        let samples = data.samples
        let filtered = samples.filter(sample => sample.id == sampleid)
        let firstset = filtered[0]
        let trace1 = [{
            x: firstset.otu_ids,
            y: firstset.sample_values,
            text: firstset.otu_labels,
            mode: "markers",
            marker: {
                size: firstset.sample_values,
                color: firstset.otu_ids,
                colorscale: "Earth"
            }
        }]
        let bubblelayout = {
            title: "Bacteria Per Sample",
            xaxis: {title: "OTU ID"}        };
        Plotly.newPlot("bubble", trace1, bubblelayout)
    })
}

function optionChanged(sampleid) { 
    // Call all functions 
    demographic(sampleid);
    barchart(sampleid);
    bubble(sampleid);
};


init();

