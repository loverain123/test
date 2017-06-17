<?php
    function getSession(){
        $right=0;
        if ($_POST["user"] != null && isset($_POST["user"]) && $_POST["pwd"] != null && isset($_POST["pwd"])) {
            /**
             * mysqli("远程服务器的地址","Mysql的用户名","mysql的密码","数据库名称");
             */
            $conn = new mysqli("localhost", "root", "", "login");
            mysqli_query($conn,"set character set 'utf8'");//读取数据时设置字符集编码utf-8
            mysqli_query($conn,'set names utf8');//写入数据时设置字符集编码为utf-8
            $rs = $conn->query("select * from teacher where account='".$_POST["user"]."' and secret='".$_POST["pwd"]."';");
            while ($row = $rs->fetch_assoc()) {
                $_SESSION["user"] = $row["account"];
                $right=1;
            }
            $rs->close();
            $conn->close();
            if($right==1) {
                echo $_SESSION["user"];
            }else{
                echo "0";
            }
        }
    }
    function doPOST(){
        if(isset($_SESSION["user"])){
            if($_SESSION["user"]==null) {
                POSTSession();
            }else {
                echo $_SESSION["user"];
            }
        }else{
            getSession();
        }
    }
    doPOST();
    



