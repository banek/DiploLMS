
function init(){
		//the next line makes it impossible to see Contacts on the HTC Evo since it doesn't have a scroll button
//		document.addEventListener("touchmove", preventBehavior, false);  
		//document.addEventListener("deviceready", getWikiList(), true);
	getWikiList();
	}

function getWikiList()
{
	//  http://campusdev.diplomacy.edu/wiki/server/wikiList.asp?cmd=getwikis
	
	x$.data = {};
    x$(window).load(function(e){
      x$("#returned_information").xhr("http://campusdev.diplomacy.edu/wiki/server/wikiList.asp?cmd=getwikis",
        { callback: function(){

	        var newResponse = this.responseText;

			try
			{
				var wikis = eval(newResponse).wikiList; // this should be an array
				var elm = "";
				//alert("Number of wikis: " + wikis.length);
				document.getElementById("divWikisInfo").innerHTML = "The list contains " + wikis.length + " wikis";
				
				// iterate codes
		        for(var i=0; i < wikis.length; i++) {
		            var wiki = wikis[i];
		            elm += '<a href="#"><div id="'+wiki.id+'" class="wikidiv">' + unescape(wiki.title) + '</div></a><br/>';
		        }
				
				
				x$("#returned_information").html(elm);
			}
			catch(err)
			{
				alert("Greska " + err);
			}
	        

          }
        }
      );
    });
}


init();