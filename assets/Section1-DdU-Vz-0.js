import{i as m,j as e,m as i,d}from"./index-BWFxsV6S.js";import{u as v,a as p}from"./use-combine-values-FU8vnHUC.js";function c(s,...r){const o=s.length;function n(){let t="";for(let a=0;a<o;a++){t+=s[a];const l=r[a];l&&(t+=m(l)?l.get():l)}return t}return v(r.filter(m),n)}const y=({children:s,className:r,containerClassName:o})=>{let n=p(0),t=p(0);const a={light:{default:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='white'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,hover:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='white'%3E%3Ccircle fill='%236366f1' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`},dark:{default:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='white'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,hover:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='white'%3E%3Ccircle fill='%238183f4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`}};function l({currentTarget:g,clientX:u,clientY:x}){if(!g)return;let{left:h,top:f}=g.getBoundingClientRect();n.set(u-h),t.set(x-f)}return e.jsxs("div",{className:d("group relative flex h-screen w-full items-center justify-center bg-black",o),onMouseMove:l,children:[e.jsx("div",{className:"pointer-events-none absolute inset-0 dark:hidden",style:{backgroundImage:a.light.default}}),e.jsx("div",{className:"pointer-events-none absolute inset-0 hidden dark:block",style:{backgroundImage:a.dark.default}}),e.jsx(i.div,{className:"pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden",style:{backgroundImage:a.light.hover,WebkitMaskImage:c`
            radial-gradient(
              200px circle at ${n}px ${t}px,
              black 0%,
              transparent 100%
            )
          `,maskImage:c`
            radial-gradient(
              200px circle at ${n}px ${t}px,
              black 0%,
              transparent 100%
            )
          `}}),e.jsx(i.div,{className:"pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block",style:{backgroundImage:a.dark.hover,WebkitMaskImage:c`
            radial-gradient(
              200px circle at ${n}px ${t}px,
              black 0%,
              transparent 100%
            )
          `,maskImage:c`
            radial-gradient(
              200px circle at ${n}px ${t}px,
              black 0%,
              transparent 100%
            )
          `}}),e.jsx("div",{className:d("relative z-20",r),children:s})]})},w=({children:s,className:r})=>e.jsx(i.span,{initial:{backgroundSize:"0% 100%"},animate:{backgroundSize:"100% 100%"},transition:{duration:2,ease:"linear",delay:.5},style:{backgroundRepeat:"no-repeat",backgroundPosition:"left center",display:"inline"},className:d("relative inline-block rounded-lg bg-gradient-to-r from-light-cream to-dark-cream px-1 pb-1 dark:from-indigo-500 dark:to-purple-500",r),children:s});function j(){return e.jsx(y,{className:"h-screen w-full flex items-center justify-center px-4 text-white bg-black","data-theme":"dark",children:e.jsxs(i.div,{className:"text-center max-w-4xl mx-auto",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[e.jsx(i.img,{src:"./imgs/right_white.png",alt:"",className:"w-24 h-24 md:w-32 md:h-32 mx-auto mb-8",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8,ease:[.4,0,.2,1]}}),e.jsxs(i.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.4,0,.2,1]},className:"text-3xl md:text-5xl font-bold leading-relaxed lg:leading-snug",children:["A Journey's  ",e.jsx(w,{className:"text-white ",children:"End."})]}),e.jsxs(i.div,{className:"mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base text-gray-400",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.4,duration:.6},children:[e.jsx("span",{children:"Web & App Development"}),e.jsx("span",{className:"text-gray-600",children:"•"}),e.jsx("span",{children:"Document Management"}),e.jsx("span",{className:"text-gray-600",children:"•"}),e.jsx("span",{children:"IT Support"})]}),e.jsx(i.div,{className:"mt-10 flex flex-wrap justify-center gap-4",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.7,duration:.5}})]})})}export{j as default};
