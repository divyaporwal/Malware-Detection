# Malware-Detection-S3- CS- 6301.005 Securing Cloud - Malware Detection using Machine Learning

1. Introduction
With the rapid development of the Internet, malware became one of the major cyber threats nowadays. Any software performing malicious actions, including information stealing, espionage, etc. can be referred to as malware. Kaspersky Labs define malware as “a type of computer program designed to infect a legitimate user's computer and inflict harm on it in multiple ways.” While the diversity of malware is increasing, anti-virus scanners cannot fulfill the needs of protection, resulting in millions of hosts being attacked. Therefore, malware protection of computer systems is one of the most important cybersecurity tasks for single users and businesses, since even a single attack can result in compromised data and sufficient losses. For this reason, machine learning-based techniques can be used. The goal of this project is to develop the proof of concept for the machine learning based malware classification using  strong classifiers. Best features are determined of all the given features and are extracted. The most accurate algorithm can distinguish the malware file with lowest error rate. The accuracy will be measured both for the case of detection of whether the file is malicious and for the case of classification of the file to the malware family. Once the file is detected malware free, we save the file into Amazon AWS cloud storage.

We used three machine learning methods → Random Forest, Decision Trees and Adaboost to classify a file as malware/no-malware. We took the best one among this based on max accuracy and used it as a final model.


2. Specifications

Dataset from →  VirusShare.com
Total data available:  138,047 (150mb)
Total legitimate files: 41323   
Total virus containing files : 96724
Total features (columns) : 57
All are .exe files with the available information about that file
Memory
Header information → Size of code, ImageSize, etc
These act as ‘features’ for our ML Models.
Technologies used :  Python , Flask , AWS S3 , Web development (Frontend and Backend)

4   RESULTS
We got the following accuracy from the 3 methods used:
Accuracy:
Decision Tree : 99.014832 % (Overfitting)
RandomForest : 99.319075 % (Best)
AdaBoost : 98.422644 % (Good)
Observation:
We found that Random Forest has the best accuracy and we saved its features and used it for classifying an unknown file uploaded through our application. 
Decision Trees, though they have a better accuracy than Adaboost, are overfitting the train data.
Adaboost could be used after Random Forest for malware file classification.

5   CHALLENGES
Some of the challenges we faced for this project are:
Obtaining the malware dataset because malware files are risky to handle and if misused,or mishandled could infect the entire system.
Extracting important 13 features from the 57 available features using various feature engineering techniques.
Selecting best possible model from the available classification models
Since AWS is not free, we need to get a free version for study purpose

These challenges required adequate time to find an efficient approach to solve them. Also, for obtaining the dataset we found a website ‘VirusShare.com’ which doesn’t provide dataset to all. We need to specify a good reason as to where and how would we use it. This is for security measure so that the data is not misused by hackers for evil purpose.  
For extracting the features, we used the sklearn library’s  ‘ExtraTreesClassifier’ to get all the important features based on the threshhold decided.
 
6   CONCLUSION AND FUTURE WORK
The security of cloud is utmost important in today’s world where huge firms could lose their highly confidential data in the hands of hackers. The hackers generally find a way to breach the security especially by injecting malware and infecting files. So, we implemented an efficient algorithm with almost 99.81 accuracy (Random Forest) which classifies a file having malware/no malware. We have also made an easy-to-use UI for easy uploading of files and checking for virus before uploading to the cloud. AWS S3 is used as a cloud framework and files are uploaded directly using Python and boto3 AWS SDK. Also, our UI and frontend are very easy to understand and work with to focus on the important aspects of this course , that is, cloud and security.

Future work involves implementing a deep neural network (CNN) for the classification of more complex malware files. Also, getting more data from other sources is also required so that model could be trained and tested on all the available malware types. This system could also be converted to an API (Application Programming Interface) which can be used and integrated with other languages and platforms as well. 

7   References
https://virusshare.com/ VirusShare.com for malware dataset
Gavriluţ, Dragoş, Mihai Cimpoeşu, Dan Anton, and Liviu Ciortuz. "Malware detection using machine learning." In 2009 International Multiconference on Computer Science and Information Technology, pp. 735-741. IEEE, 2009.
https://docs.aws.amazon.com/quickstarts/latest/s3backup/welcome.html 
https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-examples.html 
http://flask.pocoo.org/docs/1.0/tutorial/ 
