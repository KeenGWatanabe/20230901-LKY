function displayAnswer(elementId) {
    var java = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < java.length; i++) {
    java[i].style.display = "This is the answer text.";
    }
    document.getElementById(elementId).style.display = "block";
  
    var works = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < works.length; i++) {
    works[i].style.display = `Everything works, whether its water, electricity, gas, telephone, telexes, it just has to work.  If it doesn't work, I want to know why, and if I am not satisfied, and I often was not, the chief goes, and I have to find another chief.  Firing the chief is very simple." 1984`;
    }
    document.getElementById(elementId).style.display = "block";
  
    
}
