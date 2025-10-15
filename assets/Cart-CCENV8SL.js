import{c as r,u as i,j as e}from"./index-Bf-CZua_.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=[["path",{d:"M5 12h14",key:"1ays0h"}]],x=r("minus",o);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],m=r("plus",h),p=()=>{const{cart:t,removeFromCart:l,clearCart:c,increaseQuantity:n,decreaseQuantity:d}=i();return e.jsxs("div",{className:"p-6 min-h-screen",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4 text-center",children:"Your Cart"}),t.length===0?e.jsx("p",{className:"text-gray-500 w-full text-center",children:"Your cart is empty"}):e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"grid  place-items-center grid-cols-[repeat(auto-fill,minmax(300px,1fr))] space-y-4",children:t.map(s=>e.jsxs("li",{className:`flex flex-col justify-between items-center \r
                 bg-gray-200 shadow-lg mb-7  py-4 px-2 rounded-[10px]  \r
                 w-9/10 h-fit `,children:[e.jsxs("div",{className:"",children:[e.jsx("img",{src:s.image,alt:s.name,className:" object-contain w-full h-60 "}),e.jsx("h3",{className:"text-lg font-semibold mt-4 mb-2",children:s.name}),e.jsx("p",{className:"text-gray-700 text-[16px]",children:s.category}),e.jsxs("p",{className:"font-bold text-red-600 hover:text-red-500",children:["$",s.price]})]}),e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("button",{onClick:()=>d(s.id),className:"text-red-500 hover:text-red-700 active:bg-gray-300 rounded-full px-2 py-2",children:e.jsx(x,{})}),e.jsx("div",{children:e.jsx("p",{className:"bg-black text-white rounded-full p-3",children:s.quantity})}),e.jsx("button",{onClick:()=>n(s.id),className:"active:bg-gray-300 rounded-full px-2 py-2",children:e.jsx(m,{})})]}),e.jsx("div",{children:e.jsx("button",{onClick:()=>l(s.id),children:"Remove"})})]},s.id))}),e.jsx("button",{onClick:c,className:"mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600",children:"Clear Cart"})]}),e.jsxs("p",{className:"text-lg font-semibold",children:["Total: $",t.reduce((s,a)=>s+a.price*a.quantity,0).toFixed(2)]})]})};export{p as default};
