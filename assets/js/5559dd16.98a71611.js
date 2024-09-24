"use strict";(self.webpackChunk_99_x_wow_local_git=self.webpackChunk_99_x_wow_local_git||[]).push([[2010],{749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(4848),i=n(8453);const a={title:"Architecture Blueprint",metaTitle:"Architecture Blueprint | WP",metaDescription:"Describes the architectural representation of the system's components. At the inception implement a feature vertical and the setup of the required infrastructure to act as a guideline for further development.",published:!0,documentation:"TechArchitecture",metaTags:["Plan","Architecture Blueprint","Winning Product","Technology Mastery"],checklist:[{order:1,question:"Have you specified the traceability between architecture blueprint and requirements ?",expectation:"Clearly illustrate how certain architectural decisions have been taken to address each product requirement. An architecture decision log should be available to understand how assumptions and validation has taken place over a period of time.",version:"1.0.0"},{order:2,question:"Have you identified architecturally significant requirements?",expectation:"List of requirements covering functional and non functional which has a direct impact for product architecture",version:"1.0.0"},{order:3,question:"Have you documented various alternative architectures and tradeoff analysis before focusing on a specific architecture?",expectation:"Artefact covering alternative architecture analysis covering aspects of typical quality attributes of the product",version:"1.0.0"}]},o=void 0,c={id:"product-experience/winning-product/content/plan/architecture-blueprint",title:"Architecture Blueprint",description:"Why",source:"@site/docs/product-experience/winning-product/content/4-plan/03-architecture-blueprint.md",sourceDirName:"product-experience/winning-product/content/4-plan",slug:"/product-experience/winning-product/content/plan/architecture-blueprint",permalink:"/99x-wow/docs/product-experience/winning-product/content/plan/architecture-blueprint",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Architecture Blueprint",metaTitle:"Architecture Blueprint | WP",metaDescription:"Describes the architectural representation of the system's components. At the inception implement a feature vertical and the setup of the required infrastructure to act as a guideline for further development.",published:!0,documentation:"TechArchitecture",metaTags:["Plan","Architecture Blueprint","Winning Product","Technology Mastery"],checklist:[{order:1,question:"Have you specified the traceability between architecture blueprint and requirements ?",expectation:"Clearly illustrate how certain architectural decisions have been taken to address each product requirement. An architecture decision log should be available to understand how assumptions and validation has taken place over a period of time.",version:"1.0.0"},{order:2,question:"Have you identified architecturally significant requirements?",expectation:"List of requirements covering functional and non functional which has a direct impact for product architecture",version:"1.0.0"},{order:3,question:"Have you documented various alternative architectures and tradeoff analysis before focusing on a specific architecture?",expectation:"Artefact covering alternative architecture analysis covering aspects of typical quality attributes of the product",version:"1.0.0"}]},sidebar:"tutorialSidebar",previous:{title:"Team Structure",permalink:"/99x-wow/docs/product-experience/winning-product/content/plan/team-structure"},next:{title:"Delivery Pipeline",permalink:"/99x-wow/docs/product-experience/winning-product/content/plan/delivery-pipeline"}},s={},u=[{value:"Why",id:"why",level:2},{value:"How",id:"how",level:2},{value:"References",id:"references",level:2}];function l(e){const t={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"why",children:"Why"}),"\n",(0,r.jsx)(t.p,{children:"Modern day enterprise applications make use of an array of complex technical resources such as load balancers, queues, data stores, and containerized components. While there are many technical options to choose from, selecting the right resource for the right reason is crucial. The selection might depend on the throughput, security or even cost aspects; but it\u2019s important to have a rational for the selection based on your requirements."}),"\n",(0,r.jsx)(t.p,{children:"Once the architecture blueprint is in place, it acts as a reference for future development. The technical decisions are already made at this point and the developers have to just follow this design. The architecture blueprint also acts as a communication mechanism to any technology interested stake holder regarding the technology stack in use."}),"\n",(0,r.jsx)(t.h2,{id:"how",children:"How"}),"\n",(0,r.jsx)(t.p,{children:"Consider the following aspects when establishing a technical architecture:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Configurability:"})," Despite your awareness on requirements, it\u2019s likely that some assumptions have to be made when building the initial product architecture. Good architects can build the system in a highly configurable manner. If some of the components are changed later on, it has a minimum dependency on the rest of the system. This helps to postpone some of the architectural decisions until there\u2019s enough information."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Non-functional requirements:"})," Your architecture must support all required non-functional requirements such as performance and security. It\u2019s recommended to do an analysis on the capability before starting to implement any features."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Extendibility:"})," Both functional and non-functional requirements are bound to scale up as the business grows. This is usually a sign of a growing business. Your architecture should support extendibility in all aspects."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Infrastructure as Code (IaC):"})," Enables system administrators to automate the configuration and provisioning process, reducing human errors and saving time. The following configuration orchestration and management tools can be used to implement IaC and help you automate your infrastructure:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Terraform"}),"\n",(0,r.jsx)(t.li,{children:"AWS CloudFormation"}),"\n",(0,r.jsx)(t.li,{children:"Azure Resource Manager and Google Cloud Deployment Manager"}),"\n",(0,r.jsx)(t.li,{children:"Chef"}),"\n",(0,r.jsx)(t.li,{children:"Puppet"}),"\n",(0,r.jsx)(t.li,{children:"Saltstack"}),"\n",(0,r.jsx)(t.li,{children:"Ansible"}),"\n",(0,r.jsx)(t.li,{children:"Docker"}),"\n",(0,r.jsx)(t.li,{children:"Vagrant"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Infrastructure_as_code",children:"Infrastructure as code"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.plutora.com/blog/infrastructure-as-code",children:"IaS"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.thorntech.com/2018/04/15-infrastructure-as-code-tools/",children:"Infrastructure as Code tools"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(6540);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);