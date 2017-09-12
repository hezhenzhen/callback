var taskAnimate = function(){
  var moveO = $("#J-arrow");
  var clickO = $("#J-hand");
  var placeO = $("#J-place");
  var keyO = $("#J-keys");
  var interOne;

  function setDefault(){
    moveO.removeClass('hide').css({
        'left': 0,
        'top' : 0
    });
  }
  //初始化第一个任务
  function resetTaskOne(){
    setDefault();
    clearInterval(interOne)
    moveO.stop().addClass('hide');
    clickO.addClass('hide');
    placeO.removeClass('hide');
    keyO.find('i').addClass('hide');
    $("#J-task-first").addClass('hide');
    $(".task-box").addClass('hide');
    $("#J-mask").addClass('hide');
  }
  //开始第一个任务
  function beginTaskOne(){
    setDefault();
    $.when(stepOne(270, 90))
    .then(function(){
      placeO.addClass('hide');
    })
    .then(stepTwo)
    .then(stepThree)
    .then(function(){
      moveO.addClass('hide');
      clickO.css({
          'left': '684px',
          'top' : '90px'
      }).removeClass('hide');
    })
  }
  //任务一第一步
  function stepOne(l1, t1){
    var dtd = $.Deferred();
    moveO.stop().animate({
      'left': l1 + 'px',
      'top' : t1 + 'px'
    }, 2000, function(){
      dtd.resolve()
    })
    return dtd.promise();
  }
  //任务一第二步
  function stepTwo(){
    console.log('step2')
    var dtd = $.Deferred();
    var i = 0;
    interOne = setInterval(function(){
      keyO.find('i').eq(i).removeClass('hide');
      i ++;
      console.log(interOne)
      if(i == 5){
        clearInterval(interOne)
        dtd.resolve()
      }
    }, 500)
    return dtd.promise();
  }
  //任务一第三步
  function stepThree(){
    console.log('step3')
    var dtd = $.Deferred();
    moveO.stop().animate({
      'left': '684px'
      }, 2000, function(){
      dtd.resolve()
    })
    return dtd.promise();
  }

  //鼠标的移动效果
  function moveMouse(x, y, time){
    var dfdPlay = $.Deferred();
    moveO.stop().animate({
      'left': x + 'px',
      'top' : y + 'px'
    }, time, function(){
      dfdPlay.resolve();
    });
    return dfdPlay;
  }
  //鼠标和手之间的切换
  function changeMouse(id1, id2, xM, yM, isLast){
    var dfdRe = $.Deferred();
    moveO.addClass('hide');
    $("#" + id1).addClass('hide');
    $("#" + id2).removeClass('hide');
    clickO.css({
        'left': xM + 'px',
        'top' : yM + 'px'
    }).removeClass('hide');
    if(!isLast){
      interOne = setTimeout(function(){
        clickO.addClass('hide');
        moveO.removeClass('hide');
      }, 500, function(){
        dfdRe.resolve();
      })
      return dfdRe;
    }
  }
  //任务二入口
  function beginTaskTwo(){
    setDefault();
    moveMouse(582, 185, 2000)
    .then(function(){
      changeMouse('s-step1', 's-step2', 582, 185, false)
    })
    .then(function(){
      return moveMouse(95, 395, 2000)
    })
    .then(function(){
      changeMouse('s-step2', 's-step4', 95, 395, false)
    })
    .then(function(){
      return moveMouse(250, 438, 1000)
    })
    .then(function(){
      changeMouse('s-step4', 's-step5', 250, 438, false)
    })
    .then(function(){
      return moveMouse(570, 375, 1000)
    })
    .then(function(){
      changeMouse('s-step5', 's-step6', 570, 375, false)
    })
    .then(function(){
      return moveMouse(720, 395, 1000)
    })
    .then(function(){
      changeMouse('s-step6', 's-step7', 720, 395, false)
    })
    .then(function(){
      return moveMouse(875, 375, 1000)
    })
    .then(function(){
      changeMouse('s-step7', 's-step8', 875, 375, false)
    })
    .then(function(){
      return moveMouse(500, 557, 1000)
    })
    .then(function(){
      changeMouse('s-step7', 's-step8', 500, 557, true)
    })
  }
  //任务二初始化
  function resetTaskTwo(){
    setDefault();
    clearInterval(interOne)
    moveO.stop().addClass('hide');
    clickO.addClass('hide');
    $("#J-task-second div").addClass('hide').eq(0).removeClass('hide');
    $("#J-task-second").addClass('hide');
    $(".task-box").addClass('hide');
    $("#J-mask").addClass('hide');
  }
  return {
    taskOne: function(){
      $("#J-task-first").removeClass('hide');
      $(".task-box").removeClass('hide');
      $("#J-mask").removeClass('hide');
      beginTaskOne()
    },
    taskTwo: function(){
      $("#J-task-second").removeClass('hide');
      $(".task-box").removeClass('hide');
      $("#J-mask").removeClass('hide');
      beginTaskTwo()
    },
    resetTaskOne: function(){
      resetTaskOne();
    },
    resetTaskTwo: function(){
      resetTaskTwo()
    }
  }
}

$(function(){
  var task = taskAnimate();

  $("#J-task-1").on('click', function(){
    task.taskOne();
    return false;
  })
  $("#J-close").on("click", function(){
    task.resetTaskOne();
    task.resetTaskTwo();
    return false;
  })
  $("#J-task-2").on('click', function(){
    task.taskTwo();
    return false;
  })
})

