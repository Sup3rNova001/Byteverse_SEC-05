from collections import defaultdict, OrderedDict
from csv import reader
from itertools import chain, combinations
from optparse import OptionParser
from utils import *
import csv


def fpgrowth(itemSetList, minSupRatio, minConf):
    frequency = getFrequencyFromList(itemSetList)
    minSup = len(itemSetList) * minSupRatio
    fpTree, headerTable = constructTree(itemSetList, frequency, minSup)
    if(fpTree == None):
        print('No frequent item set')
    else:
        freqItems = []
        mineTree(headerTable, minSup, set(), freqItems)
        rules = associationRule(freqItems, itemSetList, minConf)
        return freqItems, rules

def fpgrowthFromFile(fname, minSupRatio, minConf):
    itemSetList, frequency = getFromFile(fname)
    minSup = len(itemSetList) * minSupRatio
    fpTree, headerTable = constructTree(itemSetList, frequency, minSup)
    if(fpTree == None):
        print('No frequent item set')
    else:
        freqItems = []
        mineTree(headerTable, minSup, set(), freqItems)
        rules = associationRule(freqItems, itemSetList, minConf)
        return freqItems, rules

# if __name__ == "__main__":
#     from fpgrowth_py import fpgrowth
#     itemSetList = [['eggs', 'bacon', 'soup'],
#                     ['eggs', 'bacon', 'apple'],
#                     ['soup', 'bacon', 'banana']]
#     freqItemSet, rules = fpgrowthFromFile(itemSetList, minSupRatio=0.5, minConf=0.5)
#     print(freqItemSet)
#     print(rules) 

if __name__ == "__main__":
    optparser = OptionParser()
    optparser.add_option('-f', '--inputFile',
                         dest='inputFile',
                         help='CSV filename',
                         default=None)
    optparser.add_option('-s', '--minSupport',
                         dest='minSup',
                         help='Min support (float)',
                         default=0.5,
                         type='float')
    optparser.add_option('-c', '--minConfidence',
                         dest='minConf',
                         help='Min confidence (float)',
                         default=0.5,
                         type='float')

    (options, args) = optparser.parse_args()

    freqItemSet, rules = fpgrowthFromFile(options.inputFile, options.minSup, options.minConf)
    # print(freqItemSet)
    # print(rules)
    output_file_path = 'output_final.csv'
    with open(output_file_path, 'w', newline='') as output_file:
        writer = csv.writer(output_file)
        writer.writerow(rules)


 