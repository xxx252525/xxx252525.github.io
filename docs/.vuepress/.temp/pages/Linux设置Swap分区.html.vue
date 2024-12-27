<template><div><h1 id="swap分区介绍" tabindex="-1"><a class="header-anchor" href="#swap分区介绍"><span>Swap分区介绍</span></a></h1>
<p>Swap分区是什么？Linux中Swap（即：<a href="https://www.vpsgo.com/tag/%E4%BA%A4%E6%8D%A2%E5%88%86%E5%8C%BA" target="_blank" rel="noopener noreferrer">交换分区</a>），类似于Windows的虚拟内存，就是当内存不足的时候，把一部分硬盘空间虚拟成内存使用，从而解决内存容量不足的情况。</p>
<p>Swap分区的作用是什么？它的功能就是在内存不够的情况下，操作系统先把内存中暂时不用的数据，存到硬盘的交换空间，腾出内存来让别的程序运行</p>
<h1 id="创建swap分区" tabindex="-1"><a class="header-anchor" href="#创建swap分区"><span>创建Swap分区</span></a></h1>
<p>查看当前系统是否存在Swap分区</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">free</span> <span class="token parameter variable">-m</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果不存在返回内容如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">               total        used        <span class="token function">free</span>      shared  buff/cache   available</span>
<span class="line">内存：      <span class="token number">15966</span>        <span class="token number">4664</span>        <span class="token number">6424</span>         <span class="token number">341</span>        <span class="token number">4876</span>       <span class="token number">10722</span></span>
<span class="line">交换：          <span class="token number">0</span>           <span class="token number">0</span>           <span class="token number">0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们Swap分区设置的不合理（太小），并且VPS本身的物理内存也不够用，那么就会出现<a href="https://www.vpsgo.com/tag/linux-swap%E5%8D%A0%E7%94%A8%E5%BE%88%E9%AB%98" target="_blank" rel="noopener noreferrer">Linux Swap占用很高</a>，甚至Swap分区全部占满的情况，一般来说，根据Linux内存的大小不同，我们可以按照下面的对应关系设置<a href="https://www.vpsgo.com/tag/swap%E5%88%86%E5%8C%BA%E5%A4%A7%E5%B0%8F" target="_blank" rel="noopener noreferrer">Swap分区大小</a>：</p>
<ol>
<li>内存 &lt;= 4g：Swap 至少 4G</li>
<li>内存 4~16G：Swap 至少 8G</li>
<li>内存 16G~64G：Swap 至少 16G</li>
<li>内存 64G~256G：Swap 至少 32G</li>
</ol>
<p>关闭swap分区，如果没有就不存在这一步骤</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> swapoff <span class="token parameter variable">-a</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>创建Swap分区</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/root/swapfile <span class="token assign-left variable">bs</span><span class="token operator">=</span>1M <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">8192</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>建立 Swap 的文件系统（格式化为 Swap 分区文件）</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment">#设置权限</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">600</span> /root/swapfile</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">mkswap</span> /root/swapfile</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启用 Swap 分区</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">swapon</span> /root/swapfile</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>查看交换分区是否成功创建,如果有 Swap 就说明创建成功了</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">free</span> <span class="token parameter variable">-m</span></span>
<span class="line"><span class="token comment">#或者</span></span>
<span class="line"><span class="token function">free</span> <span class="token parameter variable">-h</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置开启启动，在 /etc/fstab 文件中加入一行代码</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">'/root/swapfile swap swap defaults 0 0'</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> /etc/fstab</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="swap开关设置" tabindex="-1"><a class="header-anchor" href="#swap开关设置"><span>Swap开关设置</span></a></h2>
<p>查看swap交换分区</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">swapon</span> <span class="token parameter variable">-s</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>开启swap交换分区</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">swapon</span> <span class="token parameter variable">-a</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>关闭swap交换分区</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">swapoff <span class="token parameter variable">-a</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>重启swap交换分区</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">swapoff <span class="token parameter variable">-a</span> <span class="token operator">&amp;&amp;</span> <span class="token function">swapon</span> <span class="token parameter variable">-a</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="swap的优先级" tabindex="-1"><a class="header-anchor" href="#swap的优先级"><span>Swap的优先级</span></a></h2>
<h4 id="优先级的范围" tabindex="-1"><a class="header-anchor" href="#优先级的范围"><span>优先级的范围</span></a></h4>
<p>Swap优先级的数值范围是从-1到32767。数值越高，优先级越高。当内核需要使用swap空间时，它会优先使用优先级最高的swap区域。</p>
<h4 id="默认优先级" tabindex="-1"><a class="header-anchor" href="#默认优先级"><span>默认优先级</span></a></h4>
<p>如果没有为swap区域设置优先级，Linux内核会默认为它分配一个优先级。通常，内核会根据swap分区的设备号来分配一个默认的优先级，通常是0。对于使用<code v-pre>mkswap</code>命令创建的swap文件或分区，如果没有指定优先级，它们通常会获得相同的默认优先级。</p>
<h4 id="设置优先级" tabindex="-1"><a class="header-anchor" href="#设置优先级"><span>设置优先级</span></a></h4>
<p>可以使用<code v-pre>swapon</code>命令的<code v-pre>-p</code>或<code v-pre>--priority</code>选项来设置swap区域的优先级。以下是设置swap文件优先级的示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">sudo swapon -p 1000 /path/to/swapfile</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上述命令将swap文件的优先级设置为1000。</p>
</div></template>


