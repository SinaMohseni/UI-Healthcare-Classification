# -*- coding: utf-8 -*- 
print "Importing Libraries..."
import re
import glob
import copy
import operator

import math
import json
# import csv

import os

import sys

# def Read_dataset(json_file):    

#     ret = []
#     j_ret = []  
    
#     all_docs = json.load(open(json_file))
#     i = 0
#     for a_doc in all_docs:
#         new_doc = a_doc["med_contri"]
#         new_doc = a_doc["symmed_contri"]
#         j_ret.append(new_doc)

#     return j_ret


# features =  Read_dataset("example1/lsp_feature_ins.json");
# all_features = json.load(open("example3/umls_feature_ins.json"))  # lsp_feature_ins.json
file_number = "1"
all_features = json.load(open("example"+ file_number +"/umls_feature_ins.json"))  # lsp_feature_ins.json
    # i = 0


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
    #max_value = abs(max_value)
    # if (max_value == 0):
    #     print "No more feature"
    #     j = 10SS
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
    # max_value = abs(max_value)
    
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


# fout = open("UMLS_features_3.json","w")
fout = open("example"+ file_number +"/UMLS_features_"+ file_number +".json","w")
# fout.write(json.dumps(list(json_obj))   # (json.dumps(list(x)))
fout.write(json.dumps(json_obj,encoding='UTF-8',default=str))

fout.close()
# fout.write(json.dumps(json_obj,indent=1))


