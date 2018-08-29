var s = document.getElementById('s');
var Search = function(){}
    Search.prototype.JsonDecode= function(data,setid,errid){
        var imgs;
        var js = JSON.parse(data),node1,node2='';
            if(js.Error==0&&js.Total==0)
             {
                 setid.innerHTML="<br><div class='alert alert-danger' role='alert'>Nothing Found</div><hr>";

             }
             else if(js.Error==0&&js.Total!=0)
            {
                errid.innerHTML="Total:<span class='badge'> "+js.Total+"</span> Search Found!!<hr>";
                for (var i =0; i<js.Books.length; i++)
                    {
                        imgs =   js.Books[i].Image ;
                        node2+="<div class='media'><div class='media-left'><a href='#'><img class='bimg' data-toggle='modal' data-target='#GSCCModal' onclick='bookInfo(this);' class='media-object' src='"+ imgs +"' alt='"+ js.Books[i].ID+"'></a></div><div class='media-body'><h4 class='media-heading'>"+js.Books[i].Title +"</h4> </div></div>";

                    }
                document.getElementById("todopan").innerHTML= node2+"<hr>";
                //setting value of current page
                document.getElementById("bf").value='';
                document.getElementById("bf").value=Math.ceil(js.Page/10);
                //dsdsdsds
                //document.getElementById("datas").value= s.value;
            }
        //console.log(data);
  }
  Search.prototype.SearchForTerm = function( term,setid,errid){

      var http,url,rdstat,d;
         if(window.XMLHttpRequest)
            http = new XMLHttpRequest();
         else
            http = new ActiveXObject("Microsoft.XMLHTTP");
            url = "http://it-ebooks-api.info/v1/search/"+term;
            http.open("GET",url);
            http.send();
            http.onreadystatechange= function(){
                var d;
            if(http.status==200&&http.readyState==4)
               {
                setid.innerHTML="";
                errid.innerHTML = " ";
                d= new Search();
                d.JsonDecode(http.responseText,setid,errid);
                }
            else
                 errid.innerHTML = " ";

        }
        rdstat = http.onreadystatechange;
        return rdstat;
  }

 Search.prototype.SearchByPage= function(BId,searchTerm,pageNo,setid,errid){

     var http,url,rdstat,d;
     if(window.XMLHttpRequest)
         http = new XMLHttpRequest();
     else
         http = new ActiveXObject("Microsoft.XMLHTTP");
     var pgn =  parseInt(pageNo);
     if(BId.id=='forw')
         pgn++;
     else
         pgn--;
     url = "http://it-ebooks-api.info/v1/search/"+searchTerm+"/page/"+pgn;
     http.open("GET",url);
     http.send();
     http.onreadystatechange= function(){
         var d;
         if(http.status==200&&http.readyState==4)
         {
             setid.innerHTML="";
             errid.innerHTML = " ";
             d= new Search();
             d.JsonDecode(http.responseText,setid,errid);
         }
         else
             errid.innerHTML = " ";

     }
 }
//Retrieving books info
  var bookInfo = function(Book){


      //codes for books info retrieval
      var id,url,http,B;
      id= Book.alt;
      http = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
      url = "http://it-ebooks-api.info/v1/book/"+id;
      http.open("GET",url);
      http.send(null);
      http.onreadystatechange = function(){
        if(http.status==200&&http.readyState==4)
        {
          B= new Search();
          B.BookJsonDecode(Book,http.responseText );
        }
      }
  }

//books info retrieval end
//books json data decoding 
Search.prototype.BookJsonDecode = function(Book,Data){

        var data = JSON.parse(Data);
            document.getElementById("titlee").innerHTML=data.Title;
            document.getElementById("Description").innerHTML=data.Description;
            document.getElementById("booksrc").src=Book.src;
            document.getElementById("Author").innerHTML="Authors: "+data.Author;
            document.getElementById("ISBN").innerHTML="ISBN: "+data.ISBN;
            document.getElementById("Year").innerHTML="Year: "+data.Year;
            document.getElementById("Page").innerHTML="Total Page: "+data.Page;
            document.getElementById("Publisher").innerHTML="Publisher: "+data.Publisher;
            document.getElementById("Download").href=data.Download;
             

}

//default search result

  var data=  new Search();
  var sid = document.getElementById("sid");
  var errid = document.getElementById("errid");
  data.SearchForTerm("php",sid,errid);
  sid.innerHTML='';
  errid.innerHTML='';
//default search end
  //pagination
  document.getElementById("forw").addEventListener("click",function(){
      var search,page;
      search=document.getElementById("datas");
      page = document.getElementById("bf");
      data.SearchByPage(document.getElementById("forw"),search.value,page.value,sid,errid);
  },false);
  document.getElementById("backw").addEventListener("click",function(){
      var search,page;
      search=document.getElementById("datas");
      page = document.getElementById("bf");
      data.SearchByPage(document.getElementById("backw"),search.value,page.value,sid,errid);
  },false);

  //objects creation

document.getElementById("s").addEventListener("keypress",check,false);
function check(evt){
    if (evt.keyCode == 13) {

        var data = new Search();
        var sid = document.getElementById("sid");
        var errid = document.getElementById("errid");
        data.SearchForTerm(document.getElementById("s").value, sid, errid);
        document.getElementById("datas").value = document.getElementById("s").value;
        document.getElementById("s").value = '';
        document.getElementById("s").focus();
    }
}




