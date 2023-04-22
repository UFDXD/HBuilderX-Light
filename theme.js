/**
 * HBuilderX-Light主题特性js实现
 * 目标：能跑就行
 * 功能搬运: 请在主题详情页备注来自HBuilderX-Light主题
 */

window.HBuilderXLight = {};
window.HBuilderXLight.ButtonControl = {};

var ConfigPath = "/data/widgets/HBuilderX-Light.config.json";
if (isBrowser() || isPhone()) ConfigPath = "/data/widgets/HBuilderX-Light.Browser.config.json";


//按钮功能类型
let ButtonFunctionType;
(function (ButtonFunctionType) {
    ButtonFunctionType[ButtonFunctionType["default"] = 1] = "default";//默认
    ButtonFunctionType[ButtonFunctionType["topicfilter"] = 2] = "topicfilter";//滤镜
})(ButtonFunctionType || (ButtonFunctionType = {}));
var EnumButtonFunctionType = Object.freeze(ButtonFunctionType);


//按钮特性类型
let ButtonCharacteristicType;
(function (ButtonCharacteristicType) {
    ButtonCharacteristicType[ButtonCharacteristicType["default"] = 1] = "default";//默认
    ButtonCharacteristicType[ButtonCharacteristicType["multiple"] = 2] = "multiple";//单选
})(ButtonCharacteristicType || (ButtonCharacteristicType = {}));
var EnumButtonCharacteristicType = Object.freeze(ButtonCharacteristicType);


//渲染进程和主进程通信
if (isPc() || isPcWindow()) {
    const { ipcRenderer } = require('electron');
    ipcRenderer.on("siyuan-send_windows", (event, data) => {
        //console.log(data);
        switch (data.Value) {
            case "ButtonControl"://按钮状态控制
                var ControlButtonIDs = data.ControlButtonIDs;
                for (let index = 0; index < ControlButtonIDs.length; index++) {
                    const ControlButtonID = ControlButtonIDs[index];
                    window.HBuilderXLight.ButtonControl[ControlButtonID.ButtonID][ControlButtonID.ControlFun]();
                }
                break;

            default:
                break;
        }
    });
    window.HBuilderXLight.broadcast = (data) => {
        ipcRenderer.send("siyuan-send_windows", data);
    }
}




/**----------------------------------高亮变隐藏按钮----------------------------------*/
function HighlightBecomesHidden() {

    //loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/highlight-Mark.css", "markCss");
    HBuiderXThemeToolbarAddButton(
        "高亮变隐藏",
        EnumButtonFunctionType.default,
        EnumButtonCharacteristicType.default,
        "开启后高亮文本变隐藏文本，鼠标移上去才会显示。",
        "/appearance/themes/HBuilderX-Light/src/B2.png",
        "/appearance/themes/HBuilderX-Light/src/B1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/conceal-Mark.css", "高亮隐藏");
        },
        () => {
            document.getElementById("高亮隐藏").remove();
        }
    );
}


/**---------------------------------------------------------段落块缩进-------------------------------------------------------------- */
function FirstLineInDent() {
    HBuiderXThemeToolbarAddButton(
        "段落缩进", EnumButtonFunctionType.default,
        EnumButtonCharacteristicType.default,
        "开启后段落块自动缩进,双击段落块末尾无文本区域单独去除缩进",
        "/appearance/themes/HBuilderX-Light/src/段落缩进2.png",
        "/appearance/themes/HBuilderX-Light/src/段落缩进1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/FirstLineInDent.css", "FirstLineInDent");
        },

        () => {
            document.getElementById("FirstLineInDent").remove();
        },
        true
    );
}




/**---------------------------------------------------------列表块醒目增强-------------------------------------------------------------- */

function listMarked() {
    HBuiderXThemeToolbarAddButton(
        "列表块醒目增强", EnumButtonFunctionType.default,
        EnumButtonCharacteristicType.default,
        "开启后列表块醒目增强",
        "/appearance/themes/HBuilderX-Light/src/列表块醒目增强2.png",
        "/appearance/themes/HBuilderX-Light/src/列表块醒目增强1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/listMarked.css", "listMarked");
        },

        () => {
            document.getElementById("listMarked").remove();
        },
        true
    );
}


/**---------------------------------------------------------主题反色-------------------------------------------------------------- */

function InverseButton() {
    HBuiderXThemeToolbarAddButton(
        "按钮:颜色反转_深黑", EnumButtonFunctionType.topicfilter,
        EnumButtonCharacteristicType.multiple,
        "主题反色滤镜_深黑",
        "/appearance/themes/HBuilderX-Light/src/反色2.png",
        "/appearance/themes/HBuilderX-Light/src/反色1.png",
        () => {

            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/Topicfilter/颜色反转_深黑.css", "颜色反转_深黑");

        },
        () => {
            document.getElementById("颜色反转_深黑").remove();
        },
        true
    );

    HBuiderXThemeToolbarAddButton(
        "按钮:颜色反转_太空", EnumButtonFunctionType.topicfilter,
        EnumButtonCharacteristicType.multiple,
        "主题反色滤镜_太空",
        "/appearance/themes/HBuilderX-Light/src/反色2.png",
        "/appearance/themes/HBuilderX-Light/src/反色1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/Topicfilter/颜色反转_太空.css", "颜色反转_太空");

        },
        () => {
            document.getElementById("颜色反转_太空").remove();
        },
        true
    );

    HBuiderXThemeToolbarAddButton(
        "按钮:颜色反转_墨空", EnumButtonFunctionType.topicfilter,
        EnumButtonCharacteristicType.multiple,
        "主题颜色反转_墨空",
        "/appearance/themes/HBuilderX-Light/src/反色2.png",
        "/appearance/themes/HBuilderX-Light/src/反色1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/Topicfilter/颜色反转_墨空.css", "颜色反转_墨空");
        },
        () => {
            document.getElementById("颜色反转_墨空").remove();
        },
        true
    );

    HBuiderXThemeToolbarAddButton(
        "按钮:颜色反转_黑绿", EnumButtonFunctionType.topicfilter,
        EnumButtonCharacteristicType.multiple,
        "主题颜色反转_黑绿",
        "/appearance/themes/HBuilderX-Light/src/反色2.png",
        "/appearance/themes/HBuilderX-Light/src/反色1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/Topicfilter/颜色反转_黑绿.css", "颜色反转_黑绿");
        },
        () => {
            document.getElementById("颜色反转_黑绿").remove();
        },
        true
    );

    HBuiderXThemeToolbarAddButton(
        "按钮:颜色反转_锈黑", EnumButtonFunctionType.topicfilter,
        EnumButtonCharacteristicType.multiple,
        "主题颜色反转_锈黑",
        "/appearance/themes/HBuilderX-Light/src/反色2.png",
        "/appearance/themes/HBuilderX-Light/src/反色1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/Topicfilter/颜色反转_锈黑.css", "颜色反转_锈黑");
        },
        () => {
            document.getElementById("颜色反转_锈黑").remove();
        },
        true
    );
}

/**---------------------------------------------------------主题黑白-------------------------------------------------------------- */

function BlackWhiteButton() {
    HBuiderXThemeToolbarAddButton(
        "按钮:黑白", EnumButtonFunctionType.topicfilter,
        EnumButtonCharacteristicType.multiple,
        "主题黑白滤镜",
        "/appearance/themes/HBuilderX-Light/src/黑白2.png",
        "/appearance/themes/HBuilderX-Light/src/黑白1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/Topicfilter/BlackWhite.css", "黑白");

        },
        () => {
            document.getElementById("黑白").remove();
        },
        true
    );
}



/**---------------------------------------------------------主题降低颜色对比度-------------------------------------------------------------- */

function ReduceColorContrast() {
    HBuiderXThemeToolbarAddButton(
        "降低颜色对比度", EnumButtonFunctionType.default,
        EnumButtonCharacteristicType.default,
        "主题对比度降低滤镜,可以和其他滤镜效果叠加",
        "/appearance/themes/HBuilderX-Light/src/降低颜色对比度2.png",
        "/appearance/themes/HBuilderX-Light/src/降低颜色对比度1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/Topicfilter/ReduceColor.css", "ReduceColor");

        },
        () => {
            document.getElementById("ReduceColor").remove();
        },
        true
    );
}


/**---------------------------------------------------------主题色相旋转-------------------------------------------------------------- */

function HueRotateButton() {

    HBuiderXThemeToolbarAddButton(
        "按钮:色相旋转_青紫", EnumButtonFunctionType.topicfilter,
        EnumButtonCharacteristicType.multiple,
        "主题色相滤镜_青紫",
        "/appearance/themes/HBuilderX-Light/src/色相旋转2.png",
        "/appearance/themes/HBuilderX-Light/src/色相旋转1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/Topicfilter/色相旋转_青紫.css", "色相旋转_青紫");

        },
        () => {
            document.getElementById("色相旋转_青紫").remove();
        },
        true
    );

    HBuiderXThemeToolbarAddButton(
        "按钮:色相旋转_青蓝", EnumButtonFunctionType.topicfilter,
        EnumButtonCharacteristicType.multiple,
        "主题色相滤镜_青蓝",
        "/appearance/themes/HBuilderX-Light/src/色相旋转2.png",
        "/appearance/themes/HBuilderX-Light/src/色相旋转1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/Topicfilter/色相旋转_青蓝.css", "色相旋转_青蓝");

        },
        () => {
            document.getElementById("色相旋转_青蓝").remove();
        },
        true
    );


    HBuiderXThemeToolbarAddButton(
        "按钮:色相旋转_褐紫", EnumButtonFunctionType.topicfilter,
        EnumButtonCharacteristicType.multiple,
        "主题色相旋转_褐紫",
        "/appearance/themes/HBuilderX-Light/src/色相旋转2.png",
        "/appearance/themes/HBuilderX-Light/src/色相旋转1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/Topicfilter/色相旋转_褐紫.css", "色相旋转_褐紫");

        },
        () => {
            document.getElementById("色相旋转_褐紫").remove();
        },
        true
    );


    HBuiderXThemeToolbarAddButton(
        "按钮:色相旋转_红紫", EnumButtonFunctionType.topicfilter,
        EnumButtonCharacteristicType.multiple,
        "主题色相旋转_红紫",
        "/appearance/themes/HBuilderX-Light/src/色相旋转2.png",
        "/appearance/themes/HBuilderX-Light/src/色相旋转1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/Topicfilter/色相旋转_红紫.css", "色相旋转_红紫");


        },
        () => {
            document.getElementById("色相旋转_红紫").remove();
        },
        true
    );


    HBuiderXThemeToolbarAddButton(
        "按钮:色相旋转_映绿", EnumButtonFunctionType.topicfilter,
        EnumButtonCharacteristicType.multiple,
        "主题色相旋转_映绿",
        "/appearance/themes/HBuilderX-Light/src/色相旋转2.png",
        "/appearance/themes/HBuilderX-Light/src/色相旋转1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/Topicfilter/色相旋转_映绿.css", "色相旋转_映绿");


        },
        () => {
            document.getElementById("色相旋转_映绿").remove();
        },
        true
    );



    HBuiderXThemeToolbarAddButton(
        "按钮:色相旋转_旧绿", EnumButtonFunctionType.topicfilter,
        EnumButtonCharacteristicType.multiple,
        "主题色相旋转_旧绿",
        "/appearance/themes/HBuilderX-Light/src/色相旋转2.png",
        "/appearance/themes/HBuilderX-Light/src/色相旋转1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/Topicfilter/色相旋转_旧绿.css", "色相旋转_旧绿");
        },
        () => {
            document.getElementById("色相旋转_旧绿").remove();
        },
        true
    );





}


/**------------------------------------------------------------调整文档,emj 标签，头图位置-------------------------------------------- */
function adjustDocumentLabelsWhile() {
    adjustDocumentLabels();
    var layouts = document.querySelector(".layout__center");
    const observer = new MutationObserver(() => {
        adjustDocumentLabels();
    })//创建监视
    observer.observe(layouts, { attributes: true, childList: false, subtree: true });
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
        if (item4.className != "b3-chips") continue;
        //var Label = element.children[1].firstElementChild.children[1];
        Labels.push(item4);
    }

    Adjustment(Labels);
}


function Adjustment(Labels) {

    for (let index = 0; index < Labels.length; index++) {
        const item = Labels[index];

        var Labelfater = getLabelfater(item);
        var Icon = getIcon(item);

        var Title = getTitle(item);

        Icon.style.position = "static ";
        Icon.style.marginLeft = Title.style.marginLeft;

        var TopSet = getTopSet(item);
        var TopImgSet = getTopImgSet(item);

        var emj = isEmj(item);
        var labe = isLabel(item);
        var img = isImg(item);
        //console.log(Labelfater, item, Icon, TopSet, TopImgSet, Title);
        /**没有emj，没有标签，没有头图的情况 */
        if (!emj && !labe && !img) {
            Labelfater.style.height = "auto";

            Labelfater.style.marginTop = "-20px";
            Labelfater.style.marginBottom = "0px";

            Labelfater.style.paddingTop = "0px";
            Labelfater.style.paddingBottom = "0px";

            item.style.height = "auto";
            item.style.marginTop = "-50px";
            item.style.marginBottom = "0px";

            Icon.style.marginTop = "0px";
            Icon.style.height = "75px";//
            Icon.style.marginBottom = "0px";

            Icon.firstElementChild.style.display = "none";

            TopSet.style.marginTop = "76px";
            TopImgSet.style.button = "0px";
            Title.style.marginTop = "0px";

            continue;
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
            Icon.style.height = "75px";//
            item.style.marginBottom = "0px";

            Icon.style.marginTop = "-8px";//
            Icon.style.marginBottom = "0px";

            Icon.firstElementChild.style.display = "block";

            TopSet.style.marginTop = "42px";
            TopImgSet.style.button = "0px";

            Title.style.marginTop = "16px";

            continue;
        }

        /**只有标签存在的情况下 */
        if (!emj && labe && !img) {

            Labelfater.style.height = "auto";

            Labelfater.style.marginTop = "28px";
            Labelfater.style.marginBottom = "-80px";

            Labelfater.style.paddingTop = "0px";
            Labelfater.style.paddingBottom = "0px";


            item.style.height = "auto";
            item.style.marginTop = "-10px";
            item.style.marginBottom = "0px";

            Icon.style.marginTop = "0px";
            Icon.style.height = "0px";//
            Icon.style.marginBottom = "0px";

            Icon.firstElementChild.style.display = "none";

            TopSet.style.marginTop = "105px";
            TopImgSet.style.button = "0px";

            Title.style.marginTop = "80px";

            continue;
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
            Icon.style.height = "70px";//
            Icon.firstElementChild.style.display = "none";

            TopSet.style.marginTop = "85px";
            TopImgSet.style.top = "246px";
            TopImgSet.style.button = "0px";

            Title.style.marginTop = "16px";

            continue;
        }

        /**emj和标签同时存在的情况下 */
        if (emj && labe && !img) {

            Labelfater.style.height = "auto";

            Labelfater.style.marginTop = "28px";
            Labelfater.style.marginBottom = "10px";

            Labelfater.style.paddingTop = "0px";
            Labelfater.style.paddingBottom = "0px";


            item.style.height = "auto";
            item.style.marginTop = "-10px";
            item.style.marginBottom = "10px";

            Icon.style.marginTop = "-13px";
            Icon.style.height = "75px";//
            Icon.style.marginBottom = "0px";

            Icon.firstElementChild.style.display = "block";

            TopSet.style.marginTop = "37px";
            TopImgSet.style.button = "0px";

            Title.style.marginTop = "14px";

            continue;
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
            Icon.style.height = "75px";//
            Icon.style.marginBottom = "0px";

            Icon.firstElementChild.style.display = "block";

            TopSet.style.marginTop = "45px";
            TopImgSet.style.top = "246px";
            TopImgSet.style.button = "0px";

            Title.style.marginTop = "18px";

            continue;
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
            Icon.style.height = "75px";//
            Icon.style.marginBottom = "0px";

            Icon.firstElementChild.style.display = "none";

            TopSet.style.marginTop = "85px";
            TopImgSet.style.top = "246px";
            TopImgSet.style.button = "0px";

            Title.style.marginTop = "12px";

            continue;
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
            Icon.style.height = "75px";//
            Icon.style.marginBottom = "0px";

            Icon.firstElementChild.style.display = "block";

            TopSet.style.marginTop = "45px";
            TopImgSet.style.top = "246px";
            TopImgSet.style.button = "0px";

            Title.style.marginTop = "18px";

            continue;
        }
    }
}

/**判断是否设定emj */
function isEmj(Label) {
    return !(Label.nextElementSibling.firstElementChild.className == "protyle-background__icon fn__none");
}

/**判断是否有标签 */
function isLabel(Label) {
    return !(Label.children.length == 0);
}

/**判断是否有头图 */
function isImg(Label) {
    return !(Label.previousElementSibling.firstElementChild.className == "fn__none");
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
    dynamicUnderline();
    var layouts = document.querySelector(".layout__center");
    const observer = new MutationObserver(() => {
        dynamicUnderline();
        //setInterval(dynamicUnderline, 500);
    })//创建监视
    observer.observe(layouts, { attributes: true, childList: true, subtree: true });
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
    DocumentCreationDate();

    var layouts = document.querySelector(".layout__center");
    const observer = new MutationObserver(() => {
        DocumentCreationDate();
    })//创建监视
    observer.observe(layouts, { attributes: true, childList: true, subtree: true });
    //setInterval(DocumentCreationDate, 300);
}


function DocumentCreationDate() {

    var openDoc = document.querySelectorAll(".layout-tab-container>.fn__flex-1.protyle:not(.fn__none):not([creatTimeOK])");
    var allDocumentTitleElement = [];
    for (let index = 0; index < openDoc.length; index++) {
        const element = openDoc[index];
        element.setAttribute("creatTimeOK", true);
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
    var i = 0;
    var setID = setInterval(() => {
        var time = getDocumentTime(element);

        if (i == 100) {
            documentCreatTimeElement.innerText = "获取文档创建日期失败";
            clearInterval(setID);
            return;
        }

        if (time != "") {
            documentCreatTimeElement.innerText = time;
            clearInterval(setID);
            return;
        };
        i++;
    }, 1000);
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
        if (element.getAttribute("documentCreatTimeElement") != null) return element;
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
    try {
        var tS = tilteElement.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.getAttribute("data-node-id");
        if (tS == null) return "";
        var year = tS.substring(0, 4);
        var moon = tS.substring(4, 6);
        var day = tS.substring(6, 8);
        var hour = tS.substring(8, 10);
        var minute = tS.substring(10, 12);
        var second = tS.substring(12, 14);
        return year + "-" + moon + "-" + day + "  " + hour + ":" + minute + ":" + second;
    } catch (error) {
        return "";
    }
}



/**--------------------------------显示文档父文档、子文档 ---------------------------------------------*/

function displayParentChildDocuments2() {

    setInterval(() => {
        var documentCreatTimeElement = document.querySelectorAll("[documentCreatTimeElement]:not([parentChild])");
        for (let index = 0; index < documentCreatTimeElement.length; index++) {
            const element = documentCreatTimeElement[index];
            element.setAttribute("parentChild", true);
            var documentCreatParentChild = creatParentChild(element);
            documentCreatParentChild.innerText = "检查父子文档中……";
            parentChildWhlie(element, documentCreatParentChild);
        }
    }, 300);


    function parentChildWhlie(documentCreatTimeElement, documentCreatParentChild) {

        var i = 300;
        var seid = setInterval(() => {

            i--;
            var docID = documentCreatTimeElement.parentElement.parentElement.firstElementChild.getAttribute("data-node-id");

            if (i < 0) {
                clearInterval(seid);
                documentCreatParentChild.firstChild.remove();
            }

            if (docID == null) return;
            clearInterval(seid);

            //获取文档所在笔记本id
            queryAPI(`SELECT box, path FROM blocks WHERE id = '${docID}'`, (g) => {
                var ParentChild = document.createElement("div");
                ParentChild.innerHTML = `
                 <p>
                 <span>父文档：</span><span></span>
                 </p>
                 <p>
                 <span>子文档：</span><span></span>
                 </p>
                 `;

                //检查设置父文档
                if (g[0] == undefined) {
                    documentCreatParentChild.firstChild.remove();
                    return;
                }
                var item1 = g[0].path.split("/");
                if (item1.length >= 3) {//检查有没有父文档；
                    var fatherDocid = item1[item1.length - 2];

                    根据ID获取人类可读路径(fatherDocid, (p) => {
                        var fatherDoName = ((p.split("/")).reverse())[0];
                        ParentChild.firstElementChild.lastElementChild.appendChild(creatA(fatherDocid, fatherDoName));
                        设置子文档()
                    })

                } else {
                    ParentChild.firstElementChild.remove();//无父文档
                    设置子文档()
                }

                function 设置子文档() {
                    //检查设置子文档
                    获取子文档数据(g[0].box, g[0].path, window.siyuan.config.fileTree.sort, (childs) => {
                        if (childs.length == 0) {
                            //没有子文档
                            ParentChild.lastElementChild.remove();//无子文档
                        } else {
                            var doc_css = ParentChild.lastElementChild;
                            var doc_cs = doc_css.lastElementChild;

                            for (let index = 0; index < childs.length; index++) {
                                const element = childs[index];
                                //console.log(element, element.hCtime);
                                var item2 = element.path.split("/");
                                var ID = item2[item2.length - 1].split(".sy")[0];
                                var name = element.name.split(".sy")[0];
                                var doc_c = creatA(ID, name);
                                doc_cs.appendChild(doc_c);
                            }


                            doc_css.style.maxHeight = "100px";
                            doc_css.style.overflow = "scroll";
                            doc_css.style.overflowX = "hidden";
                            doc_css.style.transition = " all .15s cubic-bezier(0, 0, .2, 1) 0ms";


                            AddEvent(doc_css, "mouseenter", () => {
                                //console.log(getComputedStyle(doc_css).height);
                                var item = parseFloat(getComputedStyle(doc_css).height);
                                item = 100 - item;
                                if (item < 2) {
                                    doc_css.style.maxHeight = "500px";
                                    doc_css.style.paddingBottom = "20px";
                                }
                            })

                            AddEvent(doc_css, "mouseleave", () => {
                                if (getComputedStyle(doc_css).height > "100px") {
                                    doc_css.style.maxHeight = "100px";
                                    doc_css.style.removeProperty("padding-bottom");

                                }
                            })

                        }

                        if (ParentChild.firstElementChild != null) {//任意存在父子文档加入dom
                            documentCreatParentChild.firstChild.remove();
                            documentCreatParentChild.appendChild(ParentChild);
                        } else {
                            documentCreatParentChild.firstChild.remove();
                        }
                    });
                }



            });
        }, 100)


    }

    function openHistoryDoc(e) {
        e.stopPropagation();
        if (e.target.tagName == "SPAN" && e.target.getAttribute("data-href")) {
            try {
                window.open(e.target.getAttribute("data-href"));
            } catch (err) {
                console.error(err);
            }
        }
    }

    function creatA(id, name) {
        var as = document.createElement("span");

        var a = document.createElement("span");
        a.setAttribute("data-href", "siyuan://blocks/" + id)
        a.innerHTML = name;
        a.style.paddingRight = "1px";
        a.style.cursor = "pointer";
        a.addEventListener("click", openHistoryDoc, false);


        AddEvent(a, "mouseenter", () => {
            if (a.getAttribute("isclick") == null) {
                a.parentElement.style.textDecoration = "underline";
            } else {
                a.parentElement.style.textDecoration = "none";
            }
        });
        AddEvent(a, "mouseleave", () => { a.parentElement.style.textDecoration = " none" });
        AddEvent(a, "click", () => {
            a.setAttribute("isclick", true);
            a.parentElement.style.color = "rgb(119,28,170)";
        });

        var s = document.createElement("span");
        s.setAttribute("data-type", 'a');
        s.setAttribute("data-href", "siyuan://blocks/" + id)
        s.innerText = "◈";
        s.style.paddingRight = "10px";
        s.style.cursor = "pointer";
        as.style.color = "#3481c5";
        as.title = "点击可跳转，悬浮◈可预览";
        as.appendChild(a);
        as.appendChild(s);
        return as;
    }


    /**为文档标题元素下父子容器展示元素 */
    function creatParentChild(documentCreatTimeElement) {

        var is = documentCreatTimeElement.nextElementSibling;
        if (is != null && is.getAttribute("documentCreatParentChild") != null) {
            return element;
        } else {
            var documentCreatParentChild = insertCreateAfter(documentCreatTimeElement, "span");
            documentCreatParentChild.setAttribute("documentCreatParentChild", "true");
            documentCreatParentChild.style.display = "block";
            documentCreatParentChild.style.marginLeft = "7px";
            documentCreatParentChild.style.marginBottom = "0px";
            documentCreatParentChild.style.fontSize = "61%";
            documentCreatParentChild.style.color = "#767676";
            return documentCreatParentChild;
        }

    }
}

/**----------------------------------自动展开悬浮窗折叠列表,展开搜索条目折叠列表,聚焦单独列表-----体验优化----------------------------------*/

function autoOpenList() {

    setInterval(() => {
        //找到所有的悬浮窗
        var Preview = document.querySelectorAll("[data-oid]");

        //如果发现悬浮窗内首行是折叠列表就展开并打上标记
        if (Preview.length != 0) {
            for (let index = 0; index < Preview.length; index++) {
                diguiTooONE_2(Preview[index], (v) => {
                    if (v.classList.contains("block__content")) {
                        var vs = v.children;
                        for (let index = 0; index < vs.length; index++) {
                            var obj = vs[index].children[1]
                            if (obj == null) continue;
                            const element = obj.firstElementChild.firstElementChild;
                            if (element == null) continue;
                            if (!element.classList.contains("li")) continue;//判断是否是列表
                            if (element.getAttribute("foldTag") != null) continue;//判断是否存在标记
                            if (element.getAttribute("foid") == 0) continue;//判断是折叠

                            element.setAttribute("fold", 0);
                            element.setAttribute("foldTag", true);
                        }
                        return true;
                    }
                    return false;
                }, 7)
            }
        }


        var searchPreview = document.querySelector("#searchPreview [data-doc-type='NodeListItem'].protyle-wysiwyg.protyle-wysiwyg--attr>div:nth-child(1)");
        if (searchPreview == null) {
            searchPreview = document.querySelector("#searchPreview [data-doc-type='NodeList'].protyle-wysiwyg.protyle-wysiwyg--attr>div:nth-child(1)>div:nth-child(1)");
        }
        if (searchPreview != null && searchPreview.getAttribute("data-type") == "NodeListItem" && searchPreview.getAttribute("fold") == 1) {
            if (searchPreview.getAttribute("foldTag") == null) {//判断是否存在标记
                searchPreview.setAttribute("fold", 0);
                searchPreview.setAttribute("foldTag", true);
            }
        }
        var contentLIst = [];
        var item1 = document.querySelectorAll(".layout-tab-container>.fn__flex-1.protyle:not(.fn__none) [data-doc-type='NodeListItem'].protyle-wysiwyg.protyle-wysiwyg--attr>div:nth-child(1)");
        var item2 = document.querySelectorAll(".layout-tab-container>.fn__flex-1.protyle:not(.fn__none) [data-doc-type='NodeList'].protyle-wysiwyg.protyle-wysiwyg--attr>div:nth-child(1)>div:nth-child(1)");
        contentLIst = [...item1, ...item2];
        for (let index = 0; index < contentLIst.length; index++) {
            const element = contentLIst[index];
            if (element != null && element.getAttribute("data-type") == "NodeListItem" && element.getAttribute("fold") == 1) {
                if (element.getAttribute("foldTag") != null) continue;//判断是否存在标记
                element.setAttribute("fold", 0);
                element.setAttribute("foldTag", true);
            }
        }

    }, 500)
}


/**----------------------------------列表折叠内容预览查看---------------------------------- */
function collapsedListPreview() {
    BodyEventRunFun("mouseover", collapsedListPreviewEvent, 3000)
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
            turn.push(element.firstElementChild)
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
            var item = element.firstElementChild;
            myRemoveEvent(item, "mouseenter", LIstIn);//解绑鼠标进入
            myRemoveEvent(item.parentElement.parentElement, "mouseleave", LIstout);//解绑鼠标离开

            var items = Array.from(item.parentElement.parentElement.children);
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
    var items = Array.from(e.target.children);
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
        var items = item.children
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
    var items = f.children;

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
                var item = element.children[1].firstElementChild.children[1].firstElementChild.firstElementChild;
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
    triggerBlock.style.zIndex = "9";
    triggerBlock.style.cursor = "pointer";
    triggerBlock.style.WebkitUserModify = "read-only";
    triggerBlock.setAttribute("contenteditable", "false");
    triggerBlock.innerHTML = "&#8203";

    //获取折叠列表ID,设置悬浮窗
    //protyle-wysiwyg__embed data-id
    var previewID = objParent.parentElement.getAttribute("data-node-id");
    triggerBlock.setAttribute("class", "protyle-attr");

    triggerBlock.style.opacity = "0";
    //在触发块内创建思源超链接 
    triggerBlock.innerHTML = "<span data-type='a' class='list-A' data-href=siyuan://blocks/" + previewID + ">####</span>";
    //将这个思源连接样式隐藏
    var a = triggerBlock.firstElementChild;
    a.style.fontSize = "15px";
    a.style.lineHeight = "15px";
    a.style.border = "none";
    return triggerBlock;
}




/**----------------鼠标中键标题、列表文本折叠/展开----------------*/
function MiddleKeyExpansionClosed_Head_List() {
    var flag45 = false;
    AddEvent(document.body, "mouseup", () => {
        flag45 = false;
    });

    AddEvent(document.body, "mousedown", (e) => {
        if (e.button == 2) { flag45 = true; return }
        if (flag45 || e.shiftKey || e.altKey || e.button != 1) return;
        var target = e.target;

        if (target.getAttribute("contenteditable") == null) {
            isFatherFather(target, (v) => {
                if (v.getAttribute("contenteditable") != null) {
                    target = v;
                    return true;
                }
                return false;
            }, 10);
        }

        var targetParentElement = target.parentElement;
        if (targetParentElement == null) return;

        //是标题吗？
        if (targetParentElement != null && targetParentElement.getAttribute("data-type") == "NodeHeading") {

            var targetParentElementParentElement = targetParentElement.parentElement;
            //标题父元素是列表吗？
            if (targetParentElementParentElement != null && targetParentElementParentElement.getAttribute("data-type") == "NodeListItem") {
                e.preventDefault();
                //列表项实现折叠
                _collapseExpand_NodeListItem(target);
            } else {
                e.preventDefault();
                //标题块标项实现折叠
                _collapseExpand_NodeHeading(target);
            }
        } else {//是列表
            var targetParentElementParentElement = targetParentElement.parentElement;
            if (targetParentElementParentElement != null && targetParentElementParentElement.getAttribute("data-type") == "NodeListItem") {
                e.preventDefault();
                //列表项实现折叠
                _collapseExpand_NodeListItem(target);
            }
        }
    });

    //标题，块标实现折叠
    function _collapseExpand_NodeHeading(element) {

        var i = 0;
        try {

            while (element.className != "protyle" && element.className != "fn__flex-1 protyle" && element.className != "block__edit fn__flex-1 protyle" && element.className != "fn__flex-1 spread-search__preview protyle") {
                if (i == 999) return;
                i++;
                element = element.parentElement;
            }
            var ddddd = element.children;
            for (let index = ddddd.length - 1; index >= 0; index--) {
                const element = ddddd[index];
                if (element.className == "protyle-gutters") {
                    var fold = diguiTooONE_1(element, (v) => { return v.getAttribute("data-type") === "fold"; })
                    if (fold != null) fold.click();
                    return;
                }
            }
        } catch (error) {

        }
    }

    //列表，列表项实现折叠
    function _collapseExpand_NodeListItem(element) {

        //在悬浮窗中第一个折叠元素吗？
        var SiyuanFloatingWindow = isSiyuanFloatingWindow(element);
        if (SiyuanFloatingWindow) {
            var vs = isFatherFather(element, (v) => v.classList.contains("li"), 7);
            if (vs != null && (vs.previousElementSibling == null)) {
                var foid = vs.getAttribute("fold");
                if (foid == null || foid == "0") {//判断是折叠
                    vs.setAttribute("fold", "1");
                } else {
                    vs.setAttribute("fold", "0");
                }
                return;
            }
        }


        var i = 0;
        while (element.getAttribute("contenteditable") == null) {
            if (i == 999) return;
            i++;
            element = element.parentElement;
        }
        var elementParentElement = element.parentElement.parentElement;

        var fold = elementParentElement.getAttribute("fold");

        if (elementParentElement.children.length == 3) return;

        if (fold == null || fold == "0") {
            setBlockfold_1(elementParentElement.getAttribute("data-node-id"));
        } else {
            setBlockfold_0(elementParentElement.getAttribute("data-node-id"));
        }
    }
}

/**
 * 
 * @param {*} element 元素是否在思源悬浮窗中
 * @returns 是返回悬浮窗元素，否返回null
 */
function isSiyuanFloatingWindow(element) {
    return isFatherFather(element, (v) => {
        if (v.getAttribute("data-oid") != null) {
            return true;
        }
        return false;
    });
}


/**-------------鼠标中键展开折叠大纲--------------------------- */

function MiddleKeyExpansionClosed_Outline() {
    var flag45 = false;
    AddEvent(document.body, "mouseup", () => {
        flag45 = false;
    });

    AddEvent(document.body, "mousedown", (e) => {
        if (e.button == 2) { flag45 = true; return }
        if (flag45 || e.shiftKey || e.altKey || e.button != 1) return;
        var target = e.target;
        if (target.classList.contains("b3-list-item__text")) {
            isFatherFather(target, (v) => {
                try {
                    if (v.getAttribute("data-type") == "NodeHeading") {
                        if (v.firstElementChild.classList.contains("b3-list-item__toggle--hl")) {
                            v.firstElementChild.click();
                        } else if (v.firstElementChild.classList.contains("fn__hidden")) {//如果点击的大纲项没有子项，就找父项，折叠父项
                            v.parentElement.previousElementSibling.firstElementChild.click();
                        }
                        return true;
                    }
                } catch (error) {
                    return true
                }
                return false;
            }, 10);
        }
    })
}





/**----------------同名虚拟引用显示内容窗口排序，将触发文档相关性最高的引用内容优先展示------D大暂时不搞-所以-自己动手顶顶----------*/
//https://github.com/siyuan-note/siyuan/issues/5476

function VirtualReferenceEnhancements() {
    //BodyEventRunFun("mouseover",VirtualReference, 5000);
    AddEvent(document.body, "mouseover", (e) => {
        var target = e.target;
        var isyy = true;
        if (target.getAttribute("data-type") == "virtual-block-ref") {

            AddEvent(target, "mouseout", mouseout);

            setTimeout(() => {
                if (isyy) VirtualReferenceEventMouseenter(e);
            }, 500);

            function mouseout() {
                isyy = false;
                myRemoveEvent(target, "mouseout", mouseout);
            }
        }
    });
}


function VirtualReferenceEventMouseenter(e) {
    //获取这个虚拟引用所在的笔记本名称
    var item = e.target.parentElement;
    //e.target.setAttribute("mouseenter", true);

    for (let index = 0; index < 99; index++) {
        var ID = item.getAttribute("data-node-id");
        if (ID == null) {
            item = item.parentElement; continue;
        } else {
            根据ID获取人类可读路径(ID.toString(), VirtualReferenceAsync, e); break;
        }
    }
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
        time += 200;
    }, 200)

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
    var item = 0;

    var idd = setInterval(() => {
        item += 900;

        if (item > 60000) clearInterval(idd);
        if (newWindows.querySelector(".fn__loading")) return; //有内容没加载

        clearInterval(idd);

        var smallWindow = [];
        var smallWindowBreadtxt = [];


        var block__content = diguiTooONE_1(newWindows, 查找函数1);
        if (block__content == null) return;

        var block__icons_block__icons_border = diguiTooONE_1(newWindows, 查找函数3);
        if (block__icons_block__icons_border == null) return;
        var block__icons_block__icons_border_span = block__icons_block__icons_border.firstElementChild
        block__icons_block__icons_border_span.style.color = "black";
        block__icons_block__icons_border_span.style.textShadow = "2px 2px 4px rgba(82, 81, 16, 0.219)";


        var block__content_child = block__content.children;

        if (block__content_child.length == 1) return;

        for (let index = 0; index < block__content_child.length; index++) {

            const element = block__content_child[index];

            var protyle_breadcrumb__text = diguiTooONE_1(element, 查找函数2);
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

        var cdiv = insertCreateBefore(block__content.firstElementChild, "div");

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

        block__icons_block__icons_border_span.innerText = '同名虚拟引用已排序';
        block__icons_block__icons_border_span.style.overflow = "hidden";
        block__icons_block__icons_border_span.style.whiteSpace = "nowrap";
        block__icons_block__icons_border_span.style.textOverflow = "ellipsis";

    }, 900);

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
    BodyEventRunFun("mouseover", _simpleRemarks, 1000);
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
                         box-shadow: var(--b3-dialog-shadow);
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
    BodyEventRunFun("mouseover", _findMatchingListEntries, 3000);
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

            var itemlianjie = element.firstElementChild;
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
            var itemlianjie = element.firstElementChild;
            if (itemlianjie == null || itemlianjie.getAttribute("data-defids") != null) break;
            itemlianjie.setAttribute("data-defids", '[""]');
            itemlianjie.setAttribute("class", "b3-list-item__graphic popover__block");
            itemlianjie.setAttribute("data-id", element.getAttribute("data-node-id"));
        }
    };
}



/**----------------------------------开启段落首行缩进的情况下，双击段落尾部去除缩进-------------------------------- */
function Removefirstlineindent() {

    AddEvent(document.body, "dblclick", (e) => {

        var toolbarEdit = document.querySelector("svg#toolbarEdit.toolbar__icon");
        if (toolbarEdit != null) {
            var iconEdit = toolbarEdit.firstElementChild;
            var xlink_href = iconEdit.getAttribute("xlink:href");
            if (xlink_href == "#iconEdit") {
                return;
            }
        }

        GetItem("段落缩进", (offOn) => {

            if (offOn != "1" && (getComputedStyle(document.getElementsByTagName("head")[0]).backgroundColor != "rgba(0, 0, 0, 0)")) return;

            var element = e.target;
            if ((window.getSelection ? window.getSelection() : document.selection.createRange().text).toString().length != 0) return;

            e.preventDefault();
            if (element.getAttribute("contenteditable") == null) return;

            var item = element.parentElement;
            if (item != null && item.className != "p") return;
            item = element.parentElement.previousElementSibling;

            var isli = false;
            if (item != null && item.getAttribute("draggable") != null) {
                isli = true;
            };

            var element = element.parentElement;
            var data_node_id = element.getAttribute("data-node-id");

            var custom_indent = element.getAttribute("custom-indent");

            if (isli) {
                if (custom_indent == null || custom_indent == "false") {
                    element.setAttribute("custom-indent", true);
                    设置思源块属性(data_node_id, { "custom-indent": "true" });

                } else {
                    element.setAttribute("custom-indent", false);
                    设置思源块属性(data_node_id, { "custom-indent": "false" });

                }
            } else {

                if (custom_indent == null || custom_indent == "true") {
                    element.setAttribute("custom-indent", false);
                    设置思源块属性(data_node_id, { "custom-indent": "false" });

                } else {
                    element.setAttribute("custom-indent", true);
                    设置思源块属性(data_node_id, { "custom-indent": "true" });

                }
            }
        })
    });
}







/**----------------------------------点击过的思源超链接超链接会变色----------------------------------*/

function hyperlinkClickColorChange() {
    setInterval(() => {
        var a = [...document.querySelectorAll('.layout-tab-container>.fn__flex-1.protyle:not(.fn__none) span[data-type~="a"]:not([color-a])'),
        ...document.querySelectorAll('[data-oid] span[data-type~="a"]:not([color-a]'),
        ...document.querySelectorAll('#searchPreview span[data-type~="a"]:not([color-a]')];

        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            AddEvent(element, "click", () => {
                var datatype = element.getAttribute("data-type");
                if (datatype == null || !attributesContains(datatype, "a")) return;
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




/**------------------------------------思源悬浮窗头栏中键关闭------------------------------------- */
function theFloatingWindowIsClosed() {
    AddEvent(document.body, "mousedown", (e) => {
        if (e.button != 1) return;
        var element = e.target;
        var className = element.className;
        if (className == "block__icons block__icons--border" || className == "fn__space fn__flex-1" || className == "maxMinButton") {
            element = element.parentElement;
        } else {
            return;
        }

        diguiTooONE_1(element, (v) => {
            if (v.getAttribute("data-type") == "close") {
                v.click();
                return true;
            }
            return false;
        })
    });
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

            var reg = new RegExp('<[^>]+>', 'gi');  //过滤所有的html标签，不包括内容

            /**更改子窗口标题 */
            setTimeout(() => {
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

                function titleTxt(TargetBlockID) {

                    以id获取文档聚焦内容(TargetBlockID, (v) => {
                        var htmltxt = v.content;

                        var element = document.createElement("div");
                        element.innerHTML = htmltxt;

                        htmltxt = diguiTooONE_1(element, (v) => {
                            return v.getAttribute("contenteditable") == "true";
                        })

                        var txt = (htmltxt.innerText).replace(reg, '');
                        if (txt == "​" || txt == "") {
                            txt = "[#] 思源子窗口 - HBuilderX-Light [#]";
                            根据ID获取人类可读路径(TargetBlockID, (v) => {
                                title.innerText = "[#] " + v.substring(1, v.length) + " [#]";
                            })
                            return;
                        }
                        if (txt.length > 25) {
                            title.innerText = "[#] " + txt.substring(0, 25) + "...";
                        } else {
                            title.innerText = "[#] " + txt + " [#]";
                        }

                        element.remove();

                    });
                }
            }, 2000)

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
                    Menu
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
            urlParams.editable = 1;

            _windowParams.width = 1360;
            _windowParams.height = 768;

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

            window.theme.openNewWindow(
                "desktop",
                undefined,
                urlParams,
                windowParams,
                _menuParams,
            );
        }
    }

    function infocusOpenAPP(id = getFocusedID(), urlParams = {}) {
        if (id) {

            urlParams.id = id;
            urlParams.focus = 1;
            urlParams.editable = 1;

            _windowParams.width = 1360;
            _windowParams.height = 768;

            window.theme.openNewWindow(
                undefined,
                undefined,
                urlParams,
                _windowParams,
                _menuParams,
            );
        }
    }
    function infocusOpenWinPC(id = getFocusedID(), urlParams = {}) {
        // 打开新窗口
        if (id) {
            urlParams.id = id;
            urlParams.focus = 1;
            urlParams.editable = 0;

            const windowParams = merge({}, _windowParams, { alwaysOnTop: false })// 关闭置顶
            windowParams.width = 1536;
            windowParams.height = 840;

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
        _windowParams.frame = true;
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
        if (!e.shiftKey) {
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
        } else {
            if (!flag && e.button == 2) {
                flag = true; return;
            }

            if (flag && e.button == 1) {
                e.preventDefault()
                flag2 = true;
                middleClick(e.target, infocusOpenAPP); return;
            }
            if (e.altKey && e.button == 1) {
                e.preventDefault()
                flag2 = true;
                middleClick(e.target, infocusOpenWinPC); return;

            }
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
        var iconEdit = toolbarEdit.firstElementChild;
        var xlink_href = iconEdit.getAttribute("xlink:href");
        if (xlink_href == "#iconEdit") {
            toolbarEdit.dispatchEvent(new MouseEvent('click'));
            e.preventDefault();
        }
    })

}

/**----------------------------------钉住悬浮窗增强---------------------- */
//点击思源悬浮窗头栏中央触发块缩小窗口（默认设置钉住），再次点击恢复
//记忆缩小、放大状态窗口大小调整红的状态-（版本更新后好像有问题，但实际使用中用不到所以就不修了）
//右键窗口中央触发块调整缩小状态窗口透明度
function zoomOutToRestoreTheFloatingWindow() {

    BodyEventRunFun("mousemove", () => {
        var pins = document.querySelectorAll("[data-type='pin']:not([WindowMin]):not(.protyle-util [data-type='pin'])");

        //任何时候，实验悬浮窗中间最大最小化按钮居中
        var maxMinButton = document.querySelectorAll(".maxMinButton");
        maxMinButton.forEach((v) => {
            v.style.left = ((parseFloat(getComputedStyle(v.parentElement.parentElement).width) * 0.5) - 40) + "px";
        })

        pins.forEach(pin => {
            pin.setAttribute("WindowMin", true);

            var siYuanWindown = pin.parentElement.parentElement;
            var maxMinButton = addinsertCreateElement(pin.parentElement, "div");
            maxMinButton.style.width = "80px";
            maxMinButton.style.position = "absolute";
            maxMinButton.style.left = ((parseFloat(getComputedStyle(siYuanWindown).width) * 0.5) - 40) + "px";
            maxMinButton.style.height = "18.5px";
            maxMinButton.style.top = "3px"
            maxMinButton.style.border = "1px dashed rgb(239,241,220)";
            maxMinButton.style.backgroundColor = "rgba(239, 241, 220, 0.077)";
            maxMinButton.style.zIndex = "99";
            maxMinButton.style.cursor = "pointer";
            maxMinButton.setAttribute('class', "maxMinButton");

            //窗口状态
            var isWindowMin = false;
            var isMove = false;
            var istur = false;

            var WindowMinWidth = "355.4px";
            var WindowMinheight = "200px";
            var WindowMinOpacity = 0.4;
            var WindowMinOpacitytransformscale = "scale(0.7)";

            var danqTime = 0;



            AddEvent(maxMinButton, "click", WindowMin);
            AddEvent(maxMinButton, "mousedown", maxMinButtonMousedown);
            AddEvent(siYuanWindown, "mousedown", siYuanWindownMousedown);
            AddEvent(siYuanWindown, "mouseup", siYuanWindownMouseup);
            AddEvent(siYuanWindown.children[1], "mouseenter", siYuanWindownMouseenter);
            AddEvent(siYuanWindown.children[1], "mouseleave", siYuanWindownMouseleave);

            function WindowMin(e) {

                if (isMove) { isMove = false; return; }

                siYuanWindown.setAttribute("isWindowMin", isWindowMin = !isWindowMin);

                //默认变为钉住状态
                if (pin.getAttribute("aria-label") == "钉住") pin.click();

                var siYuanWindownClassStyle = getComputedStyle(siYuanWindown);
                if (isWindowMin) {//缩小状态
                    //保存
                    siYuanWindown.setAttribute("WindowMaxWidth", siYuanWindownClassStyle.width);
                    siYuanWindown.setAttribute("WindowMaxHeight", siYuanWindownClassStyle.height);
                    //设置
                    siYuanWindown.style.width = WindowMinWidth;
                    siYuanWindown.style.height = WindowMinheight;
                    siYuanWindown.style.opacity = WindowMinOpacity;
                    siYuanWindown.style.fontSize = "80%";
                    //siYuanWindown.style.transform=WindowMinOpacitytransformscale;

                } else {//恢复原状态
                    siYuanWindown.style.width = siYuanWindown.getAttribute("WindowMaxWidth");
                    siYuanWindown.style.height = siYuanWindown.getAttribute("WindowMaxHeight");;
                    siYuanWindown.style.opacity = "1";
                    // siYuanWindown.style.transform="none";
                    siYuanWindown.style.fontSize = "100%";

                }
                maxMinButton.style.left = ((parseFloat(getComputedStyle(siYuanWindown).width) * 0.5) - 40) + "px";
            }

            function maxMinButtonMousedown(e) {

                if (e.button == 0) {
                    danqTime = Date.now();
                    AddEvent(maxMinButton, "mousemove", maxMinButtonMousemove);
                    AddEvent(maxMinButton, "mouseup", maxMinButtonMouseup);
                }

                if (e.button == 2) {
                    if (!isWindowMin) return;
                    WindowMinOpacity += 0.2;
                    if (WindowMinOpacity > 1) WindowMinOpacity = 0.4;
                    siYuanWindown.style.opacity = WindowMinOpacity;
                }
            }

            function maxMinButtonMouseup() {
                if (isMove) {
                    if (((Date.now()) - danqTime) < 200) isMove = false;
                    danqTime = 0;
                }
                myRemoveEvent(maxMinButton, "mousemove", maxMinButtonMousemove);
                myRemoveEvent(maxMinButton, "mouseup", maxMinButtonMouseup);
            }

            function maxMinButtonMousemove() {
                isMove = true;
            }

            function siYuanWindownMousedown(e) {
                if (e.button != 0) return;

                var elem = e.target;
                var className = elem.className;
                if (className != "block__ns" && className != "block__ew" && className != "block__nwse") return
                istur = true;
                AddEvent(document.body, "mousemove", resizeWindow);
            }

            function siYuanWindownMouseup() {
                istur = false;
                myRemoveEvent(document.body, "mousemove", resizeWindow);
            }

            function resizeWindow() {
                var siYuanWindownClassStyle = getComputedStyle(siYuanWindown);
                if (isWindowMin) {
                    //console.log("拖动窗口大小", "设置缩小窗口");
                    WindowMinWidth = siYuanWindownClassStyle.width;
                    WindowMinheight = siYuanWindownClassStyle.height;
                } else {
                    // console.log("拖动窗口大小", "设置放大窗口");
                    siYuanWindown.setAttribute("WindowMaxWidth", siYuanWindownClassStyle.width);
                    siYuanWindown.setAttribute("WindowMaxHeight", siYuanWindownClassStyle.height);
                }
                maxMinButton.style.left = ((parseFloat(getComputedStyle(siYuanWindown).width) * 0.5) - 40) + "px";
            }

            function siYuanWindownMouseenter() {
                if (!isWindowMin || istur) return;
                siYuanWindown.style.opacity = "1";
                /*
                siYuanWindown.style.width = parseFloat(WindowMinWidth)*1.01+"px";
                siYuanWindown.style.height = parseFloat(WindowMinheight)*1.01+"px";
                maxMinButton.style.left = ((parseFloat(getComputedStyle(siYuanWindown).width) * 0.5) - 40) + "px";*/

            }
            function siYuanWindownMouseleave() {
                if (!isWindowMin || istur) return;
                siYuanWindown.style.opacity = WindowMinOpacity;
                /*siYuanWindown.style.width = WindowMinWidth;
                siYuanWindown.style.height = WindowMinheight;
                maxMinButton.style.left = ((parseFloat(getComputedStyle(siYuanWindown).width) * 0.5) - 40) + "px";*/
            }
        });
    }, 300)
}




/**--------------------------------右键快速设置命名、别名------------------------------------------------ */
//选中块获得光标时，右键快速将块内容覆盖设置到别名、命名。
//选中块获得光标并有选中文字时右键，将选中文本追加到别名，覆盖设置到命名
function setAliasName() {
    AddEvent(document.body, "mouseup", (e) => {
        if (e.button == 2) {
            var Block = getFocusedBlock();
            if (Block == null) return;

            if (Block.className == "p") {
                var list_li = Block.parentElement;
                var protyle_action = Block.previousElementSibling;

                //是列表项？
                if (list_li.className == "li" && protyle_action.classList.contains("protyle-action")) {
                    setButton(Block, list_li);
                } else {//是段落？
                    setButton(Block, Block);
                }
            } else if (Block.getAttribute("data-type") == "NodeHeading") {

                var list_li = Block.parentElement;
                var protyle_action = Block.previousElementSibling;

                //是标题列表项？
                if (list_li.className == "li" && protyle_action.classList.contains("protyle-action")) {
                    setButton(Block, list_li);
                } else {//是标题？
                    setButton(Block, Block);
                }
            }
        }
    });

    function setButton(Block, element) {
        var txt = (window.getSelection ? window.getSelection() : document.selection.createRange().text).toString();
        if (txt == ",") return;

        setTimeout(() => {
            var commonMenu1 = getcommonMenu_Cursor();
            var commonMenu2 = getcommonMenu_Cursor2();
            if (commonMenu1 == null && commonMenu2 == null) return;
            if (commonMenu1) {
                commonMenu1 = commonMenu1.querySelector(".b3-menu__items");
                var button1 = addinsertCreateElement(commonMenu1, "button");
                button1.setAttribute("class", "b3-menu__item");
                button1.innerHTML = ` <svg class="b3-menu__icon" style=""><use xlink:href="#"></use></svg><span class="b3-menu__label">内容覆盖别名</span>`
                AddEvent(button1, "click", () => {

                    设置思源块属性(element.getAttribute("data-node-id"), { "alias": Block.firstElementChild.innerText });
                    commonMenu1.setAttribute("class", "b3-menu fn__none");
                })

                var _button1 = addinsertCreateElement(commonMenu1, "button");
                _button1.setAttribute("class", "b3-menu__item");
                _button1.innerHTML = ` <svg class="b3-menu__icon" style=""><use xlink:href="#"></use></svg><span class="b3-menu__label">清空别名到剪贴板</span>`
                AddEvent(_button1, "click", () => {
                    获取块属性(element.getAttribute("data-node-id"), (v) => {
                        navigator.clipboard.writeText(v["alias"]);
                        设置思源块属性(element.getAttribute("data-node-id"), { "alias": "" });
                        commonMenu1.setAttribute("class", "b3-menu fn__none");
                    })
                })


                var button3 = addinsertCreateElement(commonMenu1, "button");
                button3.setAttribute("class", "b3-menu__item");
                button3.innerHTML = ` <svg class="b3-menu__icon" style=""><use xlink:href="#"></use></svg><span class="b3-menu__label">内容设置命名</span>`
                AddEvent(button3, "click", () => {
                    设置思源块属性(element.getAttribute("data-node-id"), { "name": Block.firstElementChild.innerText });
                    commonMenu1.setAttribute("class", "b3-menu fn__none");
                })

                var _button2 = addinsertCreateElement(commonMenu1, "button");
                _button2.setAttribute("class", "b3-menu__item");
                _button2.innerHTML = ` <svg class="b3-menu__icon" style=""><use xlink:href="#"></use></svg><span class="b3-menu__label">清空命名到剪贴板</span>`
                AddEvent(_button2, "click", () => {
                    获取块属性(element.getAttribute("data-node-id"), (v) => {
                        navigator.clipboard.writeText(v["name"]);
                        设置思源块属性(element.getAttribute("data-node-id"), { "name": "" });
                        commonMenu1.setAttribute("class", "b3-menu fn__none");
                    })
                })
            } else {
                commonMenu2 = commonMenu2.querySelector(".b3-menu__items");

                var button1 = addinsertCreateElement(commonMenu2, "button");
                button1.setAttribute("class", "b3-menu__item");
                button1.innerHTML = ` <svg class="b3-menu__icon" style=""><use xlink:href="#"></use></svg><span class="b3-menu__label">文本追加别名</span>`
                AddEvent(button1, "click", () => {

                    获取块属性(element.getAttribute("data-node-id"), (v) => {
                        var alias = v["alias"];
                        if (alias != undefined) {
                            txt = alias + "," + txt;
                        }

                        设置思源块属性(element.getAttribute("data-node-id"), { "alias": txt });
                        commonMenu2.setAttribute("class", "b3-menu fn__none");
                    })
                })

                var button2 = addinsertCreateElement(commonMenu2, "button");
                button2.setAttribute("class", "b3-menu__item");
                button2.innerHTML = ` <svg class="b3-menu__icon" style=""><use xlink:href="#"></use></svg><span class="b3-menu__label">文本去除别名</span>`
                AddEvent(button2, "click", () => {

                    获取块属性(element.getAttribute("data-node-id"), (v) => {

                        var alias = v["alias"];
                        if (alias != undefined) {

                            var aliass = alias.split(",");

                            for (let index = 0; index < aliass.length; index++) {
                                const element = aliass[index];
                                if (element == txt) {
                                    aliass.splice(index, 1);
                                    break;
                                }
                            }

                            txt = "";
                            for (let index = 0; index < aliass.length; index++) {
                                const element = aliass[index];
                                if (index == 0) {
                                    txt += element;
                                } else {
                                    txt += ("," + element);
                                }
                            }
                        }

                        设置思源块属性(element.getAttribute("data-node-id"), { "alias": txt });
                        commonMenu2.setAttribute("class", "b3-menu fn__none");
                    })
                })

                var button3 = addinsertCreateElement(commonMenu2, "button");
                button3.setAttribute("class", "b3-menu__item");
                button3.innerHTML = ` <svg class="b3-menu__icon" style=""><use xlink:href="#"></use></svg><span class="b3-menu__label">文本覆盖命名</span>`
                AddEvent(button3, "click", () => {
                    设置思源块属性(element.getAttribute("data-node-id"), { "name": txt });
                    commonMenu2.setAttribute("class", "b3-menu fn__none");
                })
            }
        }, 60);
    }
}



/**---------------------------------子弹列表辅助线----------------------------------------- */
/*
function bulletListAuxiliaryLine() {
 
    HBuiderXThemeToolbarAddButton(
        "列表子弹辅助线",
        "开启后列表出现子弹辅助线",
        "/appearance/themes/HBuilderX-Light/src/列表块醒目增强2.png",
        "/appearance/themes/HBuilderX-Light/src/列表块醒目增强1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/listLine.css", "listLine");
            AddEvent(window, "mouseup", focusHandler);
            AddEvent(window, "keyup", focusHandler);
        },
 
        () => {
            document.getElementById("listLine").remove();
            myRemoveEvent(window, "mouseup", focusHandler);
            myRemoveEvent(window, "keyup", focusHandler);
        },
        true
    );
 
    async function focusHandler(e) {
        let className = "theme-focus";//焦点块获得class
        let focusId = "theme-focus-block";//焦点块获 id
        //取消当前编辑区 
        const block = getFocusedBlock(); // 当前光标所在块
        //当前块已经设置焦点 
        if (block?.classList.contains(className) && block.id === focusId) return;
        //当前块未设置焦点 
        const editor = getTargetEditor(block); // 当前光标所在块位于的编辑区
        if (editor) {
            editor.querySelectorAll(`.${className}`).forEach(element => element.classList.remove(className));
            document.querySelectorAll(`#${focusId}`).forEach(element => element.removeAttribute('id'));
            block.classList.add(className);
            block.id = focusId;
        }
    }
}
*/



/**-------------------------------主题文档树，大纲列表等其他列表更加紧凑----------------------- */
function moreCompact() {

    HBuiderXThemeToolbarAddButton(
        "更加紧凑", EnumButtonFunctionType.default,
        EnumButtonCharacteristicType.default,
        "开启后文档树、大纲树、等其他项更加紧凑",
        "/appearance/themes/HBuilderX-Light/src/更加紧凑2.png",
        "/appearance/themes/HBuilderX-Light/src/更加紧凑1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/moreCompact.css", "moreCompact");
        },

        () => {
            document.getElementById("moreCompact").remove();
        },
        true
    );
}


/**-------------------------------标题序号----------------------- */
function automaticSerialNumber() {

    HBuiderXThemeToolbarAddButton(
        "标题序号", EnumButtonFunctionType.default,
        EnumButtonCharacteristicType.default,
        "开启后标题自动编号，注意受动态加载影响",
        "/appearance/themes/HBuilderX-Light/src/标题序号2.png",
        "/appearance/themes/HBuilderX-Light/src/标题序号1.png",
        () => {
            loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/automaticSerialNumber.css", "automaticSerialNumber");
        },

        () => {
            document.getElementById("automaticSerialNumber").remove();
        },
        true
    );
}











/**----------------------思源悬浮窗检测到单个段落块，单个列表项，面包屑前一级展示/反链计数悬浮窗反链引用高亮标记----------------------- */
/*请无视糟糕中文代码 */
function SuspendedWindowNoSection() {
    var setIntervalID;

    HBuiderXThemeToolbarAddButton(
        "悬浮窗上下文展有限展开增强", EnumButtonFunctionType.default,
        EnumButtonCharacteristicType.default,
        "开启后悬浮窗上下文展有限展开增强",
        "/appearance/themes/HBuilderX-Light/src/定位增强2.png",
        "/appearance/themes/HBuilderX-Light/src/定位增强1.png",
        () => {
            _SuspendedWindowNoSection();
        },

        () => {
            clearInterval(setIntervalID);
        },
        true
    );

    function _SuspendedWindowNoSection() {
        setIntervalID = setInterval(() => {
            //获取所有悬浮窗内容类型,排除一个以元素和非段落块,查找面包屑模拟点击倒数第二级展开内容
            document.querySelectorAll("[data-oid]:not([zhankai])").forEach((da) => {

                if (da.querySelector(".fn__loading")) return; //有内容没加载

                var protyles;
                try {
                    protyles = da.children[1].children;
                    if (protyles == null) return;
                } catch (error) {
                    return;
                }

                var nul = 0;

                for (let index = 0; index < protyles.length; index++) {
                    const element = protyles[index];
                    /***********************************************排除失效引用但还站一个悬浮窗格的情况 */

                    var liaoj1 = element.querySelector("[data-doc-type]");
                    var liaoj3 = element.firstElementChild;

                    if (liaoj1 == null && liaoj3 != null) return;
                    if (liaoj1 == liaoj3) {
                        nul++;
                    }
                }
                if (nul == protyles.length) return;


                if (da.getAttribute("zhankai") != null) return;//已经处理过的悬浮窗
                da.setAttribute("zhankai", true);//标记已经处理，防止下次循环多次处理

                setTimeout(() => {
                    Array.from(da.children[1].children).forEach((g) => {

                        var v = g.querySelector("[data-doc-type]");//查询基力悬浮窗内容类型元素
                        if (v == null) return;//排除失效引用但还站一个悬浮窗格的情况
                        if (v.children.length != 1 && v.getAttribute("data-doc-type") != "NodeHeading") return;//剔除data-doc-type存在多个子元素的悬浮窗


                        var 悬浮窗类型 = "引用悬浮窗";
                        var 反链ID;
                        var 反链ID所在的块ID;
                        var defmark = v.querySelector(".def--mark");
                        if (defmark) {
                            悬浮窗类型 = "反链悬浮窗";//判断悬浮窗类型
                            反链ID = defmark.getAttribute("data-id");
                            isFatherFather(defmark, (v) => {
                                if (v.getAttribute("data-node-id") != null) {
                                    反链ID所在的块ID = v.getAttribute("data-node-id");
                                    return true;
                                }
                                return false;
                            }, 19)
                        }


                        //console.log(悬浮窗类型, 反链引用ID);
                        var 悬浮窗出现的单独块是什么块;
                        //悬浮窗出现的单独块是什么块？
                        switch (v.firstElementChild.className) {
                            case "render-node"://嵌入块
                                悬浮窗出现的单独块是什么块 = "嵌入块"; break;
                            case "p"://段落块
                                悬浮窗出现的单独块是什么块 = "段落块"; break;
                            case "li"://单独列表项块//列表只要有三个子元素就是单独列表项块
                                if (v.firstElementChild.children.length == 3) 悬浮窗出现的单独块是什么块 = "列表块";
                                else 悬浮窗出现的单独块是什么块 = ""; break;
                            case "sb"://单独超级快
                                悬浮窗出现的单独块是什么块 = "超级块"; break;
                            default:
                                悬浮窗出现的单独块是什么块 = ""; break;
                        }


                        var 引用ID;

                        var 拟点击面包屑模元素;

                        var 时间累加器 = 0;
                        var iD = setInterval(() => {
                            时间累加器 += 100;
                            if (时间累加器 > 3000) clearInterval(iD);//超时


                            try {
                                if (悬浮窗出现的单独块是什么块 == "超级块") {
                                    //思源超级块不显示面包屑上,且悬浮窗内容不对应面包屑实际层级内容，前往上一级就是点击最后一级面包屑，所以需要单独处理
                                    引用ID = v.firstElementChild.getAttribute("data-node-id");
                                    拟点击面包屑模元素 = v.parentElement.previousElementSibling.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.children[1];
                                } else {
                                    引用ID = v.parentElement.previousElementSibling.firstElementChild.lastElementChild.getAttribute("data-node-id");//记录原块id
                                    拟点击面包屑模元素 = v.parentElement.previousElementSibling.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.children[1];
                                }

                                if (拟点击面包屑模元素.title == "") {// 无意义面包屑层级继续向上一级查找
                                    拟点击面包屑模元素 = 拟点击面包屑模元素.parentElement.previousElementSibling.previousElementSibling.lastElementChild;
                                }
                                clearInterval(iD);//上段代码没报错就证明元素获取成功了,关闭定时器

                                if (悬浮窗出现的单独块是什么块 != "") {
                                    悬浮窗面包屑跳转();
                                } else {
                                    不需要模拟点击的反链展示();
                                }

                            } catch (error) {
                                console.log("面包屑模拟点击元素获取错误", v.parentElement.previousElementSibling.firstElementChild.lastElementChild);
                            }
                        }, 100);


                        function 悬浮窗面包屑跳转() {
                            拟点击面包屑模元素.click();

                            const observer = new MutationObserver(() => {//创建监视
                                observer.disconnect();//关闭监视
                                setTimeout(() => {
                                    switch (悬浮窗类型) {
                                        case "反链悬浮窗":

                                            switch (悬浮窗出现的单独块是什么块) {
                                                case "嵌入块":
                                                    console.log("嵌入块");

                                                    var ts = v.parentElement.querySelectorAll(`[data-content="select * from blocks where id='${反链ID}'"]`);
                                                    for (let index = 0; index < ts.length; index++) {
                                                        const element = ts[index];
                                                        element.classList.add("blockhighlighting")///块高亮
                                                        if (index == 0) 高亮内容跳转到悬浮窗中间(element, v);
                                                    }
                                                    break;
                                                default:
                                                    var ts = v.parentElement.querySelectorAll(`[data-id='${反链ID}'][data-subtype]`);
                                                    for (let index = 0; index < ts.length; index++) {
                                                        const element = ts[index];

                                                        isFatherFather(element, (f) => {
                                                            if (f.getAttribute("contenteditable") != null && f.parentElement.getAttribute("data-node-id") == 反链ID所在的块ID) {
                                                                f.classList.add("blockhighlighting")//块高亮
                                                                element.classList.add("blockRefhighlighting", "def--mark")//引用高亮
                                                                高亮内容跳转到悬浮窗中间(element, v);
                                                                index = 9999999;//终止外部循环；
                                                                return true;
                                                            }
                                                            if (f.tagName == "TD" || f.tagName == "TR") {//针对处理表格
                                                                f.classList.add("blockhighlighting")//块高亮
                                                                element.classList.add("blockRefhighlighting", "def--mark")//引用高亮
                                                                if (index == 0) 高亮内容跳转到悬浮窗中间(f, v);
                                                                return true;
                                                            }
                                                            return false;
                                                        }, 4)
                                                    }
                                                    break;
                                            }
                                            break;
                                        case "引用悬浮窗":

                                            switch (悬浮窗出现的单独块是什么块) {
                                                case "嵌入块":
                                                    var ts = v.parentElement.querySelector(`[data-node-id='${引用ID}'][data-type="NodeBlockQueryEmbed"]`);
                                                    ts.classList.add("blockhighlighting")//引用高亮
                                                    高亮内容跳转到悬浮窗中间(ts, v);
                                                    break;
                                                default:
                                                    var ts = v.parentElement.querySelectorAll(`[data-node-id='${引用ID}']`);

                                                    //排除嵌入块，解决嵌入块点击出悬浮窗自动定位嵌入块问题
                                                    for (let index = 0; index < ts.length; index++) {
                                                        const element = ts[index];
                                                        if (element.parentElement.parentElement.getAttribute("data-type") == "NodeBlockQueryEmbed") {// 查看父级是否是嵌入块：以免定位到嵌入块中符合目标的块
                                                            continue;
                                                        } else {
                                                            element.classList.add("blockhighlighting")//引用高亮
                                                            高亮内容跳转到悬浮窗中间(element, v);
                                                            break;
                                                        }
                                                    }
                                                    break;
                                            }

                                            break;
                                        default:
                                            break;
                                    }
                                }, 500)

                            });
                            observer.observe(v, { attributes: false, childList: true, subtree: false });
                        }

                        function 不需要模拟点击的反链展示() {
                            switch (悬浮窗类型) {
                                case "反链悬浮窗":
                                    var protyle_content = v.parentElement;
                                    var ts = protyle_content.querySelectorAll(`[data-id='${反链ID}']`);
                                    for (let index = 0; index < ts.length; index++) {
                                        const element = ts[index];
                                        isFatherFather(element, (f) => {
                                            if (f.getAttribute("contenteditable") != null && f.parentElement.getAttribute("data-node-id") == 反链ID所在的块ID) {
                                                f.classList.add("blockhighlighting")//块高亮
                                                element.classList.add("blockRefhighlighting", "def--mark")//引用高亮
                                                高亮内容跳转到悬浮窗中间(element, v)
                                                index = 9999999;//终止外部循环；
                                                return true;
                                            }
                                            if (f.tagName == "TD" || f.tagName == "TR") {
                                                f.classList.add("blockhighlighting")//块高亮
                                                element.classList.add("blockRefhighlighting", "def--mark")//引用高亮
                                                if (index == 0) 高亮内容跳转到悬浮窗中间(element, v)
                                                return true;
                                            }
                                            return false;
                                        }, 4)
                                    }

                                    break;
                                case "引用悬浮窗":
                                    var protyle_content = v.parentElement;
                                    var ts = protyle_content.querySelector(`[data-node-id='${引用ID}']`);
                                    //ts.scrollIntoView(true);
                                    // ts.classList.add("blockRefhighlighting")//引用高亮

                                    break;
                                default:
                                    break;
                            }
                        }

                        function 高亮内容跳转到悬浮窗中间(element, v) {
                            setTimeout(() => {
                                element.scrollIntoView(false);
                                setTimeout(() => {
                                    var tim = v.parentElement;
                                    //console.log(tim, tim.scrollTop);
                                    if (tim.scrollTop != 0) {
                                        tim.scrollBy(0, tim.offsetHeight / 2);
                                    }
                                }, 100);
                                isFatherFather(v, (g) => {
                                    if (g.getAttribute("class") == "block__content") {
                                        g.scrollTo(0, 0);
                                        return true;
                                    }
                                    return false;
                                }, 5)
                            }, 100);
                        }

                    });



                }, 500)


            });
        }, 1000);

    }

}




/**----------------------------------隐藏显示所有思源悬浮窗--------------------------------------*/
//shift+alt+c 隐藏所有思源窗口
//shift+alt+v 显示所有思源窗口
//长按左键250毫秒 显示/隐藏所有思源窗口
function hideAndShowAllSiyuanFloatingWindows() {
    var L = 0;
    var n = 0;
    var id = 0;
    var time = 0;


    AddEvent(document.body, "mousedown", (e) => {
        if (e.button == 2) {
            id = setInterval(() => {
                if (time > 500) {
                    xiansyinc2()
                    clearInterval(id);
                }
                time += 100;

            }, 100);
        }
    });


    AddEvent(document.body, "mouseup", (e) => {
        if (e.button != 2) return;
        if (time > 500) {
            const targetNode = document.getElementById("commonMenu");

            const config = { attributes: true };


            const observer = new MutationObserver(mutations => {
                mutations.forEach(function (mutation) {
                    mutation.target.style.opacity = "0";
                })
            })

            observer.observe(targetNode, config);

            setTimeout(() => {
                observer.disconnect();
                targetNode.style.removeProperty("opacity");
                targetNode.setAttribute("class", "b3-menu fn__none");
            }, 500);

        } else {
            clearInterval(id);
        }
        time = 0;
    });

    AddEvent(document.body, "keydown", xiansyinc);

    function xiansyinc(e) {
        var items = document.querySelectorAll("[data-oid][data-pin='true']");

        if (items == null || items.length == 0) return;

        //兼容重启记忆思源悬浮窗功能，重启悬浮窗打开后隐藏。
        /* if (n == 0 && items[0].style.zIndex == "-99") {
             n++;
             items.forEach((v) => v.style.removeProperty('z-Index'));
             L = 0;
             return;
         }*/
        if (e.shiftKey && e.altKey && (e.key == "c" || e.key == "C")) {
            n++;
            items.forEach((v) => v.style.zIndex = "-99");
            L = 1;
        }
        else if (e.shiftKey && e.altKey && e.key == "v" || e.key == "V") {
            n++;
            items.forEach((v) => v.style.removeProperty('z-Index'));
            L = 0;
        }
    }

    function xiansyinc2() {
        var items = document.querySelectorAll("[data-oid][data-pin='true']");
        if (items == null || items.length == 0) return;

        //兼容重启记忆思源悬浮窗功能，重启悬浮窗打开后隐藏。
        if (n == 0 && items[0].style.zIndex == "-99") {
            n++;
            items.forEach((v) => v.style.removeProperty('z-Index'));
            L = 0;
            return;
        }

        if (L == 0) {
            n++;
            items.forEach((v) => v.style.zIndex = "-99");
            L = 1;
        } else {
            n++;
            items.forEach((v) => v.style.removeProperty('z-Index'));
            L = 0;
        }
    }

    var h = 0;
    setInterval(() => {
        var drag;
        if (isPcWindow()) {
            drag = document.getElementById("toolbarTxt");
        } else {
            drag = document.getElementById("drag");

        }
        if (h == 0) {
            var i = 0;
            (document.querySelectorAll("[data-oid]")).forEach((v) => {
                if (getComputedStyle(v).zIndex == "-99") i++;
            });
            if (i == 0) {
                no(drag); return;
            };
            drag.innerText = i + " 个悬浮窗被隐藏  按[shift+alt+v]键,或长按右键显示所有";
            h = 1;
        } else no(drag);
    }, 6000);
    function no(drag) {
        h = 0;
        var block = getFocusedBlock();
        if (block != null) {
            根据ID获取人类可读路径(block.getAttribute("data-node-id"), (v) => {
                if (v == null) return;
                for (let index = v.length; index >= 0; index--) {
                    const element = v[index];
                    if (element == "/") {
                        drag.innerText = v.substring(index + 1, v.length);
                        return;
                    }
                }
            });
        }
    }
}




/**----------------------思源悬浮窗字体增大按钮----------------------- */

function pinnedWindowFontMax() {
    //获取所有钉住悬浮窗设置按钮
    setInterval(() => {
        var syWindows = document.querySelectorAll(".block__popover.block__popover--move.block__popover--open:not([data-pin='false'])");

        syWindows.forEach((v) => {
            if (v.getAttribute("fontmax") != null) return;
            var pin = diguiTooONE_1(v, (a) => a.getAttribute("data-type") == "pin");
            v.setAttribute("fontmax", true);
            var FontMax = insertCreateBefore(pin, "span");
            FontMax.setAttribute("class", "block__icon");
            FontMax.setAttribute("data-type", "fontmax");
            FontMax.style.cursor = "pointer";
            FontMax.style.width = "14px";
            FontMax.style.height = "14px";
            FontMax.style.marginRight = "8px";
            FontMax.style.backgroundImage = "url(/appearance/themes/HBuilderX-Light/src/悬浮窗字体增大.svg)";
            FontMax.style.backgroundRepeat = "no-repeat";
            FontMax.style.backgroundPosition = "center";
            FontMax.style.backgroundSize = "80%";
            FontMax.style.filter = "opacity(0.5)";

            AddEvent(FontMax, "dblclick", (e) => {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
            AddEvent(FontMax, "click", (e) => {
                var iten = diguiTooONE_1(v, (g) => g.getAttribute("data-doc-type") != null);
                switch (v.getAttribute("fontmax_Size")) {
                    case null:
                        v.setAttribute("fontmax_Size", "140%");
                        iten.style.setProperty('font-size', '140%', 'important');
                        break;
                    case "140%":
                        v.setAttribute("fontmax_Size", "170%");
                        iten.style.setProperty('font-size', '170%', 'important');
                        break;
                    case "170%":
                        v.setAttribute("fontmax_Size", "200%");
                        iten.style.setProperty('font-size', '200%', 'important');
                        break;
                    case "200%":
                        v.removeAttribute("fontmax_Size");
                        iten.style.removeProperty("font-size");
                        break;
                }


            }, true);
        });

    }, 3000);
}








/**----------------------重新启动自动打开上次未关闭钉住悬浮窗----------------------- */

function reopenthePinnedWindow() {
    if (isPcWindow()) return;// 窗口模式下关闭功能
    setTimeout(() => {

        GetItem("PinnedWindowData", (_PinnedWindowData) => {
            var timefazhe = document.querySelector(".protyle-wysiwyg.protyle-wysiwyg--attr");

            if (_PinnedWindowData != null && timefazhe != null) {

                var zhezhao = addinsertCreateElement(document.body, "div");
                zhezhao.style.position = "fixed";
                zhezhao.style.height = "100%";
                zhezhao.style.width = "100%";
                //zhezhao.style.backgroundColor = "red";
                zhezhao.style.zIndex = "99999";

                var PinnedWindowData = _PinnedWindowData;
                var PinnedWindowDataLen = PinnedWindowData.length;
                var index = 0;
                var fun = [];
                var ID = setInterval(() => {
                    console.log("有" + PinnedWindowDataLen + "个记忆悬浮窗需要打开，已打开" + index + "个");
                    if (index == PinnedWindowDataLen) {
                        clearInterval(ID);
                        zhezhao.remove();
                        var items = document.querySelectorAll("[data-oid][data-pin='true']");
                        items.forEach((v) => v.style.zIndex = "-99");
                        fun.forEach((f) => f());

                        //隐藏所有悬浮窗
                        //if (items == null || items.length == 0) return;
                        return;
                    }
                    var v = PinnedWindowData[index];
                    index++;
                    var top = v["top"];
                    var left = v["left"];
                    var width = v["width"];
                    var height = v["height"];
                    var dataOid = v["data-oid"];
                    var windowmaxwidth = v["windowmaxwidth"];
                    var windowmaxheight = v["windowmaxheight"];
                    var fontmax_Size = v["fontmax_Size"];

                    var item = addinsertCreateElement(timefazhe, "span");
                    item.style.position = "fixed ";
                    item.style.top = (parseFloat(top) + 85) + "px";
                    item.style.left = (parseFloat(left) + 2.3) + "px";

                    item.setAttribute("class", "protyle-wysiwyg__embed");
                    item.setAttribute("data-id", dataOid);
                    item.style.zIndex = "9999";
                    item.click();
                    item.remove();

                    var time = 0;
                    var id = setInterval(() => {
                        var targetWindon = document.querySelector(`[data-oid="${dataOid}"]:not([data-pin='true'])`);
                        if (time > 3000) {
                            clearInterval(id);
                            return;
                        }
                        if (targetWindon == null) {
                            time += 100;
                            return;
                        }
                        diguiTooONE_1(targetWindon, (v) => {
                            if (v.getAttribute("aria-label") == "钉住") {
                                v.click();
                                fun.push(() => {

                                    if (windowmaxwidth == null) {
                                        targetWindon.style.width = width;
                                        targetWindon.style.height = height;
                                    } else {
                                        targetWindon.style.width = windowmaxwidth;
                                        targetWindon.style.height = windowmaxheight;
                                    }

                                    if (fontmax_Size) {
                                        var protyleContent = diguiTooONE_1(targetWindon, (g) => g.classList.contains("protyle-content"));
                                        targetWindon.setAttribute("fontmax_Size", fontmax_Size);
                                        protyleContent.firstElementChild.style.setProperty('font-size', fontmax_Size, 'important');
                                    }
                                });
                                return true;
                            }
                            return false;
                        });
                        clearInterval(id);
                    }, 0);
                }, 1000);
            }

        })



        //获取所有钉住悬浮窗记录保存必要信息
        setTimeout(() => {
            setInterval(() => {
                var timefazhe = document.querySelector(".protyle-wysiwyg.protyle-wysiwyg--attr");
                if (timefazhe == null) {
                    return;
                }
                var syWindows = document.querySelectorAll(".block__popover.block__popover--move.block__popover--open:not([data-pin='false'])");

                if (syWindows.length == 0) {
                    RemoveItem("PinnedWindowData");
                    return;
                }

                var PinnedWindowData = [];
                for (let index = 0; index < syWindows.length; index++) {
                    const element = syWindows[index];
                    var dataOid = diguiTooONE_1(element, (v) => v.classList.contains("protyle-breadcrumb__item--active"));//搜索面包屑焦点块
                    if (dataOid == null) {
                        dataOid = element.getAttribute("data-oid");//如果没有就悬浮窗id。
                    } else {
                        dataOid = dataOid.getAttribute("data-node-id")//面包屑焦点块id记录
                    }
                    var Data = {
                        "top": element.style.top,
                        "left": element.style.left,
                        "height": element.style.height,
                        "width": element.style.width,
                        "data-oid": dataOid,
                        "windowmaxwidth": element.getAttribute("windowmaxwidth") == null ? getComputedStyle(element).width : element.getAttribute("windowmaxwidth"),
                        "windowmaxheight": element.getAttribute("windowmaxheight") == null ? getComputedStyle(element).height : element.getAttribute("windowmaxheight"),
                        "fontmax_Size": element.getAttribute("fontmax_Size")
                    };

                    PinnedWindowData.push(Data);
                }
                SetItem("PinnedWindowData", PinnedWindowData);
            }, 3000);
        }, 5000)
    }, 0);

}







//+++++++++++++++++++++++++++++++++思源API++++++++++++++++++++++++++++++++++++
//思源官方API文档  https://github.com/siyuan-note/siyuan/blob/master/API_zh_CN.md



async function queryAPI(sqlstmt, then, obj = null) {
    await 向思源请求数据("/api/query/sql", {
        stmt: sqlstmt
    }).then((v) => then(v.data, obj))
}

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

async function 更新块(id, dataType, data, then = null, obj = null) {
    await 向思源请求数据('/api/block/updateBlock', {
        id: id,
        dataType: dataType,
        data: data,
    }).then((v) => {
        if (then) then(v.data, obj);
    })
}

async function 设置思源块属性(内容块id, 属性对象) {
    let url = '/api/attr/setBlockAttrs'
    return 解析响应体(向思源请求数据(url, {
        id: 内容块id,
        attrs: 属性对象,
    }))
}

async function 获取块属性(内容块id, then = null, obj = null) {
    let url = '/api/attr/getBlockAttrs'
    return 向思源请求数据(url, {
        id: 内容块id
    }).then((v) => {
        if (then) then(v.data, obj);
    })
}

async function 向思源请求数据(url, data) {
    const response = await fetch(url, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
            Authorization: `Token ''`,
        }
    });
    if (response.status === 200)
        return await response.json();
    else return null;
}

async function 解析响应体(response) {
    let r = await response
    return r.code === 0 ? r.data : null
}


async function 获取文件(path, then = null, obj = null) {
    let url = '/api/file/getFile';
    await 向思源请求数据(url, {
        path: path
    }).then((v) => {
        if (then) then(v, obj);
    });
}


/**
 * 
 * @param {*} notebookID 笔记本id
 * @param {*} dataPath 父文档路径
 * @param {*} sortType 文档排序类型
 * @param {*} then 回调函数
 * @param {*} obj 传递对象
 */
async function 获取子文档数据(notebookID, dataPath, sortType, then = null, obj = null) {
    let url = "/api/filetree/listDocsByPath";
    await 向思源请求数据(url, {
        notebook: notebookID,
        path: dataPath,
        sort: sortType,
    }).then((v) => {
        if (then) then(v.data.files, obj);
    });
}




async function 写入文件(path, filedata, then = null, obj = null, isDir = false, modTime = Date.now()) {

    let blob = new Blob([filedata]);
    let file = new File([blob], path.split('/').pop());
    let formdata = new FormData();
    formdata.append("path", path);
    formdata.append("file", file);
    formdata.append("isDir", isDir);
    formdata.append("modTime", modTime);
    await fetch(
        "/api/file/putFile", {
        body: formdata,
        method: "POST",
        headers: {
            Authorization: `Token ""`,
        },
    }).then((v) => {
        console.log(v);
        setTimeout(() => {
            if (then) then(obj);
        }, 200)
    });
}
async function 写入文件2(path, filedata, then = null, obj = null, isDir = false, modTime = Date.now()) {

    let blob = new Blob([filedata]);
    let file = new File([blob], path.split('/').pop());
    let formdata = new FormData();
    formdata.append("path", path);
    formdata.append("file", file);
    formdata.append("isDir", isDir);
    formdata.append("modTime", modTime);
    const response = await fetch(
        "/api/file/putFile", {
        body: formdata,
        method: "POST",
        headers: {
            Authorization: `Token ""`,
        },
    });

    if (response.status === 200) {
        if (then) then(obj);
    }
}


//+++++++++++++++++++++++++++++++++辅助API++++++++++++++++++++++++++++++++++++


/**
 * 方便为主题功能添加开关按钮，并选择是否拥有记忆状态
 * @param {*} ButtonID 按钮ID。
 * @param {*} ButtonTitle 按钮作用提示文字。
 * @param {*} ButtonFunctionType 按钮功能类型。:EnumButtonFunctionType 枚举
 * @param {*} ButtonCharacteristicType 按钮特性类型。:EnumButtonCharacteristicType 枚举
 * @param {*} NoButtonSvg 按钮激活Svg图标路径
 * @param {*} OffButtonSvg 按钮未激活Svg图标路径
 * @param {*} OnClickRunFun 按钮开启执行函数
 * @param {*} OffClickRunFun 按钮关闭执行函数
 * @param {*} Memory 是否设置记忆状态 true为是留空或false为不设置记忆状态。
 */
function HBuiderXThemeToolbarAddButton(ButtonID, ButtonFunctionType, ButtonCharacteristicType, ButtonTitle, ONButtonSvgURL, OffButtonSvgURL, OnClickRunFun, OffClickRunFun, Memory = false) {


    //确认主题功能区toolbar是否存在，不存在就创建
    var HBuiderXToolbar = document.getElementById("HBuiderXToolbar");
    if (HBuiderXToolbar == null) {
        if (isPc()) {
            HBuiderXToolbar = document.createElement("div");
            HBuiderXToolbar.id = "HBuiderXToolbar";
            HBuiderXToolbar.style.marginRight = "3px";
            HBuiderXToolbar.style.marginTop = "1px";
            document.getElementById("windowControls").parentElement.insertBefore(HBuiderXToolbar, document.getElementById("windowControls"));

            HBuiderXToolbar.style.width = "35px";
            HBuiderXToolbar.style.overflow = "hidden";
            AddEvent(HBuiderXToolbar, "mouseover", () => { HBuiderXToolbar.style.width = "auto" })
            AddEvent(HBuiderXToolbar, "mouseout", () => { HBuiderXToolbar.style.width = "35px" })

        } else if (isBrowser()) {
            HBuiderXToolbar = insertCreateAfter(document.getElementById("barMode"), "div", "HBuiderXToolbar");
            HBuiderXToolbar.style.marginRight = "3px";
            HBuiderXToolbar.style.marginTop = "1px";

            HBuiderXToolbar.style.width = "35px";
            HBuiderXToolbar.style.overflow = "hidden";
            AddEvent(HBuiderXToolbar, "mouseover", () => { HBuiderXToolbar.style.width = "auto" })
            AddEvent(HBuiderXToolbar, "mouseout", () => { HBuiderXToolbar.style.width = "35px" })
        }
        else if (isPcWindow()) {
            HBuiderXToolbar = insertCreateBefore(document.getElementById("minWindow"), "div", "HBuiderXToolbar");
            HBuiderXToolbar.style.position = "absolute";
            HBuiderXToolbar.style.height = "25px";
            HBuiderXToolbar.style.paddingTop = "2px";
            HBuiderXToolbar.style.overflowY = "scroll";
            HBuiderXToolbar.style.right = "77px";

            HBuiderXToolbar.style.width = "35px";
            HBuiderXToolbar.style.overflow = "hidden";
            AddEvent(HBuiderXToolbar, "mouseover", () => { HBuiderXToolbar.style.width = "auto" })
            AddEvent(HBuiderXToolbar, "mouseout", () => { HBuiderXToolbar.style.width = "35px" })
        } else if (isPhone()) {
            HBuiderXToolbar = insertCreateBefore(document.getElementById("toolbarEdit"), "div", "HBuiderXToolbar");
            HBuiderXToolbar.style.position = "relative";
            HBuiderXToolbar.style.height = "25px";
            HBuiderXToolbar.style.overflowY = "scroll";
            HBuiderXToolbar.style.paddingTop = "7px";
            HBuiderXToolbar.style.marginRight = "9px";
        }
    }

    var addButton = addinsertCreateElement(HBuiderXToolbar, "div");
    addButton.style.width = "17px";
    addButton.style.height = "100%";
    addButton.style.float = "left";
    addButton.style.marginLeft = "10px";
    addButton.style.backgroundImage = "url(" + OffButtonSvgURL + ")";
    addButton.style.backgroundRepeat = "no-repeat";
    addButton.style.backgroundPosition = "left top";
    addButton.style.backgroundSize = "100%";
    addButton.style.cursor = "pointer";

    addButton.setAttribute("title", ButtonTitle);
    addButton.id = ButtonID;

    var offon = "0";
    var isclick = 0;

    var broadcastData_off = { "Value": "ButtonControl", "ControlButtonIDs": [{ "ButtonID": ButtonID, "ControlFun": "ControlFun_off" }] };
    var broadcastData_on = { "Value": "ButtonControl", "ControlButtonIDs": [{ "ButtonID": ButtonID, "ControlFun": "ControlFun_on" }] };

    if (Memory) {
        GetItem(ButtonID, (v) => {
            offon = v;
            if (offon == "1") {
                _on();
            } else if (offon == null || offon == undefined) {
                offon = "0";
            }
        });

    }

    AddEvent(addButton, "click", () => {
        if (isBrowser() || isPhone()) {
            if (offon == "0" || offon == null || offon == undefined) {
                _on();
                return;
            }

            if (offon == "1") {
                _off();
                return;
            }
        } else {
            window.HBuilderXLight.ButtonControl[ButtonID].Isclick = isclick = 1;
            if (offon == "0" || offon == null || offon == undefined) {
                window.HBuilderXLight.broadcast(broadcastData_on);
                return;
            }

            if (offon == "1") {
                window.HBuilderXLight.broadcast(broadcastData_off);
                return;
            }
        }
    });


    AddEvent(addButton, "mouseover", () => {
        if (offon == "0" || offon == null || offon == undefined) {
            addButton.style.filter = "drop-shadow(rgb(0, 0, 0) 0px 0)";
        }
    });
    AddEvent(addButton, "mouseout", () => {
        if (offon == "0" || offon == null || offon == undefined) {
            addButton.style.filter = "none";
        }
    });


    function buttonCharacteristicDispose() {
        if (isBrowser() || isPhone()) {

            if (ButtonFunctionType == 2) {

                var topicfilterButtons = [];
                var ButtonControl = window.HBuilderXLight.ButtonControl;

                for (var t in ButtonControl) {
                    if (t != ButtonID && ButtonControl[t].ButtonFunctionType == 2 && ButtonControl[t].OffOn == "1") {
                        topicfilterButtons.push(ButtonControl[t]);
                    }
                }

                if (topicfilterButtons.length == 0) {
                    return;
                }
                var index = (topicfilterButtons.length) - 1;
                var id = setInterval(() => {
                    if (index >= 0) {
                        const element = topicfilterButtons[index];
                        element["ControlFun_off"]();
                    } else {
                        clearInterval(id);
                    }
                    index--;
                }, 300)
            }
        } else {
            switch (ButtonCharacteristicType) {
                case 2:
                    if (ButtonFunctionType == 2) {

                        var topicfilterButtons = [];
                        var ButtonControl = window.HBuilderXLight.ButtonControl;

                        for (var t in ButtonControl) {
                            if (t != ButtonID && ButtonControl[t].ButtonFunctionType == 2 && ButtonControl[t].OffOn == "1") {
                                ButtonControl[t].Isclick = 1;
                                topicfilterButtons.push(ButtonControl[t]);
                            }
                        }

                        if (topicfilterButtons.length == 0) {
                            window.HBuilderXLight.ButtonControl[ButtonID].Isclick = isclick = 0;
                            return;
                        }
                        if (window.HBuilderXLight.ButtonControl[ButtonID].Isclick == 1) {
                            var index = (topicfilterButtons.length) - 1;
                            var id = setInterval(() => {
                                if (index >= 0) {
                                    const element = topicfilterButtons[index];
                                    element["ControlFun_off"]();
                                } else {
                                    clearInterval(id);
                                    window.HBuilderXLight.ButtonControl[ButtonID].Isclick = isclick = 0;
                                }
                                index--;
                            }, 300)
                        } else {
                            for (let index = 0; index < topicfilterButtons.length; index++) {
                                const element = topicfilterButtons[index];
                                element["ControlFun_off"]();
                            }
                        }
                    }
                    break;

                default:
                    break;
            }
        }
    }

    function _off() {
        addButton.style.backgroundImage = "url(" + OffButtonSvgURL + ")";
        addButton.style.filter = "none";
        window.HBuilderXLight.ButtonControl[ButtonID].OffOn = offon = "0";

        if (isBrowser() || isPhone()) {
            SetItem(ButtonID, "0", () => {
                OffClickRunFun(addButton);
            });
        } else {
            if (Memory && window.HBuilderXLight.ButtonControl[ButtonID].Isclick == 1) {
                SetItem(ButtonID, "0", () => {
                    OffClickRunFun(addButton);
                    window.HBuilderXLight.ButtonControl[ButtonID].Isclick = isclick = 0;
                });
            } else {
                OffClickRunFun(addButton);
                window.HBuilderXLight.ButtonControl[ButtonID].Isclick = isclick = 0;
            };
        }
    }
    function _on() {
        addButton.style.backgroundImage = "url(" + ONButtonSvgURL + ")";
        addButton.style.filter = "drop-shadow(rgb(0, 0, 0) 0px 0)";
        window.HBuilderXLight.ButtonControl[ButtonID].OffOn = offon = "1";

        if (isBrowser() || isPhone()) {
            SetItem(ButtonID, "1", () => {
                OnClickRunFun(addButton);
                buttonCharacteristicDispose();
            });
        } else {

            if (Memory && window.HBuilderXLight.ButtonControl[ButtonID].Isclick == 1) {
                SetItem(ButtonID, "1", () => {
                    OnClickRunFun(addButton);
                    buttonCharacteristicDispose();
                });
            } else {
                OnClickRunFun(addButton);
                buttonCharacteristicDispose();
            }
        }
    }

    window.HBuilderXLight.ButtonControl[ButtonID] = {
        "ControlFun_off": _off,
        "ControlFun_on": _on,
        "OffOn": offon,
        "Isclick": isclick,
        "ButtonFunctionType": ButtonFunctionType,
        "ButtonCharacteristicType": ButtonCharacteristicType
    }
}

function setItem(key, value) {
    window.HBuilderXLight.config[key] = value;
}

function getItem(key) {
    return window.HBuilderXLight.config[key] === undefined ? null : window.HBuilderXLight.config[key];
}

function removeItem(key) {
    delete window.HBuilderXLight.config[key];
}


function SetItem(key, value, fun = null) {
    获取文件(ConfigPath, (config) => {
        if (config) {//不存在配置文件就要创建
            config[key] = value;
            //console.log(config);
            写入文件2(ConfigPath, JSON.stringify(config, undefined, 4), fun);
        } else {
            写入文件2(ConfigPath, JSON.stringify({ "HBuilderXLight": 1, key: value }, undefined, 4), fun);
        }
    });
}

function GetItem(key, then = null) {

    获取文件(ConfigPath, (config) => {
        if (config) {//不存在配置文件就要创建
            // console.log(config[key]);
            try {

                if (then) then(config[key]);
            } catch (error) {
                if (then) then(null);
            }
        } else {
            写入文件2(ConfigPath, JSON.stringify({ "HBuilderXLight": 1 }, undefined, 4), then(null));
        }
    });
}

function RemoveItem(key, fun = null) {
    获取文件(ConfigPath, (config) => {
        if (config) {//不存在配置文件就要创建
            delete config[key];
            //console.log(config);
            写入文件2(ConfigPath, JSON.stringify(config, undefined, 4), fun);
        } else {
            写入文件2(ConfigPath, JSON.stringify({ "HBuilderXLight": 1 }, undefined, 4), fun);
        }
    });
}





/**
 * 在DIV光标位置插入内容
 * @param {*} content 
 */
function insertContent(content) {
    if (content) {
        var sel = window.getSelection();
        if (sel.rangeCount > 0) {
            var range = sel.getRangeAt(0); //获取选择范围
            range.deleteContents(); //删除选中的内容
            var el = document.createElement("div"); //创建一个空的div外壳
            el.innerHTML = content; //设置div内容为我们想要插入的内容。
            var frag = document.createDocumentFragment(); //创建一个空白的文档片段，便于之后插入dom树
            var node = el.firstChild;
            var lastNode = frag.appendChild(node);
            range.insertNode(frag); //设置选择范围的内容为插入的内容
            var contentRange = range.cloneRange(); //克隆选区

            contentRange.setStartAfter(lastNode); //设置光标位置为插入内容的末尾
            contentRange.collapse(true); //移动光标位置到末尾
            sel.removeAllRanges(); //移出所有选区
            sel.addRange(contentRange); //添加修改后的选区

        }
    }
}


/**
 * 获取DIV文本光标位置
 * @param {*} element 
 * @returns 
 */
function getPosition(element) {
    var caretOffset = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;
    if (typeof win.getSelection != "undefined") {
        //谷歌、火狐
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            var range = sel.getRangeAt(0);
            var preCaretRange = range.cloneRange(); //克隆一个选区
            preCaretRange.selectNodeContents(element); //设置选区的节点内容为当前节点
            preCaretRange.setEnd(range.endContainer, range.endOffset); //重置选中区域的结束位置
            caretOffset = preCaretRange.toString().length;
        }
    } else if ((sel = doc.selection) && sel.type != "Control") {
        //IE
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
};
/**
 * 在指定DIV索引位置设置光标
 * @param {*} element 
 * @param {*} index 
 */
function setCursor(element, index) {
    var codeEl = element.firstChild;
    var selection = window.getSelection();
    // 创建新的光标对象
    let range = selection.getRangeAt(0);
    // 光标对象的范围界定为新建的代码节点
    range.selectNodeContents(codeEl)
    // 光标位置定位在代码节点的最大长度
    // console.log(codeEl.length);
    range.setStart(codeEl, index);
    // 使光标开始和光标结束重叠
    range.collapse(true)
    selection.removeAllRanges()
    selection.addRange(range)
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




/**简单判断目前思源是否是手机模式 */
function isPhone() {
    return document.getElementById("toolbarEdit") != null && document.getElementById("toolbar") == null;
}
/**简单判断目前思源是否是pc窗口模式 */
function isPcWindow() {
    return document.body.classList.contains("body--window");
}
/**简单判断目前思源是pc模式 */
function isPc() {
    return document.getElementById("windowControls") != null && document.getElementById("toolbar") != null && !document.getElementById("toolbar").classList.contains("toolbar--browser");
}
/**简单判断目前思源是否是浏览器模式 */
function isBrowser() {
    return document.getElementById("toolbar") != null && document.getElementById("toolbar").classList.contains("toolbar--browser");
}

/**
 * 加载样式文件
 * @param {string} url 样式地址
 * @param {string} id 样式 ID
 */
function loadStyle(url, id, cssName) {

    var headElement = document.head;

    let style = document.getElementById(id);
    if (id != null) {
        if (style) headElement.removeChild(style);
    }

    style = document.createElement('link');
    if (id != null) style.id = id;


    style.setAttribute('type', 'text/css');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', url);
    if (cssName != null) style.setAttribute("class", cssName);
    headElement.appendChild(style);
    return style;
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
 * 思源行级元素属性解析看是否包含那种行级元素类型
 * @param {} attributes 
 * @param {*} attribute 
 * @returns 
 */
function attributesContains(attributes, attribute) {
    if (attribute == true) return;
    if (attributes == null) return false;
    var arr = attributes.split(" ");
    if (arr.length != 0) {
        arr.forEach((v) => {
            if (v == attribute) attribute = true;
        });
        return attribute == true ? true : false;
    } else {
        return attributes == attribute;
    }
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
 * 获得当前浏览器缩放系数 默认值为1
 * @returns 
 */
function detectZoom() {
    var ratio = 0, screen = window.screen, ua = navigator.userAgent.toLowerCase();
    if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
    } else if (~ua.indexOf('msie')) {
        if (screen.deviceXDPI && screen.logicalXDPI) {
            ratio = screen.deviceXDPI / screen.logicalXDPI;
        }
    } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        ratio = window.outerWidth / window.innerWidth;
    }
    if (ratio) {
        ratio = Math.round(ratio * 100);
    }
    return ratio * 0.01;
};
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
    return target;

    function digui(elem) {
        var child = elem.children;
        if (child.length == 0) return;

        for (let index = 0; index < child.length; index++) {
            const element2 = child[index];
            if (judgeFun(element2)) {
                target.push(element2);
                digui(element2);
            } else {
                digui(element2);
            }
        }
    }
};

/**
* 递归DOM元素查找深度子级的第一个符合条件的元素 - 子级的子级深度搜索赶紧后在搜索下一个子级
* @param {*} element 要查找DOM元素
* @param {*} judgeFun 查找函数: fun(v) return true or false
* @returns element
*/
function diguiTooONE_1(element, judgeFun, xianz = 999) {

    if (element == null) return null;
    if (judgeFun == null) return null;
    var i = xianz <= 0 ? 10 : xianz;

    return digui(element);

    function digui(elem) {

        if (i <= 0) return null;
        i--;

        var child = elem.children;
        if (child.length == 0) return null;

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
* 递归DOM元素查找深度子级的第一个符合条件的元素-同层全部筛选一遍在依次深度搜索。
* @param {*} element 要查找DOM元素
* @param {*} judgeFun 查找函数 : fun(v) return true or false
* @param {*} xianz 限制递归最大次数
* @returns element
*/
function diguiTooONE_2(element, judgeFun, xianz = 999) {

    if (element == null || element.firstElementChild == null) return null;
    if (judgeFun == null) return null;
    var i = xianz <= 0 ? 10 : xianz;
    return digui(element);

    function digui(elem) {

        if (i <= 0) return null;
        i--;

        var child = elem.children;
        var newchild = [];
        for (let index = 0; index < child.length; index++) {
            const element2 = child[index];
            if (judgeFun(element2)) {
                return element2;
            } else {
                if (newchild.firstElementChild != null) newchild.push(element2);
            }
        }

        for (let index = 0; index < newchild.length; index++) {
            const element2 = newchild[index];
            var item = digui(element2);
            if (item == null) continue;
            return item;
        }
        return null;
    }
}
/**
 * 不断查找元素父级的父级知道这个父级符合条件函数
 * @param {*} element 起始元素
 * @param {*} judgeFun 条件函数
 * @param {*} upTimes 限制向上查找父级次数
 * @returns 返回符合条件的父级，或null
 */
function isFatherFather(element, judgeFun, upTimes) {
    var i = 0;
    for (; ;) {
        if (!element) return null;
        if (upTimes < 1 || i >= upTimes) return null;
        if (judgeFun(element)) return element;
        element = element.parentElement;
        i++;
    }
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
 * 获得指定块位于的编辑区
 * @params {HTMLElement} 
 * @return {HTMLElement} 光标所在块位于的编辑区
 * @return {null} 光标不在块内
 */
function getTargetEditor(block) {
    while (block != null && !block.classList.contains('protyle-content')) block = block.parentElement;
    return block;
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
 * body全局事件频率优化执行
 * @param {*} eventStr 那种事件如 "mouseover"
 * @param {*} fun(e) 执行函数,e：事件对象
 * @param {*} accurate 精确度：每隔多少毫秒检测一次触发事件执行
 * @param {*} delay 检测到事件触发后延时执行的ms
 * @param {*} frequency 执行后再延时重复执行几次
 * @param {*} frequencydelay 执行后再延时重复执行之间的延时时间ms
 */
function BodyEventRunFun(eventStr, fun, accurate = 100, delay = 0, frequency = 1, frequencydelay = 16) {
    var isMove = true;
    var _e = null;
    AddEvent(document.body, eventStr, (e) => { isMove = true; _e = e })
    setInterval(() => {
        if (!isMove) return;
        isMove = false;
        setTimeout(() => {
            fun(_e);
            if (frequency == 1) return;
            if (frequencydelay < 16) frequencydelay = 16;

            var _frequencydelay = frequencydelay;
            for (let index = 0; index < frequency; index++) {
                setTimeout(() => { fun(_e); }, frequencydelay);
                frequencydelay += _frequencydelay;
            }

        }, delay);
    }, accurate);
}

/**
 * 为元素添加思源悬浮打开指定ID块内容悬浮窗事件
 * @param {*} element 绑定的元素
 * @param {*} id 悬浮窗内打开的块的ID
 */
function suspensionToOpenSiyuanSuspensionWindow(element, id) {
    element.setAttribute("data-defids", '[""]');
    element.classList.add("popover__block");
    element.setAttribute("data-id", id);
}

/**
 * 为元素添加思源点击打开指定ID块内容悬浮窗事件
 * @param {*} element 绑定的元素
 * @param {*} id 悬浮窗内打开的块的ID
 */
function clickToOpenSiyuanFloatingWindow(element, id) {
    element.classList.add("protyle-wysiwyg__embed");
    element.setAttribute("data-id", id);
}


/**
 * 安全While循环
 * frequency:限制循环次数
 * 返回值不等于null终止循环
 */
function WhileSafety(fun, frequency = 99999) {
    var i = 0;
    if (frequency <= 0) {
        console.log("安全循环次数小于等于0")
        return;
    }
    while (i < frequency) {
        var _return = fun();
        if (_return != null || _return != undefined) return _return;
        i++;
    }
}
/**设置思源块展开 */
function setBlockfold_0(BlockId) {
    设置思源块属性(BlockId, { "fold": "0" });
}

/**设置思源块折叠 */
function setBlockfold_1(BlockId) {
    设置思源块属性(BlockId, { "fold": "1" });
}

/**
    * 得到光标编辑状态下的显示commonMenu菜单;
    * @returns 
    */
function getcommonMenu_Cursor() {
    if ((window.getSelection ? window.getSelection() : document.selection.createRange().text).toString().length != 0) return null;
    var commonMenu = document.querySelector("#commonMenu:not(.fn__none)");
    if (commonMenu == null) return null;
    if (commonMenu.firstChild == null) return null;

    var b3menu__labels = commonMenu.querySelectorAll(".b3-menu__label");
    var i = 0;
    for (let index = 0; index < b3menu__labels.length; index++) {
        const element = b3menu__labels[index];
        if (element.innerText == "粘贴" || element.innerText == "粘贴为纯文本" || element.innerText == "粘贴转义文本") {
            i++;
        }
    }
    if (i == 3) {
        return commonMenu;
    }
    return null;
}

/**
    * 得到光标选中编辑状态下的显示commonMenu菜单;
    * @returns 
    */
function getcommonMenu_Cursor2() {
    if ((window.getSelection ? window.getSelection() : document.selection.createRange().text).toString().length != 0) {
        var commonMenu = document.querySelector("#commonMenu:not(.fn__none)");
        var b3menu__labels = commonMenu.querySelectorAll(".b3-menu__label");
        var i = 0;
        for (let index = 0; index < b3menu__labels.length; index++) {
            const element = b3menu__labels[index];
            if (element.innerText == "粘贴" || element.innerText == "粘贴为纯文本" || element.innerText == "粘贴转义文本") {
                i++;
            }
        }
        if (i == 3) {
            return commonMenu;
        }
    };
    return null;
}


function getNotebookID(docId, then) {
    queryAPI(`SELECT box, path FROM blocks WHERE id = '${docId}'`, (g) => {
        let notebook = g[0].box;
        then(notebook);
    });
}

function getDocPath(docId, then) {
    queryAPI(`SELECT box, path FROM blocks WHERE id = '${docId}'`, (g) => {
        let thisDocPath = g[0].path;
        then(thisDocPath);
    });
}





/**++++++++++++++++++++++++++++++++按需调用++++++++++++++++++++++++++++++ */

function 调整新窗口头栏位置() {
    if (!document.body.classList.contains("body--window")) return;
    const toolbar__window = document.querySelector("body > .toolbar__window");
    const layouts = document.getElementById("layouts")?.parentElement;
    var toolbarTxt = insertCreateBefore(toolbar__window.firstElementChild, "div", "toolbarTxt");
    if (toolbar__window && layouts) {
        document.body.insertBefore(toolbar__window, layouts);
    }


    /**窗口一些元素调整 */
    setTimeout(() => {
        var layoutTabBarReadonlys = document.querySelectorAll(".layout-tab-bar.layout-tab-bar--readonly.fn__flex-1");
        for (let index = 0; index < layoutTabBarReadonlys.length; index++) layoutTabBarReadonlys[index].style.paddingRight = "0px";
    }, 300);



    /**更改子窗口标题 */
    let _id = /^\d{14}\-[0-9a-z]{7}$/;
    let _url = /^siyuan:\/\/blocks\/(\d{14}\-[0-9a-z]{7})\/*(?:(?:\?)(\w+=\w+)(?:(?:\&)(\w+=\w+))*)?$/;
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
    var reg = new RegExp('<[^>]+>', 'gi');  //过滤所有的html标签，不包括内容

    var title = document.querySelector("title");
    title.innerText = "[#] 思源子窗口 - HBuilderX-Light [#]";
    toolbarTxt.innerText = "[#] 思源子窗口 - HBuilderX-Light [#]";

    AddEvent(document.body, "click", (e) => {
        //console.log(e);

        var title = document.querySelector("title");
        var TargetBlockID = getTargetBlockID(e.target);
        if (TargetBlockID == null) {
            title.innerText = "[#] 思源子窗口 - HBuilderX-Light [#]";
            toolbarTxt.innerText = "[#] 思源子窗口 - HBuilderX-Light [#]";
            return;
        };
        titleTxt(TargetBlockID);
    })

    function titleTxt(TargetBlockID) {

        以id获取文档聚焦内容(TargetBlockID, (v) => {
            var htmltxt = v.content;

            var element = document.createElement("div");
            element.innerHTML = htmltxt;

            htmltxt = diguiTooONE_1(element, (v) => {
                return v.getAttribute("contenteditable") == "true";
            })

            var txt = (htmltxt.innerText).replace(reg, '');
            if (txt == "​" || txt == "") {
                txt = "[#] 思源子窗口 - HBuilderX-Light [#]";
                根据ID获取人类可读路径(TargetBlockID, (v) => {
                    title.innerText = "[#] " + v.substring(1, v.length) + " [#]";
                    toolbarTxt.innerText = "[#] " + v.substring(1, v.length) + " [#]";

                })
                return;
            }
            if (txt.length > 25) {
                title.innerText = "[#] " + txt.substring(0, 25) + "...";
                toolbarTxt.innerText = "[#] " + txt.substring(0, 25) + "...";

            } else {
                title.innerText = "[#] " + txt + " [#]";
                toolbarTxt.innerText = "[#] " + txt + " [#]";
            }
            element.remove();
        });
    }
}



调整新窗口头栏位置();
var Funs;

if (isPhone()) {

    Funs = [
        adjustDocumentLabelsWhile,//调整文档头部区域，在emj 标签，头图 各种情况下的布局
        MiddleKeyExpansionClosed_Head_List,//鼠标中键标题、列表文本折叠/展开
        simpleRemarks,//简单备注
        FirstLineInDent,//开启段落自动缩进
        Removefirstlineindent,//开启段落首行缩进的情况下，双击段落尾部去除缩进
        listMarked,//列表块醒目增强。
        BlackWhiteButton,//主题黑白
        ReduceColorContrast,//主题降低颜色对比度
        InverseButton,//主题反色 
        HueRotateButton,//主题色相旋转
        hyperlinkClickColorChange,//点击过的思源超链接超链接会变色
        dblclickToReleaseReadOnly,//双击解除只读模式
        setAliasName,//右键快速设置命名、别名
        () => console.log("==============>HBuilderX-Light主题:附加CSS和特性JS_已经执行<==============")
    ];
} else {
    Funs = [
        adjustDocumentLabelsWhile,//调整文档头部区域，在emj 标签，头图 各种情况下的布局
        rundynamicUnderline,//为文档标题创建动态下划线
        showDocumentCreationDate,//为打开文档标题下面显示文档创建日期
        displayParentChildDocuments2,//为文档展示父子文档
        VirtualReferenceEnhancements,//将同名虚拟引用的悬浮窗，本笔记相关内容放到前面
        autoOpenList,//自动展开悬浮窗内折叠列表（第一次折叠）
        collapsedListPreview,//折叠列表内容预览查看
        MiddleKeyExpansionClosed_Head_List,//鼠标中键标题、列表文本折叠/展开
        MiddleKeyExpansionClosed_Outline,//鼠标中键展开折叠大纲
        simpleRemarks,//简单备注
        HighlightBecomesHidden,//高亮变隐藏
        FirstLineInDent,//开启段落自动缩进
        Removefirstlineindent,//开启段落首行缩进的情况下，双击段落尾部去除缩进
        listMarked,//列表块醒目增强。
        moreCompact,//主题文档树，大纲列表等其他列表更加紧凑
        automaticSerialNumber,//标题序号
        SuspendedWindowNoSection,//思源悬浮窗检测到单个段落块，单个列表项，面包屑前一级展示
        BlackWhiteButton,//主题黑白
        ReduceColorContrast,//主题降低颜色对比度
        InverseButton,//主题反色 
        HueRotateButton,//主题色相旋转
        hyperlinkClickColorChange,//点击过的思源超链接超链接会变色
        theFloatingWindowIsClosed,//思源悬浮窗头栏中键关闭
        zoomOutToRestoreTheFloatingWindow,//钉住悬浮窗增强
        setAliasName,//右键快速设置命名、别名
        hideAndShowAllSiyuanFloatingWindows,//隐藏显示所有思源悬浮
        reopenthePinnedWindow,//重新启动自动打开上次未关闭钉住悬浮窗
        pinnedWindowFontMax,//思源悬浮窗字体增大按钮
        () => loadStyle("/appearance/themes/HBuilderX-Light/customizeStyle/customizeCss.css", "customizeCss"),
        () => console.log("==============>HBuilderX-Light主题:附加CSS和特性JS_已经执行<==============")
    ];
}

setTimeout(() => {
    Funs.reverse();
    var index = (Funs.length) - 1;
    var ID = setInterval(() => {

        if (index >= 0) {
            Funs[index]();
        } else {
            clearInterval(ID);

            //作者土嗨自用
            loadStyle("/appearance/themes/HBuilderX-Light/personal/personal.css", "personal");
            loadScript("/appearance/themes/HBuilderX-Light/personal/personal.js");

        }
        index--;
    }, 100)
}, 1000)




