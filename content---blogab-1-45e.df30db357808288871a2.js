(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return l}));n(58),n(31),n(21),n(22),n(59),n(0);var a=n(217);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={title:"Neon Wants Your Help!",author:"Dave Herman",categories:["Rust","Node","Neon","Contributors"]},r=[{value:"...And I Mean a Wide Range",id:"and-i-mean-a-wide-range",children:[]},{value:"Getting Involved",id:"getting-involved",children:[]},{value:"A Note About Community",id:"a-note-about-community",children:[]}],s={rightToc:r},p="wrapper";function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(p,o({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u26a0\ufe0f This article contains references to an outdated version of neon \u26a0\ufe0f"),Object(a.b)("p",null,"My history with Rust goes back a long way. But it was when I really started to understand its ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.youtube.com/watch?v=ySW6Yk_DerY"}),"enabling potential"),", its capacity to empower whole groups of people to do things they couldn't do before, that I just had to find a more direct way to get involved with making that promise a reality."),Object(a.b)("p",null,"I decided that the best way I could help widen the on-ramp to Rust was to create ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.neon-bindings.com"}),"Neon"),": a library for conveniently implementing native Node.js modules with Rust instead of C/C++. With Neon, JavaScript programmers can get access to all the power that Rust offers: high-performance native code, convenient multithreading, freedom from memory faults and data races, and access to native libraries and the ",Object(a.b)("a",o({parentName:"p"},{href:"https://crates.io"}),"Cargo"),' ecosystem. And they can do this without throwing away their working apps or existing expertise. In short, my goal with Neon is to make it easy for JavaScript programmers to "dip their toe" into Rust without diving straight into the deep end.'),Object(a.b)("img",{className:"right",style:{width:"200px",height:"150px"},src:"/assets/help-wanted.jpg"})," We've made some great progress recently, with some cool new features including [Electron support](https://guides.neon-bindings.com/electron-apps/) and a new [Task API](https://neon-bindings.com/api/neon/task/) for asynchronously spawning Rust computations to run in a background thread. **But Neon is still a young project, and could use your help to take it to the next level!** Neon is still primarily built by me and a small set of contributors, so **I'm looking for contributors with a wide range of skills and interests** who can join us to take Neon to the next level and eventually **grow into a project leadership team.** I think we're onto something exciting here: a chance to build bridges between the JavaScript and Rust worlds and to create opportunities for aspiring new systems programmers. And I hope you'll consider being a part of it!",Object(a.b)("h2",{id:"and-i-mean-a-wide-range"},"...And I Mean a Wide Range"),Object(a.b)("p",null,"My dream is to make Neon:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Easy to learn:")," The default abstraction layer should be intuitive enough that a newcomer's first experience coming from JavaScript should be approachable, and there should be documentation and learning materials to smoothe the on-boarding experience."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Rock-solid:")," Users should feel confident that refactoring their code in Rust should be no more likely to crash their Node server than vanilla JavaScript."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Fully-featured:")," The Neon API should be able to express everything you could do in JavaScript itself."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Stable:")," Once we start approaching 1.0, Neon should get on a regular release cycle, with strong commitment to semantic versioning and backwards compatibility.")),Object(a.b)("p",null,"Just to give you a sense of the many varied kinds of contributions we could use, here's a taste:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Project management.")," We should keep on top of issues and PRs. I would love to set up a regular meeting with anyone who's willing to help out with this! I could also use help setting up a simple RFC process similar to ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/rust-lang/rfcs"}),"Rust RFCs"),", especially for having community discussions around API and workflow design."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Technical writing.")," The ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/neon-bindings/guides"}),"guides")," are shaping up, but they're incomplete and one of the most important tools for on-boarding new users. The ",Object(a.b)("a",o({parentName:"p"},{href:"https://neon-bindings.com/api"}),"API docs")," are pretty rudimentary and would benefit from many more examples---we should strive for a high-quality, illustrative example for every single API."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Testing.")," The ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/neon-bindings/neon/tree/master/test"}),"test suite")," has a decent structure but is not at all complete. We should aim for complete test coverage of the API!"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Teaching.")," I would love to get some good thinking into how to teach Neon to various audiences, especially people who are new to Rust and systems programming. We could use this to drive the way we structure the guides, tutorial videos, etc."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Windows development.")," My primary development machine is Windows these days, but I'm not an expert. I recently ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/neon-bindings/neon/issues/248"}),"broke our Appveyor builds")," just to prove it! \ud83d\ude1d We've also seen some intermittent hangs in Appveyor builds and I'd love a Windows expert to ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/neon-bindings/neon/issues/250"}),"do some investigating"),"!"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Web development.")," The Neon web site is currently a static page. It certainly would be fun to set it up as a Node page using Neon itself! One of the nice dynamic things we could do would be to create a roadmap page like ",Object(a.b)("a",o({parentName:"p"},{href:"http://usehelix.com/roadmap"}),"the one Helix has"),", with automatic tracking of milestone progress using GitHub APIs. We should also set up a Neon project blog with Jekyll and style it consistently with the rest of ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.neon-bindings.com"}),"neon-bindings.com"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Ops and automation.")," I've started an ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/neon-bindings/neon/issues?q=is%3Aissue+is%3Aopen+label%3Aautomation"}),"automation label")," in the issues. A fantastic contribution would be an automated ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/neon-bindings/neon/issues/42"}),"publication script")," to make releases one-touch. (This is realistically achievable now thanks to some project reorganization.)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Node plugins.")," We should explore the possibility of supporting using the new ",Object(a.b)("a",o({parentName:"p"},{href:"https://nodejs.org/api/n-api.html"}),"N-API")," as an alternative backend for the implementation. We wouldn't be able to move to this as the default backend right away, but it could pave the way for supporting ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/nodejs/node-chakracore"}),"Node on ChakraCore"),", and eventually might replace the current backend entirely."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"API design.")," There are lots of things you can do in JavaScript that you still can't do in Neon, so there's plenty of missing APIs to finish. And it's not too late to make incompatible changes to the API that's there currently. For example, I'd be especially interested in ideas about making the ",Object(a.b)("a",o({parentName:"p"},{href:"https://neon-bindings.com/api/neon/scope/trait.scope"}),Object(a.b)("inlineCode",{parentName:"a"},"Scope"))," API less awkward, if possible."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Cargo extensions.")," So far, the ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.npmjs.com/package/neon-cli"}),"neon-cli")," workflow has been reasonably successful at abstracting away the painful configuration details required to build native Node modules correctly. But the ",Object(a.b)("em",{parentName:"p"},"ideal")," situation would be to allow programmers to just use ",Object(a.b)("inlineCode",{parentName:"p"},"cargo build"),", ",Object(a.b)("inlineCode",{parentName:"p"},"cargo run"),", and the like to build their Neon crates like any other Rust project. The recent discussions around ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/rust-lang/rfcs/pull/2136"}),"making Cargo extendable")," open up some exciting possibilities to push in this direction. One of the ways you can indirectly help with Neon is to help that effort."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Macrology.")," One of the big, exciting projects we have left is to flesh out the ","[high-level macro for defining JavaScript classes]","({{ site.baseurl }}{% post_url 2016-04-01-native-js-classes-in-neon %}) (and another for defining standalone functions) so users can use simple type annotations to automate conversions between JavaScript and Rust types. We should take inspiration from the design of our sibling project, ",Object(a.b)("a",o({parentName:"p"},{href:"http://usehelix.com"}),"Helix"),"!"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Systems programming.")," One of the biggest challenges we have to tackle is making the process of shipping Neon libraries practical, especially for shipping prebuilt binaries. One technique we can explore is to create an ABI-stable middle layer so that Neon binaries don't need to be rebuilt for different versions of Node."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Threading architectures.")," Currently, Neon supports a couple of forms of threading: pausing the JavaScript VM to synchronously run a parallelized Rust computation (via the ",Object(a.b)("a",o({parentName:"p"},{href:"https://neon-bindings.com/api/neon/vm/trait.lock"}),Object(a.b)("inlineCode",{parentName:"a"},"Lock"))," API), and running a background ",Object(a.b)("a",o({parentName:"p"},{href:"https://neon-bindings.com/api/neon/task/trait.task"}),Object(a.b)("inlineCode",{parentName:"a"},"Task"))," as part of the ",Object(a.b)("a",o({parentName:"p"},{href:"http://docs.libuv.org/en/v1.x/threadpool.html"}),"libuv thread pool"),". There's more we can do both on the computation side (for example, supporting ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/neon-bindings/neon/issues/228"}),"attaching to different threads than libuv's pool"),") and the data side (for example, supporting ",Object(a.b)("a",o({parentName:"p"},{href:"https://v8docs.nodesource.com/node-8.0/d5/d6e/classv8_1_1_array_buffer.html#a9291f6ac203b9ceae83f7f17d39ecb59"}),Object(a.b)("inlineCode",{parentName:"a"},"ArrayBuffer")," transfer"),")."),Object(a.b)("h2",{id:"getting-involved"},"Getting Involved"),Object(a.b)("p",null,"Does any of these sound like something you'd be interested in? Or maybe you have other ideas! If you want to help, come talk to me (",Object(a.b)("strong",{parentName:"p"},"@dherman"),") in the ",Object(a.b)("a",o({parentName:"p"},{href:"https://rust-bindings.slack.com/messages/neon"}),Object(a.b)("inlineCode",{parentName:"a"},"#neon")," community Slack channel")," (make sure to get an ",Object(a.b)("a",o({parentName:"p"},{href:"https://rust-bindings-slackin.herokuapp.com/"}),"automatic invite")," first)."),Object(a.b)("h2",{id:"a-note-about-community"},"A Note About Community"),Object(a.b)("p",null,"As the original creator of this project, I'm responsible not only for the software but for the community I foster. I ",Object(a.b)("em",{parentName:"p"},"deeply love")," this part of open source, and I don't take the responsibility lightly."),Object(a.b)("p",null,"Neon has a ton of cool tech inside of it, and if that's the only aspect you're interested in, that's totally OK. Not everyone needs to be passionate about community-building. Still, not unlike Rust, this whole project's purpose is to ",Object(a.b)("strong",{parentName:"p"},"widen the circle of tech and empower new systems programmers.")," So I ask of everyone who participates in the Neon project to strive to act in ways that will encourage and motivate as many people as possible to participate."),Object(a.b)("p",null,"Concretely, Neon uses the ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.contributor-covenant.org/"}),"Contributor Covenant")," to frame the expectations and standards of how we treat people in our community. Behind the policies is a simple goal: to ",Object(a.b)("strong",{parentName:"p"},"make our community a place that welcomes, trusts, supports, and empowers one another.")),Object(a.b)("p",null,"If that sounds good to you, wanna come join us?"))}l.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a),i=o.a.createContext({}),r=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=r(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=r(n),u=a,h=c[s+"."+u]||c[u]||l[u]||i;return n?o.a.createElement(h,Object.assign({},{ref:t},p,{components:n})):o.a.createElement(h,Object.assign({},{ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);