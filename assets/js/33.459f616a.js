(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{515:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("与那些在编译时需要进行连接的语言不同，在Java语言中，类型的加载、连接和初始化过程都是在程序运行期间完成的，这种策略让Java语言进行提前编译会面临额外的困难，也会让类加载时稍微增加一些性能开销，但是却为Java应用提供了扩展性和灵活性，Java天生可以动态扩展的语言特性就是依赖运行期动态记载和动态连接这个特点实现的。例如，编写一个面向接口的应用程序，可以等到运行时再指定其实际的实现类，用户可以通过Java预置的或自定义类加载器，让某个本地的应用程序在运行时从网络或其他地方上加载一个二进制流作为其程序代码的一部分。")]),s._v(" "),a("h3",{attrs:{id:"类加载时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类加载时机"}},[s._v("#")]),s._v(" 类加载时机")]),s._v(" "),a("p",[s._v("一个类型（类或接口）被加载到虚拟机内存开始，到卸载出内存位置，它的整个生命周期将会经历："),a("strong",[s._v("加载（Loading）")]),s._v("、"),a("strong",[s._v("验证（Verification）")]),s._v("、"),a("strong",[s._v("准备（Preparation）")]),s._v("、"),a("strong",[s._v("解析（Resolution）")]),s._v("、"),a("strong",[s._v("初始化（Initialization）")]),s._v("、**使用（Using）**和 "),a("strong",[s._v("卸载（Unloading）")])]),s._v(" "),a("p",[s._v("加载、验证、准备、初始化和卸载这五个阶段的顺序是确定的，类型的加载过程必须按照这种顺序按部就班地开始，而解析阶段则不一定：它在某些情况下可以在初始化阶段之后再开始")]),s._v(" "),a("p",[s._v("什么时候开始第一个阶段“加载”并没有强制约束，有且只有六中情况必须立即对类进行“初始化”（而加载、验证、准备自然需要在此之前开始）")]),s._v(" "),a("ul",[a("li",[s._v("遇到new、getstatic、putstatic、或invokestatic这四条字节码指令时，能够生成这四条指令的场景有：\n"),a("ul",[a("li",[s._v("使用new关键字实例化对象的时候")]),s._v(" "),a("li",[s._v("读取或设置一个类型的静态字段（被final修饰、已在编译期把结果放入常量池的静态字段除外）的时候")]),s._v(" "),a("li",[s._v("调用一个类型的静态方法的时候")])])]),s._v(" "),a("li",[s._v("使用 java.lang.reflect 包的方法对类型进行反射调用的时候")]),s._v(" "),a("li",[s._v("当初始化类的时候，如果发现其父类还没有进行过初始化，则需要先触发其父类的初始化")]),s._v(" "),a("li",[s._v("当虚拟机启动时，用户需要指定一个要执行的主类（包含main()方法的类），虚拟机会先初始化这个主类")]),s._v(" "),a("li",[s._v("当使用JDk7新加入的动态语言支持时，如果一个java.lang.invoke.MethodHandle实例最后的解析结果为REF_getStatic、REF_putStatic、REF_invokeStatic、REF_newInvokeSpecial四种类型的方法句柄，并且这个方法句柄对应的类没有进行初始化，则需要先触发其初始化")]),s._v(" "),a("li",[s._v("当一个接口定义了JDK8新加入的默认方法（被default关键字修饰的接口方法）时，如果有这个接口的实现类发生了初始化，那该接口要在其之前被初始化")])]),s._v(" "),a("p",[s._v("以上行为被称为“主动引用”，除此之外的行为被称为“被动引用”")]),s._v(" "),a("p",[s._v("虽然接口中不能使用static语句块，但编译器仍然会为接口生成"),a("code",[s._v("<clinit>()")]),s._v("类构造器，用于初始化接口定义的成员变量，但不同于类的是，当一个接口在初始化时，并不要求其父接口都完成了初始化，只有在真正使用到父接口的时候（如引用接口中定义的常量）才会初始化")]),s._v(" "),a("p",[s._v("被动引用示例1：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 通过子类引用父类的静态字段，不会导致子类初始化\n * 对于静态字段，只有直接定义这个字段的类才会被初始化\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SuperClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SuperClass init!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SubClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SuperClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SubClass init!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NotInitialization")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SubClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// SuperClass init!")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 123")]),s._v("\n")])])]),a("p",[s._v("被动引用示例2：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 通过数组定义来引用类，不会触发此类的初始化\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SuperClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SuperClass init!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SubClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SuperClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SubClass init!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NotInitialization")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SuperClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" superClasses "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SuperClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 没有任何输出")]),s._v("\n")])])]),a("p",[s._v("没有任何输出说明没有触发类的初始化，但是这段代码却触发了另一个名为"),a("code",[s._v("[L包路径.SuperClass")]),s._v("的类的初始化阶段，对于用户代码来说，这并不是一个合法的类型名称，它是一个由虚拟机自动生成的、直接继承与"),a("code",[s._v("java.lang.Object")]),s._v("的子类，创建动作由字节码指令newarray触发，这个类代表了一个元素类型为SuperClass的一维数组，数组中应有的属性和方法（用户可以直接使用的只有被修饰为public的length属性和clone()方法）都实现在这个类里，Java对数组的访问比C安全，很大程度上是因为这个类包装了数组元素的访问")]),s._v(" "),a("p",[s._v("被动引用示例3：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 常量在编译阶段后会存入调用类的常量池中，本质上没有直接引用到定义常量的类\n * 因此不会触发定义常量的类的初始化\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConstClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" HELLO_WORLD "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ConstClass init!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NotInitialization")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConstClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HELLO_WORLD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  hello world")]),s._v("\n")])])]),a("h3",{attrs:{id:"类加载过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类加载过程"}},[s._v("#")]),s._v(" 类加载过程")]),s._v(" "),a("h4",{attrs:{id:"加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载"}},[s._v("#")]),s._v(" 加载")]),s._v(" "),a("p",[s._v("加载阶段，虚拟机需要完成：")]),s._v(" "),a("ul",[a("li",[s._v("通过一个类的全限定名来获取定义此类的二进制字节流")]),s._v(" "),a("li",[s._v("将这个字节流所代表的静态存储结构转化为方法去的运行时数据结构")]),s._v(" "),a("li",[s._v("在内存生成一个代表这个类的"),a("code",[s._v("java.lang.Class")]),s._v("对象，作为方法区这个类的各种数据的访问入口")])]),s._v(" "),a("p",[s._v("方法区中的数据存储格式完全由虚拟机实现自行定义，加载阶段尚未完成，连接阶段可能已经开始")]),s._v(" "),a("h4",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),a("p",[s._v("验证是连接阶段的第一步，目的是确保Class文件的字节流中包含的信息符合规范，保证这些信息被当作代码运行后不会危害虚拟机自身的安全")]),s._v(" "),a("p",[s._v("验证阶段大致有四个行为：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("文件格式验证：")]),s._v(" "),a("ul",[a("li",[s._v("是否以魔数0xCAFEBABE")]),s._v(" "),a("li",[s._v("主次版本号是否在当前Java虚拟机接受范围之内")]),s._v(" "),a("li",[s._v("常量池的常量中是否有不被支持的常量类型（检查常量的tag标志）")]),s._v(" "),a("li",[s._v("指向常量的各种索引值是否有指向不存在的常量或不符合类型的常量")]),s._v(" "),a("li",[s._v("CONSTANT_Utf8_info型的常量中是否有不符合UTF-8编码的数据")]),s._v(" "),a("li",[s._v("Class文件中各个部分及文件本身是否又被删除的或附加的其他信息")]),s._v(" "),a("li",[s._v("......")])]),s._v(" "),a("p",[s._v("只有通过了这个阶段的验证之后，这段字节流才被允许进入Java虚拟机内存的方法区中进行存储，所以后面的三个验证阶段全部基于方法区的存储结构上进行的，不会再直接读取、操作字节流了")])]),s._v(" "),a("li",[a("p",[s._v("元数据验证：")]),s._v(" "),a("ul",[a("li",[s._v("这个类是否有父类（除了"),a("code",[s._v("java.lang.Object")]),s._v("之外，所有的类都应当有父类）")]),s._v(" "),a("li",[s._v("这个类是否继承了不允许被继承的类（被final修饰的类）")]),s._v(" "),a("li",[s._v("如果这个类不是抽象类，是否实现了其父类或接口之中要求的所有方法")]),s._v(" "),a("li",[s._v("类中的字段、方法是否与父类产生矛盾（例如覆盖了父类的final字段，或者出现了不符合规则的方法重载，例如方法参数都一致，但返回类型却不同）")]),s._v(" "),a("li",[s._v("......")])])]),s._v(" "),a("li",[a("p",[s._v("字节码验证：")]),s._v(" "),a("ul",[a("li",[s._v("保证任意时刻操作数栈的数据类型与指令代码序列都能配合工作")]),s._v(" "),a("li",[s._v("保证任何跳转指令都不会跳转到方法体以外的字节码指令上")]),s._v(" "),a("li",[s._v("保证方法体中的类型转换总是有效的")]),s._v(" "),a("li",[s._v("......")])]),s._v(" "),a("p",[s._v("这阶段主要对类的方法体（Class文件中的Code属性）进行校验分析，保证方法在运行时不会做出危害虚拟机安全的行为")])]),s._v(" "),a("li",[a("p",[s._v("符号引用验证")]),s._v(" "),a("ul",[a("li",[s._v("符号引用中通过字符串描述的全限定名是否能找到对应的类")]),s._v(" "),a("li",[s._v("在指定类是否存在符合方法的字段描述符及简单名称所描述的方法和字段")]),s._v(" "),a("li",[s._v("符合引用中的类、字段、方法的可访问性是否可以被当前类访问")]),s._v(" "),a("li",[s._v("......")])]),s._v(" "),a("p",[s._v("这个阶段的校验行为发生在虚拟机将符号引用转化为直接引用的时候，这个转化动作将在连接的第三阶段——解析阶段中发生，主要目的是确保解析行为能正常执行，如果无法通过符号引用验证，java虚拟机会抛出一个"),a("code",[s._v("java.lang.IncompatibleClassChangeError")]),s._v("的子类异常，典型的有："),a("code",[s._v("java.lang.illegalAccessError")]),s._v("、"),a("code",[s._v("java.lang.NoSuchfieldError")]),s._v("、"),a("code",[s._v("java.lang.NoSuchMethodError")]),s._v("等")]),s._v(" "),a("p",[s._v("可以使用"),a("code",[s._v("-Xverify:none")]),s._v(" 参数关闭大部分的类验证措施，以缩短虚拟机类加载时间")])])]),s._v(" "),a("h4",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),a("p",[s._v("准备阶段是正式为类中定义的变量（即静态变量）分配内存并设置类变量初始值的阶段，JDK8之后，类变量会存放在Java堆，从JDk7起，字符串常量池移出永久代，JDK8取消了永久代")]),s._v(" "),a("p",[s._v("这时候进行内存分配的仅包括类变量，而不包括实例变量，一般初始值指的是零值，特殊情况是类字段的字段属性表中存在ConstantValue属性，拿在准备阶段变量值就会被初始化为ConstantValue所指定的值，例如：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("编译时Javac将会为value生成ConstantValue属性，在准备阶段虚拟机就会根据ConstantValue的设置将value赋值为123")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("数据类型")]),s._v(" "),a("th",[s._v("零值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("int")]),s._v(" "),a("td",[s._v("0")])]),s._v(" "),a("tr",[a("td",[s._v("long")]),s._v(" "),a("td",[s._v("0L")])]),s._v(" "),a("tr",[a("td",[s._v("short")]),s._v(" "),a("td",[s._v("(short)0")])]),s._v(" "),a("tr",[a("td",[s._v("char")]),s._v(" "),a("td",[s._v("'\\u0000'")])]),s._v(" "),a("tr",[a("td",[s._v("byte")]),s._v(" "),a("td",[s._v("(byte)0")])]),s._v(" "),a("tr",[a("td",[s._v("boolean")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("float")]),s._v(" "),a("td",[s._v("0.0f")])]),s._v(" "),a("tr",[a("td",[s._v("double")]),s._v(" "),a("td",[s._v("0.0d")])]),s._v(" "),a("tr",[a("td",[s._v("reference")]),s._v(" "),a("td",[s._v("null")])])])]),s._v(" "),a("h4",{attrs:{id:"解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[s._v("#")]),s._v(" 解析")]),s._v(" "),a("p",[s._v("解析阶段是Java虚拟机将常量池内的符号引用（字面量）替换为直接引用（内存指针）的过程")]),s._v(" "),a("ul",[a("li",[s._v("类或接口解析")]),s._v(" "),a("li",[s._v("字段解析")]),s._v(" "),a("li",[s._v("方法解析")]),s._v(" "),a("li",[s._v("接口方法解析")])]),s._v(" "),a("h4",{attrs:{id:"初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[s._v("#")]),s._v(" 初始化")]),s._v(" "),a("p",[s._v("直到初始化阶段，Java虚拟机才真正开始执行类中编写的Java程序代码，将主导权移交给应用程序，初始化阶段就是执行类构造器"),a("code",[s._v("<clinit()>")]),s._v("方法的过程，它是由java编译器自动生成的方法")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("<clinit()>")]),s._v("方法是由编译器自动收集类中的所有类变量的赋值动作和静态语句块中的语句合并产生的，编译器收集的顺序是由语句在源文件中出现的顺序决定的，静态语句块只能访问到定义在静态语句块之前的变量，定义在它之后的变量，在前面的静态语句块可以赋值，但是不能访问")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编译通过")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 提示 非法前向引用")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("<clinit()>")]),s._v("方法与类的构造函数（在虚拟机视角中的实例构造器"),a("code",[s._v("<init>()")]),s._v("方法）不同，他不需要显式调用父类构造器，Java虚拟机会保证在子类的"),a("code",[s._v("<clinit()>")]),s._v("方法执行前，父类的"),a("code",[s._v("<clinit()>")]),s._v("方法已经执行完毕，因此第一个被执行"),a("code",[s._v("<clinit()>")]),s._v("方法的类型肯定是"),a("code",[s._v("java.lang.Object")])])]),s._v(" "),a("li",[a("p",[s._v("由于父类的"),a("code",[s._v("<clinit()>")]),s._v("方法先执行，也就意味着父类中定义的静态语句块要优先于子类的变量赋值操作")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Parent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sub")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Parent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("<clinit()>")]),s._v("方法对于类或接口不是必须的，如果一个类中没有静态语句块，也没有对变量的赋值操作，那么编译器就不为这个类生成"),a("code",[s._v("<clinit()>")]),s._v("方法")])]),s._v(" "),a("li",[a("p",[s._v("接口执行"),a("code",[s._v("<clinit()>")]),s._v("方法不需要先执行父接口的"),a("code",[s._v("<clinit()>")]),s._v("方法，只有当父接口中定义的变量被使用时，父接口才会被初始化，此外，接口的实现类在初始化时也一样不会执行接口的"),a("code",[s._v("<clinit()>")]),s._v("方法")])]),s._v(" "),a("li",[a("p",[s._v("Java虚拟机必须保证一个类的"),a("code",[s._v("<clinit()>")]),s._v("方法在多线程环境中被正确地加锁同步")])])]),s._v(" "),a("h3",{attrs:{id:"类加载器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类加载器"}},[s._v("#")]),s._v(" 类加载器")]),s._v(" "),a("p",[s._v("JDK9之前：")]),s._v(" "),a("ul",[a("li",[s._v("启动类加载器")]),s._v(" "),a("li",[s._v("扩展类加载器")]),s._v(" "),a("li",[s._v("应用程序类加载器")]),s._v(" "),a("li",[s._v("自定义类记载器")])]),s._v(" "),a("p",[s._v("JDK9之后：")]),s._v(" "),a("ul",[a("li",[s._v("启动类加载器")]),s._v(" "),a("li",[s._v("平台类加载器")]),s._v(" "),a("li",[s._v("应用程序类加载器")]),s._v(" "),a("li",[s._v("自定义加载器")])])])}),[],!1,null,null,null);t.default=e.exports}}]);