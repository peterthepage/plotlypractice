var topSevenCityNames = cityGrowths.map(city => city.City).slice(0,7);
var topSevenCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016)).slice(0,7);

var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: 'bar'
};
var data = [trace];
var layout = {
    title: 'Most Rapidly Growing Cities',
    xaxis: {title: 'City'},
    yaxis: {title: 'Population Growth, 2016-2017'}
};
Plotly.newPlot('bar-plot', data, layout);