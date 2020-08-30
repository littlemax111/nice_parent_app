import * as utilsService from './utilsService';
let socketStatus = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3
};
let szUUID = utilsService.uuidGenerator();
let conf = {};
let ws = null;
let timeout = 0;
// let heartCheck = {
//   timeout: 60000, // 60ms
//   timeoutObj: null,
//   serverTimeoutObj: null,
//   reset: function() {
//     clearTimeout(this.timeoutObj);
//     clearTimeout(this.serverTimeoutObj);
//     this.start();
//   },
//   start: function() {
//     var self = this;
//     this.timeoutObj = setTimeout(function() {
//       ws.send('{ topic:"HeartBeat"}');
//       self.serverTimeoutObj = setTimeout(function() {
//         _webSocketService.isOpen();// 如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
//         self.reset();
//       }, self.timeout)
//     }, this.timeout)
//   }
// }
var _webSocketService = {
  oMessageType: {
    OPEN: 1,
    MESSAGE: 2,
    ERROR: 3
  },
  getUUID: function () {
    return szUUID;
  },
  send: function (data) {
    if (ws !== null && ws.readyState === socketStatus.OPEN) {
      if (typeof data === 'object') {
        ws.send(JSON.stringify(data));
      } else {
        ws.send(data);
      }
    }
  },
  close: function () {
    if (ws != null) {
      ws.close();
    }
    ws = null;
  },
  /**
   * 判断是否打开
   * @returns {boolean}
   */
  isOpen: function () {
    var result = false;
    if (ws != null) {
      if (ws.readyState === WebSocket.OPEN) {
        result = true;
      } else if (socketStatus.CLOSED === ws.readyState) {
        this.open(conf.url, conf.szUserId, conf.cbFun)
      }
    } else {
      this.open(conf.url, conf.szUserId, conf.cbFun)
    }
    return result;
  },
  reconnect: function() {
    if (ws != null) {
      if (socketStatus.CLOSED === ws.readyState || socketStatus.CLOSING === ws.readyState) {
        var that = this;
        if (timeout < 20) {
          timeout = timeout + 1;
        }
        setTimeout(function() {
          that.open(conf.url, conf.szUserId, conf.cbFun);
        }, 3000 * timeout);
      }
    }
  },
  open: function(url, szUserId, cbFun) {
    conf.url = url;
    conf.szUserId = szUserId;
    conf.cbFun = cbFun;
    if (ws !== null && ws.readyState === 1) {

    } else {
      var that = this;
      try {
        ws = new WebSocket(url + '?uuid=' + szUUID + '&userid=' + szUserId);
        console.log('open socket: uuid  ' + szUUID + '  userid: ' + szUserId);
      } catch (e) {
        if (cbFun !== null) {
          cbFun(that.oMessageType.ERROR, e);
        }
      }
      ws.onopen = (e) => {
        // heartCheck.start();
        if (cbFun !== null) {
          cbFun(that.oMessageType.OPEN, e);
        }
        timeout = 0;
      };
      ws.onmessage = (e) => {
        // heartCheck.reset();
        timeout = 0;
        var oData = e.data;
        if (cbFun !== null) {
          if (oData !== null) {
            // utilsService.console(oData);
            cbFun(that.oMessageType.MESSAGE, oData);
          }
        }
      };
      ws.onclose = () => {
        console.log('close reconnect');
        that.reconnect();
      }
      ws.onerror = (e) => {
        // console.log('error reconnect');
        // that.reconnect();
        if (cbFun !== null) {
          cbFun(that.oMessageType.ERROR, e);
        }
      };
    }
  }
}

var isOpenWebSocket = false;
// var hasOpenWebSocket = false;
/* var websocketfun = function() {
 if(hasOpenWebSocket)
 _webSocketService().isOpen();
 }
 websocketfun();
 setInterval("websocketfun", 5000); */
let websocketMessageMap = {};
export default {
  openWebsocket: function (userId) {
    if (!isOpenWebSocket) {
      _webSocketService.open(window.LOCAL_CONFIG.websocketUrl, userId, function (iType, oData) {
        if (iType === _webSocketService.oMessageType.OPEN) {
          console.log('websocket建立成功');
          isOpenWebSocket = true;
        } else if (iType === _webSocketService.oMessageType.MESSAGE) { // websocket接收消息回调   oData格式:{topic:'',toUserID:'',createTime:'',body:{}}
          console.log('websocket接收消息回调');
          var objoData = JSON.parse(oData);
          //  console.log(oData);
          for (var name in websocketMessageMap) { // name 格式 key_topic
            if (websocketMessageMap[name]) {
              if (objoData.topic && name.split('^')[1] === objoData.topic) {
                websocketMessageMap[name](objoData);
              }
            }
          }
        } else if (iType === _webSocketService.oMessageType.ERROR) { // websocket失败回调
          console.log('websocket建立失败');
        }
      });
    }
  },
  websocketMessageListen: function (key, topic, callback) {
    websocketMessageMap[key + '^' + topic] = callback;
  },
  getUUID: function () {
    return _webSocketService.getUUID();
  },
  isOpen: function () {
    return _webSocketService.isOpen();
  },
  send: function (data) {
    _webSocketService.send(data)
  }
}
