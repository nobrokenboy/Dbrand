window._=(function(){
  var _={};
  _.testPhone=function(){//测试终端
    var isPhone=false;
    isPhone=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?true:false;
    // if(isPhone){
    //   alert('是手机端的');
    // }
    return isPhone;
  }

  return _;
})();
