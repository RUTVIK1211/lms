<?php

$name = "";

fscanf(STDIN, "%s", $name);

$input_array = str_split($name);
$output_array = array_reverse($input_array);

foreach ($output_array as $value) {
    echo $value . "\n";
}
