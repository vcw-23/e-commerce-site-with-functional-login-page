 
     <?php
     $name=$_GET['name'];
     $price=$_GET['price'];
     $path=$_GET['path'];?>
     <div class="cartproduct" id=<?php echo$path?>>
            <img src=<?php echo$path ?> alt="" class="productimagecart">
            <div class="productcartinfo">
                <h5 class="productcardname"><?php echo$name ?></h5>
                <div class="removecartproduct">
                    <p class="price"><?php echo$price?></p>
                    <button class="rfc" onclick="removeFromCart('<?php echo$path?>')">remove</button>
                </div>
            </div>
        </div>
        


