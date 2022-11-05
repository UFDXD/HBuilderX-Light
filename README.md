# HBuilderX-Light 思源自用主题

## 主题介绍

这是一个“护眼的绿柔题”（但是主题拥有**滤镜**功能，可以模拟达到夜间黑暗主题效果和其他颜色效果）。

推荐win10用户可以开启系统自带护眼模式，配合这个主题夜间使用会越来越柔绿，有很好的护眼效果（作者自己也在用）。

本主题承诺遵守“并不存在”的思源默认字体颜色规范，绝不更改思源官方默认主题字体配色。

本主题推荐使用 [Source Han Sans](https://github.com/adobe-fonts/source-han-sans) 开源字体。

注意：若页面宽度出现问题请打开思源**自适应宽度**。

注意：若主题异常请重置思源窗口。

注意：请使用Chrome浏览器内核的其他系列浏览器，火狐等其他内核浏览器没有特意适配。

本主题不定期更新，更新详情请移步 https://github.com/UFDXD/HBuilderX-Light/releases 查看。

## 公告

**js行内批注功能有官方功能代替，几个主题版本后考虑移除。**

---

## 非常感谢

本主题借鉴 [HBuilder](https://www.dcloud.io/hbuilderx.html)软件官方绿柔主题配色，借鉴思源集市以下作者主题css，js实现。

| 使用的                                                                          | 作者               |
| --------------------------------------------------------------------------------- | -------------------- |
| [notion-theme](https://github.com/royc01/notion-theme)主题的一些动画、列表转导图css，js代码、无序列表图标样式、表格自动宽度去表头等。 | [Roy](https://github.com/royc01)                   |
| [tsundoku-light](https://github.com/Achuan-2/siyuan-themes-tsundoku-light)主题的纸张背景图片。                                                            | [Achuan-2](https://github.com/Achuan-2 "Creator")<br />                 |
| [zhang-light](https://github.com/UserZYF/zhang-light)主题的部分css代码，代码块、标题样式。                                           | [UserZYF](https://github.com/UserZYF)<br />                 |
| 链滴社区发布的[ctrl+p窗口改造](https://ld246.com/article/1648269766832)。                                                                | 链滴社区id：abbj<br /> |
| [langzhou](https://github.com/langzhou/siyuan-note)大佬的**行内批注**。                                                                        | [langzhou](https://github.com/langzhou/siyuan-note)<br />                 |
| [Zuoqiu-Yingyi](https://github.com/Zuoqiu-Yingyi)大佬的Dark+主题新开窗口的代码。                                                 | [Zuoqiu-Yingyi ](https://github.com/Zuoqiu-Yingyi)                   |
| 增加链滴社区[BryceAndJuly ](https://ld246.com/member/BryceAndJuly)分享的[展示【最近打开文档】的小功能 ](https://ld246.com/article/1662697317986)                                                              | [BryceAndJuly ](https://ld246.com/member/BryceAndJuly)                   |

以上排名不分先后。

---

## 默认特性

| 名称  | 描述                                                                                                                                                                                                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.**文档头部区域动态布局**    | emoji、头图、标签，在全部设置或部分设置情况下的动态位置调整。（以获得尽可能更大的可视区域）                                                                                                                                                                                               |
| 2.**文档标题的动态下划线**<br />  | 模仿OneNote页面文档标题的下划线，根据字数动态调整。                                                                                                                                                                                                                                       |
| 3.**显示文档创建时间**    | 模仿OneNote页面在文档标题下显示此文档的创建时间。（目前思源文档的创建时间不可以像OneNote那样自定义调整）                                                                                                                                                                                  |
| 4.**段落行线**    | 模仿日记本为每个段落文字下显示行线。                                                                                                                                                                                                                                                      |
| 5.**块备注鼠标悬浮更大的显示**    | 在页面整体缩小的情况下，块备注的字体和显示太小，本主题优化了这一点。                                                                                                                                                                                                                      |
| 6.**悬浮窗折叠列表自动展开**    | 当一个引用或链接指向的是一个折叠列表时，悬浮窗预览时列表自动一级展开。（思源默认是折叠状态，查看还要手动打开）                                                                                                                                                                            |
| 7.**折叠列表鼠标悬浮预览**    | 有些占地方的列表子级可以折叠但必须将列表展开才可以查看，本主题实现鼠标悬浮折叠列表出现的`〔 ··· 〕`区域就可以在浮动窗口查看编辑折叠的内容。（只支持行内性质的列表父级）                                                                                                                              |
| 8.**标题、列表中键文本折叠展开**    | 思源的标题、列表折叠展开一直不方便，所以加了这个功能，快速方便的折叠展开列表和折叠展开标题。（中键列表内段落块也行）                                                                                                                                                                      |
| 9.**简单备注**    | 在思源超链**标题框**输入以“//”为开头的内容将自动识别为简单备注。简单备注有自己的样式和鼠标触发弹窗。简单备注支持html。（会造成文档对主题有依懒性小心慎用）                                                                                                                                        |
| 10.**虚拟引用增强**<br /> | 解决同名虚拟引用悬浮窗内容混乱问题，悬浮窗存在同名引用时将触发内容排序，优先展示和相对当前文档路径最近的引用内容（不同笔记下同名虚拟引用内容会在各自笔记下优先展示）                                                                                                                      |
| 11.**引述块横排看板**   | 在除了有列表转看板来自Roy大佬的功能外，本主题还支持利用引述块和超级快横排组合制作看板。                                                                                                                                                                                                   |
| 12.**思源超链接点击过变色**   | 有时候需要知道那个曾经点过就有用了                                                                                                                                                                                                                                                        |
| 13.**移动端双击去除只读模式**   | 双击屏幕，方便                                                                                                                                                                                                                                                                            |
| 14.**Dark+新开窗口功能**   | 鼠标位于任意可点击任意块，右键+中键打开移动端模式窗口、alt+鼠标中键打开完整思源PC端模式窗口。shift+鼠标右键+鼠标中键打开移动端聚焦块新窗口。shift+Alt+鼠标中键打开PC端聚焦块新窗口。（Dark+直接是中键，但HBuilderX-Light主题目前中键被折叠/展开列表标题占用所以只能这样了，大家习惯吧）。 |
| 15.**思源悬浮窗顶栏中键关闭**   | 悬浮窗钉住状态下可以不要点那个小x关闭窗口了                                                                                                                                                                                                                                               |
| 16.**钉住思源悬浮窗增强**   | 点击思源悬浮窗头栏中央触发块缩小窗口（默认设置钉住），再次点击恢复，右键窗口中央触发块调整缩小状态窗口透明度                                                                                                                                                                              |
| 17.**最近打开文档**   | 点击头栏数据历史右边的新增图标打开面板，查阅最近打来文档历史记录。                                                                                                                                                                                                                        |
| 18.**右键设置命名、别名**   | 选中块获得光标时，右键快速将块内容覆盖设置到别名、命名。选中块获得光标并有选中文字时右键,将选中文本追加到别名，覆盖设置到命名。（方便一点效率一点）                                                                                                                                       |
| 19.**边栏区域自动隐藏鼠标贴边展开**   | 主题右上角功能按钮开启激活，拥有记忆状态。                                                                                                                                                                                                                                                |
| 20.**段落块自动首行缩进**   | 实验转正式功能，主题右上角功能按钮开启激活，开启后段落块自动缩进,双击段落块末尾无文本区域单独去除缩进                                                                                                                                                                                     |
| 21.**列表块区分增强**   | 主题右上角功能按钮开启激活，由于主题风格问题两个列表块中间间隔和普通列表项一样所以难以区分，开启后可以轻松区分，有醒目列表层级的部分效果                                                                                                                                                  |
| 22.**移动端支持主题功能栏**   | 移动端拥有部分pc端部分主题功能按钮。                                                                                                                                                                                                                                                      |
| 23.**主题滤镜**   | 想尝试不同主题颜色风格？试试主题右上角滤镜功能按钮，有模拟夜间模式的黑暗效果、黑白效果、青紫、青蓝、褐紫、红紫、映绿、旧绿……等可能未来会添加的更多效果。                                                                                                                                |

---

### 一些默认特性展示

**简单备注**

![简单备注](https://user-images.githubusercontent.com/97731736/186078660-b3476f92-6e2d-4863-9b9f-10bccee0fd64.gif)

**简单备注进阶秘籍**

![image_281](https://user-images.githubusercontent.com/97731736/187086500-5e22a5f8-ff46-4a24-96ce-47d6672cfd88.png)

---

**块备注鼠标悬浮更大的显示**

![块备注鼠标悬浮更大的显示](https://user-images.githubusercontent.com/97731736/180851034-e403fdf8-0d31-435d-9554-e20a8f472ad6.gif)

---

**鼠标中键列表父级文本、标题折叠/展开内容**

![鼠标中建折叠列表标题](https://user-images.githubusercontent.com/97731736/186078609-12e6fa08-f194-47c0-8cb6-7c9f6bc9e5fa.gif)

![中键折叠，展开列表](https://user-images.githubusercontent.com/97731736/192256398-03273869-0e22-42ae-9bd5-dab4541f8e54.gif)

---

**折叠列表鼠标悬浮（···）内容预览**

![鼠标悬浮预览内容](https://user-images.githubusercontent.com/97731736/186078772-c1ccaa56-3b3d-4be2-93e3-9914090b73f9.gif)

---

**悬浮窗折叠列表自动展开**

![悬浮窗折叠列表自动展开](https://user-images.githubusercontent.com/97731736/180851107-20c15db8-f60a-4efb-84ce-df439ad06dbe.gif)

---

**引述块横排看板**

![看板](https://user-images.githubusercontent.com/97731736/180851330-d2f081b7-658f-4ae5-9423-3bd8a6ba1f37.gif)

---

**右键设置命名、别名**

![右键快速设置别名、命名2](https://user-images.githubusercontent.com/97731736/192256209-40c03fc2-5698-4680-937d-805775a2402c.gif)

---

**自动首行缩进**

![首行缩进](https://user-images.githubusercontent.com/97731736/180851403-9421a211-bd3f-4e4b-9228-f70067874b0a.gif)

---

**自动首行缩进段落单独去除缩进**

![去除首行缩进](https://user-images.githubusercontent.com/97731736/186078538-cf9ca6e5-c66d-4b6b-af16-c4a0575aef14.gif)

## 实验特性(需去theme.css文件去除注释手动激活)

| 描述 |
| ------ |
| 无   |

### 一些实验特性展示

目前无实验特性，最近实验转正式特性——**自动首行缩进。**

---

## 激活特性

本主题头栏右侧自带简单实现小功能，功能激活使用即可，悬浮可知道功能效果，请适度使用因为有刁钻和未知bug（本主题特性功能除有感谢出处外都是原创蹩脚实现）。

---

## 主题元素样式预览

![image](https://user-images.githubusercontent.com/97731736/180851482-0bf9c6ce-5984-4ad1-9bc6-c5fdcacda131.png)

---

![image](https://user-images.githubusercontent.com/97731736/180851541-5025d1e3-cf8d-47f2-be5f-b14012648638.png)

---

![image](https://user-images.githubusercontent.com/97731736/180851604-73dd8426-ac55-484f-8f43-27c7a95b5d1f.png)

---

![image](https://user-images.githubusercontent.com/97731736/180852274-17364f76-28bf-471d-bfbc-f22e30fcd19e.png)

---

## 主题整体样式预览

![image](https://user-images.githubusercontent.com/97731736/169648221-b14ad3c3-6413-4b9a-8455-d02fca6ccf00.png)

---

![image](https://user-images.githubusercontent.com/97731736/169648233-72b43f7f-3f40-4297-aff4-0f1d4868fe0c.png)

---

![image](https://user-images.githubusercontent.com/97731736/169648243-d6adb09c-ce8f-48ff-bed3-3a9c79b4a2c9.png)

---

![去除首行缩进](https://user-images.githubusercontent.com/97731736/186078538-cf9ca6e5-c66d-4b6b-af16-c4a0575aef14.gif)

## 实验特性(需去theme.css文件去除注释手动激活)

| 描述 |
| ------ |
| 无   |

### 一些实验特性展示

目前无实验特性，最近实验转正式特性——**自动首行缩进。**

---

## 激活特性

本主题头栏右侧自带简单实现小功能，功能激活使用即可，悬浮可知道功能效果，请适度使用因为有刁钻和未知bug（本主题特性功能除有感谢出处外都是原创蹩脚实现）。

---

## 主题元素样式预览

![image](https://user-images.githubusercontent.com/97731736/180851482-0bf9c6ce-5984-4ad1-9bc6-c5fdcacda131.png)

---

![image](https://user-images.githubusercontent.com/97731736/180851541-5025d1e3-cf8d-47f2-be5f-b14012648638.png)

---

![image](https://user-images.githubusercontent.com/97731736/180851604-73dd8426-ac55-484f-8f43-27c7a95b5d1f.png)

---

![image](https://user-images.githubusercontent.com/97731736/180852274-17364f76-28bf-471d-bfbc-f22e30fcd19e.png)

---

## 主题整体样式预览

![image](https://user-images.githubusercontent.com/97731736/169648221-b14ad3c3-6413-4b9a-8455-d02fca6ccf00.png)

---

![image](https://user-images.githubusercontent.com/97731736/169648233-72b43f7f-3f40-4297-aff4-0f1d4868fe0c.png)

---

![image](https://user-images.githubusercontent.com/97731736/169648243-d6adb09c-ce8f-48ff-bed3-3a9c79b4a2c9.png)

---
