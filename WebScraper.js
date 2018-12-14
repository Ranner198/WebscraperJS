//Loading the npm packages
const cheerio = require('cheerio')
const request = require('request')

//The Url that will be scraped
var URL = 'http://rancrump.com/aboutme/';

//The attribute that will be searched, follows the HTML class and ID syntax i.e. '.' and '#'
//can also select a span by simply typing span in the begining i.e. 'span.someClassName'
var selector = '.myTopBorder'

//run the request for the URL and run the return function...
request(URL, function(error, resp, html) {
    //If there is no error
    if (!err){

        //Parse The URL Data with cheerio
        const $ = cheerio.load(html);

        //Using a foreach loop iterate through the webpage and select the specified class or span
        $(selector).each(function(i, element){ 
            //Select the current index inner html with the .text() function
            var temp = $(this).text();  
            //print the temp data            
            Print(temp);     
        }); 
        
    } else {
        //If there was an Error we should log it out....
        Print(error)                        
    }
});

//I don't like typeing out console.log so this is just a print function
// "I put the fun in function (:" - ran 2018
function Print(val) {
    console.log(val);
}