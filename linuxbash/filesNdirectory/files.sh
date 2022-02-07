#! /bin/bash

echo -e "\n Welcome to bash file created by rutvik\n\n";
sleep 3
echo -e "Lets Create our first file first.txt using touch command"
sleep 3
touch first.txt


echo  -e "\n lets see what we created...."
sleep 3

ls 

echo  -e "\n now let copy default.txt content to copy.txt file"
sleep 3
cp -p default.txt copy.txt

sleep 3

echo -e "\n now lets see what we are actully just copy using cat command"

cat copy.txt

