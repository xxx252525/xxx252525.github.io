<template><div><h1 id="portainer介绍" tabindex="-1"><a class="header-anchor" href="#portainer介绍"><span>Portainer介绍</span></a></h1>
<p>Docker的可视化管理工具有DockerUI、Shipyard、Rancher、Portainer等，本文使用Portainer工具对Docker环境进行管理。</p>
<p>Portainer是一个轻量级的docker环境管理UI，可以用来管理<a href="https://www.kubernetes.org.cn/tags/docker" target="_blank" rel="noopener noreferrer">docker<ExternalLinkIcon/></a>宿主机和docker swarm集群。他的轻量级，轻量到只要个不到100M的docker镜像容器就可以完整的提供服务。直接启动即可，异常方便。</p>
<h2 id="部署portainer服务器" tabindex="-1"><a class="header-anchor" href="#部署portainer服务器"><span>部署Portainer服务器</span></a></h2>
<p>检查Dcoker版本</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> version</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>运行结果如下：</p>
<p><img src="@source/Docker可视化工具Portainer安装使用.assets/image-20240708232721096.png" alt="image-20240708232721096"></p>
<p>检查docker是否在运行</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> sysytemctl status <span class="token function">docker</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>运行结果如下：</p>
<p><img src="@source/Docker可视化工具Portainer安装使用.assets/image-20240708233001537.png" alt="image-20240708233001537"></p>
<p>搜索Portainer</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span>  <span class="token function">docker</span> search portainer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>结果如下：</p>
<p><img src="@source/Docker可视化工具Portainer安装使用.assets/image-20240708220006846.png" alt="image-20240708220006846"></p>
<p>下载安装portainer镜像</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> pull portainer/portainer-ce </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装成功如图：</p>
<p><img src="@source/Docker可视化工具Portainer安装使用.assets/image-20240708233039097.png" alt="image-20240708233039097"></p>
<h3 id="部署portainer-ce" tabindex="-1"><a class="header-anchor" href="#部署portainer-ce"><span>部署portainer-ce</span></a></h3>
<p>创建portainer的数据卷</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> volume create portainer_data</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>创建portainer-ce容器</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8000</span>:8000 <span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000 <span class="token parameter variable">--name</span><span class="token operator">=</span>portainer <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token parameter variable">-v</span> portainer_data:/data portainer/portainer-ce:latest</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>命令注释：</p>
<ul>
<li>-d #容器在后台运行</li>
<li>-p 9000:9000# 宿主机9000端口映射容器中的9000端口</li>
<li>-v /var/run/docker.sock:/var/run/docker.sock # 把宿主机的Docker守护进程(docker daemon)默认监听的Unix域套接字挂载到容器中</li>
<li>-v /root/portainer:/data # 把宿主机目录 /root/portainer 挂载到容器 /data 目录；</li>
<li>–name dev-portainer # 指定运行容器的名称；</li>
</ul>
<p>查看docker运行状态</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"> <span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>运行状态如下：</p>
<p><img src="@source/Docker可视化工具Portainer安装使用.assets/image-20240708234448142.png" alt="image-20240708234448142"></p>
<p>检查日志有没有错误</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> logs portainer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="进入portainer" tabindex="-1"><a class="header-anchor" href="#进入portainer"><span>进入portainer</span></a></h2>
<p>使用域名:9000或者IP:9000的方式访问Web端，注册账号后进入即可：</p>
<p><img src="@source/Docker可视化工具Portainer安装使用.assets/image-20240709123719347.png" alt="image-20240709123719347"></p>
</div></template>


