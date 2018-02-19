
//---------------------------------- Top View ---------------------
d3.select("div#chartDiv")
   .append("div")
   .classed("svg-container", true) //container class to make it responsive
   .append("svg")
   .attr("class", "svg_data")
   //responsive SVG needs these 2 attributes and no width and height attr
   .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 600 600")  
   //class to make it responsive
   .classed("svg-content-responsive", true); 

   d3.select("div#ExpDiv")
   .append("div")
   .classed("svg2-container", true) //container class to make it responsive
   .append("svg")
   .attr("class", "svg_data2")
   .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 600 600")  
   .classed("svg2-content-responsive", true); 

//---------------------------------- Responsive SVG --------------------
// var svg_data = d3.select(".svg_data");
    radius = 10;
    var ratio = 25       // Aspect ratio starts with 100 25
    var width = 600;
    var height = 600 * ratio / 100;
    
    d3.select(".svg-container").style("padding-bottom", ratio+"%");

    updateWindow_top();
    
    function updateWindow_top(){
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight|| e.clientHeight|| g.clientHeight;
		
		console.log("Height: ", w.innerHeight, e.clientHeight, g.clientHeight)
		console.log("Width: ", w.innerWidth, e.clientWidth, g.clientWidth)

		page_ratio = (w.innerHeight / w.innerWidth)*100 - 0.5;
		d3.select(".svg-container").style("padding-bottom", page_ratio+"%")

        // if ((ratio < 400) & ( (w.innerHeight - (g.clientHeight)) > 20)) {
        //     ratio = ratio+0.5;
        //     d3.select(".svg-container").style("padding-bottom", ratio+"%") 
        //     console.log(ratio)
        //     updateWindow_top()
        // }

        // if ((ratio > 1) & ( ((g.clientHeight) - w.innerHeight) > 20)) {
        //     ratio = ratio-0.5;
        //     d3.select(".svg-container").style("padding-bottom", ratio+"%") 
        //     console.log(ratio)
        //     updateWindow_top()
        // }
        
        height = 600 * (page_ratio / 100) * (100 / 35);
        d3.select(".svg_data").attr("viewBox","0 0 " + width + " " + height)
        console.log("height:",height, "width:", width, "<<-----")
    }

    d3.select(window).on('resize.updatesvg', updateWindow_top);

    


      // ---------- Border around the view ---------- 
var exp_font = 12;
var list_font = 14;
var width_plus = 0;
var height_plus = 0;

var div1 = d3.select(".svg_data2").append("talkbubble")   // Tooltip
		.attr("class", "tooltip")
		.style("opacity", 1)
		.style("position", "absolute")
		.style("text-align", "center")
		.style("width", 100)
		.style("height", 48)
		.style("border-radius", "8px")   // "10% / 10%")
		.style("padding", 2)
		.style("font-size", 8)
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

function getText() {

    d3.select(".svg_data2").selectAll(".explanation").remove(); 
	d3.select(".svg_data2").selectAll(".boxes").remove(); 

    d3.selectAll(".explanation_frame").attr("height", 200);

    chart_svg.selectAll(".result_bar").remove(); 
	chart_svg.selectAll(".result_frame").remove(); 
	chart_svg.selectAll(".class_label").remove(); 

    var output = document.getElementById("TextArea").value;
	
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
				this_sample = 1
			}else if (words_array[0] == "Hello!"){
				this_sample = 2
			}if (words_array[0] == "I"){
				this_sample = 3
			}if (words_array[0] == "That's"){
				this_sample = 4
			}if (words_array[0] == "The"){	
				this_sample = 5
		}

		// LSP_features(this_sample);
		// UMLS_features(this_sample);

		d3.json("./data/RF_Classifier/example"+ this_sample.toString() + "/LSP_features_" + this_sample.toString() + ".json", function(json_features) {
			
			max_weight = 0
			json_features.forEach(function(d,i){
				if (max_weight < d.weight) max_weight = d.weight
			})
			//console.log(max_weight)

			json_features.forEach(function(d,i){

				instance_features.push({
		            word: d.word,
		            type: d.type,
		            class: d.class,
		            weight: (d.weight * 1/max_weight).toFixed(2),
		            feature: d.feature		            
	        	});

			})
			
	

			for (var i =0 ; i<words_array.length ;i++){
				umls_array.push({
				            phrase: "",
				            type: "",
				            class: "",
				            weight: "",
				            feature: ""
			        	}); 
			}

			d3.json("./data/RF_Classifier/example" + this_sample.toString() + "/pred_rf.json", function(json_instance) {  // sample_model
			
				var result_frame = chart_svg.append("g").append("rect").attr("class","result_frame")
							.attr("x", list_x )
							.attr("y", list_y + list_height + clearance/2)
							.attr("rx", 1)
							.attr("ry", 1)
							.attr("width", list_width * 2 + clearance)
							.attr("height", result_height)
							.attr("fill", "#d9d9d9")
							.style("fill-opacity",1)
							.style("stroke","#666666");  //#00b3e3

				var result_bar = chart_svg.append("g").attr("class","result_bar").selectAll(".result_bar")
										.data(json_instance).enter()
										.append("rect").attr("class","result_bar")
										.attr("x", list_x + clearance/2)
										.attr("y", list_y + list_height + 1.5*clearance	)
										.attr("width", function(d){return (100* 1.3 * d.score)})
										.attr("height", 20)
										.attr("fill", "#5a5a8c")
							           	.transition()
							           	.duration(500)
							           	.attr("width", function(d){return (100* d.score)})
							           	.attr("fill", "#5a5a8c");

				json_instance.forEach(function(d){

				var class_label = chart_svg.append('text').attr("class","class_label").style("font-weight", "bold")
						  .text("Result: "+d.result)
						  .attr('dy','0.35em')
						  .attr('transform', 'translate(' + (list_x + clearance/2 )+ ','+(list_y + list_height + clearance)+')')
				});

				
				
			});

			for (var i = 0; i < words_array.length; i++){
			
				words_hash.push({word : words_array[i],
								x : 0,
								y : 0,
								w : 0})
			}

			d3.json("./data/RF_Classifier/example"+ this_sample.toString() + "/UMLS_features_" + this_sample.toString() + ".json", function(json_umls) {


				max_weight = 0
				json_features.forEach(function(d,i){
					if (max_weight < d.weight) max_weight = d.weight
				})

				json_umls.forEach(function(d,i){

					umls_features.push({
			            phrase: d.phrase,
			            type: d.type,
			            class: d.class,
			            weight: (d.weight * 1/max_weight).toFixed(2),
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

				words_box = chart_svg2.selectAll(".boxes")
									.data(words_hash).enter().append("g").attr("class", "boxes");		

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
						d.w = getWidthOfText(d.word, "sans-serif", "12px")
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
										umls_array[i+jj].weight = umls_features[ii].weight;
										umls_array[i+jj].feature = umls_features[ii].feature;
									}
									umls_features[ii].phrase = "";
									d.class = umls_features[ii].class;
									d.type = umls_features[ii].type;
									d.weight = umls_features[ii].weight;
									d.feature = umls_features[ii].feature;
										if (this_phrase_array.length > 1){
											var this_sample = d3.select(this).attr('class').split("-")[1]
											d3.select(".svg_data2").selectAll(".boxes-" + this_sample.toString())
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
							d.weight = umls_array[i].weight;
							d.feature = umls_array[i].feature;

								if (umls_array[Math.min((i+1),umls_array.length-1)].phrase != ""){
									var this_sample = d3.select(this).attr('class').split("-")[1]
									d3.select(".svg_data2").selectAll(".boxes-" + this_sample.toString())
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
									d.weight = instance_features[ii].weight;
									d.feature = instance_features[ii].feature;
									return "yellow";	
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
				    // .attr("dy", ".35em")
				    .attr("font-size", exp_font)
				    .text(function(d) {
				    	return d.word; 
				    })
				    // .call(getBB)
				    .on("mouseover", function(d){
						var this_sample = d3.select(this).attr('class').split("-")[1]

						if (d.highlight == 1){
							d3.select(".svg_data2").selectAll(".boxes-" + this_sample.toString())
								.attr("fill","yellow")
								.attr("opacity", 0.6);

							tooltip(d);
						}else if (d.highlight == 2){
							d3.select(".svg_data2").selectAll(".boxes-" + this_sample.toString())
								.attr("fill","orange")
								.attr("opacity", 0.6);

							tooltip(d);
						}else{
							d3.select(".svg_data2").selectAll(".boxes-" + this_sample.toString())
								.attr("fill","red")
								.attr("opacity", 0.3);
						}

					})
					.on("mouseout", function(d){
						var this_sample = d3.select(this).attr('class').split("-")[1]
						if (d.highlight == 1){
							d3.select(".svg_data2").selectAll(".boxes-" + this_sample.toString())
								.attr("opacity", 0.0);
							div1.transition()
								.duration(300)
								.style("opacity", 0);
						} else if (d.highlight == 2){
							d3.select(".svg_data2").selectAll(".boxes-" + this_sample.toString())
								.attr("opacity", 0.3);
							div1.transition()
								.duration(300)
								.style("opacity", 0);
						}else{
							d3.select(".svg_data2").selectAll(".boxes-" + this_sample.toString())
								.attr("opacity", 0);
						}

					});

				this_ratio = 100* ((5*next_line + line_counter * next_line) / explanation_width)
				console.log("this_ratio ", this_ratio)
				d3.select(".svg2-container").style("padding-bottom", this_ratio+"%");
				if (this_ratio > page_ratio) {
					height += (line_counter * next_line)
					new_page_ratio = (height / width)*100*0.35 - 0.5;
					d3.select(".svg-container").style("padding-bottom", new_page_ratio+"%")
			        // height = 600 * (page_ratio / 100) * (100 / 35);
			        d3.select(".svg_data").attr("viewBox","0 0 " + width + " " + height)
			        console.log(new_page_ratio, "height:",height, "width:", width, "<<-----")

				}
				d3.select(".svg_data2").attr("viewBox","0 0 " + (explanation_width) + " " + (5*next_line + line_counter * next_line));
				chart_svg2.attr("height", (5*next_line + line_counter * next_line));
				chart_svg2.selectAll(".explanation_frame").attr("height", (3*next_line + line_counter * next_line));
			});

		// d3.selectAll(".boxes").moveToFront();

		});
	}


	// readData();

	// svg.append("foreignObject").attr("class","explaination")
	// 	.attr("x", explaination_x)
	// 	.attr("y", explaination_y)
	//     .attr("width", explaination_width)
	//     .attr("height", explaination_height)
	// 	.append("xhtml:body")
	//     .style("font", "14px 'Helvetica Neue'")
	//     .html(output);



}

function getWidthOfText(txt, fontname, fontsize){
    if(getWidthOfText.c === undefined){
        getWidthOfText.c=document.createElement('canvas');
        getWidthOfText.ctx=getWidthOfText.c.getContext('2d');
    }
    getWidthOfText.ctx.font = fontsize + ' ' + fontname;
    return getWidthOfText.ctx.measureText(txt).width;
}

function tooltip(d){
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
			if (d.class == "med"){
				return "#1FC3B7"  // 00b390
			}else{
				return "#cff1c9"
			}
		})
		.transition()
		.duration(200)
		.style("opacity", 0.9)

		
	
	if (d.class == "symp"){
		classType = "Symptom feature"  //  " + d.type.toUpperCase().toString() + "
	}else{
		classType = "Medication feature"   //  " + d.type.toUpperCase().toString() + "`
	}

	featureType = d.type.toUpperCase().toString() + " type: ''" +  feature_table[d.feature] + "''" // "Feature type: " + d.type.toUpperCase();
	
	arr = [classType,featureType , "Contribution: "+ d.weight];  // feature_table[d.feature]
	 
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


function clearText() {
    document.getElementById("TextArea").value = ""
    
    d3.select(".svg_data2").selectAll(".explanation").remove(); 
	d3.select(".svg_data2").selectAll(".boxes").remove(); 

    for (var i = 0; i < 300; i++) {
	    d3.select(".svg_data2").selectAll(".explanation-"+i.toString()).remove(); 
	    d3.select(".svg_data2").selectAll(".boxes-"+i.toString()).remove(); 
    }
    
    d3.selectAll(".explanation_frame").attr("height", 200);

    chart_svg.selectAll(".result_bar").remove(); 
	chart_svg.selectAll(".result_frame").remove(); 
	chart_svg.selectAll(".class_label").remove(); 
		
}

function train(){

}

var hidRect;
var time_weight = 100, topic_weight = 0, action_weight = 400, cluster_weight = 20;
var max_y = 100;
var each_time_sec;
// var topic_distance;
var colors = d3.scaleOrdinal(d3.schemeCategory10); 

// var w_size = window,
//     d_size = document,
//     e_size = d_size.documentElement,
//     g_size = d_size.getElementsByTagName('body')[0];
	
// d3.select(window).on('resize.updatesvg', updateWindow);

// var svg = d3.select("#chartDiv").append("svg"),
    margin = {top: 20, right: 50, bottom: 20, left: 50};
	
// 	svg.attr("width", "600");
// 	svg.attr("height", "800");
// 	svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
// var width = +svg.attr("width") - margin.left - margin.right,
//     height = +svg.attr("height") - margin.top - margin.bottom,    
// 	chart_svg = svg.append("g").attr("class","svg_chart"); // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");




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
	var list_y = 100
	var	list_width = 230
	var	list_height = 600
	var clearance = 50
	var explanation_x = 0
	var explanation_y = 50
	var explanation_height = 300
	var explanation_width = 600
	var result_height = 100


	d3.select(".svg2-container").style("padding-bottom", page_ratio+"%") 
	d3.select(".svg_data2").attr("viewBox","0 0 " + (width) + " " + height)
	
	chart_svg = d3.select(".svg_data").append("g").attr("class","svg_chart");
	chart_svg2 = d3.select(".svg_data2").append("g").attr("class","svg_chart2");


	chart_svg2.append('text')
			  .style("font-weight", "bold")
			  .text("Instance Explanation:")
			  .attr('dy','0.35em')
			  .attr('transform', 'translate(' + explanation_x+ ','+(explanation_y - 20)+')')

	// chart_svg2.append('text').style("font-weight", "bold")
	// 		  .text("Input:")
	// 		  .attr('dy','0.35em')
	// 		  .attr('transform', 'translate(' + explanation_x+ ','+(list_y)+')')

	var explanation_frame = chart_svg2.append("g").append("rect").attr("class","explanation_frame")
					.attr("x", explanation_x)
					.attr("y", explanation_y)
					.attr("rx", 5)
					.attr("ry", 5)
					.attr("width", explanation_width)
					.attr("height", explanation_height - 100)
					.attr("fill", "white")
					.style("fill-opacity",1)
					.style("stroke","gray")
					.style("stroke-opacity",0.5);

	
readData();
// updateWindow();

function readData(){

	// Reading the model result

	d3.json("./data/RF_Classifier/model/rf_model.json", function(jsondata){
		
		
		// list_height = jsondata.length * 55 / 2
		// list_height = Math.min((height * 0.6), (jsondata.length * 55 / 2))
		list_height = width * 0.8;
		each_word_gap = (list_height / jsondata.length) * 1.9;

		chart_svg.append('text').style("font-weight", "bold")
				  .text("Dominant Features")
				  .attr('dy','0.35em')
				  .attr('transform', 'translate(' + ((list_y+ list_width)/2  + list_x/2) + ','+(list_y - 60)+')')

		chart_svg.append('text').style("font-weight", "bold")
				  .text("Medication: ")
				  .attr('dy','0.35em')
				  .attr('transform', 'translate(' + (list_x)+ ','+(list_y - 20)+')')

		chart_svg.append('text').style("font-weight", "bold")
				  .text("Symptom: ")
				  .attr('dy','0.35em')
				  .attr('transform', 'translate(' + (list_x + list_width + clearance)+ ','+(list_y - 20)+')')

		var list = chart_svg.append("g").append("rect")
						.attr("x", list_x)
						.attr("y", list_y)
						.attr("rx", 1)
						.attr("ry", 1)
						.attr("width", list_width)
						.attr("height", list_height)
						.attr("fill", "#d9d9d9")
						.style("fill-opacity",1)
						.style("stroke","#666666");  

		var list = chart_svg.append("g").append("rect")
						.attr("x", list_x + list_width + clearance)
						.attr("y", list_y)
						.attr("rx", 1)
						.attr("ry", 1)
						.attr("width", list_width)
						.attr("height", list_height)
						.attr("fill", "#d9d9d9")  // #71a087
						.style("fill-opacity",1)
						.style("stroke","#666666");  // #00b3e3

		temp_max_1 = 0;
		temp_max_2 = 0;

		jsondata.forEach(function(d){
			if ( (d.class == "symptom") & (d.score > temp_max_1) ){
			 temp_max_1 = d.score;
			}
			if ( (d.class == "medication") & (d.score > temp_max_2) ) {
			 temp_max_2 = d.score;
			}
		})

		normalizer_1 = 1 / temp_max_1;
		normalizer_2 = 1 / temp_max_2;

		console.log(normalizer_1, normalizer_2)

		var counter = 0
		var wordList = chart_svg.append("g").attr("class", "features_list").selectAll(".features_list")
							.data(jsondata).enter().append("text").attr("class", "features_list")
							.each(function (d,i) {
								if (d.class == "symptom"){
									d3.select(this).remove();
								}else{
									d.count = counter
									counter++; 
								}
							})
							.text(function(d){return d.feature})
							.attr("fill", "black")
							// .attr("dy", function(d){()=> {
							// 			var yP = d.count ? (2.0*d.count + 2.0).toString()+"em" : "2.0em";
							// 			return yP;
							// 		}})
							.attr("x", list_x + 30)  //+ margin.left + 30
							.attr("y", function(d){return (d.count*each_word_gap + list_y + 30)})
							.attr("text-anchor", "left")
							.attr("font-size", list_font)
							.attr("font-weight", "bold");

		var counter = 0
		var wordList2 = d3.select(".svg_data").append("g").attr("class", "features_list").selectAll(".features_list")
							.data(jsondata).enter().append("text").attr("class", "features_list")
							.each(function (d,i) {
								if (d.class == "medication"){
									d3.select(this).remove();
								}else{
									d.count = counter
									counter++; 
								}
							})
							.text(function(d){return d.feature})
							.attr("fill", "black")
							.attr("x", list_x + 30 + list_width + 50)  // margin.left +
							.attr("y", function(d){return (d.count*each_word_gap + list_y + 30)})
							.attr("text-anchor", "left")
							.attr("font-size", list_font)
							.attr("font-weight", "bold");



		counter = 0
		var bars = chart_svg.append("g").attr("class","bars").selectAll(".bars").data(jsondata).enter()
						.append("rect").attr("class","bars")
						.each(function (d,i){
								if (d.class == "symptom"){
									d3.select(this).remove();
								}else{
									d.count = counter
									counter++; 
								}
							})
						.attr("x", function(d,i){return list_x+ 30 })
						.attr("y", function(d,i){return list_y + d.count*each_word_gap + 1.3*30 })
						.attr("width", function(d){return 100* normalizer_2 * d.score})
						.attr("height", 10)
						.attr("fill", "#5a5a8c")
						.attr("opacity", "1")
			           .transition()
			           .duration(500)
			           .attr("width", function(d){return 100 * normalizer_2 * d.score})
			           .attr("fill", "#5a5a8c");

	    counter = 0
	    var bars2 = chart_svg.append("g").attr("class","bars").selectAll(".bars").data(jsondata).enter()
						.append("rect").attr("class","bars")
						.each(function (d,i){
								if (d.class == "medication"){
									d3.select(this).remove();
								}else{
									d.count = counter
									counter++; 
								}
							})
						.attr("x", function(d,i){return list_x+ 30+ list_width + 50})
						.attr("y", function(d,i){return list_y + d.count*each_word_gap + 1.3*30 })
						.attr("width", function(d){return (100 * normalizer_2 * d.score)})
						.attr("height", 10)
						.attr("fill", "#5a5a8c")
						.attr("opacity", "1")
			           .transition()
			           .duration(500)
			           .attr("width", function(d){
			           		// console.log(d.score, normalizer_2, temp_max_2)
			           	return 100 * normalizer_1 * d.score})
			           .attr("fill", "#5a5a8c");



		
		
	});
}

// function updateWindow(){
							 
// 		// zoomRect.call(zoom.transform, d3.zoomIdentity);
	  	
// 		var chart_x = w_size.innerWidth || e_size.clientWidth || g_size.clientWidth;
// 		var chart_y = w_size.innerHeight || e_size.clientHeight || g_size.clientHeight;
	
// 		width = chart_x - margin.left - margin.right;
// 		height = chart_y - margin.top - margin.bottom;    

		
// 		if (height < 1000) {
// 			height = 1000;
// 		}
// 		if (width < 1500) {
// 			width = 1500;
// 		}

		
// 		// height = height + height_plus*3;
// 		// width = width + width_plus;
		
// 		svg.attr("width", width);
// 		svg.attr("height", height - 50);
// 		svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// 		chart_svg.attr("width", width);
// 		chart_svg.attr("height", height);
		
// 		chart_svg.selectAll(".page_frame").attr("width", width - 50);
// 		chart_svg.selectAll(".page_frame").attr("height", height - 100);

// 		// svg.selectAll(".hide_rect").attr("width", width).attr("y", height - Axis_room + 1);

// 		// chart_svg.selectAll(".time_boxs").attr("x", function(d){return x_scale(d.axis_distance);}).attr("y", (height - Axis_room + 10	));
// 	}
	