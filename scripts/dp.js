var width_plus = 0;
var height_plus = 0;
var rules = [];


var div1 = d3.select("body").append("talkbubble")   // Tooltip
		.attr("class", "tooltip")
		.style("opacity", 1)
		.style("position", "absolute")
		.style("text-align", "center")
		.style("width", 100)
		.style("height", 48)
		.style("border-radius", "8px")   // "10% / 10%")
		.style("padding", 2)
		.style("font-size", 12)
		.style("background", "lightblue") // "#1e90ff")
		.style("border", 3)
		.style("pointer-events", "none");

        $(function() {
            $("#allfields li").draggable({
                appendTo: "body",
                helper: "clone",
                cursor: "select",
                revert: "invalid"
            });
            initDroppable($("#TextArea"));
            function initDroppable($elements) {
                $elements.droppable({
                    hoverClass: "textarea",
                    accept: ":not(.ui-sortable-helper)",
                    drop: function(event, ui) {
                        var $this = $(this);
                        var tempid = ui.draggable.text();
                        var dropText;
                        if (tempid == "Example 1") {
                        	dropText = "Hi, I've recently had an MRI scan on my right knee that confirmed that I have 2 lesions on the hyaline cartilage on my tibia, one 5mm and one 6mm... However the pain I am having does not come from this area. I am finding that pain comes from around my patella when my knee is straightening and bearing weight, yet the MRI scan showed no damage to the patella. I should also mention that the meniscus is in tact and there is no locking, popping or crunching when straightening the knee. Does anybody know why I would be having pain around the patella when the lesions are at the back of my knee on the hyaline cartilage on the tibia? This has been happening for around 18 months now and I notice improvement when I avoid exercises that involve weight bearing during straightening the knee. Performing exercises that target the VMO muscle in the thigh have also helped. Thanks in advance for any advice you can provide.";
                        }else if (tempid == "Example 2") {
                        	dropText = "Hello! I am back here for similar reasons. I too suffer from shortness of breathe a lot sad I was prescribed an inhaler and it doesn't really help me...except it does temperorily make me feel better. I've tried breathing excersises and one thing I noticed is that I usually just breath through my nose, so I'm trying to breath out of both my nose and mouth more to maybe help get more oxygen through me. I do suggest you try breathing techniques. Especially through high-anxiety episodes such as panic attacks/hyperventilation. I wish you the best, and ranting on here makes me feel a lot better myself. We're all here to help and listen! I wish you the best xx ";
                        }else if (tempid == "Example 3") {
                        	dropText = "I was diagnosed 4 months ago by a general practitioner that I have IBS. I took Movicol sachets with water, but the gas and irritability did not go away. For the past week I have been using Spasmopep, (South African name), which is peppermint oil in a gel capsule. I feel great, no bloatedness, cramps or discomfort. Please speak to your doctor if you could take this natural, no-side-effect herb. You must be sure that you are not allergic to peppermint and make sure with your doctor if you can use it.";
                        }else if (tempid == "Example 4") {
                        	dropText = "That's the same as me been on Mirtazapine 15/30mg for 4 months. All of a sudden i started to suffer with insomnia, get to sleep ok but waking up in the middle of the night & unable to get back to sleep. Also suffered with increased anxiety, panic attacks e.t.c. while on the same dose, even before reducing the dosage. ";
                        }else if (tempid == "Example 5") {
                        	dropText = "The best thing you can do is not to worry.  Worry can irritate your gut.  Try to relax and get plenty of rest to help you recover from your infection.  Take one day at a time. I don't know how long it will take to feel better.  Everyone is different; bugs don't stick rigidly to a time frame.I had a bad reaction to antibiotics and was also recovering from gastric flu a  few years ago.  It happened before going on holiday.  All I could do was to eat very blandly and at times I could only take small sips of milk en route to Italy. I was really off my food.  I did not worry and just waited it out until the stomach reaction eventually passed.";
                    	}
                        var droparea = document.getElementById('TextArea');
                        var range1 = droparea.selectionStart;
                        var range2 = droparea.selectionEnd;
                        var val = droparea.value;
                        var str1 = val.substring(0, range1);
                        var str3 = val.substring(range1, val.length);
                        droparea.value = str1 + dropText + str3;
                    }
                });
            }
        });
   
function getRulesNumber(){
	
	
}

function instance_exp(output) {

	for (var i = 0; i < 300; i++) {
	    svg.selectAll(".explanation-"+i.toString()).remove(); 
	    svg.selectAll(".boxes-"+i.toString()).remove(); 
    }

    // var output = document.getElementById("TextArea").value;
	
	var instance_features = [];
	var umls_features = [];	
	var words_hash = []; 
	var umls_array = [];
	var words_array = output.split(" ");
	
	if (words_array.length > 2){

		chart_svg.selectAll(".result_bar").remove(); 
		chart_svg.selectAll(".result_frame").remove(); 
		chart_svg.selectAll(".class_label").remove(); 

		if (words_array[0] == "Hi,"){
				this_sample = "1"
			}else if (words_array[0] == "Hello!"){
				this_sample = "2"
			}if (words_array[0] == "I"){
				this_sample = "3"
			}if (words_array[0] == "That's"){
				this_sample = "4"
			}if (words_array[0] == "The"){	
				this_sample = "5"
		}

		// LSP_features(this_sample);
		// UMLS_features(this_sample);

		d3.json("./data/DP_Classifier/example" +this_sample+  "/lsp_feature_ins_dp.json", function(json_features) {

			json_features.forEach(function(d,i){

				instance_features.push({
		            word: d.word,
		            type: d.type,
		            class: d.class,
		            feature: d.feature		            
	        	});

			})
			
	

			for (var i =0 ; i<words_array.length ;i++){
				umls_array.push({
				            phrase: "",
				            type: "",
				            class: "",
				            feature: ""
			        	}); 
			}

			d3.json("./data/DP_Classifier/example" + this_sample + "/pred_dpc.json", function(json_instance) {  // sample_model
			
				var result_frame = chart_svg.append("g").append("rect").attr("class","result_frame")
							.attr("x", list_x )
							.attr("y", list_y + list_height + clearance/2 + 3* clearance / 4)
							.attr("rx", 5)
							.attr("ry", 5)
							.attr("width", list_width + clearance)
							.attr("height", result_height)
							.attr("fill", "#71a087")
							.style("fill-opacity",0.3)
							.style("stroke","#71a087");

				var result_bar = chart_svg.append("g").attr("class","result_bar").selectAll(".result_bar")
										.data(json_instance).enter()
										.append("rect").attr("class","result_bar")
										.attr("x", list_x + clearance/2)
										.attr("y", list_y + list_height + 1.5*clearance	+ 3* clearance / 4)
										.attr("width", function(d){return (100* 1.3 * d.score)})
										.attr("height", 20)
										.attr("fill", "#71a087")
							           	.transition()
							           	.duration(500)
							           	.attr("width", function(d){return (100* d.score)})
							           	.attr("fill", "#71a087");

				json_instance.forEach(function(d){

				var class_label = chart_svg.append('text').attr("class","class_label").style("font-weight", "bold")
						  .text("Result: "+d.result)
						  .attr('dy','0.35em')
						  .attr('transform', 'translate(' + (list_x + clearance/2 )+ ','+(list_y + list_height + clearance+ 3* clearance / 4)+')')
				});

				
				
			});

			for (var i = 0; i < words_array.length; i++){
			
				words_hash.push({word : words_array[i],
								x : 0,
								y : 0,
								w : 0})
			}

			d3.json("./data/DP_Classifier/example" +this_sample+ "/umls_feature_ins_dp.json", function(json_umls) {

				json_umls.forEach(function(d,i){

					umls_features.push({
			            phrase: d.word,   //d.phrase,
			            type: d.type,
			            class: d.class,
			            feature: d.feature
		        	});
				})

			// });
			
				var letter_length = 13;
				var box_height = 20;
				var x_pos = explanation_x + clearance/3;
				var y_pos = explanation_y + box_height + clearance/3;
				var next_line = 25;
				var line_counter = 0;
				var box_words_alignment = 11;
				var exp_margin = 20;

				words_box = chart_svg.selectAll(".boxes")
									.data(words_hash).enter().append("g").attr("class", "words");		

				words_box.append("rect")
					.attr("class",function(d,i){return "boxes-"+i.toString()})
					.each(function (d,i) {
						letters = d.word.split("")

						if ((x_pos + (letters.length * letter_length)) > (explanation_x + explanation_width - exp_margin)){
							line_counter += 1;
							x_pos = explanation_x + clearance/3;
							y_pos = explanation_y + box_height + clearance/3 + line_counter*next_line;
						}

						d.x = x_pos;
						d.y = y_pos;
						//d.w = letters.length * letter_length;
						d.w = getWidthOfText(d.word, "sans-serif", "20px")
						//console.log(d.word, d.word.length) //xx, " <> ", d.w)
						x_pos = x_pos + d.w + letter_length;

					})
					.attr("x", function(d,i){
						return d.x;})  
					.attr("y", function(d,i){
						return d.y - box_words_alignment;})  // + d.count*clearance + clearance })
					.attr("width", function(d){
						return d.w;})
					.attr("height", box_height)
					.attr("fill", "orange")
					.attr("opacity", "0.3")
			        .transition()
			        .duration(500)
			        .attr("fill", function(d,i){ 
			       		d.highlight = 0;
			       		if (umls_array[i].phrase != words_array[i]){
			       			for (var ii=0 ; ii < umls_features.length; ii++){
								this_phrase_array = umls_features[ii].phrase.split(" ");
								if ( d.word == this_phrase_array[0]) {
									d.highlight = 2;
									for (var jj=0; jj < this_phrase_array.length;jj++){
										if (words_array[i+jj] != this_phrase_array[jj]) {d.highlight = 0;}
									}
									
								}					

								if (d.highlight == 2) {  // check 3 consequative words
									for (var jj=0; jj < this_phrase_array.length;jj++){
										umls_array[i+jj].phrase = words_array[i+jj];
										umls_array[i+jj].class = umls_features[ii].class;
										umls_array[i+jj].type = umls_features[ii].type;
										umls_array[i+jj].feature = umls_features[ii].feature;
									}
									umls_features[ii].phrase = "";
									d.class = umls_features[ii].class;
									d.type = umls_features[ii].type;
									d.feature = umls_features[ii].feature;
										if (this_phrase_array.length > 1){
											var this_sample = d3.select(this).attr('class').split("-")[1]
											svg.selectAll(".boxes-" + this_sample.toString())
												.attr("width", function(d){ return d.w + letter_length;})
										}
									return "orange";	
								}
							}
						}else if (umls_array[i].phrase == words_array[i]) {
							umls_array[i].phrase = ""
							d.highlight = 2;
							d.class = umls_array[i].class;
							d.type = umls_array[i].type;
							d.feature = umls_array[i].feature;

								if (umls_array[Math.min((i+1),umls_array.length-1)].phrase != ""){
									var this_sample = d3.select(this).attr('class').split("-")[1]
									svg.selectAll(".boxes-" + this_sample.toString())
										.attr("width", function(d){ return d.w + letter_length;})
								}

							return "orange";
						} 		// if not UMLS faeture, then check for LSP

							for (var ii=0 ; ii < instance_features.length; ii++){
								if (d.word == instance_features[ii].word) {
									instance_features[ii].word = "";   // remove it after use, 
									d.highlight = 1;
									d.class = instance_features[ii].class;
									d.type = instance_features[ii].type;
									d.feature = instance_features[ii].feature;
									return "#ff9e16";	
								}
							}
					  
									//if not features, keep it white.
						return "white";
					})
					.attr("opacity", function(d,i) { 
						if (d.highlight == 1){
							return 0.0;	
						}else if (d.highlight == 2) {
							return 0.3;	
						}else{
							return 0;
						}
					});
			      

				words_box.append("text")
					.attr("class","explanation")
					.attr("class",function(d,i){return "explanation-"+ i.toString()})
				    .attr("x", function(d,i){
								return d.x})  
				    .attr("y", function(d,i){
								return d.y;})  // + d.count*clearance + clearance })
				    .attr("dy", ".35em")
				    .text(function(d) {
				    	return d.word; 
				    })
				    // .call(getBB)
				    .on("mouseover", function(d){
						var this_sample = d3.select(this).attr('class').split("-")[1]

						if (d.highlight == 1){
							svg.selectAll(".boxes-" + this_sample.toString())
								.attr("fill","yellow")
								.attr("opacity", 0.6);

							tooltip_ins(d);
						}else if (d.highlight == 2){
							svg.selectAll(".boxes-" + this_sample.toString())
								.attr("fill","orange")
								.attr("opacity", 0.6);

							tooltip_ins(d);
						}else{
							svg.selectAll(".boxes-" + this_sample.toString())
								.attr("fill","red")
								.attr("opacity", 0.3);
						}

					})
					.on("mouseout", function(d){
						var this_sample = d3.select(this).attr('class').split("-")[1]
						if (d.highlight == 1){
							svg.selectAll(".boxes-" + this_sample.toString())
								.attr("opacity", 0.0);
							div1.transition()
								.duration(300)
								.style("opacity", 0);
						} else if (d.highlight == 2){
							svg.selectAll(".boxes-" + this_sample.toString())
								.attr("opacity", 0.3);
							div1.transition()
								.duration(300)
								.style("opacity", 0);
						}else{
							svg.selectAll(".boxes-" + this_sample.toString())
								.attr("opacity", 0);
						}

					});

					// words_box.insert("rect","text") // "explanation-0"
					//     .attr("width", function(d){console.log("here"); return d.bbox.width + 15})
					//     .attr("height", function(d){return d.bbox.height})
					//     .style("fill", "green");

					// function getBB(selection) {
					//     selection.each(function(d){d.bbox = this.getBBox();})
					// }

				chart_svg.selectAll(".explanation_frame").attr("height", (3*next_line + line_counter * next_line));

				if ( line_counter > 10){ 
					chart_svg.selectAll(".page_frame").attr("height", ((line_counter-10) * next_line + frame_height + 50));
					svg.attr("height", ((line_counter-10) * next_line + height) );
					
					height_plus = (line_counter-10) * next_line;
				}
			});

		// d3.selectAll(".boxes").moveToFront();

		});
	}


}

function getText() {

    var output = document.getElementById("TextArea").value;
	//console.log(output)
	var words_array = output.split(" ");
	var words_hash = []; 

	if (words_array.length > 2){
		if (words_array[0] == "Hi,"){
			this_sample = "1"
		}else if (words_array[0] == "Hello!"){
			this_sample = "2"
		}if (words_array[0] == "I"){
			this_sample = "3"
		}if (words_array[0] == "That's"){
			this_sample = "4"
		}if (words_array[0] == "The"){	
			this_sample = "5"
		}

		// ----------------------- Model --------------------------------

		d3.json("./data/DP_Classifier/example" + this_sample + "/dp_sample_output.json", function(json_instance) {  // sample_model
		// console.log(json_instance);	
		json_instance.forEach(function(d){

			for (var j=0; j<rules.length ; j++){
				
				if (j == d){
					chart_svg.selectAll(".rule_box-"+j.toString())
								.style("stroke-width", 4)
								.style("stroke", function(d){
									d.highlight = 1;
								return "#ff9e16";
								});
								
				}
			}
			
		})
		
		});
         
        instance_exp(output);

	}
}


function getWidthOfText(txt, fontname, fontsize){
    if(getWidthOfText.c === undefined){
        getWidthOfText.c=document.createElement('canvas');
        getWidthOfText.ctx=getWidthOfText.c.getContext('2d');
    }
    getWidthOfText.ctx.font = fontsize + ' ' + fontname;
    return getWidthOfText.ctx.measureText(txt).width;
}

function clearText() {
    document.getElementById("TextArea").value = ""

    // chart_svg.selectAll(".explanation_frame").attr("height", explanation_height);
    // chart_svg.selectAll(".page_frame").attr("height", frame_height);
    // chart_svg.selectAll(".rule_box").style("stroke-width", 2).style("stroke", "red");

    for (var i = 0; i < 300; i++) {
	    svg.selectAll(".explanation-"+i.toString()).remove(); 
	    svg.selectAll(".boxes-"+i.toString()).remove(); 
    }
		chart_svg.selectAll(".result_bar").remove(); 
		chart_svg.selectAll(".result_frame").remove(); 
		chart_svg.selectAll(".class_label").remove(); 

    for (var j=0; j<rules.length ; j++){
			chart_svg.selectAll(".rule_box-"+j.toString())
						.style("stroke-width", 2)
						.style("stroke", function(d) { 
							d.highlight = 0;
							return d.color
						});	 //"red");
							
	}
}


var max_y = 100;
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
  



	var list_x = 50
	var list_y = 50
	var	list_width = 450
	var	list_height = 150
	var clearance = 50
	var explanation_x = 600
	var explanation_y = 550

	var explanation_height = 300
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
					.attr("fill", "#009bde")
					.style("fill-opacity",0.02)
					.style("stroke","#009bde")
					.style("stroke-opacity",1);

	chart_svg.append('text').style("font-weight", "bold")
			  .text("Instance Explanation:")
			  .attr('dy','0.35em')
			  .attr('transform', 'translate(' + explanation_x+ ','+(explanation_y - 20)+')')

	chart_svg.append('text').style("font-weight", "bold")
			  .text("Input:")
			  .attr('dy','0.35em')
			  .attr('transform', 'translate(' + explanation_x+ ','+(list_y +margin.top + clearance/3)+')')

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

	
readData();
updateWindow();


function readData(){

	// Reading the model result   ./data/DP_Classifier/example" + this_sample + "/dp_sample_output.json

	d3.json("./data/DP_Classifier/model/dp_sample_model.json", function(jsondata) {
		
		rules_num = jsondata.length
		//blocks_size = list_height / (rules_num/2);
		blocks_size = list_width / (13);
		block_margin = clearance/3;
		list_height += (blocks_size+block_margin)*(rules_num/9 + 2) + clearance
				
		for (var j=0;j<jsondata.length;j++){
			rules[j] = "";
		}
		
		if (frame_height < list_height){
			
			frame_height = list_height + 2* clearance;
			
		}
			

		var result_frame = chart_svg.append("g").append("rect")
						.attr("x", list_x )
						.attr("y", list_y + 3* clearance / 4)
						.attr("rx", 5)
						.attr("ry", 5)
						.attr("width", list_width + clearance)
						.attr("height", list_height)
						.attr("fill", "#009bde")
						.style("fill-opacity",0.1)
						.style("stroke","#009bde");

		chart_svg.append('text').style("font-weight", "bold")
				  .text("Discriminant Patterns")
				  .attr('dy','0.35em')
				  .attr('transform', 'translate(' + (list_x + list_width/4 + 5*clearance/8)+ ','+(list_y + clearance/3)+')')  //+ clearance/3


		text_margin = 20
		var counter1 = 0
		var counter2 = 0
		
		counter1 = 0
		counter2 = 0
		symp_y_pos = -1
		med_y_pos = -1
		symp_x_pos = 0
		med_x_pos = 0
		var rule_box = chart_svg.append("g").attr("class","rule_box").selectAll(".rule_box").data(jsondata).enter()
						.append("rect").attr("class","rule_box")
						.attr("class", function(d,i){ return 'rule_box-'+ i }) // .attr("class", function(d,i){return "recttag recttag-"+i;})
						.each(function (d,i) {
							
								if (d.class == "Symptom"){
									d.down_side = 1
									d.count = counter2 
									d.color = "#6cc04a"
									counter2++; 
								}else{
									d.down_side = 0
									d.color = "#00b288"
									d.count = counter1
									counter1++; 
								}

								rules[i] = d.feature;
								d.rule = d.feature;
								
							})
							.attr("x", function(d,i){
								total_upper_rows = (counter1 / 6) + 1;   // Medication
								total_lower_rows = (counter2 / 6) + 1;   // symptom
								
								if (d.down_side == 1){
									if (d.count%9 == 0){
										symp_x_pos = 0;
									}else{
										symp_x_pos += 1;
									}						
									
									 x_pos = symp_x_pos*(blocks_size  + clearance/3) +  list_x + margin.left - text_margin
									 return x_pos
								}else{
									
									if (d.count%9 == 0){
										med_x_pos = 0;
									}else{
										med_x_pos += 1;
									}						
									 x_pos = med_x_pos*(blocks_size  + clearance/3) +  list_x + margin.left - text_margin
									 return x_pos									
								}
								
							})
							.attr("y", function(d){
								
								total_upper_rows = (counter1 / 6) ;   // Medication
								total_lower_rows = (counter2 / 6) + 1;   // symptom
								
								if (d.down_side == 1){
									if (d.count%9 == 0){
										symp_y_pos += 1;
									}
									 lower_blocks_bias = (total_upper_rows + symp_y_pos)*(blocks_size  + clearance/3) + list_y + clearance + blocks_size/2; // block_bias
									 return lower_blocks_bias + (list_height - (total_lower_rows + total_upper_rows)*(blocks_size  + clearance/3))/2
								}else{
									
									if (d.count%9 == 0){
										med_y_pos += 1;
									}
									 upper_blocks_bias =   list_y + clearance + blocks_size/2;  // +  block_bias 
									 return (upper_blocks_bias + med_y_pos*(blocks_size  + clearance/3) + ( list_height - (total_lower_rows + total_upper_rows)*(blocks_size  + clearance/3))/2)
								}
								
							})
						.attr("width", function(d){
							return blocks_size
						}) 
						.attr("height",blocks_size)
						.attr("fill", "green")
						.attr("fill-opacity", 0.3)
						.style("stroke", "green")
						.style("stroke-width", 2)
						.on("mouseover", function(d,i) {
							
							tooltip_mod(d)
							d3.select(this).style("stroke","#ff9e16");
							d3.select(this).style("stroke-width",5);
							
						})
						.on("mouseout", function(d) {
							//console.log("yellow fill is: " , d3.select(this).attr("fill"))
							// if (d3.select(this).style("stroke") == "yellow"){ // (d3.select(this).attr('fill') == "yellow" ){
							if (d.highlight == 1){

							}else{
								d3.select(this).style("stroke",d.color);
								d3.select(this).style("stroke-width",2);
							}
							
							div1.transition()
								.duration(300)
								.style("opacity", 0);
							
						
						})
			           .transition()
			           .duration(500)
			           .attr("fill", function(d) { return d.color})
					   .style("stroke", function(d) { return d.color});
					   
		chart_svg.append('text').style("font-weight", "bold")
				  .text("Medication Patterns: ")
				  .attr('dy','0.35em')
				  .attr('transform', 'translate(' + (list_x + 2*clearance/3)+ ','+(upper_blocks_bias)+')')  // + 1*blocks_size

		chart_svg.append('text').style("font-weight", "bold")
				  .text("Symptom Patterns: ")
				  .attr('dy','0.35em')
				  .attr('transform', 'translate(' + (list_x + 2*clearance/3)+ ','+(lower_blocks_bias - (total_lower_rows-2)*blocks_size)+')')

		
	});
}


function tooltip_ins(d){
	var feature_table = {
						aapp:	"Amino Acid, Peptide, or Protein",
						acab:	"Acquired Abnormality",
						acty:	"Activity",
						aggp:	"Age Group",
						alga:	"Alga",
						amas:	"Amino Acid Sequence",
						amph:	"Amphibian",
						anab:	"Anatomical Abnormality",
						anim:	"Animal",
						anst:	"Anatomical Structure",
						antb:	"Antibiotic",
						arch:	"Archaeon",
						bacs:	"Biologically Active Substance",
						bact:	"Bacterium",
						bdsu:	"Body Substance",
						bdsy:	"Body System",
						bhvr:	"Behavior",
						biof:	"Biologic Function",
						bird:	"Bird",
						blor:	"Body Location or Region",
						bmod:	"Biomedical Occupation or Discipline",
						bodm:	"Biomedical or Dental Material",
						bpoc:	"Body Part, Organ, or Organ Component",
						bsoj:	"Body Space or Junction",
						carb:	"Carbohydrate",
						celc:	"Cell Component",
						celf:	"Cell Function",
						cell:	"Cell",
						cgab:	"Congenital Abnormality",
						chem:	"Chemical",
						chvf:	"Chemical Viewed Functionally",
						chvs:	"Chemical Viewed Structurally",
						clas:	"Classification",
						clna:	"Clinical Attribute",
						clnd:	"Clinical Drug",
						cnce:	"Conceptual Entity",
						comd:	"Cell or Molecular Dysfunction",
						crbs:	"Carbohydrate Sequence",
						diap:	"Diagnostic Procedure",
						dora:	"Daily or Recreational Activity",
						dsyn:	"Disease or Syndrome",
						edac:	"Educational Activity",
						eehu:	"Environmental Effect of Humans",
						eico:	"Eicosanoid",
						elii:	"Element, Ion, or Isotope",
						emod:	"Experimental Model of Disease",
						emst:	"Embryonic Structure",
						enty:	"Entity",
						enzy:	"Enzyme",
						evnt:	"Event",
						famg:	"Family Group",
						ffas:	"Fully Formed Anatomical Structure",
						fish:	"Fish",
						fndg:	"Finding",
						fngs:	"Fungus",
						food:	"Food",
						ftcn:	"Functional Concept",
						genf:	"Genetic Function",
						geoa:	"Geographic Area",
						gngm:	"Gene or Genome",
						gora:	"Governmental or Regulatory Activity",
						grpa:	"Group Attribute",
						grup:	"Group",
						hcpp:	"Human-caused Phenomenon or Process",
						hcro:	"Health Care Related Organization",
						hlca:	"Health Care Activity",
						hops:	"Hazardous or Poisonous Substance",
						horm:	"Hormone",
						humn:	"Human",
						idcn:	"Idea or Concept",
						imft:	"Immunologic Factor",
						inbe:	"Individual Behavior",
						inch:	"Inorganic Chemical",
						inpo:	"Injury or Poisoning",
						inpr:	"Intellectual Product",
						invt:	"Invertebrate",
						irda:	"Indicator, Reagent, or Diagnostic Aid",
						lang:	"Language",
						lbpr:	"Laboratory Procedure",
						lbtr:	"Laboratory or Test Result",
						lipd:	"Lipid",
						mamm:	"Mammal",
						mbrt:	"Molecular Biology Research Technique",
						mcha:	"Machine Activity",
						medd:	"Medical Device",
						menp:	"Mental Process",
						mnob:	"Manufactured Object",
						mobd:	"Mental or Behavioral Dysfunction",
						moft:	"Molecular Function",
						mosq:	"Molecular Sequence",
						neop:	"Neoplastic Process",
						nnon:	"Nucleic Acid, Nucleoside, or Nucleotide",
						npop:	"Natural Phenomenon or Process",
						nsba:	"Neuroreactive Substance or Biogenic Amine",
						nusq:	"Nucleotide Sequence",
						ocac:	"Occupational Activity",
						ocdi:	"Occupation or Discipline",
						opco:	"Organophosphorus Compound",
						orch:	"Organic Chemical",
						orga:	"Organism Attribute",
						orgf:	"Organism Function",
						orgm:	"Organism",
						orgt:	"Organization",
						ortf:	"Organ or Tissue Function",
						patf:	"Pathologic Function",
						phob:	"Physical Object",
						phpr:	"Phenomenon or Process",
						phsf:	"Physiologic Function",
						phsu:	"Pharmacologic Substance",
						plnt:	"Plant",
						podg:	"Patient or Disabled Group",
						popg:	"Population Group",
						prog:	"Professional or Occupational Group",
						pros:	"Professional Society",
						qlco:	"Qualitative Concept",
						qnco:	"Quantitative Concept",
						rcpt:	"Receptor",
						rept:	"Reptile",
						resa:	"Research Activity",
						resd:	"Research Device",
						rich:	"Rickettsia or Chlamydia",
						rnlw:	"Regulation or Law",
						sbst:	"Substance",
						shro:	"Self-help or Relief Organization",
						socb:	"Social Behavior",
						sosy:	"Sign or Symptom",
						spco:	"Spatial Concept",
						strd:	"Steroid",
						tisu:	"Tissue",
						tmco:	"Temporal Concept",
						topp:	"Therapeutic or Preventive Procedure",
						virs:	"Virus",
						vita:	"Vitamin",
						vtbt:	"Vertebrate",
						gngm: "Gene or Genome",
						bpoc: "Body Part, Organ, or Organ Component",
						mnob: "Manufactured Object",
						cnce: "Conceptual Entity",
						idcn: "Idea or Concept",
						medd: "Medical Device",
						inch: "Inorganic Chemical",
						orga: "Organism Attribute",
						dsyn: "Disease or Syndrome",
						patf: "Pathologic Function",
						food: "Food",
						inpr: "Intellectual Product",
						fndg: "Finding",
						hlca: "Health Care Activity",
						qnco: "Quantitative Concept",
						CC: "Coordinating conjunction",
						CD: "Cardinal number",
						DT:	"Determiner",
						EX:	"Existential there",
						FW:	"Foreign word",
						IN:	"Preposition or subordinating conjunction",
						JJ:	"Adjective",
						JJR: "Adjective, comparative",
						JJS: "Adjective, superlative",
						LS:	"List item marker",
						MD:	"Modal",
						NN:	"Noun, singular or mass",
						NNS:	"Noun, plural",
						NNP:	"Proper noun, singular",
						NNPS:	"Proper noun, plural",
						PDT:	"Predeterminer",
						POS:	"Possessive ending",
						PRP:	"Personal pronoun",
						PRP$:	"Possessive pronoun",
						RB:	"Adverb",
						RBR: "Adverb, comparative",
						RBS: "Adverb, superlative",
						RP: "Particle",
						SYM: "Symbol",
						TO:	"to",
						UH:	"Interjection",
						VB:	"Verb, base form",
						VBD:	"Verb, past tense",
						VBG: "Verb, gerund or present participle",
						VBN: "Verb, past participle",
						VBP: "Verb, non-3rd person singular present",
						VBZ: "Verb, 3rd person singular present",
						WDT: "Wh-determiner",
						WP: "Wh-pronoun",
						WP$: "Possessive wh-pronoun",
						WRB: "Wh-adverb"
						}

	

	div1.style("background", function(){
			if (d.type.toUpperCase().toString() == "LSP"){
				return "#FFC04D" // ffff66" //"#cff1c9"
			}else{
				return "#FFC04D"//"#26c6a7"  // 00b390
			}
		})
		.transition()
		.duration(200)
		.style("opacity", 0.9)
		
		
	classType = d.type.toUpperCase().toString() + " feature"
	featureType = "''" +  feature_table[d.feature] + "''" // "Feature type: " + d.type.toUpperCase();
	
	arr = [classType,featureType];  // feature_table[d.feature]
	 
	str = "          " +"&nbsp" + "<br/>" // + "Rules: " +  "          " +"&nbsp" + "<br/>""
	for (var j = 0 ; j < arr.length ; j++ ){
		
		str = str + "          " +"&nbsp" + arr[j] + "          " +"&nbsp" + "<br/>" + "          " +"&nbsp" 

	}

	div1.html(str)   // d.rule
	
	if (d3.event.pageY < 200){
	div1.style("left", (d3.event.pageX - 120) + "px")
		.style("top", ((d3.event.pageY + 128 + (arr.length*20)) + "px"));
	}else{
	div1.style("left", (d3.event.pageX - 120) + "px")
		.style("top", ( d3.event.pageY - 128 - (arr.length*20) ) + "px");
	}

}

function tooltip_mod(d){   // #009bde

	div1.style("background", function(){
			
			if (d.color == "#00b288"){
				return "#26c6a7"  // 00b390
			}else{
				return "#cff1c9"
			}
		})
		.transition()
		.style("opacity", 0.9)
		.duration(200)
		
	
	arr = d.rule;
	str = "          " +"&nbsp" + "<br/>" // + "Rules: " +  "          " +"&nbsp" + "<br/>""
	for (var j = 0 ; j < arr.length ; j++ ){
		
		str = str + "          " +"&nbsp" + arr[j] + "          " +"&nbsp" + "<br/>" + "          " +"&nbsp" 

	}

	div1.html(str)   // d.rule
	
	if (d3.event.pageY < 200){
	div1.style("left", (d3.event.pageX - 120) + "px")
		.style("top", ((d3.event.pageY + 128 + (arr.length*20)) + "px"));
	}else{
	div1.style("left", (d3.event.pageX - 120) + "px")
		.style("top", ( d3.event.pageY - 128 - (arr.length*20) ) + "px");
	}

}

function updateWindow(){
							 
		// zoomRect.call(zoom.transform, d3.zoomIdentity);
	  	
		var chart_x = w_size.innerWidth || e_size.clientWidth || g_size.clientWidth;
		var chart_y = w_size.innerHeight || e_size.clientHeight || g_size.clientHeight;
		
		// margin.bottom = (1/3) * chart_y;
		
		width = chart_x - margin.left - margin.right - 50;
		height = chart_y - margin.top - margin.bottom - 50;    
		
		//console.log("height: ", height)
		
		if (height < 1000) {
			height = 1000;
		}
		if (width < 1500) {
			width = 1500
		}

		svg.attr("width", width);
		svg.attr("height", height);
		//svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		chart_svg.attr("width", width);
		chart_svg.attr("height", height - 50);
		
		chart_svg.selectAll(".page_frame").attr("width", width - 50);
		chart_svg.selectAll(".page_frame").attr("height", height - 50);

		// svg.selectAll(".hide_rect").attr("width", width).attr("y", height - Axis_room + 1);

		// chart_svg.selectAll(".time_boxs").attr("x", function(d){return x_scale(d.axis_distance);}).attr("y", (height - Axis_room + 10	));
	}
	