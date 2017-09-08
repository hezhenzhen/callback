/**
 * Created by hezhenzhen on 2017/9/4.
 */
;(function($){
    var Index = {
        options: {
            T1: 8,
            T2: 14,
            T3: 8,
            T4: 10,
            ani1: '',
            ani2: '',
            ani3: '',
            ani4: '',
            ani5: '',
            ani6: '',
            ani7: ''
        },
        init: function(){
            Index.hammer();
            var task1 = $("#J-task-1");
            var task2 = $("#J-task-2");
            var task3 = $("#J-task-3");
            var task4 = $("#J-task-4");
            var t2 = task2.offset().top;
            var t3 = task3.offset().top;
            var t4 = task4.offset().top;
            var T1 = 8;
            var animate1;
            var closeO = $("#J-close");
            task1.on('click', function(){
                $("#J-task-first").removeClass('hide');
                $(".task-box").removeClass('hide');
                $("#J-mask").removeClass('hide');
                Index.taskFirst();
                return false;
            });
            task2.on('click', function(){
                $("#J-task-second").removeClass('hide');
                $(".task-box").removeClass('hide');
                $("#J-mask").removeClass('hide');
                $(".task-second").find('div').addClass('hide');
                $(".task-second").find('div').eq(0).removeClass('hide');
                Index.taskSecond();
                return false;
            });
            task3.on('click', function(){
                $("#J-task-third").removeClass('hide');
                $(".task-box").removeClass('hide');
                $("#J-mask").removeClass('hide');
                $(".task-third").find('div').addClass('hide');
                $(".task-third").find('div').eq(0).removeClass('hide');
                Index.taskThird();
                return false;
            });
            task4.on('click', function(){
                $("#J-task-forth").removeClass('hide');
                $(".task-box").removeClass('hide');
                $("#J-mask").removeClass('hide');
                $(".task-forth").find('div').addClass('hide');
                $(".task-forth").find('div').eq(0).removeClass('hide');
                Index.taskFotrh();
                return false;
            });
            closeO.on('click',function(){
                $("#J-task-first").addClass('hide');
                $("#J-task-second").addClass('hide');
                $("#J-task-third").addClass('hide');
                $("#J-task-forth").addClass('hide');
                $("#J-mask").addClass('hide');
                Index.task1Def();
                Index.task2Def();
                Index.task3Def();
                Index.task4Def();
                return false;
            });
        },
        hammer: function(){
            //锤子
            var danP = $("#J-dan-p");
            var clickObj = $('#J-dan');
            var hammer = $("#J-hammer");
            var quesO = $("#J-ques");
            var maskO = $("#J-mask");
            clickObj.on('click', function(){
                hammer.hide();
                danP.addClass('active');
                setTimeout(function(){
                        quesO.removeClass('hide');
                        maskO.removeClass('hide');
                    },500);
            })
        },
        setDefMouse: function(){
            var moveO = $("#J-arrow");
            moveO.removeClass('hide').css({
                'left': 0,
                'top' : 0
            });
        },
        //任务一
        task1Def: function(){
            var moveO = $("#J-arrow");
            var clickO = $("#J-hand");
            var placeO = $("#J-place");
            var nextO = $(".j-next");
            var keyO = $("#J-keys");
            var leftO = $("#J-left");
            clearInterval(Index.options.ani1);
            clearTimeout(Index.options.ani2);
            moveO.addClass('hide');
            clickO.addClass('hide');
            placeO.removeClass('hide');
            nextO.addClass('hide');
            keyO.find('i').addClass('hide');
            leftO.text(Index.options.T1);
            $(".task-box").addClass('hide');
        },
        taskFirst: function(){
            var moveO = $("#J-arrow");
            var clickO = $("#J-hand");
            var placeO = $("#J-place");
            var keyO = $("#J-keys");
            var nextO = $(".j-next");
            var leftO = $("#J-left");
            var task2 = $("#task-second");
            var t2 = task2.offset().top;
            var T1 = Index.options.T1;
            $("#J-btn-link").attr('href', 'http://sou.hqew.com');
            Index.options.ani1 = setInterval(function(){
                T1 --;
                if(T1 == 0){
                    clearInterval(Index.options.ani1);
                }
                leftO.text(T1);
            },1000);
            Index.setDefMouse();
            moveO.stop().animate({
                'left': '270px',
                'top' : '90px'
            }, 2000, callFun);

            function callFun(){
                placeO.addClass('hide');
                var x = 0;
                var f1 = false;
                Index.options.ani2 = setInterval(function(){
                    keyO.find('i').eq(x).removeClass('hide');
                    x++;
                    if( x == 5){
                        clearInterval(Index.options.ani2);
                        f1 = true;
                        moveO.stop().animate({
                            'left': '684px'
                        }, 3000, function(){
                            moveO.addClass('hide');
                            clickO.css({
                                'left': '684px',
                                'top' : '90px'
                            }).removeClass('hide');
                            nextO.text('完成任务一').removeClass('hide').attr('id', 'J-done-1');
                        });
                    }
                }, 500);
            }  /* callFun end*/
            $("#J-bottom").on('click', '#J-done-1', function(){
                $(this).attr('id', '');
                $("#J-task-first").addClass('hide');
                $("#J-mask").addClass('hide');
                Index.task1Def();
                $('html, body').stop().animate({scrollTop: t2 + 'px'}, 1000);
                return false;
            })

        },
        //任务一结束
        //任务二
        task2Def: function(){
            var moveO = $("#J-arrow");
            var clickO = $("#J-hand");
            var leftO = $("#J-left");
            var nextO = $(".j-next");
            clearInterval(Index.options.ani1);
            clearTimeout(Index.options.ani2);
            clearTimeout(Index.options.ani3);
            clearTimeout(Index.options.ani4);
            clearTimeout(Index.options.ani5);
            clearTimeout(Index.options.ani6);
            clearTimeout(Index.options.ani7);
            nextO.addClass('hide');
            moveO.addClass('hide').stop();
            clickO.addClass('hide').stop();
            leftO.text(Index.options.T2);
            $(".task-box").addClass('hide');
        },
        taskSecond: function(){
            var moveO = $("#J-arrow");
            var nextO = $(".j-next");
            var clickO = $("#J-hand");
            var leftO = $("#J-left");
            var task3 = $("#task-third");
            var t3 = task3.offset().top;
            var totalT = Index.options.T2;
            leftO.text(totalT);
            $("#J-btn-link").attr('href', 'http://sou.hqew.com/_200010090011_==eyLnlLXmhJ8iOlsiMi4ydUgiXSwi5pyA5aSn55u05rWB55S15rWBIjpbIjEuOUEiXSwi6ZW@@5bqmIjpbIjJtbSJdLCLlrr3luqYiOlsiMm1tIl0sIumrmOW6piI6WyIxbW0iXX0=.html');
            Index.options.ani1 = setInterval(function(){
                totalT --;
                if(totalT == 0){
                    clearInterval(Index.options.ani1);
                }
                leftO.text(totalT);
            },1000);
            Index.setDefMouse();
            moveO.stop().animate({
                'left': '582px',
                'top' : '185px'
            }, 2000, callStep2);
            function callStep2(){
                moveO.addClass('hide');
                $("#s-step1").addClass('hide');
                $("#s-step2").removeClass('hide');
                clickO.css({
                    'left': '582px',
                    'top' : '185px'
                }).removeClass('hide');

                Index.options.ani2 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    $("#s-step2").addClass('hide');
                    $("#s-step3").removeClass('hide');
                    moveO.stop().animate({
                        'left': '95px',
                        'top' : '395px'
                    }, 2000, callStep3);
                }, 500);
            }
            function callStep3(){
                moveO.addClass('hide');
                $("#s-step3").addClass('hide');
                $("#s-step4").removeClass('hide');
                clickO.css({
                    'left': '95px',
                    'top' : '395px'
                }).removeClass('hide');

                Index.options.ani3 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    moveO.stop().animate({
                        'left': '250px',
                        'top' : '438px'
                    }, 1000, callStep4);
                }, 500);
            }
            function callStep4(){
                moveO.addClass('hide');
                $("#s-step4").addClass('hide');
                $("#s-step5").removeClass('hide');
                clickO.css({
                    'left': '250px',
                    'top' : '438px'
                }).removeClass('hide');

                Index.options.ani4 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    moveO.stop().animate({
                        'left': '570px',
                        'top' : '375px'
                    }, 2000, callStep5);
                }, 500);
            }
            function callStep5(){
                moveO.addClass('hide');
                $("#s-step5").addClass('hide');
                $("#s-step6").removeClass('hide');
                clickO.css({
                    'left': '570px',
                    'top' : '375px'
                }).removeClass('hide');

                Index.options.ani5 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    moveO.stop().animate({
                        'left': '720px',
                        'top' : '395px'
                    }, 1000, callStep6);
                }, 500);
            }
            function callStep6(){
                moveO.addClass('hide');
                $("#s-step6").addClass('hide');
                $("#s-step7").removeClass('hide');
                clickO.css({
                    'left': '720px',
                    'top' : '395px'
                }).removeClass('hide');

                Index.options.ani6 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    moveO.stop().animate({
                        'left': '875px',
                        'top' : '375px'
                    }, 1000, callStep7);
                }, 500);
            }
            function callStep7(){
                moveO.addClass('hide');
                $("#s-step7").addClass('hide');
                $("#s-step8").removeClass('hide');
                clickO.css({
                    'left': '875px',
                    'top' : '375px'
                }).removeClass('hide');

                Index.options.ani7 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    moveO.stop().animate({
                        'left': '500px',
                        'top' : '557px'
                    }, 2000, callStep8);
                }, 500);
            }
            function callStep8(){
                moveO.addClass('hide');
                $("#s-step7").addClass('hide');
                $("#s-step8").removeClass('hide');
                clickO.css({
                    'left': '500px',
                    'top' : '557px'
                }).removeClass('hide');
                nextO.text('完成任务二').removeClass('hide').attr('id', 'J-done-2');
            }
            $("#J-bottom").on('click', '#J-done-2', function(){
                $(this).attr('id', '');
                $("#J-task-second").addClass('hide');
                $("#J-mask").addClass('hide');
                Index.task2Def();
                $('html, body').stop().animate({scrollTop: t3 + 'px'}, 1000);
                return false;
            })
        },
        //任务二结束
        task3Def: function(){
            var moveO = $("#J-arrow");
            var clickO = $("#J-hand");
            var leftO = $("#J-left");
            var nextO = $(".j-next");
            clearInterval(Index.options.ani1);
            clearTimeout(Index.options.ani2);
            clearTimeout(Index.options.ani3);
            clearTimeout(Index.options.ani4);
            nextO.addClass('hide');
            moveO.addClass('hide').stop();
            clickO.addClass('hide').stop();
            leftO.text(Index.options.T3);
            $(".task-box").addClass('hide');
        },
        taskThird: function(){
            var moveO = $("#J-arrow");
            var nextO = $(".j-next");
            var clickO = $("#J-hand");
            var leftO = $("#J-left");
            var task4 = $("#task-forth");
            var t4 = task4.offset().top;
            var totalT = Index.options.T3;
            leftO.text(totalT);
            $("#J-btn-link").attr('href', 'http://sou.hqew.com/_200010011000_==eyLmnIDlpKfpm4bnlLXmnoHmiKrmraLnlLXmtYFJQ0JPIjpbIjAuMXVBIl19.html');
            Index.options.ani1 = setInterval(function(){
                totalT --;
                if(totalT == 0){
                    clearInterval(Index.options.ani1);
                }
                leftO.text(totalT);
            },1000);
            Index.setDefMouse();
            moveO.stop().animate({
                'left': '960px',
                'top' : '115px'
            }, 3000, callStep2);

            function callStep2(){
                moveO.addClass('hide');
                clickO.css({
                    'left': '960px',
                    'top' : '115px'
                }).removeClass('hide');
                $("#t-step1").addClass('hide');
                $("#t-step2").removeClass('hide');

                Index.options.ani2 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    moveO.stop().animate({
                        'left': '960px',
                        'top' : '160px'
                    }, 1000, callStep3);
                }, 500);
            }
            function callStep3(){
                moveO.addClass('hide');
                clickO.css({
                    'left': '960px',
                    'top' : '160px'
                }).removeClass('hide');
                $("#t-step2").addClass('hide');
                $("#t-step3").removeClass('hide');

                Index.options.ani3 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    moveO.stop().animate({
                        'left': '960px',
                        'top' : '200px'
                    }, 1000, callStep4);
                }, 500);
            }
            function callStep4(){
                moveO.addClass('hide');
                clickO.css({
                    'left': '960px',
                    'top' : '200px'
                }).removeClass('hide');
                $("#t-step3").addClass('hide');
                $("#t-step4").removeClass('hide');

                Index.options.ani4 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    moveO.stop().animate({
                        'left': '910px',
                        'top' : '20px'
                    }, 1000, callStep5);
                }, 500);
            }
            function callStep5(){
                moveO.addClass('hide');
                clickO.css({
                    'left': '910px',
                    'top' : '20px'
                }).removeClass('hide');
                $("#t-step4").addClass('hide');
                $("#t-step5").removeClass('hide');
                nextO.text('完成任务三').removeClass('hide').attr('id', 'J-done-3');
            }
            $("#J-bottom").on('click', '#J-done-3', function(){
                $(this).attr('id', '');
                $("#J-task-third").addClass('hide');
                $("#J-mask").addClass('hide');
                Index.task3Def();
                $('html, body').stop().animate({scrollTop: t4 + 'px'}, 1000);
                return false;
            })
        },
        //任务四
        task4Def: function(){
            var moveO = $("#J-arrow");
            var clickO = $("#J-hand");
            var leftO = $("#J-left");
            var nextO = $(".j-next");
            clearInterval(Index.options.ani1);
            clearTimeout(Index.options.ani2);
            clearTimeout(Index.options.ani3);
            clearTimeout(Index.options.ani4);
            clearTimeout(Index.options.ani5);
            clearTimeout(Index.options.ani6);
            nextO.addClass('hide');
            moveO.addClass('hide').stop();
            clickO.addClass('hide').stop();
            leftO.text(Index.options.T4);
            $(".task-box").addClass('hide');
        },
        taskFotrh: function(){
            var moveO = $("#J-arrow");
            var nextO = $(".j-next");
            var clickO = $("#J-hand");
            var leftO = $("#J-left");
            var totalT = Index.options.T4;
            leftO.text(totalT);
            $("#J-btn-link").attr('href', 'http://sou.hqew.com/brand/Murata');
            Index.options.ani1 = setInterval(function(){
                totalT --;
                if(totalT == 0){
                    clearInterval(Index.options.ani1);
                }
                leftO.text(totalT);
            },1000);
            Index.setDefMouse();
            moveO.stop().animate({
                'left': '435px',
                'top' : '165px'
            }, 1500, callStep2);
            function callStep2(){
                moveO.addClass('hide');
                clickO.css({
                    'left': '435px',
                    'top' : '165px'
                }).removeClass('hide');
                $("#f-step1").addClass('hide');
                $("#f-step2").removeClass('hide');

                Index.options.ani2 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    moveO.stop().animate({
                        'left': '140px',
                        'top' : '400px'
                    }, 1000, callStep3);
                }, 500);
            }
            function callStep3(){
                moveO.addClass('hide');
                clickO.css({
                    'left': '140px',
                    'top' : '400px'
                }).removeClass('hide');
                $("#f-step2").addClass('hide');
                $("#f-step3").removeClass('hide');

                Index.options.ani3 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    moveO.stop().animate({
                        'left': '345px',
                        'top' : '38px'
                    }, 1000, callStep4);
                }, 500);
            }
            function callStep4(){
                moveO.addClass('hide');
                clickO.css({
                    'left': '345px',
                    'top' : '38px'
                }).removeClass('hide');
                $("#f-step3").addClass('hide');
                $("#f-step4").removeClass('hide');

                Index.options.ani4 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    moveO.stop().animate({
                        'left': '550px',
                        'top' : '38px'
                    }, 1000, callStep5);
                }, 500);
            }
            function callStep5(){
                moveO.addClass('hide');
                clickO.css({
                    'left': '550px',
                    'top' : '38px'
                }).removeClass('hide');
                $("#f-step4").addClass('hide');
                $("#f-step5").removeClass('hide');

                Index.options.ani5 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    moveO.stop().animate({
                        'left': '735px',
                        'top' : '38px'
                    }, 1000, callStep6);
                }, 500);
            }
            function callStep6(){
                moveO.addClass('hide');
                clickO.css({
                    'left': '735px',
                    'top' : '38px'
                }).removeClass('hide');
                $("#f-step5").addClass('hide');
                $("#f-step6").removeClass('hide');

                Index.options.ani6 = setTimeout(function(){
                    clickO.addClass('hide');
                    moveO.removeClass('hide');
                    moveO.stop().animate({
                        'left': '930px',
                        'top' : '38px'
                    }, 1000, callStep7);
                }, 500);
            }
            function callStep7(){
                moveO.addClass('hide');
                clickO.css({
                    'left': '930px',
                    'top' : '38px'
                }).removeClass('hide');
                $("#f-step6").addClass('hide');
                $("#f-step7").removeClass('hide');
                nextO.text('完成任务四').removeClass('hide').attr('id', 'J-done-4');
            }
            $("#J-bottom").on('click', '#J-done-4', function(){
                $(this).attr('id', '');
                $("#J-task-forth").addClass('hide');
                $("#J-mask").addClass('hide');
                Index.task4Def();
                return false;
            })
        }
        //任务四结束
    };
    Index.init();
})(jQuery);

function formCheck(){
    var flag = true;
    var _type = $("input[name='yourType']:checked").val();
    var _other = $.trim($("#otherType").val());
    var _otherW = $.trim($("#otherWhat").val());
    var _otherP = $.trim($("#otherProb").val());
    var msgO = $("#form-msg");
    if(_type){
        if(_type == 4){
            if(!_other){
                flag = false;
                showMsg();
                return flag;
            }
        }
    }else{
        flag = false;
        showMsg();
        return flag;
    }
    var _what = $("input[name='yourWhat']:checked").val();
    if(_what){
        if(_what == 3){
            if(!_otherW){
                flag = false;
                showMsg();
                return flag;
            }
        }
    }else{
        flag = false;
        showMsg();
        return flag;
    }
    var _habit = $("input[name='yourHabit']:checked").val();
    if(!_habit){
        flag = false;
        showMsg();
        return flag;
    }
    var _probs = $("input[name='yourProb']:checked");
    var _probV = [];
    _probs.each(function(){
        var _v = $(this).val();
        if(_v == 5){
            if(_otherP){
                _probV.push(-v);
            }
        }else{
            _probV.push(-v);
        }
    });
    if(_probV.length ==  0){
        flag = false;
        showMsg();
        return flag;
    }
    return flag;

    function showMsg(){
        msgO.text('完成问题1--4题才可以提交哦！');
        setTimeout(function(){
            msgO.text('');
        }, 5000)
    }
}

function closeques(curO){
    //关闭问题弹出
    var _id = curO.data('i');
    var innerO = $("#" + _id);
    var maskO = $("#J-mask");
    innerO.addClass('hide');
    maskO.addClass('hide');
    return false;
}

function openPop(openId){
    var openO = $("#" + openId);
    var maskO = $("#J-mask");
    openO.removeClass('hide');
    maskO.removeClass('hide');
    return false;
}

$(function(){
    $("#J-question-close").on('click', function(){
        closeques($(this));
        return false;
    });
    $("#J-complete-close").on('click', function(){
        closeques($(this));
        return false;
    });
    $("#J-uncomplete-close, #J-undone-btn").on('click', function(){
        closeques($(this));
        return false;
    });
    $(".disable-btn").on('click', function(){
        return false;
    });
    $("#J-open-menu").on('click', function(){
        var _parent = $(".float-list");
        _parent.addClass('click-menu');
    });
    $(".float-menu").on('mouseleave', function(){
        var _parent = $(".float-list");
        _parent.removeClass('click-menu');
    });
    $("#J-to-dan").on('click', function(){
        closeques($(this));
        var task5 = $("#J-task5");
        var t5 = task5.offset().top;
        $('html, body').stop().animate({scrollTop: t5 + 'px'}, 1000);
    });
    $("#J-form-sbt").on('click', function(){
        var _r = formCheck();
        if(_r){
            //成功
        }else{
            return false;
        }
    });
});