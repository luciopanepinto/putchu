 // Putchu - Platforms / Adventure 2D game in pixel art on PC. 
 // ----------------------------------------------------------------------------
 // Copyright (C) 2015-2018 Lucio PANEPINTO
 // 
 // This program is free software: you can redistribute it and/or modify
 // it under the terms of the GNU General Public License as published by
 // the Free Software Foundation, either version 3 of the License, or
 // (at your option) any later version.
 // 
 // This program is distributed in the hope that it will be useful,
 // but WITHOUT ANY WARRANTY; without even the implied warranty of
 // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 // GNU General Public License for more details.
 // 
 // You should have received a copy of the GNU General Public License
 // along with this program.  If not, see <https://www.gnu.org/licenses/>.
 // ----------------------------------------------------------------------------
 // lucio.panepinto@gmail.com
 // http://www.putchu.be
 // https://www.facebook.com/putchugame/
 // ----------------------------------------------------------------------------

var IMAGES_RESSOURCES = new Array();

var LOADED_RESSOURCES = 0;

var VERIFY_RESSOURCES_TIMER = null;
var VERIFY_RESSOURCES_SPEED = 150;

function loadRessources( callback ) { 

	$( "a.toolkit" ).hide();

	if ( STARTUP === null || STARTUP === "0" ) { 
		return; 
	}	
	
	VERIFY_RESSOURCES_TIMER = setInterval( function() { verifyRessources( callback ) }, VERIFY_RESSOURCES_SPEED );
	
	for ( var i = 0, imax = IMAGES_RESSOURCES.length; i < imax; i ++ ) { 
	
		var img = IMAGES_RESSOURCES[i].split(";");
		
		if ( $( "#ressources img[id='" + img[0] + "']" ).length < 1 ) {
			var imgObj = new Image();
			imgObj.onload = function() { 			 
				$( "#ressources" ).append( this );
				LOADED_RESSOURCES ++;
			}
			imgObj.onerror = function() { 
				"stop" in window ? window.stop : document.execCommand("Stop");
				setStartup( STARTUP );
				window.location.replace( "index.html" );
			}
			imgObj.id = img[0];
			imgObj.src = img[1];
		}
	}
}

function resetLoadRessources( callback ) { 
	clearInterval( VERIFY_RESSOURCES_TIMER );
	VERIFY_RESSOURCES_TIMER = null;
	loadRessources( callback );
}

function verifyRessources( callback ) { 

	if ( LOADED_RESSOURCES >= IMAGES_RESSOURCES.length ) { 
		clearInterval( VERIFY_RESSOURCES_TIMER );
		VERIFY_RESSOURCES_TIMER = null;
		$( "a.toolkit" ).show();
		LOADED_RESSOURCES = 0;
		loadAllSounds();
		eval( callback + ";" );
	} else { 
		var t = parseInt( ( LOADED_RESSOURCES / IMAGES_RESSOURCES.length ) * 100 );
		var m = ""; if ( t > 75 ) m += "<br>" + eval( "TEXT_LOADING_STILL_" + LANG )
		$( "#loading" ).html( eval( "TEXT_LOADING_" + LANG ) + " " + t + "%" + m );
	}
}