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
 

$( document ).ready( function() { 
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	
	/*if ( isIE ) {  
	   "stop" in window ? window.stop : document.execCommand("Stop");
	   window.alert( "You have to use Chrome, Mozilla or Edge browser ! " );
	}*/
});

function startup() { 
	if ( localStorage && localStorage !== null ) { 
		var startup = localStorage.getItem( "STARTUP" );
		if ( !startup || startup === "0" ) { 
			STARTUP = 0;
			window.location.replace( getPageLangForStartup() );
		} else { 
			setStartup( "0" );
			getPageLang();
			return startup;
		}
	}
	return null;
}

function setStartup( startup ) { 
	if ( localStorage && localStorage !== null ) { 
		localStorage.setItem( "STARTUP", startup );
	}
}
function getPageLang() { 
	if ( localStorage && localStorage !== null ) { 
		LANG = localStorage.getItem( "LANG" );
		if(LANG===null||LANG===""){LANG="FR";localStorage.setItem("LANG",LANG);}
	}
}

function getPageLangForStartup() { 

	if ( localStorage && localStorage !== null ) { 
		LANG = localStorage.getItem( "LANG" );
		if ( LANG === null || LANG === "" ) LANG = "FR";

		var page = "intro";
		if ( LANG !== "FR" ) { 
			page += "_" + LANG;
		}
		page += ".html";
		
		return page;
	} else { 
		return "FR";
	}
}