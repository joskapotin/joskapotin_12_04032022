import{P as t,m as a,l as e}from"./index.e9e7a360.js";function n({sqSize:r,strokeWidth:o,percentage:d}){const s=(r-o)/2,l=`0 0 ${r} ${r}`,c=s*Math.PI*2,h=c-c*d/100;return a("svg",{width:r,height:r,viewBox:l,children:[e("circle",{className:"circle-background",cx:r/2,cy:r/2,r:s,strokeWidth:`${o}px`}),e("circle",{className:"circle-progress",cx:r/2,cy:r/2,r:s,strokeWidth:`${o}px`,transform:`rotate(-90 ${r/2} ${r/2})`,style:{strokeDasharray:c,strokeDashoffset:h}})]})}n.defaultProps={sqSize:200,percentage:0,strokeWidth:10};n.propTypes={sqSize:t.number,percentage:t.number,strokeWidth:t.number};function i({data:r=0}){return a("div",{className:"today-score-charts__container",children:[e("h2",{className:"today-score-charts__title",children:"Score"}),e("div",{className:"today-score-charts",children:e(n,{strokeWidth:10,sqSize:160,percentage:r})}),a("p",{className:"today-score-charts__text",children:[e("strong",{children:`${r}%`})," de votre objectif"]})]})}i.defaultProps={data:0};i.propTypes={data:t.number};export{i as default};
