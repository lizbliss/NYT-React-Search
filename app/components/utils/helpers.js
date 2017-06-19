// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT api key
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

//These variable will hold the results we get from the user's inputs
var searchTerm ="";
var numResults = 0;
var startYear = 0;
var endYear =0;

var articleCounter = 0;

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(numArticles, queryURL) {

    console.log("URL: " + queryURL);

    // Figure out the geolocation
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";
    return axios.get(queryURL).then(function(response) {
      // If get a result, return that result
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(articles) {
    return axios.post("/api", { articles: articles });
  }
};

// We export the API helper
module.exports = helper;
