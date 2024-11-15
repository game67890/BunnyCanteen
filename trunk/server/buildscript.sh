#!/bin/sh

svn up
mvn clean
mvn package

## bin目录地址
serverbinPath=../serverbin
yes | cp target/hserver-1.0-SNAPSHOT.jar $serverbinPath/hserver.jar
## properties 目录文件
yes | cp -rf config $serverbinPath/config
## 启动文件
yes | cp  target/classes/application.properties $serverbinPath/config/application.properties
## 日志文件
yes | cp  target/classes/logback-spring.xml $serverbinPath/logback-spring.xml

## 更新提交
cd $serverbinPath
echo "================开始停服================"
sh stop.sh
sleep 2
echo "================开始更新================"
svn up
echo "================开始提交================"
svn commit -m"auto commit"
sleep 2
echo "================重新开服================"
sh start.sh
