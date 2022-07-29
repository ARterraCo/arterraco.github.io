"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[218],{1045:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return g},metadata:function(){return N},toc:function(){return w}});var n=a(7462),r=a(3366),i=a(7294),o=a(3905),s=a(2389),l=a(5979),p=a(6010),c="tabItem_LplD";function u(e){var t,a,r,o=e.lazy,s=e.block,u=e.defaultValue,d=e.values,h=e.groupId,m=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(t=null!=u?u:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.UB)(),v=N.tabGroupChoices,w=N.setTabGroupChoices,A=(0,i.useState)(b),y=A[0],C=A[1],_=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var R=v[h];null!=R&&R!==y&&k.some((function(e){return e.value===R}))&&C(R)}var T=function(e){var t=e.currentTarget,a=_.indexOf(t),n=k[a].value;n!==y&&(x(t),C(n),null!=h&&w(h,n))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=_.indexOf(e.currentTarget)+1;a=_[n]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;a=_[r]||_[_.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":s},m)},k.map((function(e){var t=e.value,a=e.label,r=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:function(e){return _.push(e)},onKeyDown:I,onFocus:T,onClick:T},r,{className:(0,p.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":y===t})}),null!=a?a:t)}))),o?(0,i.cloneElement)(f.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function d(e){var t=(0,s.Z)();return i.createElement(u,(0,n.Z)({key:String(t)},e))}function h(e){var t=e.children,a=e.hidden,n=e.className;return i.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}var m=a(8066);function f(e){var t=e.request,a=e.response,n=e.withIndent;return i.createElement("div",{style:{marginLeft:n?"30px":"0"}},i.createElement(d,null,i.createElement(h,{value:"request",label:"Request"},i.createElement(m.Z,{language:"shell"},t.trim())),i.createElement(h,{value:"response",label:"Response"},i.createElement(m.Z,{language:"json"},a.trim()))))}var k=["components"],g={},b="OAuth2",N={unversionedId:"third-party-apps/oauth2",id:"third-party-apps/oauth2",title:"OAuth2",description:"ARterra Labs API provides OAuth 2.0 compatible authentication workflow.",source:"@site/docs/030-third-party-apps/020-oauth2.mdx",sourceDirName:"030-third-party-apps",slug:"/third-party-apps/oauth2",permalink:"/docs/third-party-apps/oauth2",editUrl:"https://github.com/ARterraCo/arterraco.github.io/tree/dev/docs/030-third-party-apps/020-oauth2.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Business Partner (BP)",permalink:"/docs/third-party-apps/business-partner"},next:{title:"Users",permalink:"/docs/admin-panel/users"}},v={},w=[{value:"OAuth2 connect flow",id:"oauth2-connect-flow",level:2},{value:"OAuth2 Sign In (login)",id:"oauth2-sign-in-login",level:3},{value:"OAuth2 Sign Up (register)",id:"oauth2-sign-up-register",level:3},{value:"Example application",id:"example-application",level:3},{value:"Refresh access token",id:"refresh-access-token",level:3}],A={toc:w};function y(e){var t=e.components,i=(0,r.Z)(e,k);return(0,o.kt)("wrapper",(0,n.Z)({},A,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oauth2"},"OAuth2"),(0,o.kt)("p",null,"ARterra Labs API provides OAuth 2.0 compatible authentication workflow."),(0,o.kt)("p",null,"OAuth 2.0, is a standard designed to allow applications to access resources hosted by other web apps on behalf of a user.\nOAuth 2.0 provides consented access and restricts actions of what the client app can perform on resources on behalf of the user,\nwithout ever sharing the user's credentials."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Comprehensive information about OAuth 2.0 can be found ",(0,o.kt)("a",{parentName:"p",href:"https://auth0.com/intro-to-iam/what-is-oauth-2/"},"here"),"."),(0,o.kt)("p",{parentName:"div"},"For detailed description you can check ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749"},"RFC 6749")," standard."))),(0,o.kt)("p",null,"Because ARterra Labs API follows RFC it is possible to use any compatible libraries for your programming language, e.g.:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.passportjs.org/packages/passport-oauth2/"},"Node passport-oauth2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://oauth.net/code/javascript/"},"JavaScript")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://oauth.net/code/nodejs/"},"NodeJS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://oauth.net/code/php/"},"PHP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://oauth.net/code/java/"},"Java"))),(0,o.kt)("p",null,"ARterra Labs OAuth2 implementation includes these grant types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"authorization_code")," - The ARterra Labs API returns a single-use Authorization Code to the 3rd party application,\nwhich is then exchanged for an Access Token.",(0,o.kt)("br",null),"\nThis is the best option for traditional web apps where the exchange can securely happen on the server side."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"password")," - This grant requires the 3rd party app first to acquire the user\u2019s credentials, which are passed to the ARterra Labs server.",(0,o.kt)("br",null),"\nBecause users may be afraid of providing their login info (ARterra Labs email/password) on your website domain\nit is advised to use ",(0,o.kt)("inlineCode",{parentName:"li"},"authorization_code")," grant type with redirects to ARterra Labs login page. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"refresh_token")," - exchange of a Refresh Token for a new Access Token without asking a user to authenticate.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"ARterra Labs API has no ",(0,o.kt)("inlineCode",{parentName:"p"},"scope")," related restrictions so receiving ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," using OAuth2 flow means that\n3rd party application gains full control and can perform any action this user has permission. "))),(0,o.kt)("h2",{id:"oauth2-connect-flow"},"OAuth2 connect flow"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before connecting 3rd party application to ARterra Labs API you must have created Business Partner and user with ",(0,o.kt)("em",{parentName:"p"},"BP_ADMIN")," access."),(0,o.kt)("p",{parentName:"div"},"How to configure Business Partner and assign ",(0,o.kt)("em",{parentName:"p"},"BP_ADMIN")," user is described in ",(0,o.kt)("a",{parentName:"p",href:"business-partner"},"Business Partner")," section"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("img",{alt:"BP w/o credentials",src:a(4415).Z,width:"1133",height:"641"})))),(0,o.kt)("p",null,"Authorize as ",(0,o.kt)("em",{parentName:"p"},"BP_ADMIN")," user and create client credentials for your future application.\n",(0,o.kt)("img",{alt:"BP create credentials",src:a(8096).Z,width:"2234",height:"1332"})),(0,o.kt)("p",null,"Client credentials for specified redirect URI should appear in the section below.",(0,o.kt)("br",null),"\nClient ID and Client Secret are generated automatically by the system.",(0,o.kt)("br",null),"\nClient Secret is visible only to ",(0,o.kt)("em",{parentName:"p"},"BP_ADMIN")," user, even Platform ",(0,o.kt)("em",{parentName:"p"},"ADMIN")," has no access to it."),(0,o.kt)("p",null,"You can create up to 8 different client credentials.\n",(0,o.kt)("img",{alt:"BP create credentials",src:a(8721).Z,width:"2250",height:"1390"})),(0,o.kt)("p",null,"Now, when you have created client credentials, you can integrate your application (OAuth2 Client) with ARterra Labs API.",(0,o.kt)("br",null),"\nFurther you can find instructions which will help you to guide your user through OAuth2 ",(0,o.kt)("a",{parentName:"p",href:"oauth2#oauth2-sign-up-register"},"sign-in"),"\nor ",(0,o.kt)("a",{parentName:"p",href:"oauth2#oauth2-sign-up-register"},"sign-up")," and ",(0,o.kt)("a",{parentName:"p",href:"oauth2#example-application"},"example application")," with integrations. "),(0,o.kt)("h3",{id:"oauth2-sign-in-login"},"OAuth2 Sign In (login)"),(0,o.kt)("p",null,"This flow is described in details in ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749"},"RFC 6749")," standard."),(0,o.kt)("p",null,"In general, you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Redirect your User to ARterra Labs login page.")),(0,o.kt)("p",{parentName:"li"},"Sandbox ARterra Labs auth page for OAuth2 flow is ",(0,o.kt)("a",{parentName:"p",href:"https://staging.arterra.co/oauth2-login"},"https://staging.arterra.co/oauth2-login"),".",(0,o.kt)("br",null),"\nFor live env - ",(0,o.kt)("a",{parentName:"p",href:"https://app.arterra.co/oauth2-login"},"https://app.arterra.co/oauth2-login"),".",(0,o.kt)("br",null)),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If OAuth2 link is configured incorrectly user will be redirected to main ARterra Labs page."))),(0,o.kt)("p",{parentName:"li"},"According to RFC 6749 the OAuth2 link must have these query params:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"client_id")," - ",(0,o.kt)("em",{parentName:"li"},"required"),", your Client ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"response_type")," - ",(0,o.kt)("em",{parentName:"li"},"required"),", to open login page it should be equal to ",(0,o.kt)("inlineCode",{parentName:"li"},"code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redirect_uri")," - ",(0,o.kt)("em",{parentName:"li"},"required"),", the Redirect URI to return your users back from ARterra Labs auth page.",(0,o.kt)("br",null),"\nThe value must match your application URI registered in Client Credential section of Business Partner Admin page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state")," - ",(0,o.kt)("em",{parentName:"li"},"optional"),", pass any value to transfer through auth flow,\ne.g. user id or some security token to verify authorization integrity")),(0,o.kt)("p",{parentName:"li"},"E.g. OAuth2 sign in link for the example application ",(0,o.kt)("em",{parentName:"p"},"Surf Planet")," that was configured earlier in screenshots will look this way:",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://staging.arterra.co/oauth2-login?client_id=client_475ed119&response_type=code&redirect_uri=http://127.0.0.1:3000/api/arterra/login-callback&state=some-state"},"https://staging.arterra.co/oauth2-login?client_id=client_475ed119&response_type=code&redirect_uri=http://127.0.0.1:3000/api/arterra/login-callback&state=some-state"),"\n",(0,o.kt)("img",{alt:"OAuth2 Sign in",src:a(7431).Z,width:"1069",height:"706"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"User signs-in.")),(0,o.kt)("p",{parentName:"li"},"The user provides his credentials and signs-in to the ARterra Labs Platform.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ARterra Labs redirects user back to redirect URI you provided with authorization code in query param.")),(0,o.kt)("p",{parentName:"li"},"After successful authentication user is redirected to your application link that you specified in the Redirect URI."),(0,o.kt)("p",{parentName:"li"},"The link will have these query params:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"code")," - ",(0,o.kt)("em",{parentName:"li"},"required"),", the authorization code that you can exchange to access token.",(0,o.kt)("br",null),"\nThis code is valid for one time use during 3 minute."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state")," - ",(0,o.kt)("em",{parentName:"li"},"optional"),", keeps value passed during redirect to ARterra Labs auth page")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It might be that user had no account on ARterra Labs Platform and just have created a new one.\nIn that case redirect URI to your application will be different.",(0,o.kt)("br",null),"\nFor details how to handle new ARterra Labs users check ",(0,o.kt)("a",{parentName:"p",href:"oauth2#oauth2-sign-up-register"},"next section"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Your application exchanges authorization code to access token\nwhich you can use for further requests to ARterra Labs API on behalf of the user.")),(0,o.kt)("p",{parentName:"li"},"  ARterra Labs API endpoint to receive access token: ",(0,o.kt)("a",{parentName:"p",href:"https://staging.arterra.co/api/api/#/auth/AuthController_issueAccessToken"},"https://staging.arterra.co/api/api/#/auth/AuthController_issueAccessToken")," ",(0,o.kt)("br",null),"\nIt is important to pass ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization: Basic Base64({CLIENT_ID}:{CLIENT_SECRET})")," header\nwith Base64 encoded string of your Client ID and Client Secret.",(0,o.kt)("br",null),"\nFor ",(0,o.kt)("em",{parentName:"p"},"Surf Planet")," example application it is ",(0,o.kt)("inlineCode",{parentName:"p"},"Buffer.from('client_475ed119:secret_a5ee033782be4636cbefc8').toString('base64')"),"\n","\u21d2"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Y2xpZW50XzQ3NWVkMTE5OnNlY3JldF9hNWVlMDMzNzgyYmU0NjM2Y2JlZmM4"),"."))),(0,o.kt)(f,{withIndent:!0,request:"\ncurl -X 'POST' 'https://staging.arterra.co/api/auth/oauth2-token' \\\n    // highlight-next-line\n    -H 'Authorization: Basic Y2xpZW50XzQ3NWVkMTE5OnNlY3JldF9hNWVlMDMzNzgyYmU0NjM2Y2JlZmM4' \\\n    -H 'Content-Type: application/json' \\\n    -d '{\n        // highlight-next-line\n        \"grant_type\": \"authorization_code\",\n        // highlight-next-line\n        \"code\": \"94c781f33491b6cff6dca9447d85ddb9292f8d366a6e95509e61896c4740e4fc\"\n    }'\n",response:'\n{\n    "access_token": "15b1043987d0edcc5f303e5ddbf2335976d495bb01e1732be3ccaa7937e36b9770568000a5c6cf3567f5ac5e4d012ebd01827080aacf0de2082566ee3fce8bda",\n    "token_type": "bearer",\n    "expires_in": 172800,\n    "refresh_token": "5079fd9f6d979a7358b9bc84f74efe813f54d25ad90a39bfc7764acfe48456a33014318b7e3314cc384dbefae9a9ecd7a86f1f648a5f693ab0a477089d527f38",\n    "refresh_token_expires_in": 604800,\n    "profile": {\n        "id": "33167f87-6192-435e-aa5b-3cab4b7465df",\n        "username": "ykuznets66",\n        "wallet": "ykuznets66.testnet",\n        "role": "ADMIN",\n        "avatarUrl": "https://s3.amazonaws.com/arterra-stage-avatar/user/a7cc76ec17b44c8e82474f4f9d32bb5175ef255eb8c392de2bf53c589b10f3af.webp",\n        "fullName": "ADMIN",\n        "bio": "",\n        "businessPartnerId": null\n    }\n}\n',mdxType:"HttpRequestCodeExample"}),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0"," To refresh access token check ",(0,o.kt)("a",{parentName:"p",href:"oauth2#refresh-access-token"},"refresh token section")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Perform any action on behalf of the user using ARterra Labs API")),(0,o.kt)("p",{parentName:"li"},"With received access token you can perform requests to ",(0,o.kt)("a",{parentName:"p",href:"https://staging.arterra.co/api/api/"},"ARterra Labs API"),".",(0,o.kt)("br",null),"\nAccess token should be passed in ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer {ACCESS_TOKEN}")," header."),(0,o.kt)("p",{parentName:"li"},"E.g. to receive auth information and private user data call:"))),(0,o.kt)(f,{withIndent:!0,request:"\ncurl -X 'GET' 'https://staging.arterra.co/api/auth/info' \\\n    -H 'Authorization: Bearer 15b1043987d0edcc5f303e5ddbf2335976d495bb01e1732be3ccaa7937e36b9770568000a5c6cf3567f5ac5e4d012ebd01827080aacf0de2082566ee3fce8bda'\n",response:'\n{\n    "code": "SUCCESS",\n    "data": {\n        "accessToken": "15b1043987d0edcc5f303e5ddbf2335976d495bb01e1732be3ccaa7937e36b9770568000a5c6cf3567f5ac5e4d012ebd01827080aacf0de2082566ee3fce8bda",\n        "accessTokenExpiresAt": "2022-06-18T05:02:45.142Z",\n        "refreshToken": "5079fd9f6d979a7358b9bc84f74efe813f54d25ad90a39bfc7764acfe48456a33014318b7e3314cc384dbefae9a9ecd7a86f1f648a5f693ab0a477089d527f38",\n        "refreshTokenExpiresAt": "2022-06-23T05:02:45.142Z",\n        "client": {\n            "id": "client_475ed119",\n            "redirectUris": "http://127.0.0.1:3000/api/arterra/login-callback",\n            "grants": ["password", "refresh_token", "authorization_code"],\n            "accessTokenLifetime": 172800,\n            "refreshTokenLifetime": 604800,\n            "authorizationCodeLifetime": 180\n        },\n        "user": {\n            "id": "33167f87-6192-435e-aa5b-3cab4b7465df",\n            "createdAt": "2021-11-15T14:36:42.014Z",\n            "updatedAt": "2022-06-14T08:12:41.865Z",\n            "email": "arterratest@arterra.co",\n            "username": "ykuznets66",\n            "wallet": "ykuznets66.testnet",\n            "status": "ACTIVE",\n            "role": "ADMIN",\n            "isEmailVerified": true,\n            "avatarUrl": "https://s3.amazonaws.com/arterra-stage-avatar/user/a7cc76ec17b44c8e82474f4f9d32bb5175ef255eb8c392de2bf53c589b10f3af.webp",\n            "fullName": "ADMIN",\n            "bio": "",\n            "businessPartnerId": null,\n            "stripeAccount": {\n                "id": "acct_1K05p3QsRIUvGOcr",\n                "userId": "33167f87-6192-435e-aa5b-3cab4b7465df",\n                "status": "ACTIVE",\n                "expiryDate": "1970-01-19T23:42:10.815Z",\n                "createdAt": "2021-11-26T14:54:47.696Z",\n                "updatedAt": "2022-06-14T08:13:54.808Z"\n            }\n        }\n    }\n}\n',mdxType:"HttpRequestCodeExample"}),(0,o.kt)("h3",{id:"oauth2-sign-up-register"},"OAuth2 Sign Up (register)"),(0,o.kt)("p",null,"To open sign up page for ARterra Labs OAuth2 we added unofficial query param ",(0,o.kt)("inlineCode",{parentName:"p"},"response_type=signup"),"\ninstead of ",(0,o.kt)("inlineCode",{parentName:"p"},"response_type=code"),".",(0,o.kt)("br",null),"\nAll other query params (",(0,o.kt)("inlineCode",{parentName:"p"},"client_id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect_uri"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),") are left the same as for sign in flow."),(0,o.kt)("p",null,"So the OAuth2 sign up page for ARterra Labs will look like:",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://staging.arterra.co/oauth2-login?client_id=client_475ed119&response_type=signup&redirect_uri=http://127.0.0.1:3000/api/arterra/login-callback&state=some-state"},"https://staging.arterra.co/oauth2-login?client_id=client_475ed119&response_type=signup&redirect_uri=http://127.0.0.1:3000/api/arterra/login-callback&state=some-state")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"OAuth2 Sign up",src:a(9907).Z,width:"1922",height:"1630"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We still advise using standard OAuth2 ",(0,o.kt)("inlineCode",{parentName:"p"},"response_type")," query param equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," because in case User has no account\nhe can still click ",(0,o.kt)("inlineCode",{parentName:"p"},"Sign Up")," button and proceed with registration.",(0,o.kt)("br",null),"\nAlso, you will not need to keep track about existence of ARterra Labs account for your users."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("img",{alt:"OAuth2 Sign up promt",src:a(151).Z,width:"957",height:"724"})))),(0,o.kt)("p",null,"In case user had no ARterra Labs account and created a new one he can not sign in until his email got verified."),(0,o.kt)("p",null,"Then there will be no ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," query param in the redirect to your application.",(0,o.kt)("br",null),"\nWhen you receive ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," query param that means that new ARterra Labs user was created\nbut he needs to check his mailbox and finish email verification.",(0,o.kt)("br",null),"\nFor that case we recommend to show user a message to verify his email."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Email verification prompt",src:a(5830).Z,width:"422",height:"219"})),(0,o.kt)("p",null,"The link in his mailbox will also return him to your application from where he can retry sign in request."),(0,o.kt)("h3",{id:"example-application"},"Example application"),(0,o.kt)("p",null,"We prepared several JS ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ARterraCo/arterra-oauth2-connect-example"},"examples"),"\non how to integrate ARterra Labs OAuth2 flow to your application."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API requests performed with axios without any auth libraries: ",(0,o.kt)("inlineCode",{parentName:"li"},"src/app-raw-axios-auth.js")),(0,o.kt)("li",{parentName:"ul"},"passport with passport-oauth2 express middlewares: ",(0,o.kt)("inlineCode",{parentName:"li"},"src/app-passport-oauth2-auth.js"))),(0,o.kt)("p",null,"These examples will show you how to receive ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," and use it to fetch private user information and Collectibles."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# clone git repo\ngit clone https://github.com/ARterraCo/arterra-oauth2-connect-example.git\ncd arterra-oauth2-connect-example\n\n# install dependencies\nnpm install\n\n# Start application\nnode src/app-raw-axios-auth.js\n# or\nnpm start\n")),(0,o.kt)("p",null,"Open ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:3000"},"http://127.0.0.1:3000")," to test in browser."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example app",src:a(8875).Z,width:"408",height:"233"})),(0,o.kt)("p",null,"Optionally, you can provide your own Business Partner client credentials:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vi src/config.js\n")),(0,o.kt)("p",null,"For detailed information how to configure example application\ncheck project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ARterraCo/arterra-oauth2-connect-example"},"README")," file."),(0,o.kt)("h3",{id:"refresh-access-token"},"Refresh access token"),(0,o.kt)("p",null,"ARterra Labs API endpoint to refresh access token is the same as for receiving access token:\n",(0,o.kt)("a",{parentName:"p",href:"https://staging.arterra.co/api/api/#/auth/AuthController_issueAccessToken"},"https://staging.arterra.co/api/api/#/auth/AuthController_issueAccessToken"),".",(0,o.kt)("br",null),"\nThe difference between issuing new access token and refreshing is in ",(0,o.kt)("inlineCode",{parentName:"p"},"grant_type"),".",(0,o.kt)("br",null)," "),(0,o.kt)("p",null,"You still must pass ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization: Basic Base64({CLIENT_ID}:{CLIENT_SECRET})")," header."),(0,o.kt)(f,{request:"\ncurl -X 'POST' 'https://staging.arterra.co/api/auth/oauth2-token' \\\n    -H 'Authorization: Basic Y2xpZW50XzQ3NWVkMTE5OnNlY3JldF9hNWVlMDMzNzgyYmU0NjM2Y2JlZmM4' \\\n    -H 'Content-Type: application/json' \\\n    -d '{\n        // highlight-next-line\n        \"grant_type\": \"refresh_token\",\n        // highlight-next-line\n        \"refresh_token\": \"5079fd9f6d979a7358b9bc84f74efe813f54d25ad90a39bfc7764acfe48456a33014318b7e3314cc384dbefae9a9ecd7a86f1f648a5f693ab0a477089d527f38\"\n    }'\n",response:'\n{\n  "access_token": "d2740fe47603f4ae6472130625edbc677eab5785ff04429b7448a4a9ef250dad337d8b16d0c1309ec19a9151744555bace286eeb44d1780b7c81847efdba9cac",\n  "token_type": "bearer",\n  "expires_in": 172800,\n  "refresh_token": "08b9965a5c0c404454f58e3287d37ae13b90cabf6e4aa225f6cb2f6ec691a5aaf361055dc21f7ac1148dbb4475b41559b88be4532dad87b1fcc7c7ad553cd1c5",\n  "refresh_token_expires_in": 604800,\n  "profile": {\n    "id": "33167f87-6192-435e-aa5b-3cab4b7465df",\n    "username": "ykuznets66",\n    "wallet": "ykuznets66.testnet",\n    "role": "ADMIN",\n    "avatarUrl": "https://s3.amazonaws.com/arterra-stage-avatar/user/a7cc76ec17b44c8e82474f4f9d32bb5175ef255eb8c392de2bf53c589b10f3af.webp",\n    "fullName": "ADMIN",\n    "bio": "",\n    "businessPartnerId": null\n  }\n}\n',mdxType:"HttpRequestCodeExample"}))}y.isMDXComponent=!0},8096:function(e,t,a){t.Z=a.p+"assets/images/bp-create-credentials-8ce5104f277679d1471c46e18136717f.png"},8721:function(e,t,a){t.Z=a.p+"assets/images/bp-with-credentials-9f84549f469fcf468fb20e2965eeac54.png"},4415:function(e,t,a){t.Z=a.p+"assets/images/bp-wo-credentials-c516f547333a63326174d62f8b2325ab.png"},5830:function(e,t,a){t.Z=a.p+"assets/images/email-verification-prompt-ca188dabfa7ff2db0601640ef1e912e0.png"},8875:function(e,t,a){t.Z=a.p+"assets/images/example-app-initial-page-a2c4a9c7cb1bf3c8dd95e3ac73562eba.png"},7431:function(e,t,a){t.Z=a.p+"assets/images/oauth2-arterra-login-page-b2848515296b06ded60619cd4fd05d44.png"},151:function(e,t,a){t.Z=a.p+"assets/images/oauth2-arterra-login-signup-prompt-d05195d19707a32006722d606e2fc2f6.png"},9907:function(e,t,a){t.Z=a.p+"assets/images/oauth2-arterra-signup-page-62518746d09f6756ed8413c61b177563.png"}}]);