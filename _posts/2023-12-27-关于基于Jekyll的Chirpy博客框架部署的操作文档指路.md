---
title: 关于基于Jekyll的Chirpy博客框架部署的操作文档指路
date: 2023-12-27 14:46:00 +0800
categories: [HARDCORE ARTICLES, CODING]
tags: [origin]
author: LyricEpic
---

以下所有内容均基于Windows操作系统，主要是本人备忘用。如果对您有帮助，也可以直接取用，相当于我帮您完成了试错和整理=w=    

# 文档指路

1.Chirpy 安装与部署: [https://chirpy.cotes.page/posts/getting-started/#option-1-using-the-chirpy-starter](https://chirpy.cotes.page/posts/getting-started/#option-1-using-the-chirpy-starter)    
2.在Ruby+Devkit上安装Jekyll 教程: [https://jekyllrb.com/docs/installation/windows/](https://jekyllrb.com/docs/installation/windows/)    
3.Ruby Installer: [https://rubyinstaller.org/](https://rubyinstaller.org/)
4.Git-SCM(用于使用Git Clone下载对应Repo到本地): [https://git-scm.com/](https://git-scm.com/)    
5.Git-Clone文档: [https://git-scm.com/docs/git-clone](https://git-scm.com/docs/git-clone)    
6.Chirpy Template编写文章格式规范: [https://chirpy.cotes.page/posts/write-a-new-post/](https://chirpy.cotes.page/posts/write-a-new-post/)       
7.清华大学开源软件镜像站(TUNA) RubyGems: [https://mirrors.tuna.tsinghua.edu.cn/help/rubygems/](https://mirrors.tuna.tsinghua.edu.cn/help/rubygems/)    
8.**知乎教程**,推荐跟着这个走: [https://zhuanlan.zhihu.com/p/641525444?utm_id=0](https://zhuanlan.zhihu.com/p/641525444?utm_id=0)    
9.TimeZone Picker: [https://kevinnovak.github.io/Time-Zone-Picker/](https://kevinnovak.github.io/Time-Zone-Picker/)    

# 个人的一些改动:(可能对你没有帮助)

#1 Gemfile内结尾加以下代码:        
```
gem 'rake', '>= 0.a'
```

#2 WORKFLOWS:删除pages-deploy.yml并使用Github Actions的Jekyll配置，生成jekyll.yml，修正:    
```
run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
```
为    
```
run: bundle add webrick && bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
```

#3 备注:Git Clone使用方法    
安装Git后打开cmd，使用cd命令至对应目录。例:    
```
cd desktop
```
然后使用以下命令    
```
git clone <Repo Link>
```

#4 备注:Git Commit＆Push    
安装Git后打开cmd，cd至本地Repo目录，分别运行以下命令:    
```
git add . 
git commit -m "<info>"
git push
```

