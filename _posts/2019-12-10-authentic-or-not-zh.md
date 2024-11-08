---
layout: post
title: "互动游戏 - 正宗与否"
date: 2019-12-10
permalink: /zh/authentic-or-not-visual-recipe-game
description: "正宗与否是一款互动游戏，旨在帮助用户通过视觉方式学习食谱，将教育与乐趣和创造力融为一体。"
tags: 
- Installation 
preview: /assets/authentic-or-not/authenticornot-demo.jpg
author: 刘伊婷
lang: zh
---

| 标题 | 详情 |
|---------------------------|-----------------------------------|
| 角色 | 开发者、制作者和游戏设计师 |
| 工具 | Arduino, P5.js, 激光切割机, Illustrator, 电动工具 |
| 技能 | 创意编程、物理计算、制作、交互设计、用户测试 |
| 时长 | 4周 |
| 项目 | 一个可视化学习食谱的互动烹饪游戏 |
| 展览 | [2019 ITP冬季展览](https://youtu.be/11M3RLmayz8?t=1209), 2020自由科学中心2020 |
| 合作者 | [Shannel Doshi](https://www.shanneldoshi.com/) |

<div class="iframe-container">
 <iframe class="responsive-iframe" src="https://www.youtube.com/embed/nBPye7sNh18" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 问题陈述
**如何教人们制作正宗的食物以传承我们的文化遗产？**

<div class="img-container">
<img class="img-responsive" src="/assets/authentic-or-not/authenticornot-demo.jpg">
<img class="img-responsive" src="/assets/authentic-or-not/authenticornot-enclosure-inside.jpeg">
</div>

<div class="img-container">
<img class="img-responsive" src="/assets/authentic-or-not/authenticornot-stand.jpeg">
<img class="img-responsive" src="/assets/authentic-or-not/authenticornot-QR.jpeg">
</div>

## 背景
在海外生活超过五年让我更加珍视中国文化。由于我每年只回中国一次，我珍惜与家人在一起的每一刻。坚持烹饪传统美食是我表达对家人之爱的方式。然而，当我发现美国这里的中餐馆提供的菜品并不像他们宣传的那样正宗时，我感到越来越失望。因此，Shannel和我创建了这个游戏，提醒人们尊重传统文化。

## 游戏规则
1. 按下按钮开始游戏
2. 转动编码器选择菜系，将手悬停在食材碗上方或使用勺子模拟烹饪
3. 转动旋钮/编码器选择食材层次
4. 按下按钮结束游戏
5. 游戏结束画面显示：显示分数和选择的食材

## 角色
- 使用p5.js和Arduino进行创意编码
- 使用激光切割机、3D打印机和电动工具进行制作
- 通过多次用户测试进行迭代

## [研究见解](https://authenticorbust.wixsite.com/authenticornot)
- 流行菜品如咖喱鸡肉玛莎拉技术上并不"正宗"
- 幸运饼干不是中国点心。它起源于日本，后来在加利福尼亚的华人移民中流行起来。
- 信息和认知之间存在不匹配。

## 构思/探索和开发
- [界面设计](#界面设计)
- [材料选择](#材料选择)
- [传感器选择](#传感器选择)
- [界面设计原型](#界面设计原型)

### 界面设计
![assets/authentic-or-not/interaction-design.png](/assets/authentic-or-not/interaction-design.png)

### 材料选择
胶合板和透明亚克力板来创建一个极简主义的炉灶。

### 传感器选择
- 运动传感器（不准确，只能检测移动的变化）
- 红外传感器（效果会更好，但我们想要界面外观整洁，且缺货）
- 超声波传感器（在有限时间内三种选择中最佳替代方案。我们可能会升级到[更准确的版本](https://www.sparkfun.com/products/14722)）
- 使用编码器而不是电位器来选择不同层次

### 界面设计原型
- 什么对用户来说舒适和直观？
- 什么样的手部动作最合理？

## 改进和测试

### 用户测试
我们在整个过程中进行了三次用户测试。第一次是使用纸质原型和基本功能的代码。第二次是使用功能性代码的原型。最后一次是带有完整功能代码的最终项目。

### 观察结果
- 60%的玩家使用勺子，其余使用手
- 20%的玩家试图提起碗
- 30%的玩家用勺子在大碗中搅拌（实际上大碗只是装饰）

### 深入访谈见解
- 说明太过冗长
- 从菜系选择到食材选择的过渡不清晰

### 调整
根据反馈，我做了一些调整来使互动体验更流畅：
- 将说明分成更多屏幕。目标是每个屏幕一个说明。
- 在菜系选择屏幕添加过渡效果
- 增加游戏结束阶段的细节
- 添加传统音乐和音效来创造沉浸式烹饪体验

## 解决方案

**界面设计亮点**

#### 开始游戏
![assets/authentic-or-not/UI-begin-the-game.gif](/assets/authentic-or-not/UI-begin-the-game.gif)

#### 选择食谱
![assets/authentic-or-not/UI-recipe-layer-turn-to-select.gif](assets/authentic-or-not/UI-recipe-layer-turn-to-select.gif)

#### 选择食材
![assets/authentic-or-not/UI-selectingingredients-aon.gif](/assets/authentic-or-not/UI-selectingingredients-aon.gif)

#### 游戏结束
![assets/authentic-or-not/UI-end-of-the-game.gif](/assets/authentic-or-not/UI-end-of-the-game.gif)

### 屏幕演示
这是用p5.js创建的数字界面视频。
<div class="iframe-container">
 <iframe class="responsive-iframe" src="https://www.youtube.com/embed/1MsxV_bLsUQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 未来计划
- 将超声波传感器升级为[VL53L1X距离传感器](https://www.sparkfun.com/products/14722)
- 为用户错误选择的食材创建取消效果
- 创建模仿电磁炉的新外壳 - 来自用户测试会话的反馈
- 使用相同材料制作按钮和编码器外壳以创造一致性
- 可能不会将碗固定在平台上，允许自由拿起并倒入大碗中

**游戏实况**
<div class="iframe-container">
 <iframe class="responsive-iframe" src="https://www.youtube.com/embed/hQfdMFAN7vg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 应用

### 小范围：
- 传统美食知识的友好竞争
- 面向公众的教育棋盘游戏
- 通过投影和Kinect在游戏中心播放
- 帮助民族餐厅对其向公众呈现菜品的决定负责

### 大范围：
- 一个应用程序，通过识别人们在杂货店挑选的任何东西来教人们制作传统美食

## 结论
没有玩家的参与，游戏是不完整的。看到人们多次尝试游戏以求做对是很令人振奋的。特别是一个孩子在站点花了20分钟时间，为了把两种菜都做对。看到不同年龄段的人都享受这个游戏是很有成就感的。

随着可以带回家的食谱，我希望传统美食的教育将会继续。我认为这达到了游戏的目标：教育人们传统美食以尊重文化。

*特别感谢[Shannel Doshi](https://www.shanneldoshi.com/)*

[查看我的详细文档](https://yitingliu97.wordpress.com/category/ipc-intro-to-physical-computing/)