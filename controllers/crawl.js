var cheerio = require('cheerio');
var request = require('request');

exports.foodCrawl = function(req, res, next){
 
  request.get('http://www.archanaskitchen.com/hyderabadi-tangy-sour-lentil-curry',function(err, request, body){
    if(err)
      return next(err);
    var $ = cheerio.load(body);
    var title;
    $('h1.recipe-title').each(function(){
      title = $(this).text();
    });
    var recipeDiv;
    $('#recipeingredients').each(function(){
      recipeDiv = $(this).html();
    });
    res.render('crawl',{
      title: title,
      recipeDiv:recipeDiv
    })
  });
}
exports.index = function(req, res, next){
  request.get('https://www.urbanladder.com/accent-chairs',function(err, request, body){
    if(err)
      return next(err);
//    var modelData = cheerio.load(body);
//    var images = [];
//    modelData('.product-img').each(function(){
//      images.push(modelData(this));
//    });
    var $ = cheerio.load(body);
    var products = [];
    var i =0
    var images = [];
    $('.product-img img').each(function(){
      images[i] =$(this).attr('src');
      i++
    });
    i =0;
    var titles = []
    $('.product-title').each(function(){
      titles[i]=$(this).text();
      i++;
    });
    for(var i=0; i< images.length ||i< titles.length; i++)
    {
      products.push({
        image: images[i],
        title: titles[i]
      })
    }
    res.send(products);
//    res.render('crawl',{
//      products:  products
//    });
  });
}
//[{
//  images: "image1.jpg",
//  titles: "The Title 1"
//},
//  
//{
//  images: "image2.jpg",
//  titles: "The Title 2"
//},
//  
//{
//  images: "image3.jpg",
//  titles: "The Title 3"
//}]