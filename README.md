# 📊 BenzAI (Data analytics in car dataset)
(MS Engage 2022 Final submission).

<p align="center">
  <img
       width="max_content"
       height="max_content"
       src="readmeassets/entire.gif"
  ><br/><br/>
  <b><u><i>Demonstration of how the Automotive Industry could harness data to take informed decisions.</i></u></b><br/><br/>
</p>

## System requirements

Before installation let see what you need 
* Laptop or PC (this application is non responsive in mobiles)
* nodejs version>=16

## Installation

* Open terminal or command prompt and do following step by step
* Clone the repository by using following command
* <b>git clone</b> url/to/this/repo
* cd to the cloned repository named car_data_analysis_frontend or car_data_analysis_frontend_main
* Type <b>npm install</b> and hit enter, all the dependencies will install in your laptop
* Now you can start frontend by typing <b>npm start</b>

## Introduction
<p>
  This application demonstrate how the automotive industry could harness the data to take informed decision. Any techinal head can use this type of application so that they can take necessary actions in their organisation. This application let you guide to dive into the data and help you identifying the trends and relations between the data, which help you to form queries for example what are some popular features set which customers choose the most, by entering this query in query processor you will get desire output which again based on the dataset that we are using. This application only meant for car dataset that was provided by kaggle and display query results and predictions only based on the model that were created using this dataset.<b> </p>
This is just a frontend of the entire application, and you can find the backend of the application in </b> https://github.com/ishaan-pare/car_data_analysis_backend.git. 

## Technologies used

This application is frontend for car data analysis project and technologies used in this frontend are as follows
* React
* react-chartjs-2
* chart.js
* @syncfusion/ej2-react-heatmap
* @mui/material




#### Or else You can go through given [link]( https://analysiscar.herokuapp.com/)

## How to use?

### Once the application is lauched you will see screen given below.
<p align="center">
  <img
       width="max_content"
       height="max_content"
       src="readmeassets/Screenshot from 2022-05-27 23-55-18.png"
  >
</p>

This is the very first screen you will see after launching the application. This is Query Processing tab which resolve your query and also predict some of the parameters like features, price, sales.

#### Types of query processing 

1) Simple queries without Machine learning at backend.
   This types of query require a command which include 
   * Keyword like , popular, max..
   * Noun
   * Specifier (if any)

   Based upon above parameter syntax of the query will look like<b> <Keyword+Noun+Specifier> </b>.
   
   Examples of queries 
    * popular features 
    * max enginesize 
    * popular features between 1 20 price 
    * popular enginesize between 2 12 price 
    etc .. (make sure all the sentence should be in lowercase and all string should be same otherwise application will not respond for results)
    
2) Queries which involve use of Machine learning at backend.
    This type of queries only want three things from user
  
   * What type information do you have ?
   * What information do you want to predict ?
   * Data you have
  
    From information there are 3 types of information
   * Price
   * Sales
   * HarFeatures which include
      1. wheelbase, 2. Fuel capacity, 3. Width, 4. Engine_size, 5. Length
   * SoftFeatures which include
      1. powerperfactor, horsepower, yearresalevalue, fuelefficiency/mileage


### After clicking on Features Analysis tab
  
<p align="center">
  <img
       width="max_content"
       height="max_content"
       src="readmeassets/heatmap.png"
  >
</p>
With help of features analysis tab one can easily identify the most related features of cars and can make certain decision with the help of this information.
Features analysis tab is partitioned in two parts
  
1) Most Dependent features <br/>
  
    In this most dependent features of cars are noted in decending order which help user to 
   * Prioritised the features based on this dependencies
   * Allocate work according to the skillset their employee have and the team they can form with the help of this dependecies
  
2) Relational analysis<br/>
  
    This type of queries only want three things from user
  
   * Shows the heatmap which again help user to identifies the relationship among dependencies and take necessary actions with it.


### After clicking on Visualizer tab
  
<p align="center">
  <img
       width="max_content"
       height="max_content"
       src="readmeassets/visuallizer.png"
  >
</p>
Visualizer let you draw different graphs on car dataset depending upon the dependent and independent variable user input

Three graph supported by visualizer are
1)  Scatter graph
2)  Line graph
3)  Bar graph

### After clicking on Customer segments
  
<p align="center">
  <img
       width="max_content"
       height="max_content"
       src="readmeassets/Screenshot from 2022-05-28 00-06-57.png"
  >
</p>
Customer segmets let you visualize different segements of customer depending upon the price and sales of the car

By analysing we can see customers are segmented in 4 different fields
  
1)  Small family
2)  Family 
3)  Luxurious
4)  Vintage
