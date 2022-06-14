"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[504],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9702:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={},l="OAuth2",p={unversionedId:"third-party-apps/oauth2",id:"third-party-apps/oauth2",title:"OAuth2",description:"ARterra Labs API provides OAuth 2.0 compatible authentication workflow.",source:"@site/docs/030-third-party-apps/020-oauth2.md",sourceDirName:"030-third-party-apps",slug:"/third-party-apps/oauth2",permalink:"/docs/third-party-apps/oauth2",editUrl:"https://github.com/ARterraCo/arterraco.github.io/tree/dev/docs/030-third-party-apps/020-oauth2.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Business Partner (BP)",permalink:"/docs/third-party-apps/business-partner"},next:{title:"Users",permalink:"/docs/admin-panel/users"}},u={},c=[{value:"ARterra API OAuth2 connect example",id:"arterra-api-oauth2-connect-example",level:2},{value:"OAuth2 Sign Up (register)",id:"oauth2-sign-up-register",level:2},{value:"OAuth2 Sign In (login)",id:"oauth2-sign-in-login",level:2}],h={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"oauth2"},"OAuth2"),(0,i.kt)("p",null,"ARterra Labs API provides OAuth 2.0 compatible authentication workflow."),(0,i.kt)("p",null,"OAuth 2.0, is a standard designed to allow applications to access resources hosted by other web apps on behalf of a user.\nOAuth 2.0 provides consented access and restricts actions of what the client app can perform on resources on behalf of the user,\nwithout ever sharing the user's credentials."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Comprehensive information about OAuth 2.0 can be found ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/intro-to-iam/what-is-oauth-2/"},"here"),"."),(0,i.kt)("p",{parentName:"div"},"For detailed description you can check ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749"},"RFC 6749")," standard."))),(0,i.kt)("h2",{id:"arterra-api-oauth2-connect-example"},"ARterra API OAuth2 connect example"),(0,i.kt)("p",null,"We prepared several JS ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ARterraCo/arterra-oauth2-connect-example"},"examples"),"\non how to integrate ARterra Labs OAuth2 flow to your application."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API requests performed with axios without any libraries: ",(0,i.kt)("inlineCode",{parentName:"li"},"src/app-raw-axios-auth.js")),(0,i.kt)("li",{parentName:"ul"},"passport with passport-oauth2 express middlewares: ",(0,i.kt)("inlineCode",{parentName:"li"},"src/app-passport-oauth2-auth.js"))),(0,i.kt)("p",null,"These examples will give you a basic understanding how to receive access_token and use it to fetch NFT Collectibles\nand private user information. "),(0,i.kt)("p",null,"For detailed information check README file."),(0,i.kt)("p",null,"Because ARterra Labs API follows RFC it is possible to use any compatible libraries for your programming language, e.g.:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.passportjs.org/packages/passport-oauth2/"},"Node passport-oauth2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://oauth.net/code/javascript/"},"JavaScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://oauth.net/code/nodejs/"},"NodeJS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://oauth.net/code/php/"},"PHP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://oauth.net/code/java/"},"Java"))),(0,i.kt)("h2",{id:"oauth2-sign-up-register"},"OAuth2 Sign Up (register)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check that business partner is created and has assigned root user (BP ADMIN)"),(0,i.kt)("li",{parentName:"ol"},"Authorize as BP ADMIN and copy client id and client secret for your application"),(0,i.kt)("li",{parentName:"ol"},"Go to OAuth2 register page (",(0,i.kt)("a",{parentName:"li",href:"https://staging.arterra.co/oauth2-login?client_id=client_2ac52934&response_type=signup&redirect_uri=http://127.0.0.1:3002&state=some-state"},"https://staging.arterra.co/oauth2-login?client_id=client_2ac52934&response_type=signup&redirect_uri=http://127.0.0.1:3002&state=some-state")," )",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"response_type")," should be ",(0,i.kt)("inlineCode",{parentName:"li"},"signup")," to open registration form"),(0,i.kt)("li",{parentName:"ul"},"use your ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"redirect_uri")," must match defined URL in BP settings"),(0,i.kt)("li",{parentName:"ul"},"pass any value in ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," query param to transfer through auth flow, e.g. user id or some security token to verify authorization integrity"))),(0,i.kt)("li",{parentName:"ol"},"User registers on ARterra platform"),(0,i.kt)("li",{parentName:"ol"},"After successful registration, the user is redirected back to your platform. You can warn him to verify the email."),(0,i.kt)("li",{parentName:"ol"},"User checks his email and verifies his email"),(0,i.kt)("li",{parentName:"ol"},"ARterra platform preserves verification state and redirects user to your application"),(0,i.kt)("li",{parentName:"ol"},"User has to sign in perform any actions")),(0,i.kt)("h2",{id:"oauth2-sign-in-login"},"OAuth2 Sign In (login)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check that business partner is created and has assigned root user (BP ADMIN)"),(0,i.kt)("li",{parentName:"ol"},"Authorize as BP ADMIN and copy client id and client secret for your application"),(0,i.kt)("li",{parentName:"ol"},"Go to OAuth2 login page (",(0,i.kt)("a",{parentName:"li",href:"https://staging.arterra.co/oauth2-login?client_id=client_2ac52934&response_type=code&redirect_uri=http://127.0.0.1:3002&state=some-state"},"https://staging.arterra.co/oauth2-login?client_id=client_2ac52934&response_type=code&redirect_uri=http://127.0.0.1:3002&state=some-state")," )",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"use your ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"redirect_uri")," must match defined URL in BP settings"),(0,i.kt)("li",{parentName:"ul"},"pass any value in ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," query param to transfer through auth flow, e.g. user id or some security token to verify authorization integrity"))),(0,i.kt)("li",{parentName:"ol"},"User authenticates on ARterra platform"),(0,i.kt)("li",{parentName:"ol"},"After successful authentication user is redirected back to your application with authorization code (",(0,i.kt)("inlineCode",{parentName:"li"},"code")," query param)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code")," is valid for one time use during 3 minute"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state")," keeps value passed on step 3"))),(0,i.kt)("li",{parentName:"ol"},"Exchange authorization code for access token",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://staging.arterra.co/api/api/#/auth/AuthController_issueAccessToken"},"https://staging.arterra.co/api/api/#/auth/AuthController_issueAccessToken")))),(0,i.kt)("li",{parentName:"ol"},"Perform any action on behalf of the user using your API")))}m.isMDXComponent=!0}}]);