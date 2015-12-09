## 云盘异步接口文档

- 不安全文件类型: (黑名单 or 白名单)


+ 登陆（不确定用不用）：
  
  ``` javascript
  var request = {
  	method: 'POST',
  	param: {
  		userName(uname): "用户名",
  		passWord(pword): "密码",
        	verifyCode(vcode): "验证码",
  	},
      security(secur): {
        	k: "还没想好",
          OA: "还没想好", 
        	auto: bit,
      },
  },
  response = {
  	status: {
  		"0" : "OK",
          "650XXX": "状态描述语句"
  	},
  	userID(uid): "用户ID",
    	token: "标识用户的唯一令牌"(uint),
  };
  ```
  
+ 新建文件夹：
  
  ``` javascript
  var request = {
  	method: "GET/POST",
    	operation: "create",
  	param: {
  		userID(uid): "用户ID", // 直接带到query参数里
        	token: uint,
  		absolutePath(apath): "绝对路径",
  		dirName(dname): "文件夹名"
  	},
  },
  response = {
    	responseID(resid): "消息ID"(uint),
  	status: {
  		"0" : "OK",
          "650XXX": "状态描述语句"
  	},
  };
  ```
  
+ 移动文件（夹）：
  
  ``` javascript
  var request = {
  	method: "GET/POST",
    	operation(oper): "move",
  	param: {
  		userID(uid): "用户ID", // 直接带到query参数里
        	token: uint,
        	source: "文件或文件夹名",
  		path: "从绝对路径",
  		destination(dest): "目标相对路径",
        	isdir: "标识是否为文件夹"(bit),
  	},
  },
  response = {
    	taskid: "考虑到会把此种操作加入任务处理列表（队列等）"(uint),
    	responseID(resid): uint,
  	status: {
  		"0" : "OK",
          "650XXX": "状态描述语句"
  	},
  };
  ```
  
+ 删除文件（夹）：
  
  ``` javascript
  var request = {
  	method: 'GET/POST',
    	operation(oper): "delete",
  	param: {
  		userID(uid): "用户ID", // 直接带到query参数里
        	token: uint,
  		filePath(fpath): "绝对路径",
  		fileName(fname): "文件名"
  	},
  },
  response = {
    	taskid: uint,
    	responseID(resid): uint,
  	status: {
  		"0" : "OK",
          "650XXX": "状态描述语句"
  	},
  };
  ```
  
+ 上传文件(待定) ：
  
  ``` javascript
  {
  	method: '',
  	param: {},
  	res: {}
  }
  ```
  
+ 显示文件夹：
  
  ``` javascript
  var request = {
  	method: 'GET/POST',
    	operation(oper): "list",
  	param: {
  		userID(uid): "用户ID", // 直接带到query参数里
        	token: uint,
  		dirPath(dpath): "当前文件夹的绝对路径",
        	current: "当前显示总数"(uint),
        	page: "当前页数"(uint),
        	// pk: bit
  	},
  },
  response = {
    	responseID(resid): uint,
    	infomation(info): {
        	[0]:{
            	isdir: bit,
            	serverName(sname): "服务器上对应文件或文件夹的名字"
            	serverTime(stime): "服务器时间",
            	localTime(ltime): "本地时间",
            	serverModifyTime(smtime): "服务器修改时间",
            	serverCreateTime(sctime): "服务器创建时间",
            	localModifyTime(lmtime): "本地修改时间",
            	localCreateTime(lctime): "本地创建时间",
            	destination(dest): "所在路径",
            	size: "文件大小",
            	md5: "MD5值",
            	share: {
            		isshared: "是否为公开分享",
            		shareCode(shcode): "分享ID"
  			}
  		},
        	...
  	},
  	status(stat): {
  		"0" : "OK",
          "650XXX": "状态描述语句"
  	},
  };
  ```
  
  ​