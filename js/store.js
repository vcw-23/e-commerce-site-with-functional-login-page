//slideshow 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//search results
function showResult(str) {
    if (str.length == 0) {
        document.getElementById("search").innerHTML = "";
        document.getElementById("search").style.border = "0px";
        return;
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var searchfield = document.getElementById("search");
            searchfield.innerHTML = this.responseText;
        }
    }
    xmlhttp.open("GET", "php/searchResults.php?q=" + str, true);
    xmlhttp.send();
}

//add to cart

function addToCart(name,price,path) {
    if (name.length == 0) {
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var h=document.getElementById('chead');
                h.insertAdjacentHTML('afterend',this.responseText);                    
            }
        };
        xmlhttp.open("GET", "php/addToCart.php?name=" + name+"&price="+price+"&path="+path, true);
        xmlhttp.send();
    }
}

//remove from cart
function removeFromCart(id) {
    console.log(id);
    document.getElementById(id).remove();
}

//show/hide cart 

function showCart(){
    document.getElementById("mycart").style.display="block"
 };
 
 function hideCart() {
    document.getElementById("mycart").style.display = "none"
 };
 


//dropdown filter
function filterA(value) {
    if (value.length == 0) {
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("f2").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "php/filterList.php?value=" + value, true);
        xmlhttp.send();
    }


}

