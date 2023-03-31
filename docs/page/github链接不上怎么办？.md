# github链接不上怎么办？


## 问题现象:
近期在使用git拉代码的时候,发现代码无法clone下来,后来又尝试使用GitHub Desktop工具进行桌面端拉代码
问题还是一样,无法拉代码提示错误如下:

::: danger
Failed to connect to github.com port 443: Connection refused
:::

## 问题原因:
一般产生这种原因的可能都是因为开了梯子或者其他代理工具导致的,刚开始也是这种想法,就用了重置代理或者取消
代理的方式进行尝试解决!

```shell
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'
```

```shell
git config --global --unset http.proxy
git config --global --unset https.proxy
```


<code>
但是做了上述尝试之后发现并没有效果还是提示上述报错,根本没法解决问题,即使关闭了梯子发现问题还是一样存在,那么估计产生的问题也并非可能是代理产生的,也许是DNS解析这块,于是开始尝试修改hosts文件,修改ip地址和域名的映射关系,在DNS解析前先会尝试走hosts然后在找不到的的情况下再DNS解析,修改hosts文件域名解析就会先走hosts中的ip和域名的映射关系。
</code>

## 问题解决

**第一步记录<code>github.com</code>的ip地址**，通过[IP地址查询](https://link.juejin.cn/?target=https%3A%2F%2Fwww.ipaddress.com%2F)可查询


```shell
github.com
```

**IP地址查询**

![An image](/ipaddress.webp)

将复制好的<code>github.com</code>域名复制上查询到对应的ip地址

![An image](/ip.webp)
复制红色标志的是<code>github</code>的IP地址
第二步通过路径找到<code>hosts</code>文件:


复制地址以下路径
```shell
C:\Windows\System32\drivers\etc
```


**第三步找到红色箭头的<code>hosts</code>文件:**
![An image](/host.webp)
![An image](/genggai.webp)


**第四步重新<code>git</code>拉代码**

![An image](/git.webp)