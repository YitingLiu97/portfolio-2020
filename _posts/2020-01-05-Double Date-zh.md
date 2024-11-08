---
layout: post
title: "互动装置 - 双重约会"
date: 2020-01-22
permalink: /zh/double-date-device-and-human-attention/
description: "双重约会是一个互动视频装置，探索设备和人类交互之间的注意力动态。"
tags: 
- Installation 
preview: /assets/double-date/demo.png 
author: 刘伊婷
lang: zh
---

| 标题 | 详情 |
|---------------------------|-----------------------------------|
| 角色 | 开发者、制作者、后期制作|
| 工具 | Arduino, Sprite, 投影仪, 激光切割机, After Effects, Premiere, Illustrator |
| 时长 | 2周 |
| 项目 | 一个关于设备和人之间注意力的互动视频装置|
| 功能 | 投影、体验和互动设计 |

<div class="iframe-container">
 <iframe title="vimeo-player" src="https://player.vimeo.com/video/416687791" class="responsive-iframe" frameborder="0" allowfullscreen></iframe>
</div>

## 问题陈述
我们如何让人们意识到他们与亲人和手机的关系？

![assets/double-date/presentation.jpg](/assets/double-date/presentation.jpg)

## 概念
手机带来的即时满足感似乎比面对面交谈更具诱惑力。当我们口袋里随时可以接入世界时，在试图专注当下的同时，我们应该将注意力引向何处？

## 研究
我们大多数人都有在面对面交谈时被手机分散注意力的经历。然而，这似乎已经融入了我们的文化。即使当我们不使用手机时，我们也会受到干扰。([链接](https://www.huffingtonpost.ca/2017/06/30/cellphones-distraction-study_a_23009948/))

我们希望通过互动视频雕塑的形式指出手机的数字文化，让人们更加意识到他们与亲人和手机的关系。

## 构思/探索
![assets/double-date/interaction-design-double-date.png](/assets/double-date/interaction-design-double-date.png)

在我们的头脑风暴过程中，我们有几个想法，其中大多数都涉及人们被他们拥有的东西所控制。

我们的目标是以互动视频雕塑的形式创作一幅肖像。然后我们专注于讲述一个关于人与手机之间现代关系的故事。

### 灵感：
- [Model Citizen" Dystopian Animated Short Film (2020)](https://www.youtube.com/watch?v=mVLrBJYGxk4)
- [Stan Douglas – Doppelgänger](https://www.davidzwirner.com/exhibitions/stan-douglas-2020)

然后我们想到用光来代表他们之间联系的强度。
- 当一对情侣进行对话时，他们上方的灯很亮。
- 当一个人看手机时，灯光半亮。
- 当两个人都看手机时，灯光变暗。

## 开发
我们想展示人类互动如何改变视频中人物的关系。对于我们的概念来说，使用手机作为用户的互动设备非常直观。不同的互动，如滑动、拿起手机，会表示视频中关系的变化。

### 确定互动：
- 手机朝下
    - 视频1显示情侣度过愉快时光
- 手机翻转朝上
    - 视频2显示女孩玩手机
- 按下按钮
    - 视频3显示情侣玩手机，将注意力给予数字世界

### 确定展示形式：
情侣的视频片段由Dina和Patrick创作。视频背景受到游戏[Red Strings Club](https://store.steampowered.com/app/589780/The_Red_Strings_Club/)中以下图像的启发。

然后我们使用after effects创建了现代约会环境，如下所示。

![assets/double-date/video%201.jpg](/assets/double-date/video%201.jpg)

*视频一的静帧，展示情侣聊天愉快的场景。*

### 互动视频
Dina和Patrick负责拍摄和after effects来阐述这个想法。

## 改进和测试

### 编程和制作
作为团队中的创意技术专家，我为我们的硬件编写了Arduino代码，制作了电子设备的手机/外壳，并使用了Sprite MedeaWiz（用于紧凑型视频投影的触发视频重复器）。

我们选择使用Sprite的几个原因：
- 适合物理装置的紧凑性
- 可以由Arduino控制

对于代码，我使用加速度计和Arduino Uno来判断手机是向上还是向下。我添加了按钮作为触发第三个视频的另一个条件。

![assets/double-date/schematics-double-date.png](/assets/double-date/schematics-double-date.png)

你可以在[这里查看我的代码](https://drive.google.com/drive/folders/1M7i6hdTupYVWaKsjxRzlR7EvitTQZpEo?usp=sharing)。我使用了加速度计的库[Arduino_LSM6DS3.h](https://www.arduino.cc/en/Reference/ArduinoLSM6DS3)

我使用胶合板和支架制作了手机，它也作为一个外壳。我在Illustrator中设计了手机，激光切割后组装了这些部件。

<div class="img-container">
<img class="img-responsive" src="/assets/double-date/phone-paper.jpg">
<img class="img-responsive" src="/assets/double-date/phone.jpg">
</div>

## 解决方案
这是我们对现代情侣关系的诠释。

*特别感谢Patrick Warren, Dina Khalil, 和 Hyunseo Lee。*

[在这里查看我的详细文档。](https://yitingliu97.wordpress.com/2020/04/08/video-sculpture-double-date/)