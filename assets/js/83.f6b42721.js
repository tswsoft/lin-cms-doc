(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{457:function(a,t,e){"use strict";e.r(t);var s=e(26),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"日志系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志系统"}},[a._v("#")]),a._v(" "),e("H2Icon"),a._v("日志系统")],1),a._v(" "),e("p",[a._v("lin-cms 的日志系统基于 spring-boot 和 logback，在此之上提供了日志记录文件和请求日志记录两个功能。")]),a._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),e("p",[a._v("lin-cms 推荐使用 lombok 注解的方式去记录日志。")]),a._v(" "),e("p",[a._v("首先，请在需要进行日志记录的类上打上"),e("code",[a._v("Slf4j")]),a._v("注解，如下：")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Slf4j")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RequestLogInterceptor")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HandlerInterceptorAdapter")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 省略")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("当开启该注解后，便可以在类中方便的使用"),e("code",[a._v("log")]),a._v("进行日志记录：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('log.info("[{}] -> [{}] from: {} costs: {}ms",\n                request.getMethod(),\n                request.getServletPath(),\n                request.getRemoteAddr(),\n                System.currentTimeMillis() - startTime.get()\n );\n')])])]),e("p",[a._v("logback 日志共有五个等级，分别为"),e("code",[a._v("trace")]),a._v("，"),e("code",[a._v("debug")]),a._v("，"),e("code",[a._v("info")]),a._v("，"),e("code",[a._v("warn")]),a._v("和"),e("code",[a._v("error")]),a._v("，即：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("log.trace();\nlog.info();\nlog.warn();\nlog.debug();\nlog.error();\n")])])]),e("p",[a._v("请根据实际的日志等级调用正确的方法。")]),a._v(" "),e("p",[a._v("lin-cms 仅在 spring-boot 和 logback 的基础上，增加了一些必要的日志功能，因此保留\n了 spring-boot 的日志配置方式，如果你不熟悉 spring-boot 可以查阅一下它的文档。")]),a._v(" "),e("h2",{attrs:{id:"日志记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志记录"}},[a._v("#")]),a._v(" 日志记录")]),a._v(" "),e("p",[a._v("lin-cms 将日志会记录到终端和文件两个地方，在生产环境下只会向文件中记录。记录日志\n的文件默认在工作目录下的"),e("code",[a._v("log")]),a._v("文件夹中，如下：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("logs\n└── "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-01\n  ├── "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-01-06.log\n  ├── "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-01-09.log\n  └── "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-01-13.log\n")])])]),e("p",[a._v("文件以一个月作为一个子目录，每一个子目录下皆有每一天的日志文件。当某一天日志文件\n超过一定的大小时，会被切割，默认的切割大小为"),e("code",[a._v("5M")]),a._v("。")]),a._v(" "),e("p",[a._v("当然你也可以通过修改 resources 目录下的"),e("code",[a._v("logback-spring.xml")]),a._v("文件来修改日志的记录\n方式。")]),a._v(" "),e("p",[a._v("logback-spring.xml 文件中的"),e("code",[a._v("log.path")]),a._v("属性可以指定日志文件的记录位置，如下：")]),a._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("log.path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("logs/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])])]),e("p",[a._v("如果需要改变日志文件的存储位置，可以修改该属性（可以为绝对路径）达到你的目的。")]),a._v(" "),e("h2",{attrs:{id:"日志配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志配置"}},[a._v("#")]),a._v(" 日志配置")]),a._v(" "),e("p",[e("code",[a._v("logback-spring.xml")]),a._v("文件是 logback 默认配置文件，你可以更换"),e("code",[a._v("appender")]),a._v("，修改日志\n文件分割大小。其中几个重要的配置如下：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<property name="log.path" value="logs/"/>    // 日志存储文件路径\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<appender name="FILE" class="io.github.talelin.core.logger.AdvanceRollingFileAppender">  // 自定义日志appender\n    <dir>${log.path}</dir> // 日志存储位置\n    <maxFileSize>5MB</maxFileSize> // 日志切割大小，默认为5M\n    <encoder> // 日志记录格式\n        <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n</pattern>\n        <charset>UTF-8</charset> // 文件默认编码\n    </encoder>\n    <filter class="ch.qos.logback.classic.filter.ThresholdFilter">\n        <level>debug</level> // 日志过滤等级，默认为debug，即记录debug以上的等级\n    </filter>\n</appender>\n')])])]),e("p",[a._v("logback 中，日志等级是一个较为重要的概念\n，"),e("code",[a._v("trace")]),a._v("，"),e("code",[a._v("debug")]),a._v("，"),e("code",[a._v("info")]),a._v("，"),e("code",[a._v("warn")]),a._v("和"),e("code",[a._v("error")]),a._v("的等级依次递增，只要日志等级足够才会\n被记录，如上面的配置文件中指定了日志过滤等级为"),e("code",[a._v("debug")]),a._v("，则在"),e("code",[a._v("debug")]),a._v("之上的等级日志\n会被记录，所以"),e("code",[a._v("trace")]),a._v("日志不会被记录。")]),a._v(" "),e("p",[a._v("大多数情况下，你只需要修改上面提到的几个配置就足够了，如果你需要定制自己的日志格\n式和记录方式，可以查阅 logback 文档。")]),a._v(" "),e("p",[a._v("一般情况下，我们都推荐通过"),e("code",[a._v("application.properties")]),a._v("配置文件来改变日志记录等级，如\n下：")]),a._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 日志等级")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("logging.level.io.github.talelin.demo.mapper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("debug")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("logging.level.web")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("debug")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 日志配置文件")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("logging.config")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("classpath:logback-spring.xml")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 是否开启请求日志记录")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("request-log.enabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true")]),a._v("\n")])])]),e("p",[e("code",[a._v("logging.level")]),a._v("可以指定日志记录等级，"),e("code",[a._v("io.github.talelin.demo.mapper")]),a._v("是包名，表示\n这个包下的所有日志记录等级均为"),e("code",[a._v("debug")]),a._v("，你也可以采用这种方式来指定特定包的日志等\n级。")]),a._v(" "),e("p",[e("code",[a._v("request-log.enabled")]),a._v("表示是否开启请求日志记录，默认是开，当然如果你不需要也可以\n关闭。")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("如果你使用 lin-cms，我们还是建议你直接使用我们的日志模式，在\napplication.properties 配置相应包的日志记录等级其实已经足够了。")])]),a._v(" "),e("RightMenu")],1)}),[],!1,null,null,null);t.default=n.exports}}]);