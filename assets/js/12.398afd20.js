(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{494:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统"}},[s._v("#")]),s._v(" 系统")]),s._v(" "),a("p",[s._v("Ubuntu 16.04")]),s._v(" "),a("h2",{attrs:{id:"安装所需环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装所需环境"}},[s._v("#")]),s._v(" 安装所需环境")]),s._v(" "),a("p",[a("strong",[s._v("PHP")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php7.0\n")])])]),a("p",[a("strong",[s._v("MySQL")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n")])])]),a("p",[s._v("设置数据库"),a("code",[s._v("root")]),s._v("密码：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190304224713475.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1RLREtfYm90,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("strong",[s._v("PHP-MySQL")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php-mysql\n")])])]),a("h2",{attrs:{id:"下载-wordpress-压缩包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-wordpress-压缩包"}},[s._v("#")]),s._v(" 下载 WordPress 压缩包")]),s._v(" "),a("p",[a("strong",[s._v("方法一")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("从"),a("code",[s._v("http://wordpress.org/download/")]),s._v("下载压缩包")])]),s._v(" "),a("li",[a("p",[s._v("解压后放到"),a("code",[s._v("Ubuntu")]),s._v("系统")])])]),s._v(" "),a("p",[a("strong",[s._v("方法二")])]),s._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://wordpress.org/latest.tar.gz\n")])])])]),s._v(" "),a("li",[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf latest.tar.gz\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"mysql-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-配置"}},[s._v("#")]),s._v(" Mysql 配置")]),s._v(" "),a("p",[s._v("WordPress需要"),a("code",[s._v("Mysql")]),s._v("存储用户、评论以及博客的各种信息，所以需要一个一定权限的账号密码，直接给WordPress使用"),a("code",[s._v("root")]),s._v("账号也是可以的，但是权限太大不安全，所以这里创建一个新用户：")]),s._v(" "),a("p",[a("strong",[s._v("连接数据库：")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ mysql -u root -p\nEnter password: \n\nWelcome to the MySQL monitor.  Commands end with "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" or "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("g.\nYour MySQL connection "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\nServer version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.7")]),s._v(".25-0ubuntu0.16.04.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nCopyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(", Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'help;'")]),s._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\h'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" help. Type "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[s._v("\\c")]),s._v("'")]),s._v(" to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v(" the current input statement.\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])])]),a("p",[a("strong",[s._v("创建"),a("code",[s._v("wordpress")]),s._v("数据库存放数据：")])]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> CREATE DATABASE database;\n")])])]),a("p",[a("code",[s._v("database")]),s._v("：数据库名，这里假设使用"),a("code",[s._v("wordpress")])]),s._v(" "),a("p",[s._v("添加一个"),a("code",[s._v("wordpress")]),s._v("用户，它只有操作"),a("code",[s._v("wordpress")]),s._v("数据库的权限：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" GRANT ALL PRIVILEGES ON database.* TO "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wordpressuser"')]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost"')]),s._v(" IDENTIFIED BY "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("database")]),s._v(" "),a("td",[s._v("和上一步相同")])]),s._v(" "),a("tr",[a("td",[s._v("wordpressuser")]),s._v(" "),a("td",[s._v("新创建的用户名，这里假设使用"),a("code",[s._v("wordpress")])])]),s._v(" "),a("tr",[a("td",[s._v("password")]),s._v(" "),a("td",[s._v("新创建用户的密码，这里假设使用"),a("code",[s._v("wordpress")])])])])]),s._v(" "),a("p",[a("strong",[s._v("刷新使新用户生效：")])]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> FLUSH PRIVILEGES;\n")])])]),a("h2",{attrs:{id:"配置wp-config-php文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置wp-config-php文件"}},[s._v("#")]),s._v(" 配置"),a("code",[s._v("wp-config.php")]),s._v("文件")]),s._v(" "),a("p",[s._v("复制"),a("code",[s._v("wp-config-sample.php")]),s._v("为"),a("code",[s._v("wp-config.php")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" wp-config-sample.php wp-config.php\n")])])]),a("p",[s._v("编辑"),a("code",[s._v("wp-config.php")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" wp-config.php \n")])])]),a("p",[s._v("修改三行内容：")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 上面设置的database")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'DB_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'wordpress'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 上面设置的wordpressuser")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'DB_USER'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'wordpress'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 上面设置的password")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'DB_PASSWORD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'wordpress'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"配置服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置服务器"}},[s._v("#")]),s._v(" 配置服务器")]),s._v(" "),a("p",[s._v("这里使用"),a("code",[s._v("Nginx")])]),s._v(" "),a("p",[s._v("安装"),a("code",[s._v("Nginx")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n")])])]),a("p",[s._v("将解压的"),a("code",[s._v("wordpress")]),s._v("文件复制到"),a("code",[s._v("Nginx")]),s._v("目录：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" wordpress/ -R /var/www/html/\n")])])]),a("p",[s._v("修改"),a("code",[s._v("Nginx")]),s._v("配置：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/nginx/sites-enabled/default \n")])])]),a("p",[s._v("在"),a("code",[s._v("server_name _;")]),s._v("一行下添加以下内容：")]),s._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_pass")]),s._v("   unix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("run"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("php"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("php7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("fpm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_index")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_param")]),s._v("  SCRIPT_FILENAME  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$document_root")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fastcgi_script_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v("        fastcgi_params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("然后保存退出")]),s._v(" "),a("p",[s._v("验证"),a("code",[s._v("Nginx")]),s._v("配置格式是否正确：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -t\n\n// 输出以下内容说明没问题，否则排查哪步出问题\nnginx: the configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /etc/nginx/nginx.conf syntax is ok\nnginx: configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /etc/nginx/nginx.conf "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" is successful\n")])])]),a("p",[s._v("重启"),a("code",[s._v("Nginx")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -s reload\n")])])]),a("h2",{attrs:{id:"运行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行脚本"}},[s._v("#")]),s._v(" 运行脚本")]),s._v(" "),a("p",[s._v("浏览器访问："),a("code",[s._v("http://server2.com/wordpress/wp-admin/install.php")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190305002301692.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1RLREtfYm90,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("然后安装完成登录")]),s._v(" "),a("p",[a("strong",[s._v("这时候可能出现：")])]),s._v(" "),a("blockquote",[a("p",[s._v("403 Forbidden")])]),s._v(" "),a("p",[a("strong",[s._v("解决：")])]),s._v(" "),a("p",[s._v("修改"),a("code",[s._v("Nginx")]),s._v("配置：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/nginx/sites-enabled/default \n")])])]),a("p",[s._v("在"),a("code",[s._v("index")]),s._v("后添加"),a("code",[s._v("index.php")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("htm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("最后重启"),a("code",[s._v("Nginx")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -s reload\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);