import{l as r,m as e}from"./index.ee004186.js";function a({text:t,legend:c,icon:n}){return r("div",{className:"key-card",children:[e("img",{className:"key-card__icon",src:n,alt:""}),r("div",{className:"key-card__content",children:[e("h3",{className:"key-card__title",children:t}),e("p",{className:"key-card__legend",children:c})]})]})}var s="/assets/calories-icon.9dec7f79.svg",d="/assets/carbs-icon.7c4d34a2.svg",l="/assets/fat-icon.9355ac7c.svg",m="/assets/protein-icon.82f5d08c.svg";function f({data:t}){const{calorieCount:c,proteinCount:n,carbohydrateCount:i,lipidCount:o}=t;return r("div",{className:"key-data-charts__container",children:[e(a,{icon:s,text:c,legend:"Calories"}),e(a,{icon:m,text:n,legend:"Proteines"}),e(a,{icon:d,text:i,legend:"Glucides"}),e(a,{icon:l,text:o,legend:"Lipides"})]})}f.defaultProps={data:{calorieCount:0,proteinCount:0,carbohydrateCount:0,lipidCount:0}};export{f as default};
