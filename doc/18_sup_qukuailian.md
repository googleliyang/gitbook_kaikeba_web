App 与 DApp 的区别
传统的 Web App 是中心化的。服务器属于某一个实体所有，权力和权利都高度集中。
传统App 架构
而去中心化App的架构
以太坊的设计，是将以太坊所有的节点，构成一个世界计算机。程序员可以把程序发布到世界计算机后，程序的执行和结果都无法篡改，只忠于预先设定的逻辑，是一个可信的流程。这个程序在以太坊世界计算机中，被称之为 “智能合约”。智能合约可以在一个节点上发布，它的函数，可以被其他节点执行。智能合约目前可以用于投票，交易，博彩,版权，金融等行业。
智能合约也是一个交易(Transaction)，保存在区块链中。

目前基于区块链以太坊方向的具有代表性一些产品
- 游戏类加密猫 cryptokitties 2017 年11月上线，43w 用户，预计收益 2亿人民币
  ![WebAPP结构](imgs/WX20180523-100500@2x.png)
- 互联网广告  basic AttentionToken 2017年5月ico，基于以太坊发行battoken
  ![WebAPP结构](imgs/WX20180523-101321@2x.png)
## 2.以太坊节点介绍以及安装
### 2.1 geth安装以及介绍
```JavaScript
首先，我们知道以太坊的设计，是将以太坊所有的节点，构成一个世界计算机，那我们怎么样把我们的计算机加入到以太坊
的节点里面，参加运算勒，这个时候我们需要装一个客户端软件geth。
```
#### 2.1.1下载安装节点  
安装 geth https://www.ethereum.org/cli
第一步:
  简单介绍:Homebrew是什么Homebrew是一款Mac OS平台下的软件包管理工具,拥有安装、卸载、更新、查看、搜索等很多实用的功能。mac 安装
  Install Homebrew and make sure it's up to date:
  brew update
  brew upgrade
第二步: 节点安装
  Then use these commands to install ethereum:
  brew tap ethereum/ethereum
  brew install ethereum
#### 2.1.2 节点启动
启动以太坊 geth 节点，节点可以连接主网，可以同步主网数据，但是我们在学习阶段，使用该节点建立私网。
为了启动该节点，首先第一步:
- 创建一个目录，作为以太坊节点的数据目录
```JavaScript
mkdir -p ~/chainwork/private
```
- 创建一个配置文件 genesis.json 用于创建创世块和设置网络。
```JavaScript
{
  // nonce 和 mixhash 是作为输入，让每个节点都可以通过计算来做
  // proof-of-work，确认这个区块的挖掘者确实做了足够多的计算找到了合法的
  // nonce 和 mixhash
  "nonce": "0x0000000000000042",
  "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  // difficulty 就是制定了本链一开始的挖矿难度，在我们的私有测试节点中，
  // 这个值设得很低，这样就比较容易挖到矿
  "difficulty": "0x400",
  // alloc 可以预分配一些以太币给某些地址，这里我们不做预分配
  "alloc": {},
  // coinbase 就是当成功挖出 genesis 区块后，接收奖金的地址
  "coinbase": "0x0000000000000000000000000000000000000000",
  // timestamp 本区块挖出来的时间戳，全网将依据前后
  // 两个区块的时间戳之差来调整挖矿的难度
  "timestamp": "0x0",
  // parentHash 指向前一个区块的哈希指针，创世纪区块中的 parentHash 接地
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  // extraData 可用于存储任何信息
  "extraData": "0x",
  // gasLimit 规定了每一个区块中能够消耗的最大的 gas 值，也就事实上
  // 限制了区块的大小
  "gasLimit": "0xffffffff",
  // config 用来为这个私有网络确立一系列参数
  "config": {
      // chainId 是本私有链的 ID
      "chainId": 4224,
      // homesteadBlock 指明 Homestead 版本的兼容的区块开始编号
      "homesteadBlock": 0,
      // EIP155 兼容的区块开始编号
      // EIP155 - "Simple Relay Attack Protection"
      "eip155Block": 0,
      // EIP158 兼容的区块开始编号
      "eip158Block": 0
  }
}
```
- 初始化genesis.json 文件
```JavaScript
初始化genesis配置文件
cd ~/chainwork/private 目录
geth --datadir . init genesis.json
会在 private 目录下面创建两个目录 geth/keystore
启动节点 初始化数据目录， 网络id
geth --datadir . --networkid 4224 --rpc --rpcport 8545
--port 30303 --rpccorsdomain="*" -rpcapi eth,web3,personal,net console 2> log.txt

```
- 以上操作创建了一个以太坊节点，这个节点并没有接入主网，而是一个私有网络。目前在该网络中，只有一个节点，并且没有任何的账户。用户可以通过命令行来对以太坊网络进行交互。
- 添加账户
```JavaScript
personal.newAccount("user1");
```
- 挖矿
```JavaScript
miner.start();
```
- 查看账户和账户余额
```JavaScript
personal.listAccouonts
eth.getBalance(personal.listAccouonts[0]);
```
- 转账
```JavaScript
personal.newAccount("user2");
默认情况下，你在Geth中的账户是被锁住的，你不能用这些被锁住的账户发送交易，例如转账或调用合约方法。
因此如果你需要使用Geth发送交易，就需要先解锁账户
personal.unlockAccount(eth.accounts[0])；
```
### 2.2 ganache安装以及介绍
下载节点   ganashe是一键安装的私链节点，比自己搭建的私链节点好用一些。他是基于图形化界面的，方便操作。
```JavaScript
http://truffleframework.com/ganache/
```
##3 环境搭建
Remix 是一个 IDE (integrated development environment 集成开发环境)，用于智能合约开发，使用的语言是 solidity，是一个基于浏览器的 IDE，也是以太坊官方的 IDE。
Remix 在线 IDE： http://remix.ethereum.org/
- 开发智能合约(集成了 solidity 编辑器)
- 访问已部署的智能合约的状态和属性
- 代码分析，编译错误检查
- 调试和测试 DApp

###3.1 remix 本地化
 基于浏览器在线开发工具的好处是无需安装，自动升级。但是同时也带来很多缺点
 1:受限于网络的原因，如果网络状况不好，影响开发速度
 2:开发效率低
基于这些原因，所以我们需要对remix 进行本地化，本地化步骤
- 1: 需要有node 的执行环境，安装node.js
- 2: 因为下载一些node.js 低包，我们需要下载cnpm 淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
- 3: 下载remix 本地化需要的文件
  npm install remix-ide -g
- 4: 启动remix，会在本地起一个端口，默认8080
  remix-ide
##4 solidity 基础知识
- solidity 简介
```JavaScript
Solidity是一种语法类似JavaScript的高级语言。它被设计成以编译的方式生成以太坊虚拟机代码。
```
- 第一个智能合约
```JavaScript
pragma solidity ^0.4.20;
contract Greetings {
    // 保存在全局区的消息
    string message;
    function Greetings() public {
        message = "i am ready";
    }
    function setMessage(string _message) public {
        message = _message;
    }
    function getMessage() public constant returns (string) {
        return message;
    }
}
```
### 4.1源码剖析
- 版本指示
```JavaScript
pragma solidity ^0.4.20;
```
这个版本指示表示 0.4.20 以及 0.4.20 以上的 Solidity 都可以运行程序，但是 0.5 以上则不能兼容。
- 注释
就像 C 语言一样，使用 // 和 /* ... */ 来标记注释。
- 合约名称
```JavaScript
contract Greetings
```
contract 关键字，用于指示智能合约名称，智能合约类似 C++ 的类，合约中可以定义全局的状态值和函数。函数必须有构造函数，该函数和合约名保持一致。
构造函数只在合约启动时调用一次。
- 状态量
```JavaScript
string message;
```
message 是状态量，状态量可以持久保存在合约中。
- 函数
函数是可执行的代码单位，比如：
```JavaScript
  function setMessage(string _message) public {
      message = _message;
  }
  function getMessage() public constant returns (string) {
      return message;
  }
```
函数可以被内部调用或者外部调用，是否可以被外部调用，则看函数的访问限制情况。函数修饰符号，可以修改函数的语意。
### 4.1.1 语法介绍 block/msg/now
- block 在调用某个方法的时候，solidity 会提供一个block 的变量，把当前块的信息返回。
```JavaScript
    block.blockhash(uint blockNumber) returns (bytes32) 给定块的哈希 - 仅适用于256个不包括当前最新块
    block.coinbase (address) 当前块矿工地址
    block.difficulty (uint) 当前块难度
    block.gaslimit (uint) 当前块gaslimit
    block.number (uint) 当前数据块号
    block.timestamp (uint) 当前块时间戳从unix纪元开始为秒
```
- msg 在调用某个方法的时候，会给方法传递一个msg的属性，用来传递消息
```JavaScript
    msg.data (bytes) 完整的 calldata
    msg.gas (uint) 剩余gas
    msg.sender (address) 该消息（当前呼叫）的发送者
    msg.sig (bytes4) 呼叫数据的前四个字节（即功能标识符）
    msg.value (uint) 发送的消息的数量
```
- now (uint) 当前块时间戳（block.timestamp的别名）
### 4.1.2 存储 storage / memory
```JavaScript
Storage 变量是指永久存储在区块链中的变量。 Memory 变量则是临时的，当外部函数对某合约调用完成时，
内存型变量即被移除。 你可以把它想象成存储在你电脑的硬盘或是RAM中数据的关系。大多数时候你都用不到这
些关键字，默认情况下 Solidity 会自动处理它。 状态变量（在函数之外声明的变量）默认为“存储”形式，
并永久写入区块链；而在函数内部声明的变量是“内存”型的，它们函数调用结束后消失。  
```
###4.1.3 随机数
生成一个0-100 之间的随机数
```JavaScript
function randomUtils() public view returns(uint) {
      //定义数字。
      uint random=1;
      //基于数字的基础上生成随机数.
      //keccak256 生成数.
      return uint(keccak256(now,msg.sender,random)) % 100;
}
```
### 4.1.4 require 关键字
```JavaScript
     require(keccak256(_name) == keccak256("Vitalik"));
     require使得函数在执行过程中，当不满足某些条件时抛出错误，并停止执行：
     用来比较两个字符串是否相等.
     function equals(string str, string str1) public pure returns (bool) {
          return (keccak256(str) == keccak256(str1));
    }
```
### 4.1.5 modify
```JavaScript

pragma solidity^0.4.19;
contract ModifyContract {
     address owner;  
     //定义占位符，可以把需要判断的条件共性的地方进行抽取。          
     modifier onlyOwner() {
            require(owner == msg.sender);
            _;      
     }
     //在调用方法之前会先进行检查.
     function getRightToVote() public  onlyOwner {

     }
}
```
## 4.2发布合约
使用 Remix IDE，写入代码后，选择 solc 版本，再进行编译。然后到 Run Tab页，选择好 环境，账户 等信息，设置 Gas Limit (一般 Remix 会自动设置一个值)，点击 Create 发布合约。发布合约需要花费 Gas。
合约发布之后，用户可以点击合约函数，执行函数。有一些函数需要 Gas，而有一些函数则不需要 Gas。
## 4.5调试
进入 Debugger Tab 页，可以进行调试。
##5 solidity 急行军
### 案例1 转账给智能合约账户
当一个智能合约运行时，它运行在以太坊上，任何人都可以调用函数，向智能合约转钱
```JavaScript
pragma solidity^0.4.24;
contract Money {
     function Money(){
     }
     //向智能合约账户转钱
     function paymoney () payable public{    
     }  
     function getBalance() public view returns (uint) {
            return address(this).balance;
     ｝   
}
```
### 案例2 从智能合约账户取钱
这个例子，展示如何从智能合约账户取钱，在这个例子里，取钱没有任何条件，
只要合约账户中有钱，就可以取出这部分钱来
```JavaScript
pragma solidity^0.4.19;

contract GetMoney {
      //合约发布者
      address owner;
      //发布合约的时候会调用构造函数.
      function GetMoney() public {
           owner = msg.sender;
      }
      //向合约账户转钱。
      function payMoney() payable public {

      }
      //查看智能合约账户的余额  
      function getBalance() public view returns(uint) {
             return address(this).balance;
      }
      //谁调用就往谁的账户打钱。从智能转化里面转钱.
      function getMoney() public {
            address who = msg.sender;
            if(getBalance() > 2 ether) {
                 who.transfer(2 ether);
            }
      }
      //销毁合约.
      function kill() public {
           //判断操作，如果合约的发布者是调用着，则有权限销毁合约.
           if(owner ==  msg.sender) {
                 selfdestruct(msg.sender);
           }
      }              
}
```
### 案例3 土豪发红包
    ```JavaScript
    pragma solidity^0.4.19;

    contract RedPacket {
         //设置土豪.
         address tuhao;
         //初始化红包的个数.
         int number;
         //初始化相关数据.
         function RedPacket(int _number) public payable{
              tuhao = msg.sender;
              number = _number;
         }
         //获取合约的余额.
         function getBalance() public view returns(uint){
               return address(this).balance;  
         }
         //抢红包
         function stakeMoney() public payable returns(bool) {
               address who = msg.sender;
               if(number > 0) {
                   number --;
                    uint random = uint(keccak256(now,msg.sender,10)) % 100;
                   uint balance = getBalance();
                   who.transfer(balance * random / 100);
                   return true;
               }
               return false;
         }
         //destory contract
         function kill() public {
              if(tuhao == msg.sender) {
                    selfdestruct(tuhao);
              }
         }
    }
    ```
### 案例4 博彩赌大小.
```JavaScript
pragma solidity^0.4.19;

contract Bet {

     address owner; //contract manager

     struct Player {
          address addr;
          uint money;
     }

     Player [] inbig;
     Player [] insmall;

     uint blockNumber;
     uint totalBig;
     uint totalSmall;

     function Bet() public {
          owner = msg.sender;
          blockNumber = block.number;
          totalBig = 0;
          totalSmall = 0;
     }

     function getBalance() public view returns(uint) {
          return address(this).balance;
     }

     function getBlockNumber() public view returns(uint,uint){
           return (blockNumber,block.number);
     }

     //押注 大小.
     function stake(bool flag) public view returns (bool){
           //先结构化玩家.
           Player memory player  = Player(msg.sender,msg.value);
           //玩家是否带钱过来.  
           if(player.money > 0){
                return false;
           }
           //押注大的
           if(flag){
                 inbig.push(player);
                 totalBig +=player.money;
           }else{ //押注小的.
                 insmall.push(player);
                 totalSmall +=player.money;
           }
           return true;
     }

     //开奖。
     function open()  payable public  returns (bool) {
            //设置开奖限制，必须最少得有两个人押注.
            if(block.number < 2+blockNumber) {
                return false;
            }
            //押注大大金额以及押注小大金额大比例。
            if(totalSmall == 0 && totalBig == 0){
                return false;
            }
            //计算开大开小的规则，根据当前块的hash 值去定.
            uint hash =  uint(block.blockhash(block.number));
            uint points = hash % 18;     
            uint i=0;    
            uint count;  
            Player memory player;
            if(points>9) {  // big winer
                  count=inbig.length;
                  for(i=0;i<count;i++){
                         player = inbig[i];
                         player.addr.transfer(player.money+totalSmall*player.money/totalBig);
                  }
            }else { // small winer
                  count = insmall.length;
                  for(i=0;i<count;i++){
                       player = insmall[i];
                       player.addr.transfer(player.money+totalBig*player.money/totalSmall);
                  }
            }
            return true;
     }
     //销毁合约
     function kill() public {
          if(msg.sender == owner){
              selfdestruct(owner);
          }
     }
}
```
### 案例5 社区投票
需求：
投票，委托代理人投票，给某个voter 赋予投票的权利
获取到最高的选题Prososal的name
```JavaScript
//合约名
contract Ballot {
    // 投票者结构体
    struct Voter {
        uint weight; // 份额（既拥有多少票）
        bool voted;  // 是否已经投票
        address delegate; // 委任谁进行投票
        uint vote;   // 第几个投票议案
    }

    // 议案机构体
    struct Proposal {
        bytes32 name;   // 议案名(最多32字节)
        uint voteCount; // 累计投票数
    }

    address public chairperson; //投票主持人

    // 投票者与其地址的映射
    mapping(address => Voter) public voters;

    // 提案指针
    Proposal[] public proposals;

    /// Ballot函数，创建新投票，输入多个议案名
    function Ballot(bytes32[] proposalNames) public {
        chairperson = msg.sender;
        voters[chairperson].weight = 1;

        for (uint i = 0; i < proposalNames.length; i++) {
            // `Proposal({...})` 创建一个临时Proposal对象
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }

    //输入投票者地址，给予投票者投票权限
    function giveRightToVote(address voter) public {
        // require防止函数被错误调用，判断为错误时终止调用
        // 并恢复到调用前的状态，但是注意会消耗gas
        require(
            (msg.sender == chairperson) &&
            !voters[voter].voted &&
            (voters[voter].weight == 0)
        );
        voters[voter].weight = 1;
    }

    /// 输入他人地址，委任他人投票
    function delegate(address to) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted);

        // 不允许委任自己
        require(to != msg.sender);

        // 循环委任直至被委任人不再委任他人，
        // 但注意这种循环是危险的，有可能耗尽gas来进行计算。
        while (voters[to].delegate != address(0)) {
            to = voters[to].delegate;

            // 避免循环委任，形成委任环链
            require(to != msg.sender);
        }

        // 此处sender为voters[msg.sender]
        sender.voted = true;
        sender.delegate = to;
        Voter storage delegate_ = voters[to];
        if (delegate_.voted) {
            // 如果被委任人已经投票，直接增加该议案票数
            proposals[delegate_.vote].voteCount += sender.weight;
        } else {
            // 如果被委任人未投票，增加被委任人持有票数
            delegate_.weight += sender.weight;
        }
    }
    /// 向议案投票
    function vote(uint proposal) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted);
        sender.voted = true;
        sender.vote = proposal;

        // 提案超出数组范围时自动中断并恢复所以修改
        proposals[proposal].voteCount += sender.weight;
    }
    /// 返回获得票数最高的议案索引
    function winningProposal() public view
            returns (uint winningProposal_)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }
    // 返回获得票数最高的议案名
    function winnerName() public view
            returns (bytes32 winnerName_)
    {
        winnerName_ = proposals[winningProposal()].name;
    }
}
```
### 案例6 竞拍 （代码）
### 博彩游戏
####需求部分:
##### 玩法规则
  ![玩法介绍](imgs/sports.png)
##### 合约需求
- 押注
- 开奖
- 计算赔率
- 领取奖励
####合约代码实例
```JavaScript
pragma solidity ^0.4.19;
contract LotteryBase {
    address public manager; // 彩票管理员
    string public name; // 彩票名称
    uint public baseBlock; // 当前售卖到的彩票期数 基准区块，也是彩票的期数 10
    uint public stopBlock; // 彩票从当前块数+到特定块数这一期间为售卖期间 关闭彩票售卖通道区块 100
    uint public openBlock; // 到了特定期间后再+到特定期间为开奖期间 开奖区块 110
    //开奖期数号码记录，用于彩民备查
    struct OpenCode {
        uint block; // 等于 baseBlock
        uint8[] opencode; // 开奖号码
    }
    // 所有开奖号码集合
    OpenCode[] public allOpenCodes;
    // 奖金账本，记录每一个用户的奖金
    mapping(address=>uint) public bonus; // 奖金
    // 所有中奖用户的奖金综合
    uint public totalBonus; // 总奖金金额，奖池金额 = 余额 - 奖金总金额

    function LotteryBase () public {
        manager = msg.sender;
    }

    modifier onlyManager () {
        require (manager == msg.sender);
        _;
    }

    // 两个抽象接口
  //  function chipin(uint8[] number, uint8 multi) public payable;
    //function open() public;

    // 未分配奖池的奖金金额
    function getBonusPool() public view returns (uint) {
        return address(this).balance - totalBonus;
    }
}

contract KuaiSan is LotteryBase {

     //不同下注不同赔率列表
    uint8[19] public odds=[0,0,0,240,80,40,25,16,12,10,9,9,10,12,16,25,40,80,240];
    //定义下注方式的枚举类型
    enum InjectionType {TypeSum, TypeSameThree,TypeSameThreeSingle,TypeSameTwo,TypeSameTwoSingle,TypeNoSameThree,TypeNoSameTwo,TypeThreeConsecutive }
    //购买彩票的结构体
    struct Order {
        address player;
        uint8[] number; // 彩票号码
        uint8 multi;
        InjectionType injectionType;//投注类型
        uint8 sumVal;//如果是和值类型，那么该值为下注的和值
    }
    // 订单集合
    Order[] orders;

    // 彩票价格，大约2人民币
    uint constant fee = 0.001 ether;
    uint constant stopInterval = 30; //设置停止间隔
    uint constant openInterval = 40; //设置开奖间隔
    uint constant codeAOffset = 33; //这只当前区块+33的hash值给A数
    uint constant codeBOffset = 34;//这只当前区块+33的hash值给B数
    uint constant codeCOffset = 35;//这只当前区块+33的hash值给C数

    function KuaiSan() public {  //构造函数，开始竞猜
        // 开奖将基于 baseBlock + 33, baseBlock + 34, baseBlock + 35
        baseBlock = block.number; //将当前区块设置到baseBlock中
        stopBlock = baseBlock + stopInterval; //设置停止区块为当前区块+开奖间隔 about 450 seconds
        openBlock = baseBlock + openInterval; //设置开奖区块为当前区块+开奖区块 about 150 seconds

        name = "中国福利彩票北京快三";
    }

    // 下注，玩家提供一个号码和倍数，记录到订单中
    // number是玩家购买的号码,multi是玩家要购买的倍数,injType为玩家下注方式,_sumVal是和值类型的和值数
    function chipin(uint8[] number, uint8 multi, InjectionType injType, uint8 _sumVal) public payable {
        require(msg.value >= fee * multi); //检查下玩家投注的金额和倍数是不是一样
        require(block.number <= stopBlock); //检查当前块数是可以下注的块数

        if(injType == InjectionType.TypeSum ){ //判断玩家下注方式是不是和值类型
            require(_sumVal >= 3 && _sumVal <= 18); //检查和值数不能小于3并且不能大于18
        }
        Order memory order = Order(msg.sender, number, multi, injType, _sumVal); //新建一个Order结构体
        orders.push(order);//将Order结构体存储起来
    }
    //计算奖金函数-通过下注code信息计算奖金情况，返回奖金值
    //number是玩家购买的号码,sumVal是值数,multi是玩家要购买的倍数,injType为玩家下注方式,openCode是开奖号码
    function calcBonus(uint8[] number,uint8 sumval, uint8 multi, InjectionType injectionType,uint8[] opencode) public view returns (uint){

        //对于和值类型投注，下注金额不能小于1大于18

        //如果是和值类型，计算和值是否相等
        if(injectionType == InjectionType.TypeSum){ //如果玩家选择的是和值类型
            uint injVal = opencode[0]+opencode[1]+opencode[2]; //开奖号码总和
            if(sumval == injVal){ //如何玩家的sumval和开奖号码和值相等的话
                return fee * odds[injVal] * multi / 2; //返回该获得的奖金
            }
            return 0;
        }
        //三同号通选 要求三个号码相同即可
        if(injectionType == InjectionType.TypeSameThree){
            if(opencode[0]  == opencode[2]){
               return fee * 40 * multi / 2;
            }
            return 0;
        }
        //三同号单选
        if(injectionType == InjectionType.TypeSameThreeSingle){
            if(opencode[0] == opencode[2]  && number[0] == opencode[0]){
                return fee * 240 * multi / 2;
            }
            return 0;
        }
        //二同号复选 只要任意两个号码相同即可
        if(injectionType == InjectionType.TypeSameTwo){
           if((opencode[0] == opencode[1] || opencode[1] == opencode[2]) && opencode[1] == number[0] ){
                return fee * 15 * multi / 2;
            }
            return 0;
        }
        //二同号单选 要求指定的对子和单都相同
        if(injectionType == InjectionType.TypeSameTwoSingle) {
            if(opencode[0] == opencode[1] || opencode[1] == opencode[2]) {
                if(opencode[0] == number[0] && opencode[1] == number[1] && opencode[2] == number[2]) {
                    return fee * 80 * multi / 2;
                }
            }
            return 0;
        }
        //三不同号 要求开奖号码是三个不同的
        if(injectionType == InjectionType.TypeNoSameThree){
            if(opencode[0] == number[0] && opencode[1] == number[1] && opencode[2] == number[2]) {
                return fee * 40 * multi / 2;
            }
            return 0;
        }
        //二不同号 指定2个不同号码和一个任意号码
        if(injectionType == InjectionType.TypeNoSameTwo){
            if( (opencode[0] == number[0] && opencode[1] == number[1]) ||
            (opencode[1] == number[0] && opencode[2] == number[1]) ) {
                 return fee * 8 * multi / 2;
            }
            return 0;
        }
        //三连号 可能情况 123 234 345 456
        if(injectionType == InjectionType.TypeThreeConsecutive){
            if(opencode[1]-opencode[0] == 1 && opencode[2]-opencode[1] == 1){
                return fee * 10 * multi / 2;
            }
            return 0;
        }

        return 0;
    }
    //开盘函数
    function open() public {
        require(block.number > openBlock);//检查一下当前块数大于设置的可开盘块数

        uint8[] memory openCode; //openCode是存储开奖号码

        uint8 a = uint8(uint(block.blockhash(baseBlock + codeAOffset)) % 6 + 1); //将当前区块的hash值+codeAOffset,运算出一个hash值与6取模并且+1
        uint8 b = uint8(uint(block.blockhash(baseBlock + codeBOffset)) % 6 + 1); //将当前区块的hash值+codeBOffset,运算出一个hash值与6取模并且+1
        uint8 c = uint8(uint(block.blockhash(baseBlock + codeCOffset)) % 6 + 1); //将当前区块的hash值+codeCOffset,运算出一个hash值与6取模并且+1
        uint8 t;
        //将开奖号码排序
        if (a > b) {
            t = a;
            a = b;
            b = t;
        }
        if (b > c)
        {
            t = c;
            c = b;
            b = t;
        }
        if (a > b) {
            t = a;
            a = b;
            b = t;
        }
        OpenCode memory code = OpenCode(baseBlock, openCode); //新建一个代码号码记录
        code.opencode[0] = a; //将记录中的号码赋值
        code.opencode[1] = b;
        code.opencode[2] = c;
        // 记录中奖号码
        allOpenCodes.push(code);
        //计算奖金
        uint i = 0;
        uint bonusMoney; //记录该获得的奖金
        for(i=0; i<orders.length; ++i) { //循环遍历每一个竞猜用户
            Order memory o = orders[i]; //o是遍历的orders寄存器
            //uint8[] number,uint8 sumval, uint8 multi, InjectionType injectionType,uint8[] opencode
            bonusMoney = calcBonus(o.number, o.sumVal, o.multi, o.injectionType, code.opencode); //调用calcBonus函数取得应该获得的奖金给bonusMoney
            if (bonusMoney > 0){
                bonus[o.player] += bonusMoney; //奖金映射,将获得奖金映射到地址中
                totalBonus += bonusMoney; //增加总奖金金额
            }
        }
        uint bonusMoney = fee * 120;
        uint i = 0;
        for(i=0; i<orders.length; ++i) {
            Order memory o = orders[i];
            if(o.number[0] == code.opencode[0]
                && o.number[1] == code.opencode[1]
                && o.number[2] == code.opencode[2]) {

                bonus[o.player] += bonusMoney * o.multi;
                totalBonus += bonusMoney * o.multi;
            }
        }
        // 重置数据，开始下一轮竞猜
        delete orders;
        baseBlock = block.number;
        stopBlock = baseBlock + 30; // about 450 seconds
        openBlock = stopBlock + 10; // about 150 seconds

    }

    // 彩民获取奖金
    function withdraw() public {
        uint money = bonus[msg.sender]; //奖金寄存器
        require(money > 0); //检查money大于0

        delete bonus[msg.sender]; //清楚该地址映射
        totalBonus -= money; //总奖金金额减少
        msg.sender.transfer(money); //给该地址返还奖金
    }
}
```
#### 中心服务器部分
##### node.js 服务器 安装初始化  
    npm init  
#####  安装web3.js到项目中：  
    npm install web3 --save  
#####  在服务器使用web3.js
    在web3test目录下新建index.js文件，在其中输入以下代码：
     var Web3 = require("web3");  
     var web3 = new Web3();  
     var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));  
##### 获取已部署的智能合约实例
```JavaScript
    var abi = /*编译器生成的abi代码*/;
    var contractAddress = '/*这里是合约的地址*/';  
    var hello = new web3.eth.Contract(abi,address);
```
##### 调用节点
- 查看节点所有账户
```JavaScript
var faq = web3.eth.getAccounts(function(error,result){
    if(!error)
    resp.send(result);
});
console.log(faq);
```
- 创建用户
```JavaScript
var daq=web3.eth.personal.newAccount("1234",function(error,result){
  	if(!error)
    resp.send(result);
});
```
- 解锁
```JavaScript
var faq=web3.eth.personal.unlockAccount("0xc40b465e28a386c56806058571d0baf303af079c","123",function(error,result){
  	if(!error)
    resp.send(result);
});
	console.log(faq);
```
- 调用合约
函数下面是调用一个只读函数，后面参数call是表明此调用不会产生数据更改，只会在一个节点上处理数据，也不会消耗gas，function是回调函数，回调函数的返回值就是函数的返回值。
下面是调用一个只读函数，后面参数call是表明此调用不会产生数据更改，只会在一个节点上处理数据，也不会消耗gas，function是回调函数，回调函数的返回值就是函数的返回值。
```Javascript
hello.methods.helloworld().call(function(error,result){
	    if(!error)
	    resp.send(result);
});
下面的是一个调用接受转账的函数，from是转账的账户，value是转账的数额，单位是wei，gas就是设定的gas，function是后面接的回调函数,回调函数的返回值是交易地址，还没有找到如何去查看函数的返回值。
```
```javascript
hello.methods.hellomoney().send({from:"0xc40b465e28a386c56806058571d0baf303af079c",value: 200000000,gas:3000000},function(error,result){
	    if(!error)
	    resp.send(result);
});
```

```javascript
hello.methods.helloPDJ().send({from:"0xc40b465e28a386c56806058571d0baf303af079c",gas:3000000},function(error,result){
	    if(!error)
	    resp.send(result);
})
上面调用会变更数据，但不接受转账的函数，from是发送调用的地址，
function是回调函数，回调函数的返回值是交易地址，还没有找到如何去查看函数的返回值。
```
web 前端部分
### ERC2O 与 ERC721 的区别
####概念
    ERC20 以及ERC721 是基于以太坊的一套代币协议
    ERC20 用来发行同质化的token ,发的代币只有数量的不同。
    ERC721 是用来发行非同质化的token，每个币他都是独一无二的。每个币都是不同的。   
####区别
    ERC20 用来发行同质化的token ,发的代币只有数量的不同。
    ERC721 是用来发行非同质化的token，每个币他都是独一无二的。每个币都是不同的。
####应用场景
    ERC20 我们可以发网络流通的代币，ERC20 协议去做. 代币
    ERC721 代表虚拟的装备，代表的东西都是独一无二的.
    双层代币模型。
#### 基于ERC20 测试链发币
```JavaScript
pragma solidity^0.4.19;
contract ERC20 {
    function totalSupply() constant returns (uint totalSupply);      
    function balanceOf(address _owner) constant returns (uint balance);
    function transfer(address _to, uint _value) returns (bool success);
    function transferFrom(address _from, address _to, uint _value) returns (bool success);
    function approve(address _spender, uint _value) returns (bool success);                  
    function allowance(address _owner, address _spender) constant returns (uint remaining);
    event Transfer(address indexed _from, address indexed _to, uint _value);                   
    event Approval(address indexed _owner, address indexed _spender, uint _value);
}
contract PDJCoin is ERC20 {
     string public constant name="PDJCoin";
     string public constant symbol="PDJ";
     uint public constant decimals=0;
     //存放指定的地址存放的token 数量
     mapping(address=>uint) _blanceOf;
     //用来存放指定的地址从指定的账户可以转出的token
     mapping(address=>mapping(address=>uint)) _approve;
     //基金会组织
     address foundation;
     function PixCoin(address _foundation) public{
           foundation = _foundation;
           _blanceOf[foundation]=200000000;
     }
       //设置要发币的总数额
     function totalSupply() constant returns (uint totalSupply){
              totalSupply=1000000000;
     }
     //返回指定的代币token 数量
     function balanceOf(address _owner) constant returns (uint balance){
              balance=_blanceOf[_owner];
     }
      //向指定的地址转_value;
     function transfer(address _to, uint _value) returns (bool success){
            require(_blanceOf[msg.sender]>_value);
            _blanceOf[msg.sender] -= _value;
            _blanceOf[_to] += _value;
             success=true;
     }
     //从指定的地址向指定的账户转 _value;
     function transferFrom(address _from, address _to, uint _value) returns (bool success){
          require(_blanceOf[_from]>_value);
          _approve[_from][_to] -= _value;
          _blanceOf[_from] -= _value;
          _blanceOf[_to] += _value;
          success=true;
     }
     //设置_spender 可以从当前地址 msg.sender 转账的余额.
     function approve(address _spender, uint _value) returns (bool success){
            //指定spender 可以从当前账户转的余额
             _approve[msg.sender][_spender] = _value;
             success=true;
     }
       //设置当前账户
     function allowance(address _owner, address _spender) constant returns (uint remaining){
            remaining=_approve[_owner][_spender];
     }
}
```
