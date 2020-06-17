var tab = [];
var i = 0;

function set_cookie()
{
    document.cookie = "qwe=" + escape(document.getElementById("ft_list").innerHTML)+'; max-age=86400;';
}

function del_l(c)
{
    if (confirm("Are u sure to delete?"))
    {   
        c.remove();
        set_cookie();
    }
}

function add_new()
{
    
    var todo = prompt(": ");
    if (todo != "" && todo !== null)
    {
        var newitem = document.getElementById("ft_list");
        var newdiv = document.createElement("div");
        newdiv.innerHtml = todo;
        var textnode = document.createTextNode(todo);
        newdiv.onclick = function (){del_l(this);};
        newdiv.appendChild(textnode);
        newitem.insertBefore(newdiv, newitem.firstChild);
        set_cookie(); 
    }
}

function getCookies()
{
	var cookiesArray = document.cookie.split(';');
	var array = {};

	for (var x in cookiesArray)
	{
		var toto = cookiesArray[x].split("=");
        if (toto[0] == "qwe")
            break;
    }
    var newitem = document.getElementById("ft_list");
	if (toto[1] !== undefined)
		newitem.innerHTML = unescape(toto[1]);    
}
