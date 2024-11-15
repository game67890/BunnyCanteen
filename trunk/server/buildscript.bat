call svn up
call mvn clean
call mvn package

Rem bin目录地址
set serverbinPath=..\serverbin
copy /Y target\hserver-1.0-SNAPSHOT.jar %serverbinPath%\hserver.jar
Rem properties 目录文件
xcopy /S /Y config %serverbinPath%\config
Rem 启动文件
copy /Y target\classes\application.properties %serverbinPath%\config\application.properties
Rem 日志文件
copy /Y target\classes\logback-spring.xml %serverbinPath%\logback-spring.xml

Rem 更新提交
cd %serverbinPath%
call svn up
call svn commit -m"auto commit"
pause