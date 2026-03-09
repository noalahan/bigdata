frame = {
  min: [-2, -46, -9, 26, 24, 19, 7, 5, 27, 22, -46],
  max: [3, -39, -2, 30, 29, 24, 11, 11, 29, 28, 30],
};

var range = "";
var country = "";

$(document).ready(function () {
  $("#knit12").hide();
  $("#knit10").hide();
  $("#flex").hide();
  country = "";

  // country selector
  $("#country").change(function (event) {
    country = event.target.value;
    graph(country, range);
  });

  // mode selector
  $("#mode").change(function (event) {
    range = event.target.value;
    graph(country, range);
  });

  // range selector
  $("#range").change(function (event) {
    range = event.target.value;
    allGraph(range);
  });
});

// -----------------------------------------------------
function graph(name, mode) {
  // only graph if both inputs were selected
  if (name == "" || mode == "") {
    return;
  }

  // $("body").css("background-color", "black");
  $("#knit12").show();
  $("#knit10").hide();
  $("#flex").hide();

  // clear out existing graph
  d3.selectAll("rect").remove();

  // set the dimensions and margins of the graph
  var width = $(document).width(),
    height = $(document).height();

  // append the svg object to the body of the page
  var svg = d3
    .select("#my_dataviz")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(0, 0)");

  //Read the data
  d3.csv(name + ".csv", function (data) {
    var years = d3
      .map(data, function (d) {
        return d.year;
      })
      .keys();
    var days = d3
      .map(data, function (d) {
        return d.days;
      })
      .keys();

    // Build X scales and axis:
    var x = d3.scaleBand().range([0, width]).domain(years);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain")
      .remove();

    // Build Y scales and axis:
    var y = d3.scaleBand().range([0, height]).domain(days);
    svg.append("g").call(d3.axisLeft(y).tickSize(0)).select(".domain").remove();

    // Build color scale
    if (mode == "diff") {
      var myColor = d3
        .scaleSequential()
        .interpolator(d3.interpolatePurples)
        .domain([0, 20]);
    } else {
      var myColor = d3
        .scaleSequential()
        .interpolator(d3.interpolateRdYlBu)
        .domain([52, -72]);
    }

    // add the squares
    svg
      .selectAll()
      .data(data, function (d) {
        return d.year + ":" + d.days;
      })
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(d.year);
      })
      .attr("y", function (d) {
        return y(d.days);
      })
      .attr("width", x.bandwidth())
      .attr("height", y.bandwidth())
      .style("fill", function (d) {
        if (mode == "min") {
          return myColor(d.min);
        } else if (mode == "max") {
          return myColor(d.max);
        } else if (mode == "diff") {
          return myColor(d.diff);
        }
      });
  });
}

// -----------------------------------------------------
function allGraph(range) {
  min = frame.min[range];
  max = frame.max[range];
  console.log(range);
  $("#knit12").hide();
  $("#knit10").show();
  $("#flex").show();

  // clear out existing graph
  d3.selectAll("rect").remove();

  // set the dimensions and margins of the graph
  var width = $(document).width(),
    height = $(document).height();

  // append the svg object to the body of the page
  var svg = d3
    .select("#my_dataviz")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(0, 0)");

  //Read the data
  d3.csv("All.csv", function (data) {
    // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
    var years = d3
      .map(data, function (d) {
        return d.year;
      })
      .keys();
    var countries = d3
      .map(data, function (d) {
        return d.name;
      })
      .keys();

    // Build X scales and axis:
    var x = d3.scaleBand().range([0, width]).domain(years);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain")
      .remove();

    // Build Y scales and axis:
    var y = d3.scaleBand().range([0, height]).domain(countries);
    svg.append("g").call(d3.axisLeft(y).tickSize(0)).select(".domain").remove();

    // Build color scale
    var myColor = d3
      .scaleSequential()
      .interpolator(d3.interpolateRdYlBu)
      .domain([max, min]);

    // add the squares
    svg
      .selectAll()
      .data(data, function (d) {
        return d.year + ":" + d.name;
      })
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(d.year);
      })
      .attr("y", function (d) {
        return y(d.name);
      })
      .attr("width", x.bandwidth())
      .attr("height", y.bandwidth())
      .style("fill", function (d) {
        return myColor(d.temp);
      });
  });
}
