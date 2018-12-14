const cheerio = require('cheerio')
const request = require('request')

var URL = 'http://rancrump.com/aboutme/';

request(URL, function(err, resp, html) {
    //If there is no error
    if (!err){

        //Parse The URL Data
        const $ = cheerio.load(html);

        //Iterate through the webpage and select the specified class or span
        $('.myTopBorder').each(function(i, element){ 
            var temp = $(this).text();              
            Print(temp);     
        }); 
        
    } else {
        //There was an Error and it should log it out....
        console.log(err);                        
    }
});


function Print(val) {
    console.log(val);
}