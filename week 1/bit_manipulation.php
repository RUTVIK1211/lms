<?php
function countSetBits($n)
{
    $count = 0;
    while ($n)
    {
        $count += $n & 1;
        $n >>= 1;
    }
    return $count;
}

// Driver Code
$i = fscanf(STDIN, "%s\n", $name);
echo countSetBits($i);

// This code is contributed by ajit
