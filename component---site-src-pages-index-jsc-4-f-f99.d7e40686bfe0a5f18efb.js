(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(e,a,t){"use strict";t.r(a);t(58),t(266);var n=t(0),r=t.n(n),l=t(218),c=t.n(l),s=t(230),o=(t(220),t(219)),i=t(223),u=t(525),m=t(467),d=t(520),f=t(526),g=t(521),E=t(522),p=t(523),h=t(267),x=t.n(h);t(268),t(269);function b(){return(b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var y="\n// JS\nfunction hello() {\n  let result = fibonacci(10000);\n  console.log(result);\n  return result;\n}\n",v='\n// Neon\nfn hello(mut cx: FunctionContext) -> JsResult<JsNumber> {\n  let result = cx.number(fibonacci(10000));\n  println!("{}", result);\n  Ok(result)\n}',N=[{name:"Make Array",code:'\n// Create an array and add some values to it\nfn make_an_array(mut cx: FunctionContext) -> JsResult<JsArray> {\n  // Create some values:\n  let n = cx.number(9000);\n  let s = cx.string("hello");\n  let b = cx.boolean(true);\n  // Create a new array:\n  let array: Handle<JsArray> = cx.empty_array();\n  // Push the values into the array:\n  array.set(&mut cx, 0, n)?;\n  array.set(&mut cx, 1, s)?;\n  array.set(&mut cx, 2, b)?;\n  // Return the array:\n  Ok(array)\n}\n'},{name:"Print Function Arguments",code:'\n// Create a function that gets the number of arguments passed to it\nfn get_args_len(mut cx: FunctionContext) -> JsResult<JsNumber> {\n    let args_length = cx.len();\n    println!("{}", args_length);\n    Ok(cx.number(args_length))\n}\n'},{name:"Async Fibonacci",code:"\n// Asynchronously compute fibonacci on another thread\nfn fibonacci_async(mut cx: FunctionContext) -> JsResult<JsUndefined> {\n  let n = cx.argument::<JsNumber>(0)?.value() as usize;\n  let cb = cx.argument::<JsFunction>(1)?;\n\n  let task = FibonacciTask { argument: n };\n  task.schedule(cb);\n\n  Ok(cx.undefined())\n}\n"}],C=function(e){return r.a.createElement("div",{className:"neonProjectLogo"},r.a.createElement("div",{className:"neon-logo"},r.a.createElement("span",{className:"open neon-heading neon-flicker-blink"},e.title),r.a.createElement("span",{className:"hrs neon-subheading"},e.subtitle)))},_=[{title:r.a.createElement(r.a.Fragment,null,"Simple Tooling"),imageUrl:"img/hammer.svg",description:r.a.createElement(r.a.Fragment,null,"No makefiles. No fancy global build requirements. Just Node and Rust")},{title:r.a.createElement(r.a.Fragment,null,"Guaranteed Safety"),description:r.a.createElement(r.a.Fragment,null,"If a neon module compiles, it is guaranteed to be memory safe by the rust compiler"),imageUrl:"img/checkmark.svg"},{title:r.a.createElement(r.a.Fragment,null,"Easy Parallelism"),description:r.a.createElement(r.a.Fragment,null,"Safely run multiple threads without data races"),imageUrl:"img/fork.svg"}],k=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={currentExampleIdx:0,currentCode:N[0].code},t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var l=n.prototype;return l.onButtonClick=function(e){this.setState({currentExampleIdx:e,currentCode:N[e].code})},l.render=function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:x.a.Carousel},N.map((function(a,t){return r.a.createElement(f.a,{color:e.state.currentExampleIdx===t?"primary":"secondary",key:a.name,onClick:function(){return e.onButtonClick(t)}},a.name)}))),r.a.createElement(F,{language:"rust"},this.state.currentCode))},n}(r.a.Component),F=function(e){return r.a.createElement(u.a,b({},e,{customStyle:{background:"#08162E",margin:"30px 0",textAlign:"left",color:"white !important"},style:m.a}),e.children)};F.defaultProps={language:"javascript"};var J=function(e){return e.join(" ")};a.default=function(){var e=Object(o.a)().siteConfig,a=void 0===e?{}:e;return r.a.createElement(s.a,{title:a.title+" - "+a.tagline,description:a.tagline},r.a.createElement("header",{className:J([x.a.header,x.a.containerOdd])},r.a.createElement(g.a,null,r.a.createElement(E.a,{xs:"12",className:"text-center"},r.a.createElement(C,{title:a.title,subtitle:a.tagline}),r.a.createElement(p.a,null,r.a.createElement(E.a,{xs:6},r.a.createElement(F,null,y)),r.a.createElement(E.a,{xs:6},r.a.createElement(F,{language:"rust"},v))),r.a.createElement(p.a,{className:x.a.actionButtons},r.a.createElement(d.a,null,r.a.createElement("a",{href:Object(i.a)("docs/getting-started")},r.a.createElement(f.a,{color:"primary"},"Try It Out")),r.a.createElement("a",{href:a.repoUrl},r.a.createElement(f.a,{color:"primary",target:"_blank"},"GitHub")),r.a.createElement("a",{href:"https://neon-bindings.com/api/neon/index.html"},r.a.createElement(f.a,{color:"primary",target:"_blank"},"API"))))))),r.a.createElement("main",null,r.a.createElement("section",{className:J([x.a.featuresContainer,x.a.containerEven])},r.a.createElement(E.a,{xs:"12",className:"text-center"},r.a.createElement("h3",{className:x.a.featureHeader},"Features")),_&&_.length&&r.a.createElement("section",null,r.a.createElement(g.a,null,r.a.createElement(p.a,null,_.map((function(e,a){var t=e.imageUrl,n=e.title,l=e.description;return r.a.createElement("div",{key:x.a.featuresContainer,className:c()("col col--4",x.a.feature)},r.a.createElement("h4",{className:x.a.featureSubHeader},r.a.createElement("span",null,r.a.createElement("img",{className:x.a.featureImage,src:Object(i.a)(t),alt:n})),n),r.a.createElement("p",{className:x.a.featureDescription},l))})))))),r.a.createElement("section",{className:J([x.a.featuresContainer,x.a.containerOdd])},r.a.createElement(g.a,null,r.a.createElement(E.a,{xs:"12",className:"text-center"},r.a.createElement("h3",{className:x.a.featureHeader},"Examples")),r.a.createElement(E.a,{xs:"12",className:"text-center"},r.a.createElement(k,null)))),r.a.createElement("section",{className:J([x.a.featuresContainer,x.a.containerEven])},r.a.createElement(g.a,null,r.a.createElement(E.a,{xs:"12",className:"text-center"},r.a.createElement("h3",{className:x.a.featureHeader},"Demo")),r.a.createElement(E.a,{xs:"12"},r.a.createElement("iframe",{src:"https://asciinema.org/a/269799/iframe",width:"100%",height:"300px"}))))))}},267:function(e,a,t){e.exports={header:"header_1UBA",heroBanner:"heroBanner_2Ftp",featureDescription:"featureDescription_37Ue",featureHeader:"featureHeader_2vom",featureSubHeader:"featureSubHeader_WGT1",containerOdd:"containerOdd_8IvM",containerEven:"containerEven_1C3z",actionButtons:"actionButtons_nmJ6",featuresContainer:"featuresContainer_-qvw",featureImage:"featureImage_3Xqx",Carousel:"Carousel_1jbA"}},268:function(e,a,t){},269:function(e,a,t){}}]);