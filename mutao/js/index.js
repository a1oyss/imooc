$(function(){
    let list=$('.nav-list .item')
    let innerBox = $('.nav-list-item-box')

    for (let i = 0; i < list.length; i++) {
        // 直接进入页面商品列表右边隐藏
        innerBox.hide();

        // 进入商品列表显示右边详情,它的兄弟元素是隐藏的
        list.eq(i).mouseover(function () {
            innerBox.eq(i).show().siblings().hide();
        })
        // 进入右边详情是要显示详情的
        innerBox.eq(i).mouseover(function () {
            $(this).show();
        })
        // 离开详情页就是隐藏得
        innerBox.eq(i).mouseout(function () {
            $(this).hide();
        })
        // 离开商品列表项也是隐藏的
        list.eq(i).mouseout(function () {
            innerBox.eq(i).hide();
        })
    }
})