#! /bin/bash

echo -e "\n Welcome to bash file created by rutvik\n\n";
sleep 3

echo  -e "Creating hellolinux,willdelete directory.. using mkdir command.. with rwx permission"
mkdir hellolinux willdelete -v -m 777
sleep 3

echo  -e "\n lets see what we created...."
ls 
sleep 3

echo  -e "\n  now after 3 secound willdelete is deleted"
rmdir willdelete
sleep 3

echo  -e "\n lets see what left ...."
ls 
sleep 2

cd hellolinux
echo  -e "\n Where are you ?? lets see using pwd command"
pwd
sleep 3

echo  -e "\n Surprice we changed your directory using cd command"

echo -e "Thank You.."; 