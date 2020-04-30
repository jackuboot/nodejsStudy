# *git 仓库创建与本地拉取*

## **1，在github上建立自己的仓库**

## **2，开始拉取**

- 本地创建newFile文件夹
- git bash 打开相应的路径
- git init
- git config --global user.name"yourname"
- git config --global user.email"your@email.com"
- ssh-keygen -t rsa -C "your@email.com" 
- 根据提示路径找到 id_rsa和id_rsa.pub 两个文件所在路径，copy  id_rsa.pub 内容
- 打开github，登录你的账户，进入设置， 进入ssh设置找到SSH keys设置， 在key种将刚刚复制的粘贴进去
- git add README.md
- git commit -m "first commit"
- git remote add origin git@github.com:jackuboot/nodejsStudy.git
- git push -u origin master

