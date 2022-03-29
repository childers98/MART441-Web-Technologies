
 $(document).ready(function () {
            $("button").click(function () {
                $("#meteoriteInformation").load("data/meteorite.json", function(responseText){
                    var meteorite = JSON.parse(responseText);
                    $("#meteoriteInformation").html("Name: " + meteorite.name
                    + "<br>Id:" + meteorite.id + "<br>Name Type:" + meteorite.nametype + "<br>Recclass:"
                    + meteorite.recclass + "<br>Mass:" + meteorite.mass + "<br>Fall:" + meteorite.fall
                    + "<br>Year:" + meteorite.year + "<br>Reclat:" + meteorite.reclat + "<br>Reclong:" + meteorite.reclong
                    + "<br>Geolocation:" + meteorite.geolocation.type + meteorite.geolocation.coordinates);
                });
            });
        });

       /* function fadeText()
        {
            $("#meteoriteInformation").fadeOut("slow").fadeIn("slow");
        }
        */
