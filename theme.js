/**
 * HBuilderX-Light主题特性js实现
 * 目标：能跑就行
 * 功能搬运: 请在主题详情页备注来自HBuilderX-Light主题
 */




/*----------------------------------创建HBuiderX主题工具栏区域----------------------------------*/
function createHBuiderXToolbar() {
    var siYuanToolbar = getSiYuanToolbar();

    var HBuiderXToolbar = getHBuiderXToolbar();
    var windowControls = document.getElementById("windowControls");

    if (HBuiderXToolbar) siYuanToolbar.removeChild(HBuiderXToolbar);
    HBuiderXToolbar = insertCreateBefore(windowControls, "div", "HBuiderXToolbar");
}


/**----------------------------------边栏鼠标悬浮展开按钮----------------------------------*/
var sidebarHoverButton = null;
var LeftHoverBlock = null;
var RightHoverBlock = null;
var left_fn__flex_column = null;
var right_fn__flex_column = null;
var left_fn__flex_column_Width_Str = null;
var right_fn__flex_column_Width_Str = null;

/*创建边栏鼠标悬浮展开按钮*/
function createSidebarMouseHoverExpandButton() {
    sidebarHoverButton = addinsertCreateElement(getHBuiderXToolbar(), "div", "sidebarHoverButton")
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
    var column = document.querySelectorAll("#layouts>div.fn__flex.fn__flex-1")[0];

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

        var HBuiderXToolbar = getHBuiderXToolbar();

        HBuiderXToolbar.removeChild(LeftHoverBlock);
        HBuiderXToolbar.removeChild(RightHoverBlock);

        LeftHoverBlock = null;
        RightHoverBlock = null;

        sidebarHoverButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/A1.png)";
    }
}


/*在左右面板打开鼠标触发块*/
function createHoverBlock() {

    var HBuiderXToolbar = getHBuiderXToolbar();

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
        LeftHoverBlock.style.right = "auto";
        LeftHoverBlock.style.height = "100%";

        if (right_fn__flex_column.style.width == "0px") {
            RightHoverBlock.style.right = "0px";
            RightHoverBlock.style.left = "auto"
        } else {
            RightHoverBlock.style.left = "0px";
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
        LeftHoverBlock.style.left = "auto";
        LeftHoverBlock.style.right = (parseFloat(right_fn__flex_column.style.width) + 25) + "px";
        LeftHoverBlock.style.height = "200px";

        if (right_fn__flex_column.style.width != "0px") {
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

        if (left_fn__flex_column.style.width == "0px") {
            LeftHoverBlock.style.left = "0px";
            LeftHoverBlock.style.right = "auto";
        } else {
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
        RightHoverBlock.style.right = "auto";
        RightHoverBlock.style.left = (parseFloat(left_fn__flex_column.style.width) + 25) + "px";
        RightHoverBlock.style.height = "200px";

        if (left_fn__flex_column.style.width != "0px") {
            LeftHoverBlock.style.right = (parseFloat(right_fn__flex_column_Width_Str) + 25) + "px";
        }
    }
}




/**----------------------------------高亮变隐藏按钮----------------------------------*/
var highlightBecomesHiddenButton = null;

function createHighlightBecomesHidden() {

    loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/highlight-Mark.css", "markCss");

    var HBuiderXToolbar = getHBuiderXToolbar();
    highlightBecomesHiddenButton = addinsertCreateElement(HBuiderXToolbar, "div", "highlightBecomesHidden")
    highlightBecomesHiddenButton.setAttribute("title", "开启后CTRL+E 高亮文本变隐藏文本，鼠标移上去才会显示。")

    AddEvent(highlightBecomesHiddenButton, "mousedown", highlightBecomesHiddenButtonClickEven);/*为此按钮注册点击事件 */
}


/*切换mark标签外部css样式,以达到高亮变隐藏的效果 */
function highlightBecomesHiddenButtonClickEven() {
    var obj = document.getElementById("markCss");

    if (obj.getAttribute("href") != "/appearance/themes/HBuilderX-Light/customizeStyle/conceal-Mark.css") {

        obj.setAttribute("href", "/appearance/themes/HBuilderX-Light/customizeStyle/conceal-Mark.css");
        highlightBecomesHiddenButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/B2.png)";

    } else {
        obj.setAttribute("href", "/appearance/themes/HBuilderX-Light/customizeStyle/highlight-Mark.css");
        highlightBecomesHiddenButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/B1.png)";
    }
}

/*----------------------------------快捷下分栏----------------------------------*/

var maxWidth = 0;
var maxHeight = 0;
var upHeight = 0;
var tabBarAll = null;

var id = null;

var up = null;
var line = null;
var dowm = null;

var updowm = [];
var quickDropDownButton = null;

function createQuickDropDownButton() {
    var HBuiderXToolbar = getHBuiderXToolbar();
    quickDropDownButton = addinsertCreateElement(HBuiderXToolbar, "div", "quickDropDown")
    quickDropDownButton.setAttribute("title",
        "开启后双击下分栏任意标签下分栏可以占满上屏幕，再双击标签回到原位。")

    AddEvent(quickDropDownButton, "mousedown", quickDropDownEven);/*为此按钮注册点击事件 */

}


function quickDropDownEven() {

    myRemoveEvent(quickDropDownButton, "mousedown", quickDropDownEven);
    AddEvent(quickDropDownButton, "mousedown", closeQuickDropDown);
    quickDropDownButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/C2.png)";

    checkTheLayout();

}


function checkTheLayout() {

    if (!exitWithWarning()) {

        closeQuickDropDown();
        return false;

    } else {
        quickDropDown();
        return true;
    }
    return true;
}

function closeQuickDropDown() {

    clearInterval(id);
    AddEvent(quickDropDownButton, "mousedown", quickDropDownEven);/*为此按钮注册点击事件 */
    quickDropDownButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/C1.png)";

    if (line) myRemoveEvent(line, "mouseup", uptodate_upOffsetHeight);
    if (dowm) myRemoveEvent(dowm, "dblclick", upSplitScreening)


    maxWidth = 0;
    maxHeight = 0;
    upHeight = 0;
    id = null;
}

function exitWithWarning() {
    maxWidth = document.querySelector("div.layout__center").children[0].children[0].offsetWidth;/**获得编辑区域总宽度 */
    /*console.log(maxWidth);*/

    /**排除左右分栏 */
    tabBarAll = document.querySelectorAll("ul.fn__flex.layout-tab-bar");

    var item = [];
    /**筛选出分屏 */
    tabBarAll.forEach(element => {
        var cf = element.parentElement;

        if (cf) {
            if ("wnd" == cf.getAttribute("data-type")) {
                item[item.length] = cf;
            }
        }
    });

    /**排除 */
    for (let index = 0; index < item.length; index++) {
        const element = item[index];
        /* console.log(element,element.offsetWidth,maxWidth);*/
        if (element.offsetWidth == maxWidth) { break; }
        if (index == item.length - 1) { clearInterval(id); alert("不支持的布局！下分屏上屏的功能暂时关闭！"); return false; }
    }
    /*console.log("--------------------------------------");*/

    /**排除 */
    var i = 0;
    updowm = [];
    for (let index = 0; index < item.length; index++) {
        const element = item[index];
        if (element.offsetWidth == maxWidth) {
            i++;
            updowm[updowm.length] = element.parentElement;
        }
    }

    if (i == 0) { clearInterval(id); alert("不应该出现的错误，功能已关闭！"); return false; }

    if (i == 1) { clearInterval(id); alert("只支持一个下分屏，不支持任意左右分屏！功能已关闭！"); return false; }
    if (i > 2) { clearInterval(id); alert("不支持多重下分屏！功能已关闭！"); return false; }
    return true;

}

function quickDropDown() {

    /**找出上分屏 */
    up = updowm[0].parentElement.firstElementChild;
    /*console.log(up);*/

    /**找出调整分屏中间线 */
    /*line=getComputedStyle(up.nextElementSibling,'after');*/
    line = up.nextElementSibling;

    /**找出下分屏 */
    dowm = updowm[1].children[0].children[0];
    /*console.log(dowm);*/



    if (!line) {
        line = up.parentElement.nextElementSibling;
        up = up.parentElement;
    }

    maxHeight = up.parentElement.offsetHeight - 31;

    myRemoveEvent(line, "mouseup", uptodate_upOffsetHeight)
    myRemoveEvent(dowm, "dblclick", upSplitScreening)


    AddEvent(line, "mouseup", uptodate_upOffsetHeight);/**调整中间线的时候获取新的上分屏高度 */
    AddEvent(dowm, "dblclick", upSplitScreening);/* 为下分屏标签栏注册实际表现事件*/

}



function uptodate_upOffsetHeight() {
    if (up.offsetHeight < 80) return;

    upHeight = up.offsetHeight;
}

function upSplitScreening() {

    if (!checkTheLayout()) { return; }

    if (up.offsetHeight > 32) {

        /*console.log("上屏");*/

        upHeight = up.offsetHeight;

        up.style.height = "31px";
    } else {
        /*console.log("恢复");*/
        if (upHeight == 0 || upHeight > maxHeight) {
            upHeight = maxHeight;
        } else if (upHeight < 31) {
            upHeight = maxHeight / 2;
        }

        up.style.height = upHeight + "px";
    }

    line.click();
    trigger('mousedown', line, null);/**触发思源事件 */

}



/**----------------------------------聚焦正文放大200%---------------------------------- */
var focusingOnAmplificationButton = null;

function createFocusingOnAmplification() {

    loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/focusingOnTheNormal.css", "focusing");
    var HBuiderXToolbar = getHBuiderXToolbar();

    focusingOnAmplificationButton = addinsertCreateElement(HBuiderXToolbar, "div", "FocusingOnAmplification")
    focusingOnAmplificationButton.setAttribute("title", "开启后处于聚焦状态下的正文字体将会放大200%。")

    AddEvent(focusingOnAmplificationButton, "mousedown", focusingOnAmplificationButtonClickEven);/*为此按钮注册点击事件 */
}

var intervalId = null;

function focusingOnAmplificationButtonClickEven() {
    var obj = document.getElementById("focusing");


    if (obj.getAttribute("href") != "/appearance/themes/HBuilderX-Light/customizeStyle/focusingOnAmplification.css") {

        obj.setAttribute("href", "/appearance/themes/HBuilderX-Light/customizeStyle/focusingOnAmplification.css");
        focusingOnAmplificationButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/D2.png)";

        intervalId = setInterval(huifuNodeDocument, 200);

    } else {
        obj.setAttribute("href", "/appearance/themes/HBuilderX-Light/customizeStyle/focusingOnTheNormal.css");
        focusingOnAmplificationButton.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/D1.png)";

        clearInterval(intervalId);
    }

}

function huifuNodeDocument() {
    var dataDocType = document.querySelectorAll(".protyle-content>[data-doc-type]");

    for (let index = 0; index < dataDocType.length; index++) {
        const element = dataDocType[index];

        var item = element.getAttribute("data-doc-type");

        if (item == "NodeDocument") {
            continue;
        } else if (item == element.children[0].getAttribute("data-type")) {

            if (element.parentElement.parentElement.className == "block__edit fn__flex-1 protyle") {
                element.setAttribute("data-doc-type", "NodeDocument");
            }
            continue;
        } else {
            element.setAttribute("data-doc-type", "NodeDocument");
        }
    }
}



/**调整文档,emj 标签，头图位置 */
function adjustDocumentLabelsWhile() {
    window.setInterval(adjustDocumentLabels, 100);
}

function adjustDocumentLabels() {

    /**获取所有打开文档的标签区域 */
    var openDoc = null;
    if (isPhone()) {
        openDoc = [document.getElementById("editor")];
    } else {
        openDoc = document.querySelectorAll(".layout-tab-container>.fn__flex-1.protyle:not(.fn__none)");
    }

    var Labels = [];
    for (let index = 0; index < openDoc.length; index++) {

        const element = openDoc[index];
        var item = element.children;
        if (item.length < 2) continue;
        var item2 = item[1].children;
        if (item2.length < 1) continue;
        var item3 = item2[0].children;
        if (item3.length < 2) continue;
        var item4 = item3[1];
        if (item4.className != "protyle-background__tags") continue;
        //var Label = element.children[1].children[0].children[1];
        Labels.push(item4);
    }

    Adjustment(Labels);
}


function Adjustment(Labels) {
    for (let index = 0; index < Labels.length; index++) {
        const item = Labels[index];

        var Labelfater = getLabelfater(item);
        var Icon = getIcon(item);
        var TopSet = getTopSet(item);
        var TopImgSet = getTopImgSet(item);

        var emj = isEmj(item);
        var labe = isLabel(item);
        var img = isImg(item);

        /**没有emj，没有标签，没有头图的情况 */
        if (!emj && !labe && !img) {
            Labelfater.style.height = "auto";

            Labelfater.style.marginTop = "0px";
            Labelfater.style.marginBottom = "0px";

            Labelfater.style.paddingTop = "0px";
            Labelfater.style.paddingBottom = "0px";

            item.style.height = "auto";
            item.style.marginTop = "-50px";
            item.style.marginBottom = "0px";

            Icon.style.marginTop = "0px";
            Icon.style.marginBottom = "0px";

            Icon.children[0].style.display = "none";

            TopSet.style.marginTop = "80px";
            TopImgSet.style.button = "0px";

        }

        /**只有emj存在的情况 */
        if (emj && !labe && !img) {

            Labelfater.style.height = "auto";

            Labelfater.style.marginTop = "0px";
            Labelfater.style.marginBottom = "10px";

            Labelfater.style.paddingTop = "0px";
            Labelfater.style.paddingBottom = "0px";

            item.style.height = "auto";
            item.style.marginTop = "30px";
            item.style.marginBottom = "0px";

            Icon.style.marginTop = "0px";
            Icon.style.marginBottom = "0px";

            Icon.children[0].style.display = "block";

            TopSet.style.marginTop = "42px";
            TopImgSet.style.button = "0px";

            return;
        }

        /**只有标签存在的情况下 */
        if (!emj && labe && !img) {

            Labelfater.style.height = "auto";

            Labelfater.style.marginTop = "28px";
            Labelfater.style.marginBottom = "-80px";

            Labelfater.style.paddingTop = "0px";
            Labelfater.style.paddingBottom = "0px";


            item.style.height = "auto";
            item.style.marginTop = "0px";
            item.style.marginBottom = "0px";

            Icon.style.marginTop = "0px";
            Icon.style.marginBottom = "0px";

            Icon.children[0].style.display = "none";

            TopSet.style.marginTop = "-72px";
            TopImgSet.style.button = "0px";

            return;
        }

        /**只存在头图的的情况下*/
        if (!emj && !labe && img) {

            Labelfater.style.height = "auto";

            Labelfater.style.marginTop = "24px";
            Labelfater.style.marginBottom = "0px";

            Labelfater.style.paddingTop = "0px";
            Labelfater.style.paddingBottom = "0px";

            item.style.height = "auto";
            item.style.marginTop = "-70px";
            item.style.marginBottom = "0px";

            Icon.style.marginTop = "0px";
            Icon.style.marginBottom = "0px";

            Icon.children[0].style.display = "none";

            TopSet.style.marginTop = "75px";
            TopImgSet.style.top = "246px";
            TopImgSet.style.button = "0px";

            return;
        }

        /**emj和标签同时存在的情况下 */
        if (emj && labe && !img) {

            Labelfater.style.height = "auto";

            Labelfater.style.marginTop = "28px";
            Labelfater.style.marginBottom = "10px";

            Labelfater.style.paddingTop = "0px";
            Labelfater.style.paddingBottom = "0px";


            item.style.height = "auto";
            item.style.marginTop = "0px";
            item.style.marginBottom = "10px";

            Icon.style.marginTop = "0px";
            Icon.style.marginBottom = "0px";

            Icon.children[0].style.display = "block";

            TopSet.style.marginTop = "37px";
            TopImgSet.style.button = "0px";

            return;
        }



        /**只存在emj和头图的的情况下*/
        if (emj && !labe && img) {

            Labelfater.style.height = "auto";

            Labelfater.style.marginTop = "24px";
            Labelfater.style.marginBottom = "13px";

            Labelfater.style.paddingTop = "0px";
            Labelfater.style.paddingBottom = "0px";

            item.style.height = "auto";
            item.style.marginTop = "-50px";
            item.style.marginBottom = "0px";

            Icon.style.marginTop = "0px";
            Icon.style.marginBottom = "0px";

            Icon.children[0].style.display = "block";

            TopSet.style.marginTop = "45px";
            TopImgSet.style.top = "246px";
            TopImgSet.style.button = "0px";

            return;
        }

        /**只存在标签和头图的的情况下*/
        if (!emj && labe && img) {
            Labelfater.style.height = "auto";

            Labelfater.style.marginTop = "24px";
            Labelfater.style.marginBottom = "0px";

            Labelfater.style.paddingTop = "0px";
            Labelfater.style.paddingBottom = "0px";

            item.style.height = "201px";
            item.style.marginTop = "-271px";
            item.style.marginBottom = "0px";

            Icon.style.marginTop = "0px";
            Icon.style.marginBottom = "0px";

            Icon.children[0].style.display = "none";

            TopSet.style.marginTop = "75px";
            TopImgSet.style.top = "246px";
            TopImgSet.style.button = "0px";
            return;

        }
        /**emj和头图 标签 都存在的的情况下*/
        if (emj && labe && img) {

            Labelfater.style.height = "auto";

            Labelfater.style.marginTop = "24px";
            Labelfater.style.marginBottom = "13px";

            Labelfater.style.paddingTop = "0px";
            Labelfater.style.paddingBottom = "0px";

            item.style.height = "221px";
            item.style.marginTop = "-271px";
            item.style.marginBottom = "0px";

            Icon.style.marginTop = "0px";
            Icon.style.marginBottom = "0px";

            Icon.children[0].style.display = "block";

            TopSet.style.marginTop = "45px";
            TopImgSet.style.top = "246px";
            TopImgSet.style.button = "0px";
            return;
        }
    }
}

/**判断是否设定emj */
function isEmj(Label) {
    return !(Label.nextElementSibling.children[0].className == "protyle-background__icon fn__none");
}

/**判断是否有标签 */
function isLabel(Label) {
    return !(Label.children.length == 0);
}

/**判断是否有头图 */
function isImg(Label) {
    return !(Label.previousElementSibling.children[0].className == "fn__none");
}

/**获得文档头区域元素 */
function getLabelfater(Label) {
    return Label.parentElement;
}

/**获得文档头部设置元素 */
function getTopSet(Label) {
    return Label.nextElementSibling.children[1];
}

/**获得文档标题元素 */
function getTitle(Label) {
    return Label.parentElement.nextElementSibling;
}

/**获得头图设置元素 */
function getTopImgSet(Label) {
    return Label.previousElementSibling.children[1];
}

/**获得emj所在元素 */
function getIcon(Label) {
    return Label.nextElementSibling;
}



/**----------------------------------选中文字计数----------------------------------*/

function getTXTSum() {
    setInterval(gettxt, 300);/**块级计数 */

    AddEvent(document.body, "mousedown", gettxtMouseDown);
    AddEvent(document.body, "mouseup", gettxtMouseUp);
}

/**鼠标选中的字数，显示在标题栏 */
var dragTxt = null;
var drag = null;
function gettxtMouseDown() {

    AddEvent(document.body, "mousemove", gettxtMouseMove)
}

var flag = false;
function gettxtMouseMove() {

    if (flag == false) {
        drag = document.getElementById("drag");
        dragTxt = drag.innerText;
        flag = true;
    }

    var txt = window.getSelection ? window.getSelection() : document.selection.createRange().text;
    var sun = iGettxtSun(txt);

    if (sun <= 0) {
        return;
    }

    drag.innerText = "划选字数：" + sun;
}

function gettxtMouseUp() {
    myRemoveEvent(document.body, "mousemove", gettxtMouseMove)

    flag = false;

    if (dragTxt != null) {
        drag.innerText = dragTxt;
        dragTxt = null;
    }
}


//获取鼠标选中的文字字数,显示在工具栏
function gettxt() {
    CreateAcountSelectElement();

    var txt = window.getSelection ? window.getSelection() : document.selection.createRange().text;
    var sun = iGettxtSun(txt);

    if (sun <= 0) {
        return;
    }

    var txtSuns = document.querySelectorAll(".protyle-toolbar>[data-type='txtSun']");

    for (let index = 0; index < txtSuns.length; index++) {
        const element = txtSuns[index];
        element.innerText = sun;
    }
}


/**为每个文档选择工具栏创建计数选择元素 */
function CreateAcountSelectElement() {
    /**获得所有打开文档为激活工具栏 */
    var protyleToolbars = document.querySelectorAll("div.protyle-toolbar.fn__none");

    /**没有标记就创建 */
    for (let index = 0; index < protyleToolbars.length; index++) {
        const element = protyleToolbars[index];

        if (element.getAttribute("count") == null) {
            element.setAttribute("count", true);
            CreateTxtSumElement(element);
        }
    }
}



/** 创建工具栏显示元素*/
function CreateTxtSumElement(inser) {

    var divIder = addinsertCreateElement(inser, "div");
    divIder.setAttribute("class", "protyle-toolbar__divider");

    var txtSunElement = addinsertCreateElement(inser, "div");
    txtSunElement.setAttribute("class", "protyle-toolbar__item b3-tooltips b3-tooltips__n");
    txtSunElement.setAttribute("data-type", "txtSun");
    txtSunElement.setAttribute("aria-label", "选中字数");
    txtSunElement.style.paddingRight = "10px";
    txtSunElement.style.lineHeight = "29px";
    txtSunElement.style.fontSize = "110%";
    txtSunElement.style.fontWeight = "bold";
}


/**去除空格换行 */
function iGettxtSun(text) {
    var resultStr = text.toString()
    if (resultStr.length == 0) {
        return 0;
    } else {
        resultStr = resultStr.replace(/[\'\"\\\/\b\f\n\r\t]/g, ''); //去掉空格
        var newStr = "";
        for (var i = 0; i < resultStr.length; i++) {
            if (resultStr[i] != "​") {
                newStr += resultStr[i];
            }
        };
        return newStr.length;
    }
}


/**----------------------------------为文档标题创建动态下划线---------------------------------- */

function rundynamicUnderline() {
    setInterval(dynamicUnderline, 500);
}

function dynamicUnderline() {
    var AllDocumentTitleElement = getAllDocumentTitleElement();

    for (let index = 0; index < AllDocumentTitleElement.length; index++) {
        const element = AllDocumentTitleElement[index];

        var line = createLine(element);
        var txt = getTileTxt(element);
        var maxWidth = element.offsetWidth;

        var Style = getComputedStyle(element, null);
        var font = Style.font;
        var width = getTextWidth(txt, font) + 58;

        if (width < 288) {
            width = 288;
        }

        if (width > maxWidth) {
            width = maxWidth;
        }

        line.style.width = width + "px";
    }
}


function createLine(TitleElement) {

    var item = TitleElement.parentElement.children;

    for (let index = 0; index < item.length; index++) {
        const element = item[index];

        if (element.getAttribute("Line") != null) {
            return element;
        }
    }

    var line = insertCreateAfter(TitleElement, "div");
    line.setAttribute("Line", "true");
    line.style.height = "1px";
    line.style.marginTop = "-2px";
    line.style.marginBottom = "7px";
    line.style.backgroundColor = "#F4ECD3";
    line.style.transition = "all 400ms linear";
    return line;
}


function getTileTxt(TitleElement) {
    return TitleElement.innerText;
}






/**----------------------------------为打开文档的标题下显示文档创建日期----------------------------------*/

function showDocumentCreationDate() {

    setInterval(DocumentCreationDate, 300);
}


function DocumentCreationDate() {

    var openDoc = document.querySelectorAll(".layout-tab-container>.fn__flex-1.protyle:not(.fn__none):not([CreatTimeOK])");
    var allDocumentTitleElement = [];
    for (let index = 0; index < openDoc.length; index++) {
        const element = openDoc[index];
        element.setAttribute("CreatTimeOK", true);
        allDocumentTitleElement.push(element.children[1].children[1].children[1]);
    }

    for (let index = 0; index < allDocumentTitleElement.length; index++) {
        const element = allDocumentTitleElement[index];
        var documentCreatTimeElement = creatTimeSpanElement(element.parentElement);
        documentCreatTimeElement.innerText = "获取文档创建日期中……";

        tilteWhlie(element, documentCreatTimeElement);
    }
}

function tilteWhlie(element, documentCreatTimeElement) {

    var setID = setInterval(() => {
        var time = getDocumentTime(element);
        if (time != "") {
            documentCreatTimeElement.innerText = time;
            clearInterval(setID);
        };
    }, 3000);
}


/**获取所有打开文档的标题元素 */
function getAllDocumentTitleElement() {
    var openDoc = document.querySelectorAll(".layout-tab-container>.fn__flex-1.protyle:not(.fn__none)");
    var arr = [];
    for (let index = 0; index < openDoc.length; index++) {
        const element = openDoc[index];
        arr.push(element.children[1].children[1].children[1]);
    }
    return arr;
}

/**为文档标题元素下创建时间容器元素 */
function creatTimeSpanElement(tilteElement) {

    var item = tilteElement.children;

    for (let index = 0; index < item.length; index++) {
        const element = item[index];

        if (element.getAttribute("documentCreatTimeElement") != null) {
            return element;
        }
    }

    var documentCreatTimeElement = addinsertCreateElement(tilteElement, "span");
    documentCreatTimeElement.setAttribute("documentCreatTimeElement", "true");
    documentCreatTimeElement.style.display = "block";

    documentCreatTimeElement.style.marginLeft = "7px";
    documentCreatTimeElement.style.marginBottom = "0px";

    documentCreatTimeElement.style.fontSize = "61%";
    documentCreatTimeElement.style.color = "#767676";

    return documentCreatTimeElement;
}


/**获得这个文档的创建时间 */
function getDocumentTime(tilteElement) {
    var tS = tilteElement.parentElement.previousElementSibling.getAttribute("data-node-id");

    if (tS == null) return "";

    var year = tS.substring(0, 4);
    var moon = tS.substring(4, 6);
    var day = tS.substring(6, 8);
    var hour = tS.substring(8, 10);
    var minute = tS.substring(10, 12);
    var second = tS.substring(12, 14);

    return year + "-" + moon + "-" + day + "  " + hour + ":" + minute + ":" + second;
}



/**----------------------------------自动展开悬浮窗折叠列表-----体验优化----------------------------------*/

function autoOpenList() {
    setInterval(autoOpenListEvent, 500);
}

function autoOpenListEvent() {
    //找到所有的悬浮窗
    var Preview = document.querySelectorAll("[data-oid]");

    //如果发现悬浮窗内首行是折叠列表就展开并打上标记
    if (Preview.length != 0) {
        for (let index = 0; index < Preview.length; index++) {
            const element = Preview[index];
            var item = element.children[1].children;

            for (let index = 0; index < item.length; index++) {
                var obj = item[index].children[1]
                if (obj == null) continue;
                const element = obj.children[0].children[0];
                if (element == null) continue;
                if (element.className != "li") continue;//判断是否是列表
                if (element.getAttribute("foldTag") != null) continue;//判断是否存在标记
                if (element.getAttribute("foid") == 0) continue;//判断是折叠

                element.setAttribute("fold", 0);
                element.setAttribute("foldTag", true);
            }


        }
    }

}



/**----------------------------------列表折叠内容预览查看---------------------------------- */
function collapsedListPreview() {
    setInterval(collapsedListPreviewEvent, 3000);
}


function collapsedListPreviewEvent() {
    var _turn = [...document.querySelectorAll(".layout-tab-container>.fn__flex-1.protyle:not(.fn__none) [data-node-id].li[fold='1']"),
    ...document.querySelectorAll("[data-oid] [data-node-id].li[fold='1']"),
    ...document.querySelectorAll("#searchPreview [data-node-id].li[fold='1']")];//查询页面所有的折叠列表
    var turn = [];
    for (let index = 0; index < _turn.length; index++) {//找到列表第一列表项（父项）
        const element = _turn[index].children[1];
        var item = element.className;
        if (item == "p" || item == "h1" || item == "h2" || item == "h3" || item == "h4" || item == "h5" || item == "h6") {
            turn.push(element.children[0])
        }
    }

    //检查注册事件的折叠列表是否恢复未折叠状态,是清除事件和去除标志属性
    var ListPreview = [...document.querySelectorAll(".layout-tab-container>.fn__flex-1.protyle:not(.fn__none) [ListPreview]"),
    ...document.querySelectorAll("[data-oid] [ListPreview]"),
    ...document.querySelectorAll("#searchPreview [ListPreview]")];
    for (let index = 0; index < ListPreview.length; index++) {
        const element = ListPreview[index];
        var fold = element.parentElement.getAttribute("fold")

        if (fold == null || fold == 0) {
            element.removeAttribute("ListPreview");
            var item = element.children[0];
            myRemoveEvent(item, "mouseenter", LIstIn);//解绑鼠标进入
            myRemoveEvent(item.parentElement.parentElement, "mouseleave", LIstout);//解绑鼠标离开

            items = Array.from(item.parentElement.parentElement.children);
            for (let index = 0; index < items.length; index++) {
                const element = items[index];
                if (element.getAttribute("triggerBlock") != null) {
                    element.remove();
                }
            }
        }
    }

    for (let index = 0; index < turn.length; index++) {//重新注册、筛选未注册鼠标事件折叠列表
        const element = turn[index];
        var elementPP = element.parentElement.parentElement;

        if (element.parentElement.getAttribute("ListPreview") != null) {
            myRemoveEvent(element, "mouseenter", LIstIn);//解绑鼠标进入
            myRemoveEvent(elementPP, "mouseleave", LIstout);//解绑鼠标离开

            AddEvent(element, "mouseenter", LIstIn);//注册鼠标进入
            AddEvent(elementPP, "mouseleave", LIstout);//注册鼠标离开
        } else {
            element.parentElement.setAttribute("ListPreview", true);
            AddEvent(element, "mouseenter", LIstIn);//注册鼠标进入
            AddEvent(elementPP, "mouseleave", LIstout);//注册鼠标离开
        }
    }
}

var flag22 = false;

function LIstout(e) {
    items = Array.from(e.target.children);
    flag22 = false;
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        if (element.getAttribute("triggerBlock") != null) {
            element.remove();
        }
    }
}

function LIstIns(e) {

    var id = setInterval(() => {

        if (!flag22) {
            clearInterval(id);
            return;
        }

        var obj = e.target;

        var timeDiv = addinsertCreateElement(obj, "div");
        timeDiv.style.display = "inline-block";
        timeDiv.style.width = "0px";
        timeDiv.style.height = "16px";

        var X = timeDiv.offsetLeft;
        var Y = timeDiv.offsetTop;
        timeDiv.remove();

        var item = obj.parentElement.parentElement;
        if (item == null) return;
        items = item.children
        var itemobj = items[items.length - 1];
        if (itemobj != null && itemobj.getAttribute("triggerBlock") != null) {

            var items1 = items[items.length - 1];
            items1.style.top = (Y + 35) + "px";
            items1.style.left = (obj.offsetLeft + 35) + "px";
            var items2 = items[items.length - 2];
            items2.style.top = (Y + 2) + "px";
            items2.style.left = (X + 45) + "px";
            return;
        }

    }, 500);
}

function LIstIn(e) {
    flag22 = true;

    var obj = e.target;
    var timeDiv = addinsertCreateElement(obj, "div");
    timeDiv.style.display = "inline-block";
    timeDiv.style.width = "0px";
    timeDiv.style.height = "16px";

    var X = timeDiv.offsetLeft;
    var Y = timeDiv.offsetTop;
    timeDiv.remove();

    var f = obj.parentElement.parentElement;
    if (!f) return;
    items = f.children;

    var itemobj = items[items.length - 1];
    if (itemobj != null && itemobj.getAttribute("triggerBlock") != null) return;

    var triggerBlock1 = CreatetriggerBlock(e)//创建触发块1
    //设置触发块样式，将触发块显示在〔 ··· 〕第二行位置
    triggerBlock1.style.top = (Y + 35) + "px";
    triggerBlock1.style.left = (obj.offsetLeft + 35) + "px";
    AddEvent(triggerBlock1, "mouseenter", () => {
        //一秒延时后搜索打开的悬浮窗，将悬浮窗中的列表展开,重复检查三次
        setTimeout(Suspended, 1000)
    });//注册鼠标进入

    var triggerBlock2 = CreatetriggerBlock(e)//创建触发块2
    //设置触发块样式，将触发块显示在〔 ··· 〕位置
    triggerBlock2.style.top = (Y + 2) + "px";
    triggerBlock2.style.left = (X + 45) + "px";

    AddEvent(triggerBlock2, "mouseenter", () => {
        //一秒延时后搜索打开的悬浮窗，将悬浮窗中的列表展开,重复检查三次
        setTimeout(Suspended, 1000)
    });//注册鼠标进入

    //一秒延时后搜索打开的悬浮窗，将悬浮窗中的列表展开,重复检查三次
    var previewID = obj.parentElement.parentElement.getAttribute("data-node-id");
    var jisu = 0;
    function Suspended() {
        jisu++;
        var y = false;
        if (jisu == 3) return
        var Sd = document.querySelectorAll("[data-oid]");
        if (Sd.length >= 1) { //如果找到那么就将悬浮窗中列表展开
            for (let index = 0; index < Sd.length; index++) {
                const element = Sd[index];
                var item = element.children[1].children[0].children[1].children[0].children[0];
                if (item == null) continue;
                if (item.getAttribute("data-node-id") == previewID) {
                    item.setAttribute("fold", 0);
                    y = true;
                }
            }
        }
        if (!y) { setTimeout(Suspended, 800) }
    }
    LIstIns(e);
}

function CreatetriggerBlock(e) {
    var objParent = e.target.parentElement;
    var triggerBlock = addinsertCreateElement(objParent.parentElement, "div");//创建触发块
    //设置触发块样式，将触发块显示在〔 ··· 〕位置
    triggerBlock.setAttribute("triggerBlock", true);
    triggerBlock.style.position = "absolute";
    triggerBlock.style.width = "40px";
    triggerBlock.style.height = "15px";
    //triggerBlock.style.background="red";
    triggerBlock.style.display = "flex";
    triggerBlock.style.zIndex = "999";
    triggerBlock.style.cursor = "pointer";
    triggerBlock.style.WebkitUserModify = "read-only";
    triggerBlock.setAttribute("contenteditable", "false");
    triggerBlock.innerHTML = "&#8203";

    //获取折叠列表ID,设置悬浮窗
    var previewID = objParent.parentElement.getAttribute("data-node-id");
    triggerBlock.setAttribute("class", "protyle-attr");
    triggerBlock.style.backgroundColor = "transparent";

    //在触发块内创建思源超链接 
    triggerBlock.innerHTML = "<span data-type='a' class='list-A' data-href=siyuan://blocks/" + previewID + ">####</span>";
    //将这个思源连接样式隐藏
    var a = triggerBlock.children[0];
    a.style.fontSize = "15px";
    a.style.lineHeight = "15px";
    a.style.color = "transparent";
    a.style.textShadow = "none";
    a.style.border = "none";

    return triggerBlock;
}




/**----------------鼠标中键标题、列表文本折叠/展开----------------*/
function collapseExpand_Head_List() {
    var flag45 = false;
    setInterval(() => {

        var NodeHeading = null;
        var NodeListItem = null;

        if (isPhone()) {
            NodeHeading = document.querySelectorAll('#editor [data-type="NodeHeading"]');
            NodeListItem = document.querySelectorAll('#editor [data-type="NodeListItem"].li');
        } else {
            NodeHeading = [...document.querySelectorAll('.layout-tab-container>.fn__flex-1.protyle:not(.fn__none) [data-type="NodeHeading"]'),
            ...document.querySelectorAll('[data-oid] [data-type="NodeHeading"]'),
            ...document.querySelectorAll('#searchPreview [data-type="NodeHeading"]')];


            NodeListItem = [...document.querySelectorAll('.layout-tab-container>.fn__flex-1.protyle:not(.fn__none) [data-type="NodeListItem"].li'),
            ...document.querySelectorAll('[data-oid] [data-type="NodeListItem"].li'),
            ...document.querySelectorAll('#searchPreview [data-type="NodeListItem"].li')];
        }

        var H = [];


        for (let index = 0; index < NodeHeading.length; index++) {
            const element = NodeHeading[index];
            var item = element.parentElement;
            if (item.className != "li") H.push(element);
        }
        for (let index = 0; index < H.length; index++) {
            const element = H[index].children[0];
            myRemoveEvent(element, "mousedown", _collapseExpand_NodeListItem);
            myRemoveEvent(element, "mousedown", _collapseExpand_NodeHeading);
            AddEvent(element, "mousedown", _collapseExpand_NodeHeading)
            AddEvent(element, "mouseup", () => { flag45 = false })
        }


        for (let index = 0; index < NodeListItem.length; index++) {
            const element = NodeListItem[index].children[1].children[0];
            myRemoveEvent(element, "mousedown", _collapseExpand_NodeHeading);
            myRemoveEvent(element, "mousedown", _collapseExpand_NodeListItem);
            AddEvent(element, "mousedown", _collapseExpand_NodeListItem)
            AddEvent(element, "mouseup", () => { flag45 = false })
        }
    }, 3000);



    function _collapseExpand_NodeHeading(e) {
        if (e.button == 2) { fflag45lag = true; return }
        if (flag45 || e.shiftKey || e.altKey || e.button != 1) return;
        e.preventDefault();
        protyle_gutters_click(e.target);
    }

    function _collapseExpand_NodeListItem(e) {
        if (e.button == 2) { flag45 = true; return }
        if (flag45 || e.shiftKey || e.altKey || e.button != 1) return;
        e.preventDefault();
        var element = e.target;
        var i = 0;
        while (element.getAttribute("contenteditable") == null) {
            if (i == 999) return;
            i++;
            element = element.parentElement;
        }
        var elementParentElement = element.parentElement;

        if (elementParentElement.getAttribute("data-type") == "NodeHeading" && elementParentElement.getAttribute("fold") == 1) {
            protyle_gutters_click(element);
        } else {
            commonMenu_click(elementParentElement.previousElementSibling);
        }

    }

    function commonMenu_click(element) {

        var elementParentElement = element.parentElement;
        var data_node_id = elementParentElement.getAttribute("data-node-id");
        var elementParentElementParentElement = elementParentElement.parentElement;

        if (elementParentElementParentElement.className == "protyle-wysiwyg protyle-wysiwyg--attr") {
            if (elementParentElementParentElement.children[0].getAttribute("data-node-id") == data_node_id) {
                return;
            }
        }

        element.click();
        var caidan = (document.getElementById("commonMenu")).children;
        for (let index = 0; index < caidan.length; index++) {
            const element = caidan[index];
            var item = element.children;
            if (item.length != 0 && item[1].innerText == "折叠/展开") element.click();
        }
    }

    function protyle_gutters_click(element) {
        var i = 0;
        while (element.className != "fn__flex-1 protyle" && element.className != "block__edit fn__flex-1 protyle" && element.className != "fn__flex-1 spread-search__preview protyle") {
            if (i == 999) return;
            i++;
            element = element.parentElement;
        }
        var ddddd = element.children;
        for (let index = ddddd.length - 1; index >= 0; index--) {
            const element = ddddd[index];
            if (element.className == "protyle-gutters") {
                var fold = diguiTooONE(element, (v) => { return v.getAttribute("data-type") === "fold"; })
                if (fold != null) fold.click();
                return;
            }
        }
    }
}







/**----------------同名虚拟引用显示内容窗口排序，将触发文档相关性最高的引用内容优先展示------D大暂时不搞-所以-自己动手顶顶----------*/
//https://github.com/siyuan-note/siyuan/issues/5476

function VirtualReferenceEnhancements() {
    setInterval(VirtualReference, 3000);
}

function VirtualReference() {
    //获得所有虚拟引用元素
    var virtual = [...document.querySelectorAll('.layout-tab-container>.fn__flex-1.protyle:not(.fn__none) span[data-type="virtual-block-ref"]:not([vb])'),
    ...document.querySelectorAll('[data-oid] span[data-type="virtual-block-ref"]:not([vb]'),
    ...document.querySelectorAll('#searchPreview span[data-type="virtual-block-ref"]:not([vb]')];

    //为每个虚拟引用注册鼠标进入事件,并添加事件标记
    for (let index = 0; index < virtual.length; index++) {
        const element = virtual[index];
        AddEvent(element, "mouseenter", VirtualReferenceEventMouseenter);
        element.setAttribute("vb", true);
        AddEvent(element, "mouseleave", VirtualReferenceEventMouseleave);
    }
}

function VirtualReferenceEventMouseenter(e) {
    //获取这个虚拟引用所在的笔记本名称
    var item = e.target.parentElement;
    e.target.setAttribute("mouseenter", true);

    for (let index = 0; index < 99; index++) {

        var ID = item.getAttribute("data-node-id");

        if (ID == null) {
            item = item.parentElement; continue;
        } else {
            根据ID获取人类可读路径(ID.toString(), VirtualReferenceAsync, e); break;
        }
    }
}
function VirtualReferenceEventMouseleave(e) {
    e.target.removeAttribute("mouseenter");
}


//将虚拟引用悬浮窗排序
function VirtualReferenceAsync(path, e) {

    //获取根部文档名
    var documentName = "";
    for (let index = 1; index < path.length; index++) {
        const element = path[index];
        if (element == "/") {
            documentName = path.substring(1, index);
            break;
        } else if (index == path.length - 1) {
            documentName = path.substring(1, index + 1);
            break;
        }
    }

    //以根部文档名到文档树查找笔记本名称
    var BookNodeName = document.querySelectorAll('[data-name="' + documentName + '.sy"')[0].parentElement.previousElementSibling.children[2].innerText
    monitoringFloatingWindows(e, BookNodeName, path, floatingWindowSorting);
}

//检测思源新出现悬浮窗
function monitoringFloatingWindows(e, BookNodeName, path, fun) {
    var AllWindows = Array.from(document.querySelectorAll("[data-oid]"));

    var time = 0;
    var setID = setInterval(() => {
        if (/*e.target.getAttribute("mouseenter") == null ||*/ time > 1500 || newWindows() == true) {
            clearInterval(setID);
        }
        time += 300;
    }, 300)

    function newWindows() {
        var _AllWindows = Array.from(document.querySelectorAll("[data-oid]"));
        //console.log("触发前的悬浮窗：",AllWindows,"延时检测查找的悬浮窗:",_AllWindows);

        if (_AllWindows.length == 0) return false;

        if (AllWindows.length == 0) {
            fun(_AllWindows[0], BookNodeName, path);
            //console.log("有新悬浮窗");
            return true;
        }

        if (_AllWindows.length != AllWindows.length) {
            //对比找出新增窗口
            var findout = getArrDifference(AllWindows, _AllWindows);
            //在100内有可能新出现1个以上的悬浮窗，但是应该没有那个人手速这么快吧
            fun(findout[0], BookNodeName, path);
            //console.log("有新悬浮窗");
            return true;
        }
        return false;
    }
}
//悬浮窗排序
function floatingWindowSorting(newWindows, BookNodeName, path) {
    //悬浮窗内找到有关笔记本名称的内容窗
    setTimeout(() => {
        //console.log(BookNodeName);
        var smallWindow = [];
        var smallWindowBreadtxt = [];

        var block__content = diguiTooONE(newWindows, 查找函数1);
        if (block__content == null) return;

        var block__icons_block__icons_border = diguiTooONE(newWindows, 查找函数3);
        if (block__icons_block__icons_border == null) return;
        var block__icons_block__icons_border_span = block__icons_block__icons_border.children[0]
        block__icons_block__icons_border_span.style.color = "black";
        block__icons_block__icons_border_span.style.textShadow = "2px 2px 4px rgba(82, 81, 16, 0.219)";


        var block__content_child = block__content.children;

        if (block__content_child.length == 1) return;

        for (let index = 0; index < block__content_child.length; index++) {

            const element = block__content_child[index];

            var protyle_breadcrumb__text = diguiTooONE(element, 查找函数2);
            if (protyle_breadcrumb__text == null) continue;

            var titleStr = protyle_breadcrumb__text.getAttribute("title");
            var Str = "";

            for (let index2 = 0; index2 < titleStr.length; index2++) {
                const element2 = titleStr[index2];
                if (element2 == "/") {
                    Str = titleStr.substring(0, index2);
                    break;
                }
            }

            if (Str == BookNodeName) {
                smallWindow.push(element);
                smallWindowBreadtxt.push(titleStr);
            }
        }

        if (smallWindow.length == 0) return;

        if (smallWindow.length > 1) {
            //本笔记的同名虚拟引用排序
            var smallWindowSort = [];
            var itemPath = path

            for (let index = 0; index < 99; index++) {

                if (index == 0) {
                    //考虑到完全匹配的情况
                    var re = new RegExp("^" + BookNodeName + itemPath + "$");
                    for (let index = 0; index < smallWindow.length; index++) {
                        const element = smallWindow[index];
                        const Bread = smallWindowBreadtxt[index];
                        if (re.test(Bread)) {
                            smallWindowSort.push(element);
                            smallWindow[index] = null;
                            break;
                        }
                    }
                }

                let item = itemPath.substring(0, itemPath.lastIndexOf('/'));

                if (item == "") {
                    for (let index = 0; index < smallWindow.length; index++) {
                        const element = smallWindow[index];
                        if (element == null) continue;
                        //const Bread = smallWindowBreadtxt[index];
                        smallWindowSort.push(element);
                        //console.log(Bread, element);
                    }
                    break;
                };

                itemPath = item;


                for (let index = 0; index < smallWindow.length; index++) {
                    const element = smallWindow[index];
                    if (element == null) continue;
                    const Bread = smallWindowBreadtxt[index];

                    if (Bread.includes(itemPath)) {
                        smallWindowSort.push(element);
                        smallWindow[index] = null;
                        //console.log(Bread, element);
                    }
                }
            }
            smallWindow = smallWindowSort;
        }

        var cdiv = insertCreateBefore(block__content.children[0], "div");

        for (let index = 0; index < smallWindow.length; index++) {

            const element = smallWindow[index];
            block__content.insertBefore(element, cdiv);
        }

        cdiv.remove();

        block__content_child = block__content.children;

        var height = parseFloat(getComputedStyle(block__content).height) / block__content_child.length;

        for (let index = 0; index < block__content_child.length; index++) {
            const element = block__content_child[index];
            element.setAttribute("data-index", index);
            element.style.minHeight = height + "px";
        }

        block__icons_block__icons_border_span.innerText = '存在同名虚拟引用，引用内容按相对最近路径排序处理';

    }, 700);

    function 查找函数3(v) {
        return v.className == "block__icons block__icons--border";
    }
    function 查找函数2(v) {
        return v.classList.contains("protyle-breadcrumb__text");
    }
    function 查找函数1(v) {
        return v.classList.contains("block__content");
    }
}


/**----------------------------------简单备注--------------------------------------*/
function simpleRemarks() {
    setInterval(_simpleRemarks, 1000);
}

function _simpleRemarks() {

    //兼容data-href处理
    var RemarksdataHref = document.querySelectorAll('span[data-href^="//"]');
    for (let index = 0; index < RemarksdataHref.length; index++) {
        const element = RemarksdataHref[index];
        if (element.getAttribute("simpleRemarks") != null) continue;

        element.setAttribute("data-title", element.getAttribute("data-href"));
        element.setAttribute("title", "已兼容处理！请优先在链接标题框中输入备注！主题几个版本后可能会移除支持");
    }


    var Remarks = document.querySelectorAll('span[data-title^="//"]');
    var simpleRemarks = document.querySelectorAll('span[simpleRemarks]');

    if (simpleRemarks.length != 0) {
        for (let index = 0; index < simpleRemarks.length; index++) {
            const element = simpleRemarks[index];
            var item = element.getAttribute("data-title");
            if (item != null && item[0] != "/" && item[1] != "/") {
                element.removeAttribute("simpleRemarks");
                myRemoveEvent(element, "mouseenter", simpleRemarksEvent);
            }
        }
    }

    for (let index = 0; index < Remarks.length; index++) {
        const element = Remarks[index];
        if (element.getAttribute("simpleRemarks") != null) {
            var item = element.getAttribute("data-href");
            if (item == null || item == "") {
                element.setAttribute("data-href", "null");
            }
            continue;
        };
        element.setAttribute("simpleRemarks", true);
        AddEvent(element, "mouseenter", simpleRemarksEvent);
    }
}

var tiltes = [];

function simpleRemarksEvent(e) {

    for (let index = 0; index < tiltes.length; index++) {
        const element = tiltes[index];
        if (element == null) continue;
        element.remove()
    }
    tiltes = [];

    var tooltip = document.getElementById("tooltip");
    if (tooltip != null) {
        tooltip.style.display = "none";
    };
    var element = e.target;

    var dataTitle = element.getAttribute("data-title");

    if (dataTitle == null) {
        if (tooltip != null) tooltip.style.display = "block";
        element.removeAttribute("simpleRemarks");
        myRemoveEvent(element, "mouseenter", simpleRemarksEvent);
        return;
    }

    if (dataTitle[0] != "/" || dataTitle[1] != "/") {
        if (tooltip != null) tooltip.style.display = "block";
        element.removeAttribute("simpleRemarks");
        myRemoveEvent(element, "mouseenter", simpleRemarksEvent);
        return;
    }

    var tilte = addinsertCreateElement(document.body, "div");
    tiltes.push(tilte);
    tilte.style.cssText = `border-radius: 4px;
                        position:fixed;
                        padding-top: 0px;
                        min-width:380px;
                        max-width:680px;
                        word-break: break-all;
                        color:rgb(109,108,108);
                        background:rgb(255,250,233);
                        font-weight:lighter;
                        font-size:140%;
                        box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
                        left:${e.clientX + 40}px;
                        top:${e.clientY}px;
                        z-index:999`;
    AddEvent(tilte, "mouseout", () => { tilte.remove(); })

    txtStr = dataTitle.slice(2, dataTitle.length);
    for (let index = 0; index < 20; index++) {
        if ("}" == txtStr[index]) {
            txtStr = txtStr.slice(index + 1, dataTitle.length)
        }
    }



    if (txtStr.length == 0 || txtStr == "") {
        txtStr = "空备注"
    }

    dataTitle = "<div style='font-size:60%;text-align:center; background:rgb(101,168,99); color:rgb(255,255,255); border-top-left-radius:4px; border-top-right-radius:4px;'><span>简单备注</span></div><div style='padding-top:6px;padding-left: 10px; padding-right:8px;padding-bottom: 6px;'>" + txtStr + "</div>";
    tilte.innerHTML = dataTitle;
    if (element.getAttribute("title") != null) {
        setTimeout(() => {
            element.removeAttribute("title");
        }, 2000);
    }
    AddEvent(element, "mouseleave", () => {
        tilte.remove();
    });
}


/**----------------------------------查找匹配列表条目前的图标可以鼠标悬停打开悬浮窗--------------------------------------*/

function findMatchingListEntries() {
    setInterval(_findMatchingListEntries, 3000);
}

function _findMatchingListEntries() {

    var searchList = document.getElementById("searchList");
    var globalSearchList = document.getElementById("globalSearchList");

    if (searchList != null) {
        var searchLists = searchList.children;
        for (let index = 0; index < searchLists.length; index++) {
            const element = searchLists[index];
            //var b3_list_item__text=element.children[1];
            //if(element.getAttribute("title")!=null)break;
            //element.setAttribute("title",b3_list_item__text.innerText);

            var itemlianjie = element.children[0];
            if (itemlianjie == null || itemlianjie.getAttribute("data-defids") != null) break;
            itemlianjie.setAttribute("data-defids", '[""]');
            itemlianjie.setAttribute("class", "b3-list-item__graphic popover__block");
            itemlianjie.setAttribute("data-id", element.getAttribute("data-node-id"));
        }
    };

    if (globalSearchList != null) {
        var globalSearchLists = globalSearchList.children;
        for (let index = 0; index < globalSearchLists.length; index++) {
            const element = globalSearchLists[index];
            //var b3_list_item__text=element.children[1];
            //if(element.getAttribute("title")!=null)break;
            //element.setAttribute("title",b3_list_item__text.innerText);
            var itemlianjie = element.children[0];
            if (itemlianjie.getAttribute("data-defids") != null) break;
            itemlianjie.setAttribute("data-defids", '[""]');
            itemlianjie.setAttribute("class", "b3-list-item__graphic popover__block");
            itemlianjie.setAttribute("data-id", element.getAttribute("data-node-id"));
        }
    };
}

/**----------------------------------开启实验特性：段落首行缩进的情况下，双击段落尾部去除缩进-------------------------------- */
function removeDefaultIndent() {

    AddEvent(document.body, "dblclick", (e) => {

        var toolbarEdit = document.querySelector("svg#toolbarEdit.toolbar__icon");
        if(toolbarEdit!=null){
            var iconEdit = toolbarEdit.children[0];
            var xlink_href = iconEdit.getAttribute("xlink:href");
            if (xlink_href == "#iconEdit") {
                return;
            }
        }
        

        if (getComputedStyle(document.getElementsByTagName("head")[0]).backgroundColor != "rgba(0, 0, 0, 0)") return;
        var element = e.target;
        if ((window.getSelection ? window.getSelection() : document.selection.createRange().text).toString().length != 0) return;

        e.preventDefault();
        if (element.getAttribute("contenteditable") == null) return;

        var item = element.parentElement;
        if (item != null && item.className != "p") return;
        item = element.parentElement.previousElementSibling;
        if (item != null && item.getAttribute("draggable") != null) return;

        var element = element.parentElement;
        var data_node_id = element.getAttribute("data-node-id");

        var custom_indent = element.getAttribute("custom-indent");
        if (custom_indent == null || custom_indent == "true") {
            element.setAttribute("custom-indent", false);
            设置思源块属性(data_node_id, { "custom-indent": "false" });

        } else {
            element.setAttribute("custom-indent", true);
            设置思源块属性(data_node_id, { "custom-indent": "true" });

        }
    });
}


/**----------------------------------点击过的思源超链接超链接会变色----------------------------------*/

function hyperlinkClickColorChange() {
    setInterval(() => {
        var a = [...document.querySelectorAll('.layout-tab-container>.fn__flex-1.protyle:not(.fn__none) span[data-type="a"]:not([color-a])'),
        ...document.querySelectorAll('[data-oid] span[data-type="a"]:not([color-a]'),
        ...document.querySelectorAll('#searchPreview span[data-type="a"]:not([color-a]')];

        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            AddEvent(element, "click", () => {
                var datatype = element.getAttribute("data-type");
                if (datatype == null || datatype != "a") return;
                var datatitle = element.getAttribute("data-title");
                var datahref = element.getAttribute("data-href");
                if (datatitle != null && datatitle.length >= 2 && datatitle[0] == "/" && datatitle[1] == "/") return;
                if (datahref != null && datahref.length >= 2 && datahref[0] == "/" && datahref[1] == "/") return;
                element.style.color = "rgb(119,28,170)";
                AddEvent(element, "mouseover", () => { element.style.borderBottom = "1px solid rgb(119,28,170)"; });
                AddEvent(element, "mouseout", () => { element.style.borderBottom = "none"; });
            })
            element.setAttribute("color-a", true);
        }
    }, 3000)
}



/*********************************************************Dark+新开窗口代码抽取HBuilderX-Light移植魔改便携搬运版*****START*********************************/
//感谢Dark作者，其他主题作者搬运需附加详情原出处来自Dark+。
//鼠标右键+中键打开移动端新窗口，alt+鼠标中键打来PC端窗口
function newOpenWindow() {

    let _menuParams = [
        {
            label: 'SiYuan',
            submenu: [
                {
                    label: 'About SiYuan',
                    role: 'about',
                },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                {
                    label: 'Hide SiYuan',
                    role: 'hide',
                },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                {
                    label: 'Quit SiYuan',
                    role: 'quit',
                },
            ],
        },
        {
            role: 'editMenu',
            submenu: [
                { role: 'selectAll' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'pasteAndMatchStyle', accelerator: 'CmdOrCtrl+Shift+V' },
                { type: 'separator' },
                { role: 'toggleSpellChecker' },
            ],
        },
        {
            role: 'viewMenu',
            submenu: [
                { role: 'resetZoom' },
                { role: 'zoomIn', accelerator: 'CmdOrCtrl+=' },
                { role: 'zoomOut' },
            ],
        },
        {
            role: 'windowMenu',
            submenu: [
                { role: 'minimize' },
                { role: 'zoom' },
                { role: 'togglefullscreen' },
                { type: 'separator' },
                { role: 'toggledevtools' },
                { type: 'separator' },
                { role: 'front' },
                { type: 'separator' },
                { role: 'reload', accelerator: 'F5' },
                { role: 'forcereload', accelerator: 'CmdOrCtrl+F5' },
                { role: 'close' },
                { type: 'separator' },
                {
                    label: 'Pinned',
                    click: (menuItem, browserWindow, event) => {
                        if (browserWindow) browserWindow.setAlwaysOnTop(!browserWindow.isAlwaysOnTop());
                    },
                    type: 'checkbox',
                    checked: true,
                    accelerator: 'Alt+Shift+P',
                },
            ],
        },
    ];

    let _windowParams = {
        width: 1360, // 窗口宽度
        height: 768, // 窗口宽度
        maximizable: true,
        minimizable: true,
        resizable: true,
        frame: true, // 是否显示边缘框
        fullscreen: false, // 是否全屏显示
        alwaysOnTop: false, // 是否置顶显示
        autoHideMenuBar: true, // 是否隐藏菜单栏(使用 Alt 显示)
        webPreferences: {
            nodeIntegration: true, // 是否启用 Node.js 内置模块
            nativeWindowOpen: true,
            webSecurity: false, // 是否启用 Web 安全
        }
    }

    let _id = /^\d{14}\-[0-9a-z]{7}$/;
    let _url = /^siyuan:\/\/blocks\/(\d{14}\-[0-9a-z]{7})\/*(?:(?:\?)(\w+=\w+)(?:(?:\&)(\w+=\w+))*)?$/;

   
    function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]'
    }
    function isArray(arr) {
        return Array.isArray(arr)
    }
    function merge(target, ...arg) {
        return arg.reduce((acc, cur) => {
            return Object.keys(cur).reduce((subAcc, key) => {
                const srcVal = cur[key]
                if (isObject(srcVal)) {
                    subAcc[key] = merge(subAcc[key] ? subAcc[key] : {}, srcVal)
                } else if (isArray(srcVal)) {
                    // series: []，下层数组直接赋值
                    subAcc[key] = srcVal.map((item, idx) => {
                        if (isObject(item)) {
                            const curAccVal = subAcc[key] ? subAcc[key] : []
                            return merge(curAccVal[idx] ? curAccVal[idx] : {}, item)
                        } else {
                            return item
                        }
                    })
                } else {
                    subAcc[key] = srcVal
                }
                return subAcc
            }, acc)
        }, target)
    }
    /**
     * 获得焦点所在的块 ID, 否则获得焦点所在文档的 ID
     * @return {string} 块 ID 或文档 ID
     * @return {null} 光标不在块内或文档内
     */
    function getFocusedID() {
        return getFocusedBlockID() || getFocusedDocID() || null;
    }
    /**
     * 获得焦点所在块 ID
     * @return {string} 块 ID
     * @return {null} 光标不在块内
     */
    function getFocusedBlockID() {
        let block = getFocusedBlock();
        if (block) {
            return block.dataset.nodeId;
        }
        else return null;
    }
    /**
     * 获得焦点所在的块
     * @return {HTMLElement} 光标所在块
     * @return {null} 光标不在块内
     */
    function getFocusedBlock() {
        let block = window.getSelection()
            && window.getSelection().focusNode
            && window.getSelection().focusNode.parentElement; // 当前光标
        while (block != null && block.dataset.nodeId == null) block = block.parentElement;
        return block;
    }
    /**
     * 获得焦点所在文档的 ID
     * @return {string} 文档 ID
     * @return {null} 没有聚焦的文档
     */
    function getFocusedDocID() {
        let background = getFocusedDocBackground();
        if (background) {
            return background.dataset.nodeId;
        }
        else return null;
    }
    /**
     * 获得焦点所在文档的背景
     * @return {HTMLElement} 焦点所在文档的背景
     * @return {null} 没有聚焦的文档
     */
    function getFocusedDocBackground() {
        return document.querySelector('div.layout__wnd--active div.protyle:not(.fn__none) > div.protyle-content > div.protyle-background')
            || document.querySelector('#editor > div.protyle-content > div.protyle-background')
            || null;
    }
    /**
     * 获得目标的块 ID
     * @params {HTMLElement} target: 目标
     * @return {string} 块 ID
     * @return {null} 没有找到块 ID
     */
    function getTargetBlockID(target) {
        let element = target;
        while (element != null
            && !(element.localName === 'a' && element.href
                || element.dataset.href
                || _id.test(element.dataset.nodeId)
                || _id.test(element.dataset.oid)
                || _id.test(element.dataset.id)
                || _id.test(element.dataset.rootId)
            )) element = element.parentElement;

        if (element != null) {
            if (_id.test(element.dataset.nodeId)) return element.dataset.nodeId;
            if (_id.test(element.dataset.oid)) return element.dataset.oid;
            if (_id.test(element.dataset.id)) return element.dataset.id;
            if (_id.test(element.dataset.oid)) return element.dataset.rootId;
            if (_url.test(element.dataset.href)) return url2id(element.dataset.href);
            if (_url.test(element.href)) return url2id(element.href);
            return element.href || element.dataset.href || null;
        }
        else return null;
    }
    function url2id(url) {
        let results = _url.exec(url);
        if (results && results.length >= 2) {
            return results[1];
        }
        return null;
    }



    /**
     * 切换编辑模式
     * @param {number} mode 0: 只读模式, 1: 编辑模式
     */
    function changeEditMode(mode = 0) { // 切换编辑模式

        let toolbarEdit = document.getElementById('toolbarEdit');
        if (toolbarEdit) {
            let editable = toolbarEdit.firstElementChild.getAttribute('xlink:href') === '#iconPreview';

            let event = new MouseEvent('click');
            switch (mode) {
                case 0:
                    if (editable) toolbarEdit.dispatchEvent(event);
                    else return;
                case 1:
                    if (!editable) toolbarEdit.dispatchEvent(event);
                    else return;
                default:
                    throw new Error(`/script/utils/misc.js changeEditMode(${mode})`);
            }
        }
    }
    /**
     * 跳转到指定块并可选聚焦
     */
    function windowjump(id, callback = null) {
        const editor = document.querySelector('div.protyle-wysiwyg div[data-node-id] div[contenteditable][spellcheck]');
        if (editor) {
            let ref = document.createElement("span");
            ref.setAttribute("data-type", "block-ref");
            ref.setAttribute("data-subtype", "s");
            ref.setAttribute("data-id", id);
            editor.appendChild(ref);
            ref.click();
            ref.remove();

            var isapp=false;
            var toolbar = document.getElementById("toolbar");
            if(toolbar==null){
                isapp=true;
                toolbar=document.querySelector(".toolbar.toolbar--border");
            }
            var windowControls=null;

            if (toolbar != null) {
                document.body.style.border="2px solid red";
                if(isapp){
                    var item = document.createElement("div");
                    item.innerHTML = `<svg id="minWindow" class="toolbar__icon"><use xlink:href="#iconMin">
                    </use></svg><svg id="maxWindow" class="toolbar__icon" style="display: flex;"><use xlink:href="#iconMax"></use></svg>
                    <svg id="restoreWindow" class="toolbar__icon" style="display: none;"><use xlink:href="#iconRestore"></use></svg>
                    <svg id="closeWindow" class="toolbar__icon"><use xlink:href="#iconClose"></use></svg>`;

                    var items=Array.from(item.children);
                    
                    for (let index = 0; index < items.length; index++) {
                        toolbar.appendChild(items[index]);
                    }
                    windowControls=toolbar;


                    var drag=addinsertCreateElement(document.querySelector(".toolbar.toolbar--border"),"div");
                        drag.style.position="fixed";
                        drag.style.height="auto";
                        drag.style.width="100px";
                        drag.style.left="45%";
                        drag.style.border="1px dashed rgba(255, 0, 0, 0.249)";
                        drag.style.WebkitAppRegion="drag";
                        drag.innerHTML="&#8203";
                    
                        item.remove();
                }
                else{

                    windowControls=addinsertCreateElement(toolbar,"div");
                    windowControls.innerHTML = `
                    <div class="fn__flex" style="top: -1px;z-index: 502;right: -1px;position: relative;" id="windowControls"><div class="toolbar__item toolbar__item--win b3-tooltips b3-tooltips__sw" aria-label="最小化" id="minWindow">
                    <svg>
                    <use xlink:href="#iconMin"></use>
                    </svg>
                    </div>
                    <div aria-label="最大化" class="b3-tooltips b3-tooltips__sw toolbar__item toolbar__item--win" id="maxWindow" style="display: flex;">
                    <svg style="height: 11px">
                    <use xlink:href="#iconMax"></use>
                    </svg>
                </div>
                <div aria-label="向下还原" class="b3-tooltips b3-tooltips__sw toolbar__item toolbar__item--win" id="restoreWindow" style="display: none;">
                <svg>
                <use xlink:href="#iconRestore"></use>
                </svg>
                </div>
                <div aria-label="关闭" class="b3-tooltips b3-tooltips__sw toolbar__item toolbar__item--close" id="closeWindow">
                    <svg>
                    <use xlink:href="#iconClose"></use>
                    </svg>
                    </div></div>`;
                }
                    
                diguiTooONE(windowControls, (v) => {
                        if (v.id == "closeWindow") {
                            AddEvent(v, "click", () => { console.log("关闭窗口"); })
                            return true;
                        }
                    return false;
                })

                diguiTooONE(windowControls, (v) => {
                    if (v.id == "minWindow") {
                        AddEvent(v, "click", () => { console.log("最小化窗口"); })
                        return true;
                    }
                    return false;
                })
                diguiTooONE(windowControls, (v) => {
                    if (v.id == "restoreWindow") {
                        AddEvent(v, "click", () => { 
                            console.log("向下还原"); 
                            v.style.display="none";
                            v.previousElementSibling.style.display="flex";
                        })
                        return true;
                    }
                    return false;
                })
                diguiTooONE(windowControls, (v) => {
                    if (v.id == "maxWindow") {
                        AddEvent(v, "click", () => { 
                            console.log("最大化窗口"); 
                            v.style.display="none";
                            v.nextElementSibling.style.display="flex";
                        })
                        return true;
                    }
                    return false;
                })
            }


            var reg = new RegExp('<[^>]+>', 'gi');  //过滤所有的html标签，不包括内容
          
            /**更改子窗口标题 */
            setTimeout(()=>{
                var title = document.querySelector("title");
                if (id == null) {
                    title.innerText = "[#] 思源子窗口 - HBuilderX-Light [#]";
                    return;
                };
                titleTxt(id);

                AddEvent(document.body, "click", (e) => {
                    var title = document.querySelector("title");
                    var TargetBlockID = getTargetBlockID(e.target);
                    if (TargetBlockID == null) {
                        title.innerText = "[#] 思源子窗口 - HBuilderX-Light [#]";
                        return;
                    };
                    titleTxt(TargetBlockID);
                })

                function titleTxt(TargetBlockID){
                
                    以id获取文档聚焦内容(TargetBlockID, (v) => {
                        var htmltxt = v.content;
    
                        var element = document.createElement("div");
                        element.innerHTML=htmltxt;
    
                        htmltxt= diguiTooONE(element,(v)=>{
                            return v.getAttribute("contenteditable")=="true";
                        })
                        
                        var txt = (htmltxt.innerText).replace(reg, '');
                        if (txt == "​"||txt=="") {
                            txt = "[#] 思源子窗口 - HBuilderX-Light [#]";
                            根据ID获取人类可读路径(TargetBlockID,(v)=>{
                                title.innerText ="[#] "+v.substring(1, v.length)+" [#]";
                            })
                            return;
                        }
                        if(txt.length>25){
                            title.innerText ="[#] "+txt.substring(0,25)+"...";
                        }else{
                            title.innerText ="[#] "+txt+" [#]";
                        }
                        
                        element.remove();
                       
                    });
                }
            },2000)

            if (typeof callback === 'function') setTimeout(callback, 250);
        }
        else setTimeout(() => windowjump(id, callback), 250);
    }
    /**
     * 跳转到指定块并聚焦
     * 问题: 文档名不改变
     */
    function focalize(id, callback = null) {
        // console.log('focalize:', id);
        const breadcrumbs = document.querySelector('.protyle-breadcrumb>.protyle-breadcrumb__bar');
        if (breadcrumbs) {
            let crumb = document.createElement("span");
            crumb.className = 'protyle-breadcrumb__item';
            crumb.setAttribute("data-node-id", id);
            breadcrumbs.appendChild(crumb);
            crumb.click();
            // crumb.dispatchEvent(CTRL_CLICK_EVENT);
            crumb.remove();
            if (typeof callback === 'function') setTimeout(callback, 250);
        }
        else setTimeout(() => focalize(id, callback), 250);
    }
    async function windowGoto(id, focus = 0, editable = 0) {
        // 是否聚焦
        if (parseInt(focus) === 1 || focus === 'true') focalize(id);
        else {
            windowjump(id);
        }

        // 是否可编辑
        if (parseInt(editable) === 1 || editable === 'true') setTimeout(() => changeEditMode(1), 0);
        else setTimeout(() => changeEditMode(0), 0);
    }
    async function _jump(...args) {
        try {
            await windowGoto(...args);
        } catch (e) {
            if (e.message === args[0]) {
                setTimeout(() => _jump(...args), 250);
            }
            else throw e;
        }
    }
    function windowJumpToID() {
        let url = new URL(window.location.href);
        let id = url.searchParams.get('id');
        let focus = url.searchParams.get('focus');
        let editable = url.searchParams.get('editable');
        if (_id.test(id)) {
            setTimeout(() => _jump(id, focus, editable), 0);
        }
    }
    setTimeout(() => {
        try {
            if (true) {
                setTimeout(windowJumpToID, 0);
            }
        } catch (err) {
            console.error(err);
        }
    }, 0);


    window.theme = {};
    /**
     * 新窗口打开
     * @mode (string): 打开窗口模式('app', 'desktop', 'mobile')
     * @url (string): URL
     * @urlParams (object): URL 参数
     * @windowParams (object): 窗体参数
     * @menuTemplate (object): 窗口菜单栏模板
     * @pathname (string): URL 路径名
     * @hash (string): URL hash
     * @consoleMessageCallback (function): 子窗口控制台输出回调
     * @closeCallback (function): 关闭窗口时的回调函数
     * @windowEventHandlers (array): 一组窗口的事件处理器
     * @contentsEventHandlers (array): 一组内容的事件处理器
     * @return (BrowserWindow): 窗口对象
     */
    window.theme.openNewWindow = function (
        mode = 'mobile',
        url = window.location.href,
        urlParams = {},
        windowParams = {
            width: 720,
            height: 480,
            maximizable: true,
            minimizable: true,
            resizable: true,
            frame: true, // 是否显示边缘框
            fullscreen: false, // 是否全屏显示
        },
        menuTemplate = null,
        pathname = null,
        hash = null,
        consoleMessageCallback = null,
        closeCallback = null,
        windowEventHandlers = [],
        contentsEventHandlers = [],
        
    ) {
        try {

            // 优化思源内部 URL
            url = window.theme.urlFormat(url);

            // 设置窗口模式
            if (mode) {
                switch (mode.toLowerCase()) {
                    case 'app':
                        return;
                    case 'desktop':
                    case 'mobile':
                        url.pathname = `/stage/build/${mode.toLowerCase()}/`;
                        break;
                    case 'editor':
                        break;
                    default:
                        break;
                }
            }
            if (pathname) url.pathname = pathname;
            if (hash) url.hash = hash;
            // 设置 URL 参数
            for (const param in urlParams) {
                url.searchParams.set(param, urlParams[param]);
            }
            // 打开新窗口
            try {
                const {
                    BrowserWindow,
                    Menu,
                } = require('@electron/remote');
                // 新建窗口(Electron 环境)
                var newWin = new BrowserWindow(windowParams);
                const menu = Menu.buildFromTemplate(menuTemplate);
                console.log(url.href);

                newWin.setMenu(menu);
                newWin.loadURL(url.href);

                // REF [Event: 'console-message'​](https://www.electronjs.org/docs/latest/api/web-contents#event-console-message)
                newWin.webContents.on("console-message", (event, level, message, line, sourceId) => {
                    if (level === 0) {
                        switch (message) { // 通用的命令
                            case 'WINDOW-SWITCH-PIN': // 切换窗口置顶状态
                            // REF [win.setAlwaysOnTop(flag[, level][, relativeLevel])​](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetalwaysontopflag-level-relativelevel)
                            newWin.setAlwaysOnTop(!newWin.isAlwaysOnTop());
                                break;
                                default:
                                    break;
                                } 
                    }
                    console.log(message);
                    switch (message) {
                        case "最小化窗口":newWin.minimize();
                            break;
                        case "向下还原":newWin.unmaximize();
                            break;
                        case "最大化窗口":newWin.maximize();
                            break;
                        case "关闭窗口":newWin.close();
                            break;
                        default:
                            break;
                    }
                    consoleMessageCallback && setTimeout(async () => consoleMessageCallback(newWin, event, level, message, line, sourceId));
                });

                if (mode) {
                    switch (mode.toLowerCase()) {
                        case 'editor':
                        case 'desktop':
                            newWin.removeMenu(); // 移除窗口的菜单栏
                            break;
                        case 'app':
                        case 'mobile':
                        default:
                            break;
                    }
                }
                for (const handler of windowEventHandlers) {
                    newWin.on(handler.event, (...args) => handler.callback(newWin, ...args));
                }
                for (const handler of contentsEventHandlers) {
                    newWin.webContents.on(handler.event, (...args) => handler.callback(newWin, ...args));
                }
                newWin.on('closed', () => {
                    closeCallback && setTimeout(async () => closeCallback(newWin), 0);
                    newWin = null;
                })
                return newWin;
            }
            catch (err) {
                console.warn(err);
                // 新建标签页(Web 环境)
                // window.open(url.href, "_blank");
                // REF [Window.open() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)
                // REF [Window open() 方法 | 菜鸟教程](https://www.runoob.com/jsref/met-win-open.html)
                newWin = window.open(
                    url.href,
                    url.href,
                    `
                    popup = true,
                    width = ${windowParams.width},
                    height = ${windowParams.height},
                `,
                );
                return newWin;
            }
        }
        catch (err) {
            console.error(err);
            return null;
        }
    }
    /**
     * URL 格式化
     * @params {string} url: 要格式化的 URL
     * @reutrn {URL}: URL 对象
     */
    window.theme.urlFormat = function (url, ssl = true) {
        switch (true) { // 格式化 URL
            case url.startsWith('assets/'):
            case url.startsWith('widgets/'):
            case url.startsWith('emojies/'):
            case url.startsWith('appearance/'):
            case url.startsWith('export/'):
                return new URL(`${window.location.origin}/${url}`);
            case url.startsWith('//'):
                return new URL(`${ssl ? 'https' : 'http'}:${url}`);
            case url.startsWith('/'):
                return new URL(`${window.location.origin}${url}`);
            case url.startsWith('http://'):
            case url.startsWith('https://'):
                return new URL(url);
            default:
                return new URL(`${ssl ? 'https' : 'http'}://${url}`);
        }
    }
    window.theme.languageMode = (() => window.siyuan.config.lang)();

    function outfocusOpenAPP(id = getFocusedID(), urlParams = {}) {
        if (id) {

            urlParams.id = id;
            urlParams.focus = 0;
            urlParams.editable = 0;

            _windowParams.width = 1360;
            _windowParams.height = 768;
            _windowParams.frame=false;

            window.theme.openNewWindow(
                undefined,
                undefined,
                urlParams,
                _windowParams,
                _menuParams,
            );
        }
    }
    function outfocusOpenWinPC(id = getFocusedID(), urlParams = {}) {
        // 打开新窗口
        if (id) {
            urlParams.id = id;
            urlParams.focus = 0;
            urlParams.editable = 0;

            const windowParams = merge({}, _windowParams, { alwaysOnTop: false })// 关闭置顶
            windowParams.width = 1536;
            windowParams.height = 840;
            windowParams.frame=false;

            window.theme.openNewWindow(
                "desktop",
                undefined,
                urlParams,
                windowParams,
                _menuParams,
            );
        }
    }
    function openbrowser(target) {
        _windowParams.frame=true;
        window.theme.openNewWindow(
            'browser',
            target,
            undefined,
            _windowParams,
            _menuParams,
        );
    }
    async function middleClick(element, OpenWinFun) {
        let target = getTargetBlockID(element);
        // 目标非空, 是 ID 或者链接
        if (target == "null") return;//兼容简单备注
        if (target) {
            if (_id.test(target)) {
                await OpenWinFun(target);
            } else {
                // 是链接
                openbrowser(target);
            }
        }
    }


    var flag = false;
    var flag2 = false;
    AddEvent(document.body, "mousedown", (e) => {

        if (!flag && e.button == 2) {
            flag = true; return;
        }
        if (flag && e.button == 1) {
            e.preventDefault()
            flag2 = true;
            middleClick(e.target, outfocusOpenAPP); return;
        }
        if (e.altKey && e.button == 1) {
            e.preventDefault()
            flag2 = true;
            middleClick(e.target, outfocusOpenWinPC); return;
        }
    });
    AddEvent(document.body, "mouseup", (e) => {
        flag = false;
        if (flag2) {
            setTimeout(() => {
                var commonMenu = document.getElementById("commonMenu");
                commonMenu.setAttribute("class", "b3-menu fn__none");
                flag2 = false;
            }, 0)
        }

    })
}
/*********************************************************Dark+新开窗口代码抽取HBuilderX-Light移植魔改便携搬运版*****END*********************************/


/**----------------------------------移动端双击解除只读模式---------------------------------- */
function dblclickToReleaseReadOnly() {

    AddEvent(document.body, "dblclick", (e) => {
        if (e.button != 0) return;
        var toolbarEdit = document.querySelector("svg#toolbarEdit.toolbar__icon");
        var iconEdit = toolbarEdit.children[0];
        var xlink_href = iconEdit.getAttribute("xlink:href");
        if (xlink_href == "#iconEdit") {
            toolbarEdit.dispatchEvent(new MouseEvent('click'));
            e.preventDefault();
        }
    })

}





/**----------------------------------父子文档显示----------------计划中----------------------*/
/**----------------------------------敏感词匹配高亮----------------计划中----------------------*/












/*****************************评论功能 From langzhou**********************************/
function inject() {
    //获取当前主题名称
    let themeStyle = document.querySelector('#themeStyle')
    if (themeStyle) {
        let url = themeStyle.getAttribute('href').split('/')
        let theme = url[url.length - 2]
        if (!theme) {
            alert("未能获取到主题名称")
        } else {
            let script = document.querySelector('#emojiScript')
            if (script) {
                let js = document.createElement('script')
                js.setAttribute('src', './appearance/themes/' + theme + '/comment/index.js')
                js.setAttribute('type', 'module')
                js.setAttribute('defer', 'defer')
                document.head.insertBefore(js, script)
            } else {
                setTimeout(() => inject(), 500)
            }
        }
    } else {
        setTimeout(() => inject(), 500)
    }
}
inject()




/****各种列表转xx的UI****/
function ViewSelect(selectid, selecttype) {
    let button = document.createElement("button")
    button.id = "viewselect"
    button.className = "b3-menu__item"
    button.innerHTML = '<svg class="b3-menu__icon" style="null"><use xlink:href="#iconGlobalGraph"></use></svg><span class="b3-menu__label" style="">视图选择</span><svg class="b3-menu__icon b3-menu__icon--arrow" style="null"><use xlink:href="#iconRight"></use></svg></button>'
    button.appendChild(SubMenu(selectid, selecttype))
    return button
}

function SubMenu(selectid, selecttype, className = 'b3-menu__submenu') {
    let node = document.createElement('div');
    node.className = className;
    if (selecttype == "NodeList") {
        node.appendChild(GraphView(selectid))
        node.appendChild(TableView(selectid))
        node.appendChild(kanbanView(selectid))
        node.appendChild(DefaultView(selectid))
    }
    if (selecttype == "NodeTable") {
        node.appendChild(FixWidth(selectid))
        node.appendChild(AutoWidth(selectid))
        node.appendChild(Removeth(selectid))
        node.appendChild(Defaultth(selectid))
    }
    return node;
}

function GraphView(selectid) {
    let button = document.createElement("button")
    button.className = "b3-menu__item"
    button.setAttribute("data-node-id", selectid)
    button.setAttribute("custom-attr-name", "f")
    button.setAttribute("custom-attr-value", "dt")

    button.innerHTML = `<svg class="b3-menu__icon" style=""><use xlink:href="#iconFiles"></use></svg><span class="b3-menu__label">转换为导图</span>`
    button.onclick = ViewMonitor
    return button
}
function TableView(selectid) {
    let button = document.createElement("button")
    button.className = "b3-menu__item"
    button.setAttribute("data-node-id", selectid)
    button.setAttribute("custom-attr-name", "f")
    button.setAttribute("custom-attr-value", "bg")

    button.innerHTML = `<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">转换为表格</span>`
    button.onclick = ViewMonitor
    return button
}
function kanbanView(selectid) {
    let button = document.createElement("button")
    button.className = "b3-menu__item"
    button.setAttribute("data-node-id", selectid)
    button.setAttribute("custom-attr-name", "f")
    button.setAttribute("custom-attr-value", "kb")

    button.innerHTML = `<svg class="b3-menu__icon" style=""><use xlink:href="#iconMenu"></use></svg><span class="b3-menu__label">转换为看板</span>`
    button.onclick = ViewMonitor
    return button
}
function DefaultView(selectid) {
    let button = document.createElement("button")
    button.className = "b3-menu__item"
    button.onclick = ViewMonitor
    button.setAttribute("data-node-id", selectid)
    button.setAttribute("custom-attr-name", "f")
    button.setAttribute("custom-attr-value", '')

    button.innerHTML = `<svg class="b3-menu__icon" style=""><use xlink:href="#iconList"></use></svg><span class="b3-menu__label">恢复为列表</span>`
    return button
}
function FixWidth(selectid) {
    let button = document.createElement("button")
    button.className = "b3-menu__item"
    button.onclick = ViewMonitor
    button.setAttribute("data-node-id", selectid)
    button.setAttribute("custom-attr-name", "f")
    button.setAttribute("custom-attr-value", "")

    button.innerHTML = `<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">页面宽度</span>`
    return button
}
function AutoWidth(selectid) {
    let button = document.createElement("button")
    button.className = "b3-menu__item"
    button.setAttribute("data-node-id", selectid)
    button.setAttribute("custom-attr-name", "f")
    button.setAttribute("custom-attr-value", "auto")
    button.innerHTML = `<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">自动宽度</span>`
    button.onclick = ViewMonitor
    return button
}
function Removeth(selectid) {
    let button = document.createElement("button")
    button.className = "b3-menu__item"
    button.onclick = ViewMonitor
    button.setAttribute("data-node-id", selectid)
    button.setAttribute("custom-attr-name", "t")
    button.setAttribute("custom-attr-value", "biaotou")

    button.innerHTML = `<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">取消表头样式</span>`
    return button
}
function Defaultth(selectid) {
    let button = document.createElement("button")
    button.className = "b3-menu__item"
    button.setAttribute("data-node-id", selectid)
    button.setAttribute("custom-attr-name", "t")
    button.setAttribute("custom-attr-value", "")
    button.innerHTML = `<svg class="b3-menu__icon" style=""><use xlink:href="#iconTable"></use></svg><span class="b3-menu__label">默认表头样式</span>`
    button.onclick = ViewMonitor
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

function ClickMonitor() {
    window.addEventListener('mouseup', MenuShow)
}

function MenuShow() {
    setTimeout(() => {
        let selectinfo = getBlockSelected()
        if (selectinfo) {
            let selecttype = selectinfo.type
            let selectid = selectinfo.id
            if (selecttype == "NodeList" || selecttype == "NodeTable") {
                setTimeout(() => InsertMenuItem(selectid, selecttype), 0)
            }
        }
    }, 0);
}


function InsertMenuItem(selectid, selecttype) {
    let commonMenu = document.getElementById("commonMenu")
    let readonly = commonMenu.querySelector(".b3-menu__item--readonly")
    let selectview = commonMenu.querySelector('[id="viewselect"]')
    if (readonly) {
        if (!selectview) {
            commonMenu.insertBefore(ViewSelect(selectid, selecttype), readonly)
            commonMenu.insertBefore(MenuSeparator(), readonly)
        }
    }
}

function ViewMonitor(event) {
    let id = event.currentTarget.getAttribute("data-node-id")
    let attrName = 'custom-' + event.currentTarget.getAttribute("custom-attr-name")
    let attrValue = event.currentTarget.getAttribute("custom-attr-value")
    let blocks = document.querySelectorAll(`.protyle-wysiwyg [data-node-id="${id}"]`)
    if (blocks) {
        blocks.forEach(block => block.setAttribute(attrName, attrValue))
    }
    let attrs = {}
    attrs[attrName] = attrValue
    设置思源块属性(id, attrs)
}























//+++++++++++++++++++++++++++++++++思源API++++++++++++++++++++++++++++++++++++
//思源官方API文档  https://github.com/siyuan-note/siyuan/blob/master/API_zh_CN.md

/**
 * 
 * @param {*} 内容块id 
 * @param {*} 回调函数 
 * @param {*} 传递对象 
 */
async function 根据ID获取人类可读路径(内容块id, then, obj = null) {
    await 向思源请求数据('/api/filetree/getHPathByID', {
        id: 内容块id
    }).then((v) => then(v.data, obj))
}

async function 以id获取文档聚焦内容(id, then, obj = null) {
    await 向思源请求数据('/api/filetree/getDoc', {
        id: id,
        k: "",
        mode: 0,
        size: 36,
    }).then((v) => then(v.data, obj))
}
async function 设置思源块属性(内容块id, 属性对象) {
    let url = '/api/attr/setBlockAttrs'
    return 解析响应体(向思源请求数据(url, {
        id: 内容块id,
        attrs: 属性对象,
    }))
}

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

async function 解析响应体(response) {
    let r = await response
    return r.code === 0 ? r.data : null
}


//+++++++++++++++++++++++++++++++++辅助API++++++++++++++++++++++++++++++++++++
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
 * 触发元素的事件
 * @param {触发元素事件} type 
 * @param {*} element 
 * @param {*} detail 
 */
function trigger(type, element) {
    var customEvent = new Event(type, { bubbles: false, cancelable: true });
    element.dispatchEvent(customEvent);
}

/**
 * 向body注入新style覆盖原本的css
 * @param {css文本字符串} csstxt 
 */
function injectionCss(csstxt) {
    var styleElement = document.createElement('style');

    styleElement.innerText = t;

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
function insertCreateAfter(targetElement, addElementTxt, setId = null) {

    if (!targetElement) console.error("指定元素对象不存在！");
    if (!addElementTxt) console.error("未指定字符串！");

    var element = document.createElement(addElementTxt);

    if (setId) element.id = setId;

    var parent = targetElement.parentNode;//得到父节点
    if (parent.lastChild === targetElement) {
        //如果最后一个子节点是当前元素那么直接添加即可
        parent.appendChild(element);
        return element;
    } else {
        parent.insertBefore(element, targetElement.nextSibling);//否则，当前节点的下一个节点之前添加
        return element;
    }
}


/**
 * 向指定元素前创建插入一个元素，可选添加ID
 * @param {*} targetElement 目标元素
 * @param {*} addElementTxt 要创建添加的元素标签
 * @param {*} setId 为创建元素设置ID
 */
function insertCreateBefore(targetElement, addElementTxt, setId = null) {

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
function getSiYuanToolbar() { return document.getElementById("toolbar"); }

/**
 * 得到HBuiderXToolbar
 * @returns 
 */
function getHBuiderXToolbar() { return document.getElementById("HBuiderXToolbar"); }



/**简单判断目前思源是否是手机模式 */
function isPhone() {
    return document.getElementById("toolbar") == null;
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
 * 取出两个数组的不同元素
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
function getArrDifference(arr1, arr2) {
    return arr1.concat(arr2).filter(function (v, i, arr) {
        return arr.indexOf(v) === arr.lastIndexOf(v);
    });
}

/**
 * 取出两个数组的相同元素
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
function getArrEqual(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                newArr.push(arr1[j]);
            }
        }
    }
    return newArr;
}


/**
 * 间隔执行指定次数的函数(不立即执行)
 * @param {*} time 间隔时间s
 * @param {*} frequency 执行次数
 * @param {*} Fun 执行函数
 */
function IntervalFunTimes(time, frequency, Fun) {

    for (let i = 0; i < frequency; i++) {
        sleep(time * i).then(v => {
            Fun();
        })
    }

    function sleep(time2) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, time2)
        })
    }
}


/**
 * 递归DOM元素查找深度子级的一批符合条件的元素返回数组
 * @param {*} element 要查找DOM元素
 * @param {*} judgeFun 查找函数 : fun(v) return true or false
 * @returns array
 */
function diguiTooALL(element, judgeFun) {

    var target = [];

    if (element == null) return null;
    if (judgeFun == null) return null;


    digui(element);

    function digui(elem) {
        var child = elem.children;
        if (child.length = 0) return;

        for (let index = 0; index < child.length; index++) {
            const element2 = child[index];

            if (judgeFun(element2)) {
                target.push(element2);
                digui(element2);
            } else {
                digui(element2);
            }
            return;
        }
        return target;
    }
}

/**
 * 递归DOM元素查找深度子级的第一个符合条件的元素
 * @param {*} element 要查找DOM元素
 * @param {*} judgeFun 查找函数 : fun(v) return true or false
 * @returns element
 */
function diguiTooONE(element, judgeFun) {

    if (element == null) return null;
    if (judgeFun == null) return null;

    return digui(element);

    function digui(elem) {
        var child = elem.children;
        if (child.length = 0) return null;

        for (let index = 0; index < child.length; index++) {
            const element2 = child[index];
            if (judgeFun(element2)) {
                return element2;
            } else {
                var item = digui(element2);
                if (item == null) continue;
                return item;
            }
        }
        return null;
    }
}

/**
 * 清除选中文本
 */
function clearSelections() {
    if (window.getSelection) {
        var selection = window.getSelection();
        selection.removeAllRanges();
    } else if (document.selection && document.selection.empty) {
        document.selection.empty();
    }
}


/**
 * 控制台打印输出
 * @param {*} obj 
 */
function c(...data) {
    console.log(data);
}


/**++++++++++++++++++++++++++++++++按需调用++++++++++++++++++++++++++++++ */

setTimeout(() => {

    if (isPhone()) {

        adjustDocumentLabelsWhile()//调整文档头部区域，在emj 标签，头图 各种情况下的布局

        collapseExpand_Head_List()//鼠标中键标题、列表文本折叠/展开

        simpleRemarks();//简单备注

        removeDefaultIndent();//开启实验特性：段落首行缩进的情况下，双击段落尾部去除缩进

        hyperlinkClickColorChange();//点击过的思源超链接超链接会变色

        dblclickToReleaseReadOnly();//双击解除只读模式

        newOpenWindow();//Dark+新开窗口代码抽取HBuilderX-Light移植魔改便携搬运版


        console.log("==============>HBuilderX-Light主题:附加CSS和特性JS_已经执行<==============");
    } else {

        createHBuiderXToolbar();//创建BuiderXToolbar

        createSidebarMouseHoverExpandButton();//鼠标移动展开左右树面板按钮

        createHighlightBecomesHidden();//高亮变隐藏

        createQuickDropDownButton()//快捷下分栏按钮

        createFocusingOnAmplification()//聚焦内容放大200%

        //getTXTSum()//选中文字计数------已官方实现 

        setTimeout(() => ClickMonitor(), 3000);//各种列表转xx

        adjustDocumentLabelsWhile();//调整文档头部区域，在emj 标签，头图 各种情况下的布局

        rundynamicUnderline();//为文档标题创建动态下划线

        showDocumentCreationDate();//为打开文档标题下面显示文档创建日期

        autoOpenList();//自动展开悬浮窗内折叠列表（第一次折叠）

        collapsedListPreview();//折叠列表内容预览查看

        collapseExpand_Head_List()//鼠标中键标题、列表文本折叠/展开

        VirtualReferenceEnhancements();//将同名虚拟引用的悬浮窗，本笔记相关内容放到前面

        simpleRemarks();//简单备注

        findMatchingListEntries();//查找匹配列表条目前的图标可以鼠标悬停打开悬浮窗

        removeDefaultIndent();//开启实验特性：段落首行缩进的情况下，双击段落尾部去除缩进

        hyperlinkClickColorChange();//点击过的思源超链接超链接会变色

        newOpenWindow();//Dark+新开窗口代码抽取HBuilderX-Light移植魔改便携搬运版

        loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/customizeCss.css", "customizeCss");
        console.log("==============>HBuilderX-Light主题:附加CSS和特性JS_已经执行<==============");
    }
}, 1000);
