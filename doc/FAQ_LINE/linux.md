
## 用户与权限

```sh
sudo adduser {username} // root 用户的命令 新建用户并分配目录

> 增加 root 权限

- 方式 1
sudo adduser {username} root // 将其放入 root 组 使其拥有 root 权限

// 或
sudo usermod -G sudo username

- 方式 2

vim /etc/solders

new_username ALL=(ALL:ALL) ALL


```

### 添加到 root 组 与solder 文件区别

https://superuser.com/questions/1077489/what-is-the-difference-between-adding-a-user-to-sudoers-vs-root-group

The 'root group' as in what you would specify in /etc/group is about unix permissions. Every file has user, group, and 'other' permissions. If a file is set such that users in group root can read it, then you can grant a user the ability to read that file by putting the user in group root. Of course then that user can read every file which has the read bit set for group root.

The sudoers file is about running commands with the effective ID of other users. You have more granular control over what commands each user can run, and as as whom. So if you want a user to only be able to run one specific command as root, then you would set that in the sudoers file

root 组是根据文件权限来的，而 solders 文件让一个用户可以运行其他用户的命令，可以更精细控制每个用户可以运行的命令

## apt

refer: https://askubuntu.com/questions/222348/what-does-sudo-apt-get-update-do

### apt-get update

apt-get update 将source list 中的包 有更新的版本以及 新添加到 source.list 的包 同步到 apt-get 中

### apt-get upgrate

apt-get upgrate 将sorce.list 中 安装在本机上的包进行更新

## linux iptable 防火墙
```sh
service iptables start/stop
service iptables status
```

## 查看端口使用

```sh
netstat -anp|grep {port}
```

## 查看本机进程

```sh
ps -ef |grep {node}
```

## 查找nginx 位置

- find / -name nginx

- 找到 sbin 目录 下边为nginx 可执行文件，将其配置入 .bashrc

- nginx -t 查找配置文件，监听访问即可

## 流量出口 网关，用户权限

## docker 权限，原理，以及工作中常用  Linux 命令总结

- 任何框架都是为了让问题简单化
- 任何描述某个原理性的东西 都有自我出发理解至于同一感觉

> 查看是否存在某个服务进程

```
ps -ef |grep {name} |grep {work folder}
```

> 已知端口查看是否处于 监听状态

```
netstat -anp |grep {port}
```

> 查看某个进行运行用户，以及对其文件所拥有的权限
```sh
ps -ef |grep 第一列 || ps -aux |grep 第一列

# such as

ps -ef |grep node |grep vpn
```

> 查看系统存在哪些用户

```
less | more /etc/passwd
```

> 查看用户所属组

```
groups {uId}
```

## Docker

- docker ， 本地文件挂载到docker中，本地文件权限，同docker权限一致，本地文件 增删改查，同步到docker中

## docker 工作原理图

![docker_img](imgs/docker.png)

> Curl -L 追踪冲重定向

```
curl -L localhost:8081 // web-admin
```

## Sudo run server, ps -ef 将看到用户执行是 root
