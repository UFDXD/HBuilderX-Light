const HBuiderXToolbarID = "HBuiderXToolbar";
const SiYuanToolbarID = "toolbar";

const SidebarHoverButtonID = "sidebarHoverButton";
const HighlightBecomesHiddenID="highlightBecomesHidden";
const QuickDropDownID="quickDropDown";

var siYuanToolbar = null;
var HBuiderXToolbar = null;
var sidebarHoverButton = null;
var highlightBecomesHiddenButton=null;
var quickDropDownButton=null;

var fn__flex_column = null;

var LeftHoverBlock = null;


var fn__flex_column_Width_Str = null;




(function (w, und) { Refresh() }(window, undefined));


function Refresh() {

    createHBuiderXToolbar();/*创建BuiderXToolbar*/

    createSidebarMouseHoverExpandButton();/*创建鼠标移动展开左右树面板按钮*/

    createHighlightBecomesHidden();/*创建高亮变隐藏按钮 */

createQuickDropDownButton()/*创建快捷下分栏按钮 */

    loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/customizeCss.css", "customizeCss");
  
  
    console.log("==============>HBuilderX-Light:CSS,JS_已经执行<==============");
}



/*创建HBuiderX主题工具栏区域*/
function createHBuiderXToolbar() {
    siYuanToolbar = getSiYuanToolbar();

    HBuiderXToolbar = getHBuiderXToolbar();
    var windowControls = document.getElementById("windowControls");

    if (HBuiderXToolbar) siYuanToolbar.removeChild(HBuiderXToolbar);
    HBuiderXToolbar = insertCreateBeforeElement(siYuanToolbar, "div", windowControls, HBuiderXToolbarID);
}


/**------------------边栏鼠标悬浮展开按钮-----------------*/
/*创建边栏鼠标悬浮展开按钮*/
function createSidebarMouseHoverExpandButton() {
    sidebarHoverButton = addCreateElement(HBuiderXToolbar, "div", SidebarHoverButtonID)
    sidebarHoverButton.setAttribute("title", "开启后左区域展开面板自动关闭，鼠标移动贴边展开。");
    addSidebarHoverButtonEven(sidebarHoverButtonImplementEven);/*为此按钮注册点击事件 */
}

/*SidebarHoverButton按钮添加监听事件*/
function addSidebarHoverButtonEven(fun) {
    AddEvent(sidebarHoverButton, "mousedown", fun)
}

/*SidebarHoverButton 按钮点击后执行事件*/
function sidebarHoverButtonImplementEven() {

    if (!fn__flex_column) fn__flex_column = document.querySelectorAll("div.fn__flex-column.fn__flex-shrink")[0];


    if ("0px" != fn__flex_column.style.width) {

        if (!LeftHoverBlock) createHoverBlock();

        closeLeftPanel();

        sidebarHoverButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/A2.png)";

    } else {

        if (!LeftHoverBlock) {
            alert("请在左栏区域打开状态下点击！");
            return;
        };

        openLeftPanel();

        HBuiderXToolbar.removeChild(LeftHoverBlock);
        LeftHoverBlock = null;
        sidebarHoverButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/A1.png)";
    }
}


/*在左面板打开鼠标触发块*/
function createHoverBlock() {
    LeftHoverBlock = addCreateElement(HBuiderXToolbar, "div", "LeftHoverBlock");
    LeftHoverBlock.setAttribute("display", "block");
}


/*左面板关闭*/
function closeLeftPanel() {

    if ("0px" != fn__flex_column.style.width) {

        fn__flex_column_Width_Str = fn__flex_column.style.width;
        fn__flex_column.style.width = "0px";
        fn__flex_column.style.position = "fixed";
        fn__flex_column.style.zIndex = "-11";

        /*解绑触发块鼠标进入，面板关闭事件 */
        myRemoveEvent(LeftHoverBlock, "mouseover", closeLeftPanel);
        /*注册触发块鼠标进入，面板打开事件 */
        AddEvent(LeftHoverBlock, "mouseover", openLeftPanel)

        /*移动触发块位置，等待触发面板打开 */
        LeftHoverBlock.style.width = "16px";
        LeftHoverBlock.style.left = "0px";
    }
}

/*左面板展开*/
function openLeftPanel() {
    if ("0px" != fn__flex_column_Width_Str) {

        fn__flex_column.style.width = fn__flex_column_Width_Str;
        fn__flex_column.style.position = "static";
        fn__flex_column.style.zIndex = "2";

        /*解绑触发块鼠标进入，面板打开事件 */
        myRemoveEvent(LeftHoverBlock, "mouseover", openLeftPanel);
        /*注册触发块鼠标进入，面板关闭事件 */
        AddEvent(LeftHoverBlock, "mouseover", closeLeftPanel)

        /*移动触发块位置，等待触发面板关闭 */
        LeftHoverBlock.style.width = "100000px";
        LeftHoverBlock.style.left = (parseFloat(fn__flex_column_Width_Str) + 30) + "px";
    }
}





/**------------------高亮变隐藏按钮-----------------*/

function createHighlightBecomesHidden(){

    loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/highlight-Mark.css", "markCss");

    highlightBecomesHiddenButton = addCreateElement(HBuiderXToolbar, "div", HighlightBecomesHiddenID)
    highlightBecomesHiddenButton.setAttribute("title", "开启后CTRL+E 高亮文本变隐藏文本，鼠标移上去才会显示。")

    AddEvent(highlightBecomesHiddenButton,"mousedown",highlightBecomesHiddenButtonClickEven);/*为此按钮注册点击事件 */
}


/*切换mark标签外部css样式,以达到高亮变隐藏的效果 */
function highlightBecomesHiddenButtonClickEven(){
    var obj = document.getElementById("markCss");
    
    if(obj.getAttribute("href")!="/appearance/themes/HBuilderX-Light/customizeStyle/conceal-Mark.css"){

        obj.setAttribute("href","/appearance/themes/HBuilderX-Light/customizeStyle/conceal-Mark.css");
        highlightBecomesHiddenButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/B2.png)";

    }else{
        obj.setAttribute("href","/appearance/themes/HBuilderX-Light/customizeStyle/highlight-Mark.css");
        highlightBecomesHiddenButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/B1.png)";
    }
}

/*--------快捷下分栏 */

var maxWidth=0;
var maxHeight=0;
var upHeight=0;
var tabBarAll=null;

var id=null;

var up=null;
var line=null;
var dowm=null;

var updowm=[];

function createQuickDropDownButton(){
    quickDropDownButton = addCreateElement(HBuiderXToolbar, "div", QuickDropDownID)
    quickDropDownButton.setAttribute("title", 
    "开启后双击下分栏任意标签下分栏可以占满上屏幕，再双击标签回到原位。")

    AddEvent(quickDropDownButton,"mousedown",quickDropDownEven);/*为此按钮注册点击事件 */

}


function quickDropDownEven(){

    myRemoveEvent(quickDropDownButton,"mousedown",quickDropDownEven);
    AddEvent(quickDropDownButton,"mousedown",closeQuickDropDown);
    quickDropDownButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/C2.png)";

    checkTheLayout();
   
}


function checkTheLayout(){

    if(!exitWithWarning()){

        closeQuickDropDown();
        return false;

    }else{
        quickDropDown();
        return true;
    }
    return true;
}

function closeQuickDropDown(){

    clearInterval(id);
    AddEvent(quickDropDownButton,"mousedown",quickDropDownEven);/*为此按钮注册点击事件 */
    quickDropDownButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/C1.png)";

    if(line)myRemoveEvent(line,"mouseup",uptodate_upOffsetHeight);
    if(dowm)myRemoveEvent(dowm,"dblclick",upSplitScreening)


    maxWidth=0;
    maxHeight=0;
    upHeight=0;
    id=null;
}

function exitWithWarning(){
    maxWidth=document.querySelector("div.layout__center").children[0].children[0].offsetWidth;/**获得编辑区域总宽度 */
    /*console.log(maxWidth);*/

    /**排除左右分栏 */
    tabBarAll=document.querySelectorAll("ul.fn__flex.layout-tab-bar");
    
    var item=[];
    /**筛选出分屏 */
    tabBarAll.forEach(element => {
        var cf= element.parentElement;

        if(cf){
            if("wnd"==cf.getAttribute("data-type")){
                item[item.length]=cf;
            }
        }
    });

    /**排除 */
    for (let index = 0; index < item.length; index++) {
        const element = item[index];
       /* console.log(element,element.offsetWidth,maxWidth);*/
        if(element.offsetWidth==maxWidth) {break;}
        if(index==item.length-1){clearInterval(id);alert("不支持的布局！下分屏上屏的功能暂时关闭！");  return false; }
    }
    /*console.log("--------------------------------------");*/

    /**排除 */
    var i=0;
    updowm=[];
    for (let index = 0; index < item.length; index++) {
        const element = item[index];
        if(element.offsetWidth==maxWidth)
        {
            i++;
            updowm[updowm.length]=element.parentElement;
        }
    }
    
    if(i==0){clearInterval(id); alert("不应该出现的错误，功能已关闭！");return false;}

    if(i==1){clearInterval(id); alert("只支持一个下分屏，不支持任意左右分屏！功能已关闭！");return false;}
    if(i>2){clearInterval(id); alert("不支持多重下分屏！功能已关闭！"); return false;}
    return true;

}

function quickDropDown(){

    /**找出上分屏 */
    up=updowm[0].parentElement.firstElementChild;
    /*console.log(up);*/

    /**找出调整分屏中间线 */
    /*line=getComputedStyle(up.nextElementSibling,'after');*/
    line=up.nextElementSibling;

    /**找出下分屏 */
    dowm =updowm[1].children[0].children[0];
    /*console.log(dowm);*/

   

    if(!line){
        line=up.parentElement.nextElementSibling;
        up=up.parentElement;
    }

    maxHeight=up.parentElement.offsetHeight-31;
    
    myRemoveEvent(line,"mouseup",uptodate_upOffsetHeight)
    myRemoveEvent(dowm,"dblclick",upSplitScreening)


    AddEvent(line,"mouseup",uptodate_upOffsetHeight);/**调整中间线的时候获取新的上分屏高度 */
    AddEvent(dowm,"dblclick",upSplitScreening);/* 为下分屏标签栏注册实际表现事件*/

}



function uptodate_upOffsetHeight()
{
    if(up.offsetHeight<80)return;
    
    upHeight=up.offsetHeight;
}

function upSplitScreening(){
    
    if(!checkTheLayout()){return;}

    if(up.offsetHeight>32){

        /*console.log("上屏");*/

        upHeight=up.offsetHeight;
       
        up.style.height="31px";
    }else{
        /*console.log("恢复");*/
        if(upHeight==0||upHeight>maxHeight){
            upHeight=maxHeight;
        }else if(upHeight<31){
            upHeight=maxHeight/2;
        }

        up.style.height=upHeight+"px";
    }

    line.click();
    trigger('mousedown', line, null);/**触发思源事件 */ 

}



	
function trigger(type, element, detail){
    var customEvent=new CustomEvent(type, {detail: detail, bubbles: false, cancelable: true});
    element.dispatchEvent(customEvent);
}














/**
 * 向body注入新style覆盖原本的css
 * @param {css文本字符串} csstxt 
 */
function injectionCss (csstxt){
   var styleElement=document.createElement('style');
    styleElement.innerText=t;
    document.body.appendChild(styleElement);
};




/**
 * 向指定父级元素对象添加指定html标签并选择追加元素ID,
 * @param {Element} fatherElement 
 * @param {string} addElement 
 * @param {string} setId 
 * @returns addElementObject
 */
function addCreateElement(fatherElement, addElement, setId = null) {
    if (!fatherElement) console.error("指定元素对象不存在！");
    if (!addElement) console.error("未指定字符串！");

    var element = document.createElement(addElement);

    if (setId) element.id = setId;

    fatherElement.appendChild(element);

    return element;
}


/**
 * 向指定父级指定对象前创建并插入元素并选择追加元素ID,
 * @param {Element} fatherElement 
 * @param {string} creatInsertElement 
 * @param {Element} beforeElement
 * @param {string} setId 
 * @returns addElementObject
 */
function insertCreateBeforeElement(fatherElement, creatInsertElement, beforeElement, setId = null) {
    if (!fatherElement) console.error("指定元素对象不存在！");
    if (!creatInsertElement) console.error("未指定字符串！");

    var element = document.createElement(creatInsertElement);

    if (setId) element.id = setId;

    fatherElement.insertBefore(element, beforeElement);

    return element;
}



/**
 * 为元素注册监听事件
 * @param {Element} element 
 * @param {string} strType 
 * @param {Fun} fun 
 */
function AddEvent(element, strType, fun) {
    //判断浏览器有没有addEventListener方法
    if (element.addEventListener) {
        element.addEventListener(strType, fun, false);
        //判断浏览器有没 有attachEvent IE8的方法	
    } else if (element.attachEvent) {
        element.attachEvent("on" + strType, fun);
        //如果都没有则使用 元素.事件属性这个基本方法
    } else {
        element["on" + strType] = fun;
    }
}


/**
 * 为元素解绑监听事件
 * @param {Element}  element ---注册事件元素对象
 * @param {String}   strType ---注册事件名(不加on 如"click")
 * @param {Function} fun	 ---回调函数
 * 
 */
function myRemoveEvent(element, strType, fun) {
    //判断浏览器有没有addEventListener方法
    if (element.addEventListener) {
        // addEventListener方法专用删除方法
        element.removeEventListener(strType, fun, false);
        //判断浏览器有没有attachEvent IE8的方法	
    } else if (element.attachEvent) {
        // attachEvent方法专用删除事件方法
        element.detachEvent("on" + strType, fun);
        //如果都没有则使用 元素.事件属性这个基本方法
    } else {
        //删除事件用null
        element["on" + strType] = null;
    }
}


/**
* 加载脚本文件
* @param {string} url 脚本地址
* @param {string} type 脚本类型
*/
function loadScript(url, type = 'module') {
    let script = document.createElement('script');
    if (type) script.setAttribute('type', type);
    script.setAttribute('src', url);
    document.head.appendChild(script);
}



/**
 * 得到思源toolbar
 * @returns 
 */
function getSiYuanToolbar() { return document.getElementById(SiYuanToolbarID); }

/**
 * 得到HBuiderXToolbar
 * @returns 
 */
function getHBuiderXToolbar() { return document.getElementById(HBuiderXToolbarID); }




/**
 * 加载样式文件
 * @param {string} url 样式地址
 * @param {string} id 样式 ID
 */
function loadStyle(url, id) {

    var headElement = document.head;

    if (!id) console.error("未指定外部css文件引入ID");

    let style = document.getElementById(id);
    if (style) headElement.removeChild(style);

    style = document.createElement('link');

    style.id = id;
    style.setAttribute('type', 'text/css');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', url);
    headElement.appendChild(style);
}

