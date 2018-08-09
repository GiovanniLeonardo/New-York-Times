$(document).ready(function(){   // this will allow html to load before running the code

    // API call to NYT
    var apikey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    var url ="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
    url = url + apikey + "&q=";
        
    function bulidlist(url,noa)
    {
       $.ajax({
           url: url,
           method: 'GET',
         }).done(function(articles) {
           for(i =0; i < noa; i++){
        var searchResults = $("#searchResults");
        var title = articles.response.docs[i].headline.main;
        var headline = $("<p>").text(title);
        searchResults.append(headline);

           }
         });
    
    }

// searh query
    $("#search").click(function(){
        event.preventDefault();  //prevents refresh
        var searchTerm = $("#searchTerm").val().trim(); // var gets value from input field
        var numRecord = $("#numRecord").val().trim();
        var startYear = $("#startYear").val().trim();
        var endYear = $("#endYear").val().trim();
        var sUrl = url + searchTerm;

        //If the user provides a startYear -- the startYear will be included in the queryURL
   if (parseInt(startYear)) {
     sUrl = sUrl + "&begin_date=" + startYear + "0101";
   }
 
   // If the user provides a startYear -- the endYear will be included in the queryURL
   if (parseInt(endYear)) {
     sUrl = sUrl + "&end_date=" + endYear + "0101";
   }

        bulidlist(sUrl,numRecord);
    });

    // clear query
    $("#clear").click(function(){
    
        var searchTerm = $("#searchTerm").val(""); // the ("") will empty the input
        var numRecord = $("#numRecord").val("");
        var startYear = $("#startYear").val("");
        var endtYear = $("#endYear").val("");
    });

});
