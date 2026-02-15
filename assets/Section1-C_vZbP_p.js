import{i as u,j as e,m as r,c as d}from"./index-CKVjqjgE.js";import{u as v,a as m}from"./use-combine-values-oxIKzn_F.js";function o(i,...l){const c=i.length;function n(){let t="";for(let a=0;a<c;a++){t+=i[a];const s=l[a];s&&(t+=u(s)?s.get():s)}return t}return v(l.filter(u),n)}const w=({children:i,className:l,containerClassName:c})=>{let n=m(0),t=m(0);const a={light:{default:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='white'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,hover:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='white'%3E%3Ccircle fill='%236366f1' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`},dark:{default:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='white'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,hover:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='white'%3E%3Ccircle fill='%238183f4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`}};function s({currentTarget:g,clientX:x,clientY:p}){if(!g)return;let{left:h,top:f}=g.getBoundingClientRect();n.set(x-h),t.set(p-f)}return e.jsxs("div",{className:d("group relative flex h-screen w-full items-center justify-center bg-black",c),onMouseMove:s,children:[e.jsx("div",{className:"pointer-events-none absolute inset-0 dark:hidden",style:{backgroundImage:a.light.default}}),e.jsx("div",{className:"pointer-events-none absolute inset-0 hidden dark:block",style:{backgroundImage:a.dark.default}}),e.jsx(r.div,{className:"pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden",style:{backgroundImage:a.light.hover,WebkitMaskImage:o`
            radial-gradient(
              200px circle at ${n}px ${t}px,
              black 0%,
              transparent 100%
            )
          `,maskImage:o`
            radial-gradient(
              200px circle at ${n}px ${t}px,
              black 0%,
              transparent 100%
            )
          `}}),e.jsx(r.div,{className:"pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block",style:{backgroundImage:a.dark.hover,WebkitMaskImage:o`
            radial-gradient(
              200px circle at ${n}px ${t}px,
              black 0%,
              transparent 100%
            )
          `,maskImage:o`
            radial-gradient(
              200px circle at ${n}px ${t}px,
              black 0%,
              transparent 100%
            )
          `}}),e.jsx("div",{className:d("relative z-20",l),children:i})]})},y=({children:i,className:l})=>e.jsx(r.span,{initial:{backgroundSize:"0% 100%"},animate:{backgroundSize:"100% 100%"},transition:{duration:2,ease:"linear",delay:.5},style:{backgroundRepeat:"no-repeat",backgroundPosition:"left center",display:"inline"},className:d("relative inline-block rounded-lg bg-gradient-to-r from-light-cream to-dark-cream px-1 pb-1 dark:from-indigo-500 dark:to-purple-500",l),children:i});function j({content:i}){return e.jsx(w,{className:"h-screen w-full flex items-center justify-center px-4 text-white bg-black","data-theme":"dark",children:e.jsxs(r.div,{className:"text-center max-w-4xl mx-auto",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[e.jsxs(r.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.4,0,.2,1]},className:"text-3xl md:text-5xl font-bold leading-relaxed lg:leading-snug",children:["Embrace Your  ",e.jsx(y,{className:"text-white ",children:"Uniqueness."})]}),e.jsx(r.p,{className:"mt-4 text-base md:text-lg text-gray-400",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.4,duration:.6},children:"A lesson without pain is meaningless. That’s because no one can gain without sacrificing something."}),e.jsx(r.div,{className:"mt-10 flex flex-wrap justify-center gap-4",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.7,duration:.5}})]})})}export{j as default};
