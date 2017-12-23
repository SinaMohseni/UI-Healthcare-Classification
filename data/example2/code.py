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
# import time
# from datetime import datetime
# from collections import Counter

# import urllib2,urllib

# from collections import defaultdict

from scipy import ndimage
from scipy import misc

# from PIL import Image
# from resizeimage import resizeimage

# os.system('cls')

print "\n \n", "Pre-processing and LDA topic modeling,,,"


class DecimalEncoder(json.JSONEncoder):
    def _iterencode(self, o, markers=None):
        if isinstance(o, decimal.Decimal):
            # wanted a simple yield str(o) in the next line,
            # but that would mean a yield on the line with super(...),
            # which wouldn't work (see my comment below), so...
            return (str(o) for o in [o])
        return super(DecimalEncoder, self)._iterencode(o, markers)

face = misc.face()
# misc.imsave('heatmap.jpg', face)
face = misc.imread('result2/heatmap.jpg')

print "\n size: ", face.shape, face.dtype  
print "\n size: ", face.shape[0],face.shape[1]
print "\n score: ", face[0,0]

face2 = misc.imresize(face, 25)

print "\n size: ", face2.shape[0],face2.shape[1]

json_obj = []
for j in range(0,face2.shape[0]): 
    for i in range(0,face2.shape[1]): 
        json_obj.append({"x": i, "y": j, "score": face2[i,j]})

        json_obj2 = [{"x": 34, "y": 12, "score": 23}, {"x": 34, "y": 12, "score": 23}]

# print "\n json: ", json_obj

fout = open("heat_json.json","w")
# fout.write(json.dumps(list(json_obj))   # (json.dumps(list(x)))
fout.write(json.dumps(json_obj,encoding='UTF-8',default=str))
fout.close()
# fout.write(json.dumps(json_obj,indent=1))


