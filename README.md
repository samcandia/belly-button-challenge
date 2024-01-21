# Background

I built an interactive dashboard to explore the [Belly Button Biodiversity dataset](https://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

# Steps Taken
1) Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in an individual.

    * Used `sample_values` as the values for the bar chart.

    * Used `otu_ids` as the labels for the bar chart.

    * Used `otu_labels` as the hovertext for the chart.
      
2) Created a bubble chart that displays each sample.

    * Used `otu_ids` for the x values.

    * Used `sample_values` for the y values.

    * Used `sample_values` for the marker size.

    * Used `otu_ids` for the marker colors.

    * Used `otu_labels` for the text values.

3) Displayed the sample metadata, i.e., an individual's demographic information.

4) Updated all the plots when a new sample is selected.

   <img width="545" alt="image" src="https://github.com/samcandia/belly-button-challenge/assets/145384304/0227f6b4-d28b-4817-b327-28e6c6a8a3fd">


