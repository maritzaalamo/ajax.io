function loadBooks(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var book = this.responseText;
      var booksObj = JSON.parse(book);
      for (x = 0; x < booksObj.books.length; x++)
      {
        showBooks(booksObj, x);
      }
    }
  };
  xhttp.open("GET","books.json",true);
  xhttp.send();
}

function showBooks(booksObj, x){
  var book = booksObj.books[x];
  var titleID = "book" + x + "Title";
  var summaryID = "book" + x + "Summary";
  var coverID = "book" + x + "Cover";
  document.getElementById(titleID).innerHTML = book.title;
  document.getElementById(summaryID).innerHTML = book.summary;
  document.getElementById(coverID).src = book.coverImage;
}
