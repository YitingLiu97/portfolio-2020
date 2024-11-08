---
layout: post
title: "创新蜂巢 - 埃森哲"
date: 2022-02-01
permalink: /zh/acceture-innovation-hives-new-york
description: "埃森哲创新蜂巢在纽约哈德逊广场展示尖端技术、互动艺术和动态照明，将埃森哲关于智能生活的研究变为现实。"
tags: 
- Installation 
- Unity
preview: /assets/ace-hives/demo.jpg
author: 刘伊婷
lang: zh
---

| 标题 | 详情 |
|---------------------------|-----------------------------------|
| 角色 | 首席创意技术专家 |
| 工具 | Unity, DMX, MadMapper, 球形投影触摸屏, 语音转文字, 物理计算, Arduino, 视觉显示解决方案 |
| 时长 | 2个月 |
| 项目 | 创建了八个互动"蜂巢"，展示埃森哲对八个业务类别的未来愿景，包括智能生活、金融、云计算、5G、人力潜能、新消费者、数字健康和生命科学。|
| 影响 | 成功部署了八个体验中的两个 |
| 合作者 | Future Colossal |

# 角色
作为Future Colossal的创意技术专家，我参与了埃森哲纽约总部八个创新蜂巢中的两个项目。每个蜂巢展示了埃森哲在不同行业的思想领导力和咨询专长，包括智能生活、金融、云计算、5G、人力潜能、新消费者、数字健康和生命科学。这些沉浸式装置在COVID-19隔离期间开发，使用先进技术和故事讲述来展现埃森哲的研究和对数字转型的承诺。

# 演示

<div class="iframe-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/cmncTnuvKxs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> 

<br>

# 项目亮点
## 智能生活
![assets/ace-hives/me-in-front-of-sl2.jpg](/assets/ace-hives/me-in-front-of-sl2.jpg)
### 目标
通过互动多媒体展示展示埃森哲的可持续发展努力。

### 解决方案
创建了一个球形触摸屏显示器（河豚鱼球体），带LED背光的定制纽约钢铁地图，以及两个65英寸电视屏幕。球体互动触发钢铁地图上的动态LED动画和数据可视化。

![assets/ace-hives/smart-living-2-full.jpg](/assets/ace-hives/smart-living-2-full.jpg)

### 技术实现：
- 设计了一个通信协议，从河豚鱼球体向Unity和Artnet照明系统发送UDP消息。
- 使用MadMapper实现实时热图着色器和光照映射，用于空间数据可视化。
- 使用ffmpeg和HAP编解码器克服了透明视频动画的显示兼容性挑战。

![assets/ace-hives/smart-living-2.jpg](/assets/ace-hives/smart-living-2.jpg)

## 金融前沿
![assets/ace-hives/me-in-front-of-ff.jpg](/assets/ace-hives/me-in-front-of-ff.jpg)

### 目标
使用实时数据、AI驱动的语音交互和历史金融信息来展示金融领域的数字化转型。

### 解决方案
开发了一个具有股票行情、AI控制语音交互和旋转拨盘的互动体验。访客可以通过语音命令或与拨盘的物理交互来浏览金融趋势，通过颜色编码主题创造沉浸式环境。

### 技术实现：
- 集成TD Ameritrade API进行实时股票数据可视化。
- 创建类别管理器处理不同主题的内容显示和触发方法（拨盘或语音）。
- 使用Arduino进行拨盘控制和Microsoft语音识别进行语音命令，通过MadMapper动态管理10个屏幕的内容。

![assets/ace-hives/dial.jpg](/assets/ace-hives/dial.jpg)
![assets/ace-hives/ff-stock.jpg](/assets/ace-hives/ff-stock.jpg)

## 云计算
### 目标
展示云技术在商业中的优势。

### 解决方案
开发了带有动作传感器的独立屏幕，在用户出现时进行动画和数据可视化，以互动、故事驱动的格式向访客介绍埃森哲的云服务。

![assets/ace-hives/cloud.jpg](/assets/ace-hives/cloud.jpg)
![assets/ace-hives/cloud3.jpg](/assets/ace-hives/cloud3.jpg)

## 人力潜能
### 目标
突出向数字工作环境的转变和全球多元化劳动力参与的重要性。

### 解决方案
设计了一个使用位置追踪和Voronoi算法创建蜂巢状结构的体验，象征劳动力连接性。用户的移动产生涟漪，展示他们对更广泛网络的影响。

![assets/ace-hives/human-potential.jpg](/assets/ace-hives/human-potential.jpg)

## 数字健康
### 目标
通过互动体验澄清医疗保健误解。

### 解决方案
创建了对用户移动做出响应的数字雾，揭示医疗行业创新。在显示屏前停留会揭示品牌信息，提供反思性的信息体验。

![assets/ace-hives/digital-health.jpg](/assets/ace-hives/digital-health.jpg)

## 生命科学
### 目标
展示埃森哲在生物制药和健康科技领域的创新。

### 解决方案
在实验室主题环境中，在LED"试管"上展示动态DNA动画和互动屏幕，访客可以通过讲解员触发内容探索埃森哲的新科学计划。

![assets/ace-hives/life-science.jpg](/assets/ace-hives/life-science.jpg)

## 新消费者
### 目标
展示未来零售趋势。

### 解决方案
RFID传感器允许与定制3D打印的"智能物体"和"虚拟物体"互动，触发同步的屏幕复制品，展示零售的数字化转型。

![assets/ace-hives/new-consumer.jpg](/assets/ace-hives/new-consumer.jpg)

## 5G
### 目标
通过曼哈顿上空的AR"窗口"展示5G对日常生活的影响。

### 解决方案
一个增强现实显示屏，在纽约天际线上叠加实时数据，允许用户与5G增强的位置互动，包括实时交通数据。

![assets/ace-hives/5g-2.jpg](/assets/ace-hives/5g-2.jpg)

# 主要成就
- 项目领导：领导了智能生活和金融前沿装置，在一个月内交付MVP，并在另一个月内根据客户反馈完善解决方案。
- 技术专长：开发了涉及UDP通信、空间映射和实时数据集成的解决方案，克服了技术挑战，如透明视频显示和无缝互动响应。
- 协作与学习：与Pufferfish密切协调，并记录流程以支持未来内部培训，减少入职时间。

# 技能和工具
- 工具：Unity、MadMapper、Arduino、Microsoft语音识别、Pufferfish球体、Advatek照明系统、ffmpeg、TD Ameritrade API。
- 技能：实时数据可视化、互动显示编程、语音控制系统、空间音频设计、项目领导。