#! /bin/bash

echo -e "\n Welcome to bash file created by rutvik\n\n";
sleep 3

echo -e "Lets Create our first file first.txt using touch command"
touch first.txt
sleep 3

echo  -e "\n lets see what we created...."
ls 
sleep 3

echo  -e "\n now let copy default.txt content to copy.txt file"
cp -p default.txt copy.txt
sleep 3

echo -e "\n now lets see what we are actully just copy using cat command"
cat copy.txt
sleep 3


echo -e "\n Lets move our newly genrated file to up one directory "
mv copy.txt ../.
sleep 3 

echo -e "\n Lets give a nick name to first.txt --> secound.txt"
mv first.txt secound.txt
sleep 3

echo -e "\n Thank You Hope you enjoyed the journy"

