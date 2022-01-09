 <?php
$xmlDoc=new DOMDocument();
$xmlDoc->load("search.xml");

$x=$xmlDoc->getElementsByTagName('product');

$q=$_GET["q"];


if (strlen($q)>0) {
  $hint="";
  for($i=0; $i<($x->length); $i++) {
    $y=$x->item($i)->getElementsByTagName('title');
     if ($y->item(0)->nodeType==1) {
      if (stristr($y->item(0)->childNodes->item(0)->nodeValue,$q)) {
        if ($hint=="") {
          $hint="<a  target='_blank'>" .
          $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
        } else {
          $hint=$hint . "<br /><a  target='_blank'>" .
          $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
        }
      }
    }
  }
}


if ($hint=="") {
  $response="<a  target='_blank'> 
         no response </a>";
} else {
  $response=$hint;
}
echo $response;
?>