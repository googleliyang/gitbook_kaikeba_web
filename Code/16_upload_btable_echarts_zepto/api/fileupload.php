<?php

          //一个方法 move_uploaded_file() php 提供的.
           $tmpdir=$_FILES['lifePhoto']['tmp_name'];

           $fileName=$_FILES['lifePhoto']['name'];

           $filedir="../images/".$fileName;
           //将临时$tmpdir的数据，存储到$filedir 地址.
           move_uploaded_file($tmpdir,$filedir);
           echo '{"status":"ok","code":200,"fileurl":"'.$filedir.'"}';

?>