/* globals d3*/
import { syriaData } from "./data.js";
chart1();
chart2();
chart3();
chart4();
chart5();
function chart1() {
  /* Original: https://www.theguardian.com/news/datablog/2013/mar/06/syrian-refugee-crisis-in-numbers*/

  const data = syriaData;

  const margin = { left: 120, right: 50, top: 20, bottom: 50 };
  const width = 700 - margin.left - margin.right;
  const height = 450 - margin.top - margin.bottom;

  const chart = d3
    .select(".chart1")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const x = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.Donations)])
    .rangeRound([0, width]);

  const y = d3
    .scaleBand()
    .paddingInner(0.1)
    .domain(data.map((d) => d.Country))
    .rangeRound([0, height]);

  const xAxis = d3.axisBottom(x).ticks(5, "$,.2r");
  const yAxis = d3.axisLeft(y);

  chart
    .append("g")
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", (d) => y(d.Country))
    .attr("height", y.bandwidth())
    .attr("width", (d) => x(d.Donations))
    .attr("fill", "#7fc97f");

  chart
    .append("g")
    .attr("class", "x-axis axis")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);

  chart.append("g").attr("class", "y-axis axis").call(yAxis);
}

function chart2() {
  /* Original: https://www.theguardian.com/news/datablog/2013/mar/06/syrian-refugee-crisis-in-numbers*/

  const data = syriaData;

  const margin = { left: 120, right: 50, top: 20, bottom: 50 };
  const width = 700 - margin.left - margin.right;
  const height = 450 - margin.top - margin.bottom;

  const chart = d3
    .select(".chart2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const x = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.Donations)])
    .rangeRound([0, width]);

  const y = d3
    .scaleBand()
    .paddingInner(0.1)
    .domain(data.map((d) => d.Country))
    .rangeRound([0, height]);

  const xAxis = d3.axisBottom(x).ticks(5, "$,.2r");
  const yAxis = d3.axisLeft(y);

  chart
    .append("g")
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", (d) => y(d.Country))
    .attr("height", y.bandwidth())
    .attr("width", (d) => x(d.Donations))
    .attr("fill", "#7fc97f");

  chart
    .append("g")
    .attr("class", "x-axis axis")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);

  chart.append("g").attr("class", "y-axis axis").call(yAxis);

  // hide tick values from screen readers

  const svg = d3.select(".chart2").select("svg");
  svg.attr("role", "img");
  svg.attr(
    "aria-label",
    "Bar chart showing donations to Syria's refugees by countries. US donates around 67 million dollars, while EU and Japan donate 30 and 26 million dollars respectively."
  );
  // alternative approach
  // svg.attr("aria-labelledby", "title");
  // svg
  //   .insert("title", ":first-child") // needs to be the first element
  //   .attr("id", "title")
  //   .text(
  //     "Bar chart showing donations to Syria's refugees by countries. US donates around 67 million dollars, while EU and Japan donate 30 and 26 million dollars respectively."
  //   );

  // another approach is to use aria-label
}

function chart3() {
  /* Original: https://www.theguardian.com/news/datablog/2013/mar/06/syrian-refugee-crisis-in-numbers*/

  const data = syriaData;

  const margin = { left: 120, right: 50, top: 20, bottom: 50 };
  const width = 700 - margin.left - margin.right;
  const height = 450 - margin.top - margin.bottom;

  const chart = d3
    .select(".chart3")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const x = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.Donations)])
    .rangeRound([0, width]);

  const y = d3
    .scaleBand()
    .paddingInner(0.1)
    .domain(data.map((d) => d.Country))
    .rangeRound([0, height]);

  const xAxis = d3.axisBottom(x).ticks(5, "$,.2r");
  const yAxis = d3.axisLeft(y);

  chart
    .append("g")
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", (d) => y(d.Country))
    .attr("height", y.bandwidth())
    .attr("width", (d) => x(d.Donations))
    .attr("fill", "#7fc97f");

  chart
    .append("g")
    .attr("class", "x-axis axis")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);

  chart.append("g").attr("class", "y-axis axis").call(yAxis);

  // hide tick values from screen readers
  chart
    .selectAll(".bar")
    .attr("role", "graphics-symbol")
    .attr("aria-roledescription", "bar element")
    .attr("tabindex", 0) // make it focusable element
    .attr("aria-label", (d) => {
      return `${d.Country}'s donation ${parseInt(
        d.Donations / 1000000
      )} million dollars'`;
    });
  chart.selectAll(".axis").attr("aria-hidden", true);

  const svg = d3
    .select(".chart3")
    .select("svg")
    .attr("role", "graphics-document")
    .attr("aria-roledescription", "bar chart");
  svg.attr("tabindex", 0);
  svg.attr(
    "aria-label",
    "Bar chart showing donations to Syria's refugees by countries. US donates around 67 million dollars, while EU and Japan donate 30 and 26 million dollars respectively."
  );
}

function chart4() {
  const data = syriaData;

  const margin = { left: 120, right: 50, top: 20, bottom: 50 };
  const width = 700 - margin.left - margin.right;
  const height = 450 - margin.top - margin.bottom;

  const chart = d3
    .select(".chart4")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const x = d3
    .scaleLinear()
    // .domain([0, d3.max(data, d => d.Donations)])
    .rangeRound([0, width]);

  const y = d3
    .scaleBand()
    .paddingInner(0.1)
    // .domain(data.map(d => d.Country))
    .rangeRound([0, height]);

  const xAxis = d3.axisBottom(x).ticks(5, "$,.2r");
  const yAxis = d3.axisLeft(y);

  const marks = chart.append("g");

  chart
    .append("g")
    .attr("class", "x-axis axis")
    .attr("transform", `translate(0, ${height})`);

  chart.append("g").attr("class", "y-axis axis").call(yAxis);

  update(data, document.querySelector("#measure").value);
  // update
  function update(data, selected) {
    data = data.filter((d) => d[selected]); //remove if field not available
    data.sort((a, b) => b[selected] - a[selected]); // sort
    x.domain([0, d3.max(data, (d) => d[selected])]);
    y.domain(data.map((d) => d.Country));

    marks
      .selectAll(".bar")
      .data(data, (d) => d.Country)
      .join("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("fill", "#7fc97f")
      .transition()
      .duration(750)
      .attr("width", (d) => x(d[selected]))
      .attr("height", y.bandwidth())
      .attr("opacity", 0.5)
      .attr("y", (d) => y(d.Country))
      .attr("opacity", 1.0);

    chart.select(".x-axis").transition().duration(1000).call(xAxis);
    chart.select(".y-axis").transition().duration(1000).call(yAxis);

    if (selected === "GDPPercent") {
      xAxis.ticks(5, "g");
    } else {
      xAxis.ticks(5, "$,.2r");
    }
    // hide tick values from screen readers

    chart.selectAll(".axis").attr("aria-hidden", true);

    // dynamically update the alt text
    chart
      .selectAll(".bar")
      .attr("role", "graphics-symbol")
      .attr("aria-roledescription", "bar element")
      .attr("tabindex", 0) // make it focusable element
      .attr("aria-label", (d) => {
        return selected === "Donations"
          ? `${d.Country}'s donation ${parseInt(
              d.Donations / 1000000
            )} million dollars'`
          : `${d.Country} spent ${d.GDPPercent} percent of its GDP'`;
      });
    const svg = d3
      .select(".chart4")
      .select("svg")
      .attr("role", "graphics-document")
      .attr("aria-roledescription", "bar chart");
    svg.attr("tabindex", 0);
    svg.attr(
      "aria-label",
      selected === "Donations"
        ? "Bar chart showing donations to Syria's refugees by countries. US donates around 67 million dollars, while EU and Japan donate 30 and 26 million dollars respectively."
        : "Bar chart showing the percentage of donations in GDP by countries. Though the amounts given are very small, as a proportion of their GDPs, Norway and Kuwait are the most generous donors."
    );
  }
  // event listener
  document.querySelector("#measure").addEventListener("change", (event) => {
    const selected = event.target.value;
    update(data, selected);
  });
}

function chart5() {
  const data = syriaData;

  const margin = { left: 120, right: 50, top: 20, bottom: 50 };
  const width = 700 - margin.left - margin.right;
  const height = 450 - margin.top - margin.bottom;

  const chart = d3
    .select(".chart5")
    .append("svg")
    .attr("role", "img")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const x = d3
    .scaleLinear()
    // .domain([0, d3.max(data, d => d.Donations)])
    .rangeRound([0, width]);

  const y = d3
    .scaleBand()
    .paddingInner(0.1)
    // .domain(data.map(d => d.Country))
    .rangeRound([0, height]);

  const xAxis = d3.axisBottom(x).ticks(5, "$,.2r");
  const yAxis = d3.axisLeft(y);

  const marks = chart.append("g");

  chart
    .append("g")
    .attr("class", "x-axis axis")
    .attr("transform", `translate(0, ${height})`);

  chart.append("g").attr("class", "y-axis axis").call(yAxis);

  update(data, document.querySelector("#measure2").value);
  // update
  function update(data, selected) {
    data = data.filter((d) => d[selected]); //remove if field not available
    data.sort((a, b) => b[selected] - a[selected]); // sort
    x.domain([0, d3.max(data, (d) => d[selected])]);
    y.domain(data.map((d) => d.Country));

    marks
      .selectAll(".bar")
      .data(data, (d) => d.Country)
      .join("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("fill", "#7fc97f")
      .transition()
      .duration(750)
      .attr("width", (d) => x(d[selected]))
      .attr("height", y.bandwidth())
      .attr("opacity", 0.5)
      .attr("y", (d) => y(d.Country))
      .attr("opacity", 1.0);

    chart.select(".x-axis").transition().duration(1000).call(xAxis);
    chart.select(".y-axis").transition().duration(1000).call(yAxis);

    if (selected === "GDPPercent") {
      xAxis.ticks(5, "g");
    } else {
      xAxis.ticks(5, "$,.2r");
    }
    // hide tick values from screen readers

    chart.selectAll(".axis").attr("aria-hidden", true);

    // dynamically update the alt text
    // chart
    //   .selectAll(".bar")
    //   .attr("role", "graphics-symbol")
    //   .attr("aria-roledescription", "bar element")
    //   .attr("tabindex", 0) // make it focusable element
    //   .attr("aria-label", d => {
    //     return selected === "Donations"
    //       ? `${d.Country}'s donation ${parseInt(
    //           d.Donations / 1000000
    //         )} million dollars'`
    //       : `${d.Country} spent ${d.GDPPercent} percent of its GDP'`;
    //   });
    const svg = d3
      .select(".chart5")
      .select("svg")
      .attr("aria-labelledby", "title");
    svg.attr("tabindex", 0);
    svg.select("#title").remove();

    svg.attr("aria-labelledby", "title");
    svg
      .insert("title", ":first-child") // needs to be the first element
      .attr("id", "title")
      .text(
        selected === "Donations"
          ? "Bar chart showing donations to Syria's refugees by countries. US donates around 67 million dollars, while EU and Japan donate 30 and 26 million dollars respectively."
          : "Bar chart showing the percentage of donations in GDP by countries. Though the amounts given are very small, as a proportion of their GDPs, Norway and Kuwait are the most generous donors."
      );

    // svg.
    // svg.attr(
    //   "aria-label",
    //   selected === "Donations"
    //     ? "Bar chart showing donations to Syria's refugees by countries. US donates around 67 million dollars, while EU and Japan donate 30 and 26 million dollars respectively."
    //     : "Bar chart showing the percentage of donations in GDP by countries. Though the amounts given are very small, as a proportion of their GDPs, Norway and Kuwait are the most generous donors."
    // );
  }
  // event listener
  document.querySelector("#measure2").addEventListener("change", (event) => {
    const selected = event.target.value;
    update(data, selected);
  });
}
