<?php
header("Content-Type: application/json");

$type = $_REQUEST['type'];


var_dump($_REQUEST);

switch($type){

    case "login":

        $data = [
            "status" => ["0" => 'ok',"650xxx" => "200"],
            "userID" => "0",
            "token" => "dsfgbn"

        ];
        break;


//    case ""

}

if(empty($data)){
    $data = [];
}

echo json_decode($data);