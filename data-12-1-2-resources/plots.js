//Plotly.newPlot("plotArea", [{x: [5, 10, 15], y: [10, 20, 30]}]);
//var trace = [{
//    x: ['burrito', 'pizza', 'chicken'],
 //   y:[10, 18, 5],
//    type: 'bar'
//}];
//var layout = {
  //  title: 'Luncheon Survey',
    //xaxis: {title: 'Food Option'},
   // yaxis: {title: 'Number of Respondents'}
//};
//Plotly.newPlot('plotArea', trace, layout);
var trace = {
    //labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    x:[11, 17, 5, 8, 23, 15, 2, 7],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'scatter',
    mode: 'markers'
};
//var data = [trace]
var layout = {
    title: "Pie Chart",
};
Plotly.newPlot('plotArea', [trace], layout);