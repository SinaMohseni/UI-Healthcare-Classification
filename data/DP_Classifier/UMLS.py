# -*- coding: utf-8 -*- 
import re
import glob
import copy
import operator

import math
import json

import os
import sys


file_number = "1"
all_features = json.load(open("example"+ file_number +"/umls_feature_ins_dp.json"))  # lsp_feature_ins.json

symp = [] 
med = [] 
max_med = []
max_symp = []
json_obj = []

for feature in all_features:
    med.append(feature["med_contri"])
    symp.append(feature["sym_contri"])

temp = 0
temp_word = ""
j = 0
print "List size: ", len(all_features), "\n"

while (j < len(all_features)):
    (max_value,max_index) = max((max_value,max_index) for max_index,max_value in enumerate(med))
    if ( (max_value == temp) & (temp_word.lower() == all_features[max_index]["phrase"].lower())):
        print "redundant!", max_index, temp_word.lower()
        med[max_index] = 0;
    elif (max_value == 0):
        print "No more med features"
        j = len(all_features);
    else:
        max_med.append(max_index)
        json_obj.append({"weight": all_features[max_index]["med_contri"], "type": all_features[max_index]["type"], "class": "med","phrase": all_features[max_index]["phrase"],"feature": all_features[max_index]["feature"]})
        med[max_index] = 0;
        temp = max_value;
        temp_word = all_features[max_index]["phrase"]
        print "\n >> Med ",j,": ", all_features[max_index]["phrase"], " ", max_value, " ", max_index, " ", all_features[max_index]["type"]
        j += 1    

print "\n \n"        
j = 0
temp = 0
temp_word = ""

while (j < len(all_features)):
    (max_value,max_index) = max((max_value,max_index) for max_index,max_value in enumerate(symp))

    if ( (max_value == temp) & (temp_word.lower() == all_features[max_index]["phrase"].lower())):
        print "redundant!", max_index, temp_word
        symp[max_index] = 0;
    elif (max_value == 0):
        print "No more symp features"
        j = len(all_features); 
    else:
        max_symp.append(max_index)
        json_obj.append({"weight": all_features[max_index]["sym_contri"], "type": all_features[max_index]["type"], "class": "symp","phrase": all_features[max_index]["phrase"],"feature": all_features[max_index]["feature"]})
        symp[max_index] = 0;
        temp = max_value;
        temp_word = all_features[max_index]["phrase"]
        print "\n >> Symp ",j,": ",all_features[max_index]["phrase"], " " , max_value, " ", max_index, " ", all_features[max_index]["type"]
        j += 1    
  
print "\n", json_obj

fout = open("example"+ file_number +"/UMLS_features_"+ file_number +".json","w")
fout.write(json.dumps(json_obj,encoding='UTF-8',default=str))
fout.close()


