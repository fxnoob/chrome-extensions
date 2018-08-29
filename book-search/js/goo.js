    function GSearch(){};
    GSearch.prototype.GJsonDecode= function(data,setid,errid)
    {
        
        var js = JSON.parse(data),node1,node2=''; 
        
        if(js.totalItems==0)
        {
            errid.innerHTML = "<br><div class='alert alert-danger' role='alert'>Nothing Found</div><hr>";

        }else{

            setid.innerHTML = "Total:<span class='badge'> "+js.totalItems+"</span> Search Found!!<hr>";
            //setting items on display
            for (var i =0; i<js.items.length; i++)
                    {
                        imgs =   js.items[i].volumeInfo.imageLinks.smallThumbnail;
                        node2+="<div class='media'><div class='media-left'><a href='#'><img class='bimg' data-toggle='modal' data-target='#GSCCModal' onclick='GbookInfo(this);' class='media-object' src='"+ imgs +"' alt='" +js.items[i].selfLink+ "'></a></div><div class='media-body'><h4 class='media-heading'>"+js.items[i].volumeInfo.title +"</h4> </div></div>";

                    }
                    document.getElementById("todopan").innerHTML= node2+"<hr>";
        }
         
    }
    GSearch.prototype.GSearchForTerm = function(term,setid,errid){

      var http,url,rdstat,d;
         if(window.XMLHttpRequest)
            http = new XMLHttpRequest();
         else
            http = new ActiveXObject("Microsoft.XMLHTTP");
            url = "https://www.googleapis.com/books/v1/volumes?q="+term;
            http.open("GET",url);
            http.send();
            http.onreadystatechange= function(){
                var d;
            if(http.status==200&&http.readyState==4)
               {
                setid.innerHTML="";
                errid.innerHTML = " ";
                d= new GSearch();
                //
                d.GJsonDecode(http.responseText,setid,errid);
                }
            else
                 errid.innerHTML = " ";

        }
        rdstat = http.onreadystatechange;
        return rdstat;
  }
var data=  new GSearch();
  var sid = document.getElementById("sid");
  var errid = document.getElementById("errid");
  data.GSearchForTerm("php",sid,errid);
  sid.innerHTML='';
  errid.innerHTML='';


  //events for keeping the records of searching
  document.getElementById("s").addEventListener("keypress",check,false);
function check(evt){
    if (evt.keyCode == 13) {

        var data = new GSearch();
        var sid = document.getElementById("sid");
        var errid = document.getElementById("errid");
        data.GSearchForTerm(document.getElementById("s").value, sid, errid);
        document.getElementById("datas").value = document.getElementById("s").value;
        document.getElementById("s").value = '';
        document.getElementById("s").focus();
    }
}
  var GbookInfo = function(Book){


      //codes for books info retrieval
      var id,url,http,B;
      id= Book.alt;
      http = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
      url = Book.alt;
      
      http.open("GET",url);
      http.send(null);
      http.onreadystatechange = function(){
        if(http.status==200&&http.readyState==4)
        {
          B= new GSearch();
          B.GBookJsonDecode(Book,http.responseText );
        }
      }
  }
  //books info retrieval end
//books json data decoding 
GSearch.prototype.GBookJsonDecode = function(Book,Data){

        var data = JSON.parse(Data);
        console.log(data);
            document.getElementById("titlee").innerHTML=data.volumeInfo.title;
            document.getElementById("Description").innerHTML=data.volumeInfo.description;
            document.getElementById("booksrc").src=Book.src;
            document.getElementById("Author").innerHTML="Authors: "+data.volumeInfo.authors;
            document.getElementById("ISBN").innerHTML="ISBN: "+data.volumeInfo.industryIdentifiers[1].identifier;
            document.getElementById("Year").innerHTML="Year: "+data.volumeInfo.publishedDate;
            document.getElementById("Page").innerHTML="Total Page: "+data.volumeInfo.pageCount;
            document.getElementById("Publisher").innerHTML="Publisher: "+data.volumeInfo.publisher;
            if(data.accessInfo.pdf.isAvailable){
            document.getElementById("Download").innerHTML="Download Ebooks";
            document.getElementById("Download").href=data.accessInfo.pdf.downloadLink; 
            }else if(data.accessInfo.epub.isAvailable){

            document.getElementById("Download").innerHTML="Download Ebooks";  
            document.getElementById("Download").href=data.accessInfo.epub.downloadLink; 
            }else{
            document.getElementById("Download").innerHTML="No Download Link Available";    
             document.getElementById("Download").href="#";        
                 }
}