//jQuery and JSON ---  https://www.w3schools.com/jquery/ajax_getjson.asp

//AJAX prevents the white screen of nothing
//this should demonstrate what should be being pulled in from the JSON file
let meteorite = {
               "name" : "Aachen",
               "id" : "1",
               "nametype" : "Valid",
               "recclass" : "L5",
               "mass":"21",
               "fall":"Fell",
               "year":"1880-01-01T00:00:00.000",
               "reclat":"50.775000",
               "reclong":"6.083330",
               "geolocation": {
                 "type":"Point",
                 "coordinates":[6.08333,50.775]}
               }
               //this would've also given a great visual of how the data is supposed to be written out (good reference for the future) - http://json.parser.online.fr/

       //$ not defined? took off of $(function) to fix
       (function () {
           $("button").click(function () {
               showmeteoriteInfo();
           });

       });

       //should pull data
       function showmeteoriteInfo()
           {
               $("#meteoriteInformation").html("Name: " + meteorite.name
               + "<br>Id:" + meteorite.id + "<br>Name Type:" + meteorite.nametype + "<br>Recclass:"
               + meteorite.recclass + "<br>Mass:" + meteorite.mass + "<br>Fall:" + meteorite.fall
               + "<br>Year:" + meteorite.year + "<br>Reclat:" + meteorite.reclat + "<br>Reclong:" + meteorite.reclong
               + "<br>Geolocation:" + meteorite.geolocation.type + meteorite.geolocation.coordinates);
           }
