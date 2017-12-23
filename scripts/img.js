

function clearTxt() {
    // document.getElementById("TextArea").value = ""
    // svg.selectAll(".explanation").remove(); 
    // svg.selectAll(".boxes").remove(); 
    // chart_svg.selectAll(".explanation_frame").attr("height", explanation_height);
    // chart_svg.selectAll(".page_frame").attr("height", frame_height);
}

var hidRect;
var max_y = 100;
var each_time_sec;
// var topic_distance;
var colors = d3.scaleOrdinal(d3.schemeCategory10); 

var w_size = window,
    d_size = document,
    e_size = d_size.documentElement,
    g_size = d_size.getElementsByTagName('body')[0];
  
d3.select(window).on('resize.updatesvg', updateWindow);

var svg = d3.select("#chartDiv").append("svg"),
    margin = {top: 20, right: 50, bottom: 20, left: 50};
  
  svg.attr("width", "1820");
  svg.attr("height", "1000");
  svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
var width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,    
  chart_svg = svg.append("g").attr("class","svg_chart"); // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var points_size = 10;
var Axis_room = 50;


var dataXRange = {min: 0, max: 6000};
var dataYRange = {min: 0, max: max_y};


var x_scale = d3.scaleLinear()
    .domain([dataXRange.min, dataXRange.max])
    .range([margin.left + points_size, width - points_size]);

var y_scale = d3.scaleLinear()
  .domain([dataYRange.min, dataYRange.max])
    .range([height - dataYRange.max, 0 + points_size]);



    d3.selection.prototype.moveToBack = function() {
        return this.each(function() {
            var firstChild = this.parentNode.firstChild;
            if (firstChild) {
                this.parentNode.insertBefore(this, firstChild);
            }
        });
    };
  
  d3.selection.prototype.moveToFront = function() {
    return this.each(function(){
      this.parentNode.appendChild(this);
    });
  };
  

  var clearance = 50
  var explanation_x = 550
  var explanation_y = 550
  var explanation_height = 500
  var explanation_width = 580
  var frame_height = height - 100
  var result_height = 100

  var page_frame = chart_svg.append("g").append("rect").attr("class","page_frame")
          .attr("x", 5)
          .attr("y", 5)
          .attr("rx", 10)
          .attr("ry", 10)
          .attr("width", width)
          .attr("height", frame_height)
          .attr("fill", "lightblue")
          .style("fill-opacity",0.05)
          .style("stroke","blue")
          .style("stroke-opacity",0.5);

  chart_svg.append('text')
        .text("Instance Explanation:")
        .attr('dy','0.35em')
        .attr('transform', 'translate(' + explanation_x+ ','+(explanation_y - 20)+')')

  chart_svg.append('text')
        .text("Example images:")
        .attr('dy','0.35em')
        .attr('transform', 'translate(' + explanation_x+ ','+(margin.top)+')')

  var explanation_frame = chart_svg.append("g").append("rect").attr("class","explanation_frame")
          .attr("x", explanation_x)
          .attr("y", explanation_y)
          .attr("rx", 5)
          .attr("ry", 5)
          .attr("width", explanation_width)
          .attr("height", explanation_height)
          .attr("fill", "white")
          .style("fill-opacity",1)
          .style("stroke","gray")
          .style("stroke-opacity",0.5);

var img = chart_svg.append("g").selectAll("image_exp").data([0]);  
    
    img.enter()
        .append("svg:image")
        .attr("class", "image_exp")
        .attr("xlink:href", "./data/result2/input.png")  // result1/
        .attr("x", explanation_x)
        .attr("y", explanation_y)
        .attr("width", "256")
        .attr("height", "256"); 

    img.enter()
        .append("svg:image")
        .attr("class", "image_exp")
        .attr("xlink:href", "./data/result2/segmentation.jpg")  // result1/
        .attr("x", explanation_x)
        .attr("y", explanation_y)
        .attr("width", "256")
        .attr("height", "256")
        .attr("opacity", 0.8); 
        // <rect ... fill="#044B94" fill-opacity="0.4"/>



  // d3.json("./data/result2/heat_json.json", function(heatmap_jsondata) {

    
  //       // chart_svg.append("g").append("rect").attr("class","highlights-"+(4*i).toString())

  //     chart_svg.append("g").attr("class","heatmap").selectAll(".heatmap").data(heatmap_jsondata).enter()
  //         .append("rect").attr("class","heatmap")
  //         .attr("class", function(d,i){ return 'heatmap-'+ i })
  //         .attr("x", function(d,i){ return explanation_x + 4*d.x })
  //         .attr("y", function(d,i){ return explanation_x + 4*d.y })
  //         .attr("width", 4.01)
  //         .attr("height", 4.01)
  //         .attr("fill", function(d,i){

  //           if (i > 50){
  //             return "red"
  //           } else{
  //             return "blue"
  //           }
  //         })
  //         .style("fill-opacity", function(d,i){ return parseInt(d.score)/255});
  // });

    // for (i=0; i < 125; i++){
    //   for (j=0; j < 125; j++){
    //     chart_svg.append("g").append("rect").attr("class","highlights-"+(4*i).toString())
    //       .attr("x", explanation_x + 4*i)
    //       .attr("y", explanation_y + 4*j)
    //       .attr("width", 4.01)
    //       .attr("height", 4.01)
    //       .attr("fill", function(){

    //         if (i > 50){
    //           return "red"
    //         } else{
    //           return "blue"
    //         }
    //       })
    //       .style("fill-opacity", function(){

    //         if (i > 50){
    //           return 0.3
    //         } else{
    //           return 0.1
    //         } 
    //       });
    //   }
    // }


function readData(){

  // Reading the model result

    

  d3.json("./data/rf_model.json", function(jsondata) {
    
    list_height = jsondata.length * 55 / 2

    var result_frame = chart_svg.append("g").append("rect")
            .attr("x", 0 )
            .attr("y", list_height + clearance/2)
            .attr("rx", 6)
            .attr("ry", 6)
            .attr("width", 2 + clearance)
            .attr("height", result_height)
            .attr("fill", "green")
            .style("fill-opacity",0.1)
            .style("stroke","green");

    chart_svg.append('text')
          .text("Accuracy: ")
          .attr('dy','0.35em')
          .attr('transform', 'translate(' + ( clearance/2)+ ','+( list_height + clearance)+')')

    chart_svg.append('text')
          .text("Model: ")
          .attr('dy','0.35em')
          .attr('transform', 'translate(0,'+(20)+')')


    updateWindow()
    
  });
}

function updateWindow(){
               
    // zoomRect.call(zoom.transform, d3.zoomIdentity);
      
    var chart_x = w_size.innerWidth || e_size.clientWidth || g_size.clientWidth;
    var chart_y = w_size.innerHeight || e_size.clientHeight || g_size.clientHeight;
    
    // margin.bottom = (1/3) * chart_y;
    
    width = chart_x - margin.left - margin.right;
    height = chart_y - margin.top - margin.bottom;    
    
    console.log("height: ", height)
    
    if (height < 400) {
      height = height + 1200
    }else if(height < 900) {
      height = height + 500
    }
    console.log("width: ", width)
    if (width < 1200) {
      width = width + 1500;
    }else if (width < 1700) {
      width = width + 500;
    }
    
    height = height;
    width = width;
    
    svg.attr("width", width);
    svg.attr("height", height);
    svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    chart_svg.attr("width", width);
    chart_svg.attr("height", height);
    
    chart_svg.selectAll(".page_frame").attr("width", width - 50);
    chart_svg.selectAll(".page_frame").attr("height", height - 50);

    // svg.selectAll(".hide_rect").attr("width", width).attr("y", height - Axis_room + 1);

    // chart_svg.selectAll(".time_boxs").attr("x", function(d){return x_scale(d.axis_distance);}).attr("y", (height - Axis_room + 10  ));
  }
  