//ui-search定义
$.fn.UiSearch = function () {
    let ui = $(this)
    $('.ui-search-selected', ui).on('click', function () {
        $('.ui-search-list').show()
        return false
    })

    $('.ui-search-list a', ui).on('click', function () {
        $('.ui-search-selected').text($(this).text())
        $('.ui-search-list').hide()
        return false
    })

    $('body').on('click', function () {
        $('.ui-search-list').hide()
    })
}

//ui-tab
/**
 * 
 * @param {string} header 选项卡切换区域
 * @param {string} content 内容区域
 * @param {string} focus 选项卡高亮
 */
$.fn.UiTab = function (header, content,focus) {
    let ui = $(this)
    let tabs = $(header, ui)
    let cons = $(content, ui)
    let temp=focus || ''
    tabs.on('click',function() {
        let index=$(this).index()
        
        tabs.removeClass(temp + 'item_focus').eq(index).addClass(temp+'item_focus')
        cons.hide().eq(index).show()
        return false
    })
}

//ui-backTop
$.fn.UiBackTop=function(){
    let ui=$(this)
    let el=$('<a href="#0" class="ui-backTop"></a>')
    ui.append(el)
    let windowHeight=$(window).height()
    $(window).on('scroll',function(){
        let top=$(document).scrollTop()
        if(top>windowHeight){
            el.show()
        }else{
            el.hide()
        }
    })
    el.on('click',function() {
        $(document).scrollTop(0)
    })
}

//ui-slider
$.fn.UiSlider=function(){
    let ui=$(this)
    let wrap=$('.ui-slider-wrap')
    let item=$('.ui-slider-wrap .item',ui)
    let btn_prev=$('.ui-slider-arrow .left',ui)
    let btn_next=$('.ui-slider-arrow .right',ui)
    let tips=$('.ui-slider-process .item',ui)
    let enableAuto=true

    //
    let current=0
    let size=item.length
    let width=item.eq(0).width()
    //设置自动滚动停止
    ui.on('mouseover',function(){
        enableAuto=false
    }).on('mouseout',function(){
        enableAuto=true
    })

    //具体操作
    wrap.on('move_prev',function(){
        if(current<=0){
            current=size-1
        }else{
            current = current - 1
        }
        wrap.triggerHandler('move_to',current)
    }).on('move_next',function() {
        if (current >= size-1) {
            current = 0
        }else{
            current = current + 1
        }
        wrap.triggerHandler('move_to', current)
    }).on('move_to',function(evt,index){
        wrap.css('left',index*width*-1)
        tips.removeClass('item_focus').eq(index).addClass('item_focus')
    }).on('auto_move',function(){
        setInterval(function(){
            enableAuto && wrap.triggerHandler('move_next')
        },2000)
    }).triggerHandler('auto_move')

    //事件
    btn_prev.on('click',function(){
        wrap.triggerHandler('move_prev')
    })
    btn_next.on('click', function () {
        wrap.triggerHandler('move_next')
    })
    tips.on('click', function () {
        let index=$(this).index()
        wrap.triggerHandler('move_to',index)
    })
}
$(function () {
    $('.ui-search').UiSearch()
    $('.ui-tab').UiTab('.caption > .item','.block > .item')
    $('.ui-tab .block .item').UiTab('.block-caption > a', '.block-content > .block-wrap','block-caption-')
    $('body').UiBackTop()
    $('.ui-slider').UiSlider()
})