<?php


fscanf(STDIN, "%s\n", $name);

$array = str_split($name);
$counter_array = array('0'=>0,'1'=>0,'2'=>0,'3'=>0,'4'=>0,'5'=>0,'6'=>0,'7'=>0,'8'=>0,'9'=>0);

foreach($array as $value)
{
    $counter_array[$value] += 1;
}

foreach($counter_array as $key => $value){
    echo $key . " " . $value ."\n";
}
