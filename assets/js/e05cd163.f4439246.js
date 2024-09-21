"use strict";(self.webpackChunk_99_x_wow_local_git=self.webpackChunk_99_x_wow_local_git||[]).push([[4012],{8518:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=i(4848),r=i(8453);const a={title:"Technical Architecture",metaTitle:"Technical Architecture' | WP",metaDescription:"Defines how granular software components are engineered and organized together to achieve the optimal delivery of the features in demand. The architecture is mainly governed by the product requirements. It\u2019s moderated by industry best practices associated with the selected technologies, services and relevant regulations.",published:!0,metaTags:["Focus","Technical Architecture","Winning Product Canvas","Technology Mastery"],checklist:[{order:1,question:"Have you identified the key quality attributes of your product?",expectation:"Key non-functional quality attributes such as security, performance, etc... needs to have been identified along with recommended technical strategies to overcome them.",version:"1.0.0"},{order:2,question:"Is the technical architecture clearly defined?",expectation:"There should be a clear technical diagram outlining all major components. This should show how the above key quality attributes are addressed in the system.",version:"1.0.0"},{order:3,question:"Does your architecture support future scaling & extendability?",expectation:"The technical architecture should have provisioning to scale as the application scales. Clear separation needs to be maintained between different components to enable both scaling out and up independently.",version:"1.0.0"},{order:4,question:"How do you maintain security of your system and customer data?",expectation:"Architecture should have made measures to provide tight security. There should be evidences of OWASP testing. Also, customer data needs to be accessed securely to meet data protection standards such as GDPR. Encryption at rest can be considered here.",version:"1.0.0"},{order:5,question:"Have you validated your architecture to ensure the corner cases?",expectation:"All the ceiling values of non-functional requirements needs to be identified. There should be evidences to make sure that the technical architecture can support such data loads specified in SLAs.",version:"1.0.0"}]},s=void 0,c={id:"product-experience/winning-product/content/focus/technical-architecture",title:"Technical Architecture",description:"Why",source:"@site/docs/product-experience/winning-product/content/2-focus/07-technical-architecture.md",sourceDirName:"product-experience/winning-product/content/2-focus",slug:"/product-experience/winning-product/content/focus/technical-architecture",permalink:"/99x-wow/docs/product-experience/winning-product/content/focus/technical-architecture",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Technical Architecture",metaTitle:"Technical Architecture' | WP",metaDescription:"Defines how granular software components are engineered and organized together to achieve the optimal delivery of the features in demand. The architecture is mainly governed by the product requirements. It\u2019s moderated by industry best practices associated with the selected technologies, services and relevant regulations.",published:!0,metaTags:["Focus","Technical Architecture","Winning Product Canvas","Technology Mastery"],checklist:[{order:1,question:"Have you identified the key quality attributes of your product?",expectation:"Key non-functional quality attributes such as security, performance, etc... needs to have been identified along with recommended technical strategies to overcome them.",version:"1.0.0"},{order:2,question:"Is the technical architecture clearly defined?",expectation:"There should be a clear technical diagram outlining all major components. This should show how the above key quality attributes are addressed in the system.",version:"1.0.0"},{order:3,question:"Does your architecture support future scaling & extendability?",expectation:"The technical architecture should have provisioning to scale as the application scales. Clear separation needs to be maintained between different components to enable both scaling out and up independently.",version:"1.0.0"},{order:4,question:"How do you maintain security of your system and customer data?",expectation:"Architecture should have made measures to provide tight security. There should be evidences of OWASP testing. Also, customer data needs to be accessed securely to meet data protection standards such as GDPR. Encryption at rest can be considered here.",version:"1.0.0"},{order:5,question:"Have you validated your architecture to ensure the corner cases?",expectation:"All the ceiling values of non-functional requirements needs to be identified. There should be evidences to make sure that the technical architecture can support such data loads specified in SLAs.",version:"1.0.0"}]},sidebar:"tutorialSidebar",previous:{title:"Productization Blueprint",permalink:"/99x-wow/docs/product-experience/winning-product/content/focus/productization-blueprint"},next:{title:"Feasibility Study",permalink:"/99x-wow/docs/product-experience/winning-product/content/focus/feasibility-study"}},o={},d=[{value:"Why",id:"why",level:2},{value:"How",id:"how",level:2},{value:"Requirements as your starting point",id:"requirements-as-your-starting-point",level:3},{value:"Quantify using Quality Attributes",id:"quantify-using-quality-attributes",level:3},{value:"Employ architectural-styles and design-tactics",id:"employ-architectural-styles-and-design-tactics",level:3},{value:"Defer decisions as appropriate",id:"defer-decisions-as-appropriate",level:3},{value:"Create architecture views",id:"create-architecture-views",level:3},{value:"Living architecture",id:"living-architecture",level:3},{value:"Validating the architecture",id:"validating-the-architecture",level:3},{value:"References",id:"references",level:2}];function u(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"why",children:"Why"}),"\n",(0,n.jsx)(t.p,{children:"Technical architecture defines and justifies the decisions and constructs of the underlying platform of the software product. It includes functional and non-functional considerations and constraints, tech-stack selection, platform selection, architecture diagrams, deployment model and DevOps process."}),"\n",(0,n.jsx)(t.h2,{id:"how",children:"How"}),"\n",(0,n.jsx)(t.h3,{id:"requirements-as-your-starting-point",children:"Requirements as your starting point"}),"\n",(0,n.jsx)(t.p,{children:"Always begin from the requirements, not from a pre-conceived architecture blueprint. For this you need to identify the 'architecturally significant' functional and non-functional requirements of the product. Requirements where the 'cost of change is high' are considered architecturally significant and those should be determined at an early stage of the process to minimize rework."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Understand the business requirements"}),"\n",(0,n.jsx)(t.li,{children:"Understand the constraints"}),"\n",(0,n.jsx)(t.li,{children:"Understand the stakeholder concerns and preferences"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"quantify-using-quality-attributes",children:"Quantify using Quality Attributes"}),"\n",(0,n.jsxs)(t.p,{children:["Now, you must translate the requirements into a measurable set of quality attributes. You can find a comprehensive list of quality attributes to pick from ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/List_of_system_quality_attributes",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"employ-architectural-styles-and-design-tactics",children:"Employ architectural-styles and design-tactics"}),"\n",(0,n.jsxs)(t.p,{children:["Decide the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/List_of_software_architecture_styles_and_patterns",children:"architecture styles"})," and ",(0,n.jsx)(t.a,{href:"https://core.ac.uk/download/pdf/82315288.pdf",children:"design tactics"})," to be used to fulfil the quantified quality attributes. Be aware of the possible tradeoffs and conflicts that can arise from using different tactics. For example, tactics used for high security may impede usability and performance."]}),"\n",(0,n.jsx)(t.h3,{id:"defer-decisions-as-appropriate",children:"Defer decisions as appropriate"}),"\n",(0,n.jsx)(t.p,{children:"If you don\u2019t have enough knowledge to make a decision, consider the possibility of deferring. Not all decisions can be delayed (deferred), especially the ones with a high cost of change. An example of this is the choice of 'programming language' and 'cloud native platform'. But there are some decisions you can delay until more knowledge is available. For example, the database system. You can use a dummy in memory DAL layer until you really require persistence."}),"\n",(0,n.jsx)(t.h3,{id:"create-architecture-views",children:"Create architecture views"}),"\n",(0,n.jsxs)(t.p,{children:["Develop different views of the developed architecture to better communicate concepts. For example, the runtime behavior of a system cannot be explained through a view depicting how the solution code is organized. There are different documentation standards to consider including the popular ",(0,n.jsx)(t.a,{href:"https://devcycles.io/2019/02/27/4---1-architectural-view-model-introduction/",children:"4+1 model"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"living-architecture",children:"Living architecture"}),"\n",(0,n.jsxs)(t.p,{children:["Technical architecture is not something you do just at the beginning of a project. Architecture is a living document and should be handled in an agile manner. Check out ",(0,n.jsx)(t.a,{href:"https://learn.winningproduct.com/5-build/01-architectural-runway",children:"Architecture Runway"})," to understand how this should be practically executed within a project."]}),"\n",(0,n.jsx)(t.h3,{id:"validating-the-architecture",children:"Validating the architecture"}),"\n",(0,n.jsxs)(t.p,{children:["Consider the derived architecture as a set of assumptions that are not verified until tested for the purpose. Use early and frequent MVPs and POCs to validate the architecture regularly. Refer to the topic ",(0,n.jsx)(t.a,{href:"https://learn.winningproduct.com/4-plan/03-architecture-blueprint",children:"Architecture Blueprint"})," for further details."]}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/DevOps",children:"DevOps"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Non-functional_requirement",children:"Non-functional requirement"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://devcycles.io/2019/02/27/4---1-architectural-view-model-introduction/",children:"4+1 model"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/List_of_software_architecture_styles_and_patterns",children:"Architecture styles"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/List_of_system_quality_attributes",children:"Quality attributes"})}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>c});var n=i(6540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);