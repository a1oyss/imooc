//ui-search定义
$.fn.UiSearch=function() {
    let ui=$(this)

    $(".ui-search-selected",ui).on("click",function(){
        $(".ui-search-list").show()
        return false
    })

    $(".ui-search-list a", ui).on("click",function(){
        $(".ui-search-selected").text($(this).text())
        $(".ui-search-list").hide()
        return false
    })

    $("body").on("click",function(){
        $(".ui-search-list").hide()
    })
}

$(function(){
    $(".ui-search").UiSearch()
})