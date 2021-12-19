     function cookiesave(n,v,time,dn,path){
         if(n){
             if(!time) time=24*60*0*1000;
             if(!path) path="/";
             var Days=1;
             var exp=new Date();
             var today=new Date();
             exp.setTime(today.getTime()+Days*24*60*60*1000);
             var expires="; expires="+exp.toGMTString();
             if(dn) dn="domain="+dn+";";
             document.cookie = n + "=" + v + expires + "; " + dn + "path=" + path;
         }
     }
    function cookieget(n) {
        var name = n + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    }
    $(function() {
	    var COOKIE_NAME = "closeclick";
    	if ($.cookie(COOKIE_NAME)) {
		$("#note").hide()
	   } else {
		$(".popup").show();
		$(".popup").css("display","block");	
		cookiesave('closeclick', 'closeclick', '', '', '')
	    }
    });
    function closeclick() {
    	$('#note').hide()
    }