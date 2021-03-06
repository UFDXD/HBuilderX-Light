# HBuilderX-Light 思源自用主题

## 主题介绍

这是一个“护眼的绿柔题”。

推荐win10用户可以开启系统自带护眼模式，配合这个主题夜间使用会越来越柔绿，有很好的护眼效果（作者自己也在用）。

本主题承诺遵守“并不存在”的思源默认字体颜色规范，绝不更改思源官方默认主题字体配色。

本主题推荐使用 ["Source Han Sans"](https://github.com/adobe-fonts/source-han-sans) 开源字体。

注意：若页面宽度出现问题请打开思源**自适应宽度**。

---

## 非常感谢

本主题借鉴 [HBuilder](https://www.dcloud.io/hbuilderx.html)软件官方绿柔主题配色，借鉴思源集市以下作者主题css，js实现。

| 使用的                                                                                         | 作者                                                  |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| [notion-theme](https://github.com/royc01/notion-theme)主题的一些动画、列表转导图css，js代码、无序列表图标样式。  | [Roy](https://github.com/royc01)                      |
| [tsundoku-light](https://github.com/Achuan-2/siyuan-themes-tsundoku-light)主题的纸张背景图片。 | [Achuan-2](https://github.com/Achuan-2 "Creator")<br />      |
| [zhang-light](https://github.com/UserZYF/zhang-light)主题的部分css代码。                       | [UserZYF](https://github.com/UserZYF)<br />               |
| 链滴社区发布的[ctrl+p窗口改造](https://ld246.com/article/1648269766832)。                      | 链滴社区id：abbj<br />                                    |
| [langzhou](https://github.com/langzhou/siyuan-note)大佬的**行内批注**。                  | [langzhou](https://github.com/langzhou/siyuan-note)<br /> |

以上排名不分先后。

---

## 默认特性

| 描述                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.**文档头部区域动态布局**：emoji、头图、标签，在全部设置或部分设置情况下的动态位置调整。（以获得尽可能更大的可视区域）                                                                              |
| 2.**文档标题的动态下划线**：模仿OneNote页面文档标题的下划线，根据字数动态调整。<br />                                                                                                                    |
| 3.**显示文档创建时间**：模仿OneNote页面在文档标题下显示此文档的创建时间。（目前思源文档的创建时间不可以像OneNote那样自定义调整）                                                                     |
| 4.**段落行线**：模仿日记本为每个段落文字下显示行线。                                                                                                                                                 |
| 5.**块备注鼠标悬浮更大的显示**：在页面整体缩小的情况下，块备注的字体和显示太小，本主题优化了这一点。                                                                                                 |
| 6.**悬浮窗折叠列表自动展开**：当一个引用或链接指向的是一个折叠列表时，悬浮窗预览时列表自动一级展开。（思源默认是折叠状态，查看还要手动打开）                                                         |
| 7.**折叠列表内容双击预览**：有些占地方的列表子级可以折叠但必须将列表展开才可以查看，本主题实现双击折叠列表出现的`〔 ··· 〕`区域就可以在浮动窗口查看编辑折叠的内容。（只支持行内性质的列表父级） |
| 8.**简单备注**：在思源超链接框输入以“//”为开头的内容将自动识别为简单备注。简单备注有自己的样式和鼠标触发弹窗。简单备注支持html。                                                                   |
| 9.**虚拟引用增强**：解决同名虚拟引用悬浮窗内容混乱问题，悬浮窗存在同名引用时将触发内容排序，优先展示和相对当前文档路径最近的引用内容（不同笔记下同名虚拟引用内容会在各自笔记下优先展示）<br />           |
| 10.**引述块横排看板**：在除了有列表转看板来自Roy大佬的功能外，本主题还支持利用引述块和超级快横排组合制作看板。                                                                                       |

---

### 一些默认特性展示

**简单备注**

![HBuilderX-Light 主题 简单备注](https://user-images.githubusercontent.com/97731736/180850950-4d7af7d4-b066-4366-a066-22b57065231d.gif)
---

**块备注鼠标悬浮更大的显示**

![块备注鼠标悬浮更大的显示](https://user-images.githubusercontent.com/97731736/180851034-e403fdf8-0d31-435d-9554-e20a8f472ad6.gif)

---

**折叠列表内容双击预览**

![折叠列表内容双击预览](https://user-images.githubusercontent.com/97731736/180851238-7fe2e82d-acc5-474e-94ef-b745e18e4cee.gif)

---

**悬浮窗折叠列表自动展开**

![悬浮窗折叠列表自动展开](https://user-images.githubusercontent.com/97731736/180851107-20c15db8-f60a-4efb-84ce-df439ad06dbe.gif)

---

**引述块横排看板**

![看板](https://user-images.githubusercontent.com/97731736/180851330-d2f081b7-658f-4ae5-9423-3bd8a6ba1f37.gif)

---

## 实验特性(需去theme.css文件去除注释手动激活)

| 描述                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.**自动首行缩进**：段落首行自动缩进2em。 [感谢 [Zhangwuji ](https://ld246.com/member/Zhangwuji)大佬论坛的帖子[CSS 片段】首行缩进 2 字符 - 链滴 (ld246.com)](https://ld246.com/article/1657240917557)]<br /> |

### 一些实验特性展示

![首行缩进](https://user-images.githubusercontent.com/97731736/180851403-9421a211-bd3f-4e4b-9228-f70067874b0a.gif)

---

## 激活特性

本主题头栏右侧自带简单实现小功能，功能激活使用即可，请适度使用因为有刁钻和未知bug（本主题特性功能除有感谢出处外都是原创蹩脚实现）。

---

## 更新

本主题不定期更新，更新详情请移步 https://github.com/UFDXD/HBuilderX-Light/releases 查看。

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
