/**
 * HBuilderX-Light主题特性js实现
 * 目标：能跑就行
 * 功能搬运，请在主题详情页备注来自HBuilderX-Light主题
 */

const HBuiderXToolbarID = "HBuiderXToolbar";
const SiYuanToolbarID = "toolbar";

const SidebarHoverButtonID = "sidebarHoverButton";
const HighlightBecomesHiddenID="highlightBecomesHidden";
const QuickDropDownID="quickDropDown";
const FocusingOnAmplification="FocusingOnAmplification";

var siYuanToolbar = null;
var HBuiderXToolbar = null;
var sidebarHoverButton = null;
var highlightBecomesHiddenButton=null;
var quickDropDownButton=null;
var focusingOnAmplificationButton=null;



var layout__center_fn__flex_fn__flex_1=null;

var LeftHoverBlock = null;
var RightHoverBlock=null;

var left_fn__flex_column = null;
var right_fn__flex_column = null;

var left_fn__flex_column_Width_Str = null;
var right_fn__flex_column_Width_Str = null;






/*创建HBuiderX主题工具栏区域*/
function createHBuiderXToolbar() {
    siYuanToolbar = getSiYuanToolbar();

    HBuiderXToolbar = getHBuiderXToolbar();
    var windowControls = document.getElementById("windowControls");

    if (HBuiderXToolbar) siYuanToolbar.removeChild(HBuiderXToolbar);
    HBuiderXToolbar = insertCreateBefore(windowControls, "div", HBuiderXToolbarID);
}


/**------------------边栏鼠标悬浮展开按钮-----------------*/
/*创建边栏鼠标悬浮展开按钮*/
function createSidebarMouseHoverExpandButton() {
    sidebarHoverButton = addinsertCreateElement(HBuiderXToolbar, "div", SidebarHoverButtonID)
    sidebarHoverButton.setAttribute("title", "开启后左右面板自动关闭，鼠标贴边自动展开,鼠标移动编辑区域左右上角触发关闭。");
    addSidebarHoverButtonEven(sidebarHoverButtonImplementEven);/*为此按钮注册点击事件 */
}

/*SidebarHoverButton按钮添加监听事件*/
function addSidebarHoverButtonEven(fun) {
    AddEvent(sidebarHoverButton, "mousedown", fun)
}

/*SidebarHoverButton 按钮点击后执行事件*/
function sidebarHoverButtonImplementEven() {

    loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/customizeCss.css", "customizeCss");
    
    /**获取区域主体 */
    var column= document.querySelectorAll("#layouts>div.fn__flex.fn__flex-1")[0];
    
    /**左区域 */
    if (!left_fn__flex_column) left_fn__flex_column = column.firstElementChild;
    /**右区域 */
    if (!right_fn__flex_column) right_fn__flex_column = column.lastElementChild;


    /**必须左右已经展开功能才可以生效 */
    if ("0px" != left_fn__flex_column.style.width && "0px" != right_fn__flex_column.style.width) {

        if (!LeftHoverBlock) createHoverBlock();

        closeLeftPanel();
        closeRightPanel();

        sidebarHoverButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/A2.png)";

    } else {

        if (!LeftHoverBlock) {
            alert("请在左右区域都处于打开下状态下点击！");
            return;
        };

        openLeftPanel();
        openRightPanel();

        HBuiderXToolbar.removeChild(LeftHoverBlock);
        HBuiderXToolbar.removeChild(RightHoverBlock);

        LeftHoverBlock = null;
        RightHoverBlock=null;
        
        sidebarHoverButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/A1.png)";
    }
}


/*在左右面板打开鼠标触发块*/
function createHoverBlock() {
    LeftHoverBlock = addinsertCreateElement(HBuiderXToolbar, "div", "LeftHoverBlock");
    LeftHoverBlock.setAttribute("display", "block");

    RightHoverBlock = addinsertCreateElement(HBuiderXToolbar, "div", "RightHoverBlock");
    RightHoverBlock.setAttribute("display", "block");
}


/*左面板关闭*/
function closeLeftPanel() {

    if ("0px" != left_fn__flex_column.style.width) {

        left_fn__flex_column_Width_Str = left_fn__flex_column.style.width;
        left_fn__flex_column.style.width = "0px";
        left_fn__flex_column.style.position = "fixed";
        left_fn__flex_column.style.zIndex = "-11";

        /*解绑触发块鼠标进入，面板关闭事件 */
        myRemoveEvent(LeftHoverBlock, "mouseover", closeLeftPanel);
        /*注册触发块鼠标进入，面板打开事件 */
        AddEvent(LeftHoverBlock, "mouseover", openLeftPanel)

        /*移动触发块位置，等待触发面板打开 */
        LeftHoverBlock.style.width = "12px";
        LeftHoverBlock.style.left = "0px";
        LeftHoverBlock.style.right="auto";
        LeftHoverBlock.style.height = "100%";

        if(right_fn__flex_column.style.width=="0px"){
            RightHoverBlock.style.right = "0px";
            RightHoverBlock.style.left = "auto"
        }else{
            RightHoverBlock.style.left ="0px";
        }
    }
}

/*左面板展开*/
function openLeftPanel() {
    if ("0px" != left_fn__flex_column_Width_Str) {

        left_fn__flex_column.style.width = left_fn__flex_column_Width_Str;
        left_fn__flex_column.style.position = "static";
        left_fn__flex_column.style.zIndex = "2";

        /*解绑触发块鼠标进入，面板打开事件 */
        myRemoveEvent(LeftHoverBlock, "mouseover", openLeftPanel);
        /*注册触发块鼠标进入，面板关闭事件 */
        AddEvent(LeftHoverBlock, "mouseover", closeLeftPanel)

        /*移动触发块位置，等待触发面板关闭 */
        LeftHoverBlock.style.width = "400px";
        LeftHoverBlock.style.left="auto";
        LeftHoverBlock.style.right=(parseFloat(right_fn__flex_column.style.width) + 25) + "px";
        LeftHoverBlock.style.height = "200px";

        if(right_fn__flex_column.style.width!="0px"){
            RightHoverBlock.style.left = (parseFloat(left_fn__flex_column_Width_Str) + 25) + "px";
        }
    }
}

/*右面板关闭*/
function closeRightPanel() {

    if ("0px" != right_fn__flex_column.style.width) {

        right_fn__flex_column_Width_Str = right_fn__flex_column.style.width;
        right_fn__flex_column.style.width = "0px";
        right_fn__flex_column.style.position = "fixed";
        right_fn__flex_column.style.zIndex = "-11";

        /*解绑触发块鼠标进入，面板关闭事件 */
        myRemoveEvent(RightHoverBlock, "mouseover", closeRightPanel);
        /*注册触发块鼠标进入，面板打开事件 */
        AddEvent(RightHoverBlock, "mouseover", openRightPanel);

        /*移动触发块位置，等待触发面板打开 */
        RightHoverBlock.style.width = "12px";
        RightHoverBlock.style.height = "100%";
        RightHoverBlock.style.right = "0px";
        RightHoverBlock.style.left = "auto";
        
        if(left_fn__flex_column.style.width=="0px"){
            LeftHoverBlock.style.left = "0px";
            LeftHoverBlock.style.right="auto";
        }else{
            LeftHoverBlock.style.right = "0px";
        }
    }
}

/*右面板展开*/
function openRightPanel() {
    if ("0px" != right_fn__flex_column_Width_Str) {

        right_fn__flex_column.style.width = right_fn__flex_column_Width_Str;
        right_fn__flex_column.style.position = "static";
        right_fn__flex_column.style.zIndex = "0";

        /*解绑触发块鼠标进入，面板打开事件 */
        myRemoveEvent(RightHoverBlock, "mouseover", openRightPanel);
        /*注册触发块鼠标进入，面板关闭事件 */
        AddEvent(RightHoverBlock, "mouseover", closeRightPanel);

        /*移动触发块位置，等待触发面板关闭 */
        RightHoverBlock.style.width = "400px";
        RightHoverBlock.style.right ="auto";
        RightHoverBlock.style.left = (parseFloat(left_fn__flex_column.style.width) + 25) + "px";
        RightHoverBlock.style.height = "200px";

        if(left_fn__flex_column.style.width!="0px"){
            LeftHoverBlock.style.right =(parseFloat(right_fn__flex_column_Width_Str) + 25) + "px";
        }
    }
}




/**------------------高亮变隐藏按钮-----------------*/

function createHighlightBecomesHidden(){

    loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/highlight-Mark.css", "markCss");

    highlightBecomesHiddenButton = addinsertCreateElement(HBuiderXToolbar, "div", HighlightBecomesHiddenID)
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
    quickDropDownButton = addinsertCreateElement(HBuiderXToolbar, "div", QuickDropDownID)
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
	


/**--------------------------聚焦正文放大200%-------------------- */

function createFocusingOnAmplification(){

    loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/focusingOnTheNormal.css", "focusing");

    focusingOnAmplificationButton = addinsertCreateElement(HBuiderXToolbar, "div", FocusingOnAmplification)
    focusingOnAmplificationButton.setAttribute("title", "开启后处于聚焦状态下的正文字体将会放大200%。")

    AddEvent(focusingOnAmplificationButton,"mousedown",focusingOnAmplificationButtonClickEven);/*为此按钮注册点击事件 */
}

var intervalId=null;

function focusingOnAmplificationButtonClickEven(){
    var obj = document.getElementById("focusing");
    

    if(obj.getAttribute("href")!="/appearance/themes/HBuilderX-Light/customizeStyle/focusingOnAmplification.css"){

        obj.setAttribute("href","/appearance/themes/HBuilderX-Light/customizeStyle/focusingOnAmplification.css");
        focusingOnAmplificationButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/D2.png)";

        intervalId=setInterval(huifuNodeDocument,200);

    }else{
        obj.setAttribute("href","/appearance/themes/HBuilderX-Light/customizeStyle/focusingOnTheNormal.css");
        focusingOnAmplificationButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/D1.png)";

        clearInterval(intervalId);
    }

}

function huifuNodeDocument(){
    var dataDocType= document.querySelectorAll(".protyle-content>[data-doc-type]");

    for (let index = 0; index < dataDocType.length; index++) {
        const element = dataDocType[index];

        var item=element.getAttribute("data-doc-type");

        if(item=="NodeDocument"){
            continue;
        }else if(item==element.children[0].getAttribute("data-type")){
            
            if(element.parentElement.parentElement.className=="block__edit fn__flex-1 protyle"){
                element.setAttribute("data-doc-type","NodeDocument");
            }
            continue;
        }else{
            element.setAttribute("data-doc-type","NodeDocument");
        }
    }
}



/**调整文档,emj 标签，头图位置 */

function adjustDocumentLabelsWhile(){
    window.setInterval(adjustDocumentLabels,130);
}

function adjustDocumentLabels(){
    
    /**获取所有打开文档的标签区域 */
    var Labels= document.querySelectorAll(".protyle-background__tags");
    /*console.log(Labels);*/

    for (let index = 0; index < Labels.length; index++) {
        var item=Labels[index];

        var Labelfater=getLabelfater(item);
        var Icon=getIcon(item);
        var TopSet=getTopSet(item);
        var TopImgSet=getTopImgSet(item);

        var emj=isEmj(item);
        var labe=isLabel(item);
        var img=isImg(item);

        /**没有emj，没有标签，没有头图的情况 */
        if((emj==false) && (labe==false) && (img==false)){
            Labelfater.style.height="auto";

            Labelfater.style.marginTop="0px";
            Labelfater.style.marginBottom="0px";
            
            Labelfater.style.paddingTop="0px";
            Labelfater.style.paddingBottom="0px";

            item.style.height="auto";
            item.style.marginTop="-50px";
            item.style.marginBottom="0px";

            Icon.style.marginTop="0px";
            Icon.style.marginBottom="0px";

            Icon.children[0].style.display="none";
            
            TopSet.style.marginTop="80px";
            TopImgSet.style.button="0px";

        }

        /**只有emj存在的情况 */
        if((emj==true) && (labe==false) && (img==false)){
            
            Labelfater.style.height="auto";

            Labelfater.style.marginTop="0px";
            Labelfater.style.marginBottom="10px";
            
            Labelfater.style.paddingTop="0px";
            Labelfater.style.paddingBottom="0px";

            item.style.height="auto";
            item.style.marginTop="30px";
            item.style.marginBottom="0px";

            Icon.style.marginTop="0px";
            Icon.style.marginBottom="0px";

            Icon.children[0].style.display="block";
            
            TopSet.style.marginTop="42px";
            TopImgSet.style.button="0px";

            continue;
        }

        /**只有标签存在的情况下 */
        if((emj==false) && (labe==true) && (img==false)){
            
            Labelfater.style.height="auto";

            Labelfater.style.marginTop="28px";
            Labelfater.style.marginBottom="-80px";
            
            Labelfater.style.paddingTop="0px";
            Labelfater.style.paddingBottom="0px";


            item.style.height="auto";
            item.style.marginTop="0px";
            item.style.marginBottom="0px";

            Icon.style.marginTop="0px";
            Icon.style.marginBottom="0px";

            Icon.children[0].style.display="none";
            
            TopSet.style.marginTop="-72px";
            TopImgSet.style.button="0px";

            continue;
        }

         /**只存在头图的的情况下*/
         if((emj==false) && (labe==false) && (img==true)){
            
            Labelfater.style.height="auto";

            Labelfater.style.marginTop="24px";
            Labelfater.style.marginBottom="0px";
            
            Labelfater.style.paddingTop="0px";
            Labelfater.style.paddingBottom="0px";

            item.style.height="auto";
            item.style.marginTop="-70px";
            item.style.marginBottom="0px";

            Icon.style.marginTop="0px";
            Icon.style.marginBottom="0px";

            Icon.children[0].style.display="none";
            
            TopSet.style.marginTop="75px";
            TopImgSet.style.top="246px";
            TopImgSet.style.button="0px";



            continue;
        }

        /**emj和标签同时存在的情况下 */
        if((emj==true) && (labe==true) && (img==false)){
           
            Labelfater.style.height="auto";

            Labelfater.style.marginTop="28px";
            Labelfater.style.marginBottom="10px";
            
            Labelfater.style.paddingTop="0px";
            Labelfater.style.paddingBottom="0px";


            item.style.height="auto";
            item.style.marginTop="0px";
            item.style.marginBottom="10px";

            Icon.style.marginTop="0px";
            Icon.style.marginBottom="0px";

            Icon.children[0].style.display="block";
            
            TopSet.style.marginTop="37px";
            TopImgSet.style.button="0px";

                    
            continue;
        }
        
        
          
        /**只存在emj和头图的的情况下*/
        if((emj==true) && (labe==false) && (img==true)){
            
            Labelfater.style.height="auto";

            Labelfater.style.marginTop="24px";
            Labelfater.style.marginBottom="13px";
            
            Labelfater.style.paddingTop="0px";
            Labelfater.style.paddingBottom="0px";

            item.style.height="auto";
            item.style.marginTop="-50px";
            item.style.marginBottom="0px";

            Icon.style.marginTop="0px";
            Icon.style.marginBottom="0px";

            Icon.children[0].style.display="block";
            
            TopSet.style.marginTop="45px";
            TopImgSet.style.top="246px";
            TopImgSet.style.button="0px";

            continue;
        }

        /**只存在标签和头图的的情况下*/
        if((emj==false) && (labe==true) && (img==true)){
            Labelfater.style.height="auto";

            Labelfater.style.marginTop="24px";
            Labelfater.style.marginBottom="0px";
            
            Labelfater.style.paddingTop="0px";
            Labelfater.style.paddingBottom="0px";

            item.style.height="201px";
            item.style.marginTop="-271px";
            item.style.marginBottom="0px";

            Icon.style.marginTop="0px";
            Icon.style.marginBottom="0px";

            Icon.children[0].style.display="none";
            
            TopSet.style.marginTop="75px";
            TopImgSet.style.top="246px";
            TopImgSet.style.button="0px";
            continue;

        }
        /**emj和头图 标签 都存在的的情况下*/
        if((emj==true) && (labe==true) && (img==true)){
            
            Labelfater.style.height="auto";

            Labelfater.style.marginTop="24px";
            Labelfater.style.marginBottom="13px";
            
            Labelfater.style.paddingTop="0px";
            Labelfater.style.paddingBottom="0px";

            item.style.height="221px";
            item.style.marginTop="-271px";
            item.style.marginBottom="0px";

            Icon.style.marginTop="0px";
            Icon.style.marginBottom="0px";

            Icon.children[0].style.display="block";
            
            TopSet.style.marginTop="45px";
            TopImgSet.style.top="246px";
            TopImgSet.style.button="0px";
            continue;
        }
    }
}

/**判断是否设定emj */
function isEmj(Label){
    if(Label.nextElementSibling.children[0].className=="protyle-background__icon fn__none"){
        return false
    }
    return true;
}

/**判断是否有标签 */
function isLabel(Label){
    if(Label.children.length==0){
        return false
    }
    return true;
}

/**判断是否有头图 */
function isImg(Label){
    if(Label.previousElementSibling.children[0].className=="fn__none"){
        return false
    }
    return true;
}

/**获得文档头区域元素 */
function getLabelfater(Label){
    return Label.parentElement;
}

/**获得文档头部设置元素 */
function getTopSet(Label){
    return Label.nextElementSibling.children[1];
}

/**获得文档标题元素 */
function getTitle(Label){
    return Label.parentElement.nextElementSibling;
}

/**获得头图设置元素 */
function getTopImgSet(Label){
    return Label.previousElementSibling.children[1];
}

/**获得emj所在元素 */
function getIcon(Label){
    return Label.nextElementSibling;
}



/**-------------------------------选中文字计数-------------------------------------*/

function getTXTSum(){
    setInterval(gettxt,300);/**块级计数 */

    AddEvent(document.body,"mousedown",gettxtMouseDown);
    AddEvent(document.body,"mouseup",gettxtMouseUp);
}

/**鼠标选中的字数，显示在标题栏 */
var dragTxt=null;
var drag=null;
function gettxtMouseDown(){

    AddEvent(document.body,"mousemove",gettxtMouseMove)
}

var flag=false;
function gettxtMouseMove(){
    
    if(flag==false){
        drag=document.getElementById("drag");
        dragTxt= drag.innerText;
        flag=true;
    }
    
    var txt = window.getSelection?window.getSelection():document.selection.createRange().text;
    var sun=iGettxtSun(txt);
    
    if(sun<=0){
        return;
    }

    drag.innerText="划选字数："+sun;
}

function gettxtMouseUp(){
    myRemoveEvent(document.body,"mousemove",gettxtMouseMove)
    
    flag=false;
    
    if(dragTxt!=null){
        drag.innerText=dragTxt;
        dragTxt=null;
    }
}


//获取鼠标选中的文字字数,显示在工具栏
function gettxt()
{
    CreateAcountSelectElement();

    var txt = window.getSelection?window.getSelection():document.selection.createRange().text;
    var sun=iGettxtSun(txt);

    if(sun<=0){
        return;
    }

    var txtSuns=document.querySelectorAll(".protyle-toolbar>[data-type='txtSun']");

    for (let index = 0; index < txtSuns.length; index++) {
        const element = txtSuns[index];
        element.innerText=sun;
    }
}


/**为每个文档选择工具栏创建计数选择元素 */
function CreateAcountSelectElement(){
    /**获得所有打开文档为激活工具栏 */
    var protyleToolbars=document.querySelectorAll("div.protyle-toolbar.fn__none");

    /**没有标记就创建 */
    for (let index = 0; index < protyleToolbars.length; index++) {
        const element = protyleToolbars[index];
        
        if(element.getAttribute("count")==null){
            element.setAttribute("count",true);
            CreateTxtSumElement(element);
        }
    }
}



/** 创建工具栏显示元素*/
function CreateTxtSumElement(inser){

    var divIder= addinsertCreateElement(inser,"div");
    divIder.setAttribute("class","protyle-toolbar__divider");

    var txtSunElement=addinsertCreateElement(inser,"div");
    txtSunElement.setAttribute("class","protyle-toolbar__item b3-tooltips b3-tooltips__n");
    txtSunElement.setAttribute("data-type","txtSun");
    txtSunElement.setAttribute("aria-label","选中字数");
    txtSunElement.style.paddingRight="10px";
    txtSunElement.style.lineHeight="29px";
    txtSunElement.style.fontSize="110%";
    txtSunElement.style.fontWeight="bold";
}


/**去除空格换行 */
function iGettxtSun(text) {
    var resultStr = text.toString()
    if(resultStr.length==0){
        return 0;
    }else{
        resultStr= resultStr.replace(/[\'\"\\\/\b\f\n\r\t]/g, ''); //去掉空格
        var newStr = "";
        for (var i = 0; i < resultStr.length; i++) {
            if (resultStr[i] !="​") {
                newStr += resultStr[i];
            }
        };
        return newStr.length;
    }
}


/**------------------为文档标题创建动态下划线--------------------------- */

function rundynamicUnderline(){
    setInterval(dynamicUnderline,200);
}

function dynamicUnderline(){
    var AllDocumentTitleElement= getAllDocumentTitleElement();
    
    for (let index = 0; index < AllDocumentTitleElement.length; index++) {
        const element = AllDocumentTitleElement[index];
        
        var line=createLine(element);
        var txt=getTileTxt(element);
        var maxWidth=element.offsetWidth;

        var Style=getComputedStyle(element,null);
        var font=Style.font;
        var width=getTextWidth(txt,font)+58;

        if(width<288){
            width=288;
        }
        
        if(width>maxWidth){
            width=maxWidth;
        }

        line.style.width=width+"px";
    }
}


function createLine(TitleElement){

    var item=TitleElement.parentElement.children;

    for (let index = 0; index < item.length; index++) {
        const element = item[index];
        
        if(element.getAttribute("Line")!=null){
          return element;
        }
    }

    var line= insertCreateAfter(TitleElement,"div");
    line.setAttribute("Line","true");
    line.style.height="1px";
    line.style.marginTop="-2px";
    line.style.marginBottom="7px";
    line.style.backgroundColor="#F4ECD3";
    return line;
}


function getTileTxt(TitleElement){
    return TitleElement.innerText;
}






/**------------------为打开文档的标题下显示文档创建日期------------- */

function showDocumentCreationDate(){

    setInterval(DocumentCreationDate,300);/**块级计数 */
}


function DocumentCreationDate(){
 
    var allDocumentTitleElement=getAllDocumentTitleElement();

    for (let index = 0; index < allDocumentTitleElement.length; index++) {
        const element = allDocumentTitleElement[index];
        
        var documentCreatTimeElement=creatTimeSpanElement(element.parentElement);
        
        var spanTxt=documentCreatTimeElement.innerText;

        if(spanTxt==""|| spanTxt=="日期获取中……"){
            var documentCreatTimeTxt=getDocumentTime(element);
            documentCreatTimeElement.innerText=documentCreatTimeTxt;
        }
    }
}


/**获取所有打开文档的标题元素 */
function getAllDocumentTitleElement(){
    return document.querySelectorAll(".protyle-title__input");
}

/**为文档标题元素下创建时间容器元素 */
function creatTimeSpanElement(tilteElement){

    var item=tilteElement.children;

    for (let index = 0; index < item.length; index++) {
        const element = item[index];
        
        if(element.getAttribute("documentCreatTimeElement")!=null){
          return element;
        }
    }

    var documentCreatTimeElement= addinsertCreateElement(tilteElement,"span");
    documentCreatTimeElement.setAttribute("documentCreatTimeElement","true");
    documentCreatTimeElement.style.display="block";

    documentCreatTimeElement.style.marginLeft="7px";
    documentCreatTimeElement.style.marginBottom="0px";

    documentCreatTimeElement.style.fontSize="61%";
    documentCreatTimeElement.style.color="#767676";

    return documentCreatTimeElement;
}


/**获得这个文档的创建时间 */
function getDocumentTime(tilteElement){
    var tS=tilteElement.parentElement.previousElementSibling.getAttribute("data-node-id");

    if(tS==null){
        return "日期获取中……";
    }
    var year=tS.substring(0,4);
    var moon=tS.substring(4,6);
    var day=tS.substring(6,8);
    var hour=tS.substring(8,10);
    var minute=tS.substring(10,12);
    var second=tS.substring(12,14);

  return year+"-"+moon+"-"+day+"  "+hour+":"+minute+":"+second;
    /*return year+"年"+moon+"月"+day+"日"+hour+"时"+minute+"分"+second+"秒";*/
}





/**---------------------列表折叠内容预览查看---------------- */

function collapsedListPreview(){
    setInterval(collapsedListPreviewEvent,3000);
}

function collapsedListPreviewEvent(){
    
    var turn=[
              ...document.querySelectorAll(".protyle-wysiwyg [data-node-id].li[fold='1']>.p>[spellcheck]"),
              ...document.querySelectorAll(".protyle-wysiwyg [data-node-id].li[fold='1']>.h1>[spellcheck]"),
              ...document.querySelectorAll(".protyle-wysiwyg [data-node-id].li[fold='1']>.h2>[spellcheck]"),
              ...document.querySelectorAll(".protyle-wysiwyg [data-node-id].li[fold='1']>.h3>[spellcheck]"),
              ...document.querySelectorAll(".protyle-wysiwyg [data-node-id].li[fold='1']>.h4>[spellcheck]"),
              ...document.querySelectorAll(".protyle-wysiwyg [data-node-id].li[fold='1']>.h5>[spellcheck]"),
              ...document.querySelectorAll(".protyle-wysiwyg [data-node-id].li[fold='1']>.h6>[spellcheck]")
             ];//将所有查询到的合并到一个容器

    //检查注册事件的折叠列表是否恢复未折叠状态,是清除事件和去除标志属性
    var ListPreview=document.querySelectorAll("[ListPreview]");
    for (let index = 0; index < ListPreview.length; index++) {
        const element = ListPreview[index];
        if(element.parentElement.getAttribute("fold")==null){
            element.removeAttribute("title");
            element.removeAttribute("ListPreview",);
            var item=element.children[0];
            myRemoveEvent(item,"dblclick",LIstIn)//解绑鼠标双击事件

        }
    }

    for (let index = 0; index < turn.length; index++) {//筛选未注册鼠标事件折叠列表
        const element = turn[index];
        if(element.parentElement.getAttribute("ListPreview")!=null){
            continue;
        }else{
            element.parentElement.setAttribute("ListPreview",true);
            element.parentElement.setAttribute("title","双击〔 ··· 〕查看折叠内容");
            AddEvent(element,"dblclick",LIstIn);//注册鼠标双击事件
        }
    }
}

function LIstIn(e){

    if((window.getSelection?window.getSelection():document.selection.createRange().text).toString().length!=0){
        return;
    }

    var obj=e.target;
    var objParent=obj.parentElement;

    var X=e.offsetX+obj.offsetLeft;
    var Y=e.offsetY+obj.offsetTop;
    
    var triggerBlock=addinsertCreateElement(objParent.parentElement,"div");//创建触发块
    
    //设置触发块样式，将触发块显示在〔 ··· 〕左键双击位置
    triggerBlock.style.position="absolute";
    triggerBlock.style.top=(Y-15)+"px";
    triggerBlock.style.left=(X+15)+"px";
    triggerBlock.style.width="30px";
    triggerBlock.style.height="30px";
    //triggerBlock.style.background="red";
    triggerBlock.style.display="block";
    triggerBlock.style.textAlign="center"
    triggerBlock.style.lineHeight="30px";
    triggerBlock.style.zIndex="999";
    
    //获取折叠列表内的内容 
    var previewContent=objParent.nextElementSibling;

    //在触发块内创建思源超链接 
    triggerBlock.innerHTML="<span data-type='a' class='list-A' data-href=siyuan://blocks/"+previewContent.getAttribute("data-node-id")+">A</span>";

    //将这个思源连接样式隐藏
    var a= triggerBlock.children[0];
    a.style.fontSize="30px";
    a.style.color="transparent";
    a.style.textShadow="none";
    a.style.border="none";
    
    //将这个思源链接hover时的样式隐藏
    AddEvent(a,"mouseover",hover);
    function hover(e){
        e.target.style.color="transparent";
        e.target.style.textShadow="none";
        e.target.style.border="none";
    }
    
    //鼠标离开思源连接后触发块自我销毁
    AddEvent(a,"mouseout",aRemove);
    function aRemove(){
        triggerBlock.remove();
    }
}

















/**
 * 获得文本的占用的宽度
 * @param {*} text 字符串文班
 * @param {*} font 文本字体的样式
 * @returns 
 */
function getTextWidth(text, font) {
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d"); 
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
  }

/**
 * 
 * @param {触发元素事件} type 
 * @param {*} element 
 * @param {*} detail 
 */
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
 * 向指定父级创建追加一个子元素，并可选添加ID,
 * @param {Element} fatherElement 
 * @param {string} addElementTxt 要创建添加的元素标签
 * @param {string} setId 
 * @returns addElementObject
 */
function addinsertCreateElement(fatherElement, addElementTxt, setId = null) {
    if (!fatherElement) console.error("指定元素对象不存在！");
    if (!addElementTxt) console.error("未指定字符串！");

    var element = document.createElement(addElementTxt);

    if (setId) element.id = setId;

    fatherElement.appendChild(element);

    return element;
}


/**
 * 向指定元素后创建插入一个元素，可选添加ID
 * @param {*} targetElement 目标元素
 * @param {*} addElementTxt 要创建添加的元素标签
 * @param {*} setId 为创建元素设置ID
 */
function insertCreateAfter(targetElement,addElementTxt,setId = null){

    if (!targetElement) console.error("指定元素对象不存在！");
    if (!addElementTxt) console.error("未指定字符串！");

    var element = document.createElement(addElementTxt);

    if (setId) element.id = setId;

    var parent = targetElement.parentNode;//得到父节点
    if (parent.lastChild === targetElement) {
        //如果最后一个子节点是当前元素那么直接添加即可
        parent.appendChild(element);

        return element;
    }else{
        parent.insertBefore(element,targetElement.nextSibling);//否则，当前节点的下一个节点之前添加

        return element;
    }
}


/**
 * 向指定元素前创建插入一个元素，可选添加ID
 * @param {*} targetElement 目标元素
 * @param {*} addElementTxt 要创建添加的元素标签
 * @param {*} setId 为创建元素设置ID
 */
 function insertCreateBefore(targetElement,addElementTxt,setId = null){

    if (!targetElement) console.error("指定元素对象不存在！");
    if (!addElementTxt) console.error("未指定字符串！");

    var element = document.createElement(addElementTxt);

    if (setId) element.id = setId;

    targetElement.parentElement.insertBefore(element, targetElement);

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



/**简单判断目前思源是否是手机模式 */
function isPhone() { 
    if(document.getElementById(SiYuanToolbarID)==null){
        return true;
    }    
    return false; 
}


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



/**
* 
* @param {*} 内容块id 
* @param {*} 属性对象 
* @returns 
*/
async function 设置思源块属性(内容块id, 属性对象) {
   let url = '/api/attr/setBlockAttrs'
   return 解析响应体(向思源请求数据(url, {
       id: 内容块id,
       attrs: 属性对象,
  }))
}
/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @returns 
 */
async function 向思源请求数据(url, data) {
    let resData = null
    await fetch(url, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
            Authorization: `Token ''`,
        }
    }).then(function (response) { resData = response.json() })
        return resData
}
/**
 * 
 * @param {*} response 
 * @returns 
 */
async function 解析响应体(response) {
    let r = await response
    return r.code === 0 ? r.data : null
    }
      





  /***js form Morgan***/
  /*****************************评论功能 From langzhou**********************************/
  function inject(){
    //获取当前主题名称
    let themeStyle = document.querySelector('#themeStyle')
    if(themeStyle){
      let url = themeStyle.getAttribute('href').split('/')
      let theme = url[url.length - 2]
      if(!theme){
        alert("未能获取到主题名称")
      }else{
        let script = document.querySelector('#emojiScript')
        if(script){
          let js = document.createElement('script')
              js.setAttribute('src','./appearance/themes/' + theme + '/comment/index.js')
              js.setAttribute('type','module')
              js.setAttribute('defer','defer')
          document.head.insertBefore(js,script)
        }else{
          setTimeout(()=>inject(),500)
        }
      }
    }else{
      setTimeout(()=>inject(),500)
    }
  }
  inject()
  


   
    /****各种列表转xx的UI****/
    function ViewSelect(selectid,selecttype){
    let button = document.createElement("button")
    button.id="viewselect"
    button.className="b3-menu__item"
    button.innerHTML='<svg class="b3-menu__icon" style="null"><use xlink:href="#iconGlobalGraph"></use></svg><span class="b3-menu__label" style="">视图选择</span><svg class="b3-menu__icon b3-menu__icon--arrow" style="null"><use xlink:href="#iconRight"></use></svg></button>'
    button.appendChild(SubMenu(selectid,selecttype))
    return button
  }
  
  function SubMenu(selectid,selecttype,className = 'b3-menu__submenu') {
    let node = document.createElement('div');
    node.className = className;
    if(selecttype=="NodeList"){
      node.appendChild(GraphView(selectid))
      node.appendChild(TableView(selectid))
      node.appendChild(kanbanView(selectid))
      node.appendChild(DefaultView(selectid))
    }
    if(selecttype=="NodeTable"){
      node.appendChild(FixWidth(selectid))
      node.appendChild(AutoWidth(selectid))
      node.appendChild(Removeth(selectid))
      node.appendChild(Defaultth(selectid))
    }
  return node;
  }
  
  function GraphView(selectid){
    let button = document.createElement("button")
    button.className="b3-menu__item"
    button.setAttribute("data-node-id",selectid)
    button.setAttribute("custom-attr-name","f")
    button.setAttribute("custom-attr-value","dt")
  
    button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconFiles"></use></svg><span class="b3-menu__label">转换为导图</span>`
    button.onclick=ViewMonitor
    return button
  }
  function TableView(selectid){
    let button = document.createElement("button")
    button.className="b3-menu__item"
    button.setAttribute("data-node-id",selectid)
    button.setAttribute("custom-attr-name","f")
    button.setAttribute("custom-attr-value","bg")
  
    button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">转换为表格</span>`
    button.onclick=ViewMonitor
    return button
  }
  function kanbanView(selectid){
    let button = document.createElement("button")
    button.className="b3-menu__item"
    button.setAttribute("data-node-id",selectid)
    button.setAttribute("custom-attr-name","f")
    button.setAttribute("custom-attr-value","kb")
  
    button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconMenu"></use></svg><span class="b3-menu__label">转换为看板</span>`
    button.onclick=ViewMonitor
    return button
  }
  function DefaultView(selectid){
    let button = document.createElement("button")
    button.className="b3-menu__item"
    button.onclick=ViewMonitor
    button.setAttribute("data-node-id",selectid)
    button.setAttribute("custom-attr-name","f")
    button.setAttribute("custom-attr-value",'')
  
    button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconList"></use></svg><span class="b3-menu__label">恢复为列表</span>`
    return button
  }
  function FixWidth(selectid){
    let button = document.createElement("button")
    button.className="b3-menu__item"
    button.onclick=ViewMonitor
    button.setAttribute("data-node-id",selectid)
    button.setAttribute("custom-attr-name","f")
    button.setAttribute("custom-attr-value","")
  
    button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">页面宽度</span>`
    return button
  }
  function AutoWidth(selectid){
    let button = document.createElement("button")
    button.className="b3-menu__item"
    button.setAttribute("data-node-id",selectid)
    button.setAttribute("custom-attr-name","f")
    button.setAttribute("custom-attr-value","auto")
    button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">自动宽度</span>`
    button.onclick=ViewMonitor
    return button
  }
  function Removeth(selectid){
    let button = document.createElement("button")
    button.className="b3-menu__item"
    button.onclick=ViewMonitor
    button.setAttribute("data-node-id",selectid)
    button.setAttribute("custom-attr-name","t")
    button.setAttribute("custom-attr-value","biaotou")
  
    button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">取消表头样式</span>`
    return button
  }
  function Defaultth(selectid){
    let button = document.createElement("button")
    button.className="b3-menu__item"
    button.setAttribute("data-node-id",selectid)
    button.setAttribute("custom-attr-name","t")
    button.setAttribute("custom-attr-value","")
    button.innerHTML=`<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">默认表头样式</span>`
    button.onclick=ViewMonitor
    return button
  }
  function MenuSeparator(className = 'b3-menu__separator') {
    let node = document.createElement('button');
    node.className = className;
    return node;
  }
  









  /* 操作 */ 
  
  /**
   * 获得所选择的块对应的块 ID
   * @returns {string} 块 ID
   * @returns {
   *     id: string, // 块 ID
   *     type: string, // 块类型
   *     subtype: string, // 块子类型(若没有则为 null)
   * }
   * @returns {null} 没有找到块 ID */
  function getBlockSelected() {
      let node_list = document.querySelectorAll('.protyle-wysiwyg--select');
      if (node_list.length === 1 && node_list[0].dataset.nodeId != null) return {
          id: node_list[0].dataset.nodeId,
          type: node_list[0].dataset.type,
          subtype: node_list[0].dataset.subtype,
      };
      return null;
  }
  
  function ClickMonitor () {
    window.addEventListener('mouseup', MenuShow)
  }
  
  function MenuShow() {
    setTimeout(() => {
      let selectinfo = getBlockSelected()
        if(selectinfo){
        let selecttype = selectinfo.type
        let selectid = selectinfo.id
        if(selecttype=="NodeList"||selecttype=="NodeTable"){
          setTimeout(()=>InsertMenuItem(selectid,selecttype), 0)
        }
      }
    }, 0);
  }
  
  
  function InsertMenuItem(selectid,selecttype){
    let commonMenu = document.getElementById("commonMenu")
    let  readonly = commonMenu.querySelector(".b3-menu__item--readonly")
    let  selectview = commonMenu.querySelector('[id="viewselect"]')
    if(readonly){
      if(!selectview){
      commonMenu.insertBefore(ViewSelect(selectid,selecttype),readonly)
      commonMenu.insertBefore(MenuSeparator(),readonly)
      }
    }
  }
  
  function ViewMonitor(event){
    let id = event.currentTarget.getAttribute("data-node-id")
    let attrName = 'custom-'+event.currentTarget.getAttribute("custom-attr-name")
    let attrValue = event.currentTarget.getAttribute("custom-attr-value")
    let blocks = document.querySelectorAll(`.protyle-wysiwyg [data-node-id="${id}"]`)
    if(blocks){
      blocks.forEach(block=>block.setAttribute(attrName,attrValue))
    }
    let attrs={}
      attrs[attrName] =attrValue
    设置思源块属性(id,attrs)
  }
  
  
  

















  
(function (w, und) { Refresh() }(window, undefined));

function Refresh() {

    if(isPhone()){
       
        setTimeout(()=>{
            
            adjustDocumentLabelsWhile()//调整文档头部区域，在emj 标签，头图 各种情况下的布局

        },1000)
        
    }else{

        setTimeout(()=>{

            createHBuiderXToolbar();//创建BuiderXToolbar

            createSidebarMouseHoverExpandButton();//鼠标移动展开左右树面板按钮
    
            createHighlightBecomesHidden();//高亮变隐藏
    
            createQuickDropDownButton()//快捷下分栏按钮
    
            createFocusingOnAmplification()//聚焦内容放大200%
    
            //getTXTSum()//选中文字计数------已官方实现 
    
            setTimeout(()=>ClickMonitor(),3000);//各种列表转xx
    
            adjustDocumentLabelsWhile();//调整文档头部区域，在emj 标签，头图 各种情况下的布局
            
            rundynamicUnderline();//为文档标题创建动态下划线
            
            showDocumentCreationDate();//为打开文档标题下面显示文档创建日期
            
            collapsedListPreview();//折叠列表内容预览查看


            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/customizeCss.css", "customizeCss");
            
            console.log("==============>HBuilderX-Light主题:附加CSS和特性JS_已经执行<==============");
        },500);
    }

}
