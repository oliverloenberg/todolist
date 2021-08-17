(()=>{"use strict";const e=class{isDone=!1;todos=[];constructor(e,t,o,c){this.title=e,this.description=t,this.dueDate=o,this.projectId=c}get title(){return this._title}set title(e){this._title=e}get description(){return this._description}set description(e){this._description=e}get dueDate(){return this._dueDate}set dueDate(e){this._dueDate=e}get projectId(){return this._projectId}set projectId(e){this._projectId=e}get isDone(){return this._isDone}set isDone(e){this._isDone=e}get todos(){return this._todos}addTodoToProject(e){this.todos.push(e)}},t=(t,o,c,n)=>new e(t,o,c,n),o=(e,t,o,c,n)=>{const l=t,s=o,i=c,r=document.querySelector(".projects-container");console.log(r);const d=document.createElement("article");d.className="project-item",d.id=`project-item-${e}`,r.appendChild(d);const a=document.createElement("div");a.className="project-delete-container",d.appendChild(a);const g=document.createElement("img");g.setAttribute("src","./img/delete.png"),g.className="project-delete-icon",a.appendChild(g);const h=document.createElement("div");h.className="project-checkbox-container",d.appendChild(h);const p=document.createElement("img");p.setAttribute("src","./img/box.png"),p.setAttribute("alt","unchecked"),p.className="project-checkbox-icon",h.appendChild(p),1==n&&(p.setAttribute("src","./img/boxchecked.png"),p.setAttribute("alt","checked"));const m=document.createElement("input");m.setAttribute("type","text"),m.id=`project-item-${e}-title`,m.setAttribute("data-project","project-title"),m.className="project-item-input",m.value=l,d.appendChild(m);const u=document.createElement("input");u.setAttribute("type","text"),u.id=`project-item-${e}-description`,u.setAttribute("data-project","project-description"),u.className="project-item-input",u.value=s,d.appendChild(u);const b=document.createElement("input");b.setAttribute("type","date"),b.id=`project-item-${e}-duedate`,b.setAttribute("data-project","project-duedate"),b.className="project-item-input",b.value=i,d.appendChild(b),console.log(a)},c=e=>{console.log("You are now in update project dropdow"),console.log("This is what is in the project Arr: "+e);const t=document.getElementById("project-dropdown");for(;t.firstChild;)t.removeChild(t.firstChild);for(let o=0;o<e.length;o++){const c=e[o].title,n=e[o].projectId;console.log("Project title: "+c);const l=document.createElement("option");l.setAttribute("value",`${c}`),l.setAttribute("data-project-id",`${n}`),l.classList.add("dropdown-option"),l.innerHTML=c,t.appendChild(l)}},n=(e,t,o,c,n,l,s,i,r)=>{const d=o,a=l;console.log("The priority input selected index: "+a);const g=c,h=n,p=s;console.log(p);const m=document.querySelector(".todos-container"),u=document.createElement("article");u.className="todo-item",u.setAttribute("data-project-id",`${t}`),u.id=`todo-item-${e}`,m.appendChild(u);const b=document.createElement("div");b.className="todo-delete-container",u.appendChild(b);const k=document.createElement("img");k.setAttribute("src","./img/delete.png"),k.className="todo-delete-icon",b.appendChild(k);const j=document.createElement("div");j.className="todo-checkbox-container",u.appendChild(j);const I=document.createElement("img");I.setAttribute("src","./img/box.png"),I.setAttribute("alt","unchecked"),I.className="todo-item-checkbox",j.appendChild(I),1==r&&(I.setAttribute("src","./img/boxchecked.png"),I.setAttribute("alt","checked"));const A=document.createElement("input");A.setAttribute("type","text"),A.value=d,A.setAttribute("data-todo","todo-title"),A.id=`todo-item-${e}-title`,u.appendChild(A);const E=document.createElement("select");u.appendChild(E),E.setAttribute("data-todo","todo-priority"),E.id=`todo-item-${e}-priority`;const f=document.createElement("option");f.setAttribute("value","1st"),f.innerHTML="1st";const y=document.createElement("option");y.setAttribute("value","2nd"),y.innerHTML="2nd";const T=document.createElement("option");T.setAttribute("value","3rd"),T.innerHTML="3rd",E.appendChild(f),E.appendChild(y),E.appendChild(T),E.selectedIndex=a;const x=document.createElement("input");x.setAttribute("type","text"),x.setAttribute("data-todo","todo-description"),x.id=`todo-item-${e}-description`,x.value=g,u.appendChild(x);const v=document.createElement("input");v.setAttribute("type","date"),v.setAttribute("data-todo","todo-duedate"),v.id=`todo-item-${e}-duedate`,console.log("Rendering the todo, and the duedateInput is: "+h),v.value=h,u.appendChild(v);const N=document.createElement("div");N.className="expand",u.appendChild(N);const C=document.createElement("img");C.setAttribute("src","./img/expand.png"),C.className="expand-icon",N.appendChild(C);const w=document.createElement("div");w.className="todo-expand-container",w.classList.add("hide"),u.appendChild(w);const S=document.createElement("div");S.className="todo-notes-container",w.appendChild(S);const D=document.createElement("label");D.setAttribute("for","todo-Notes"),D.innerHTML="Notes:",S.appendChild(D);const H=document.createElement("div");H.setAttribute("role","textbox"),H.setAttribute("contenteditable",""),H.setAttribute("data-todo","todo-notes"),H.className="todo-notes",H.innerHTML=p,H.id=`todo-notes-${e}`,S.appendChild(H),console.log("checklistItem length: "+i.length),console.log("The first checklist item example: "+i[0]);const _=i.length,$=[],O=[];for(let e=0;e<i.length;e++)console.log("The checklist item title: "+i[e].title),console.log("The checklist item done status: "+i[e].isDone),$.push(i[e].title),O.push(i[e].isDone);console.log("Here are the inputs: "+$),console.log("Here is the checklistItemStatus Arr: "+O);const q=document.createElement("div");q.className="todo-checklist-container",w.appendChild(q);const L=document.createElement("label");L.setAttribute("for","todo-checklist"),L.innerHTML="Checklist:",q.appendChild(L);const J=document.createElement("ul");J.className="todo-checklist-item-container",q.appendChild(J);const B=$;let P=0;const M=O;console.log("Checklist item inputs: "+B);for(let e=0;e<_;e++){const t=document.createElement("li");t.className="todo-checklist-item",t.id=`todo-checklist-item-${i[e].checklistItemId}`,J.appendChild(t);const o=document.createElement("div");o.className="todo-checklist-delete-container",t.appendChild(o);const c=document.createElement("img");c.setAttribute("src","./img/delete.png"),c.className="todo-checklist-delete-icon",o.appendChild(c);const n=document.createElement("div");n.className="todo-checklist-checkbox-container",t.appendChild(n);const l=document.createElement("img");l.className="todo-checklist-checkbox-icon",0==M[e]?(l.setAttribute("src","./img/box.png"),l.setAttribute("alt","unchecked")):(l.setAttribute("src","./img/boxchecked.png"),l.setAttribute("alt","checked")),n.appendChild(l);const s=document.createElement("input");s.id=`todo-checklist-item-${i[e].checklistItemId}-text`,s.setAttribute("data-todo-checklist","checklist-item-title"),s.setAttribute("type","text"),s.value=B[P],P++,t.appendChild(s)}const Y=document.createElement("div");Y.className="add-checklist-item-btn-container",q.appendChild(Y);const F=document.createElement("img");F.setAttribute("src","./img/add.png"),F.className="add-checklist-item-btn",Y.appendChild(F)},l=e=>{const t=document.querySelector(".todos-container");console.log("Todo cnt: "+t);const o=[...t.children];console.log("Todo elements arr: "+o),console.log("passed project id is: "+e);for(let t=0;t<o.length;t++)console.log("Here is the supposedly data project id: "+e),console.log("Here is Array element project id: "+o[t].getAttribute("data-project-id")),e!=o[t].getAttribute("data-project-id")&&"todos-headings"!=o[t].className?o[t].classList.add("hide"):o[t].classList.remove("hide")},s=e=>{document.querySelector(".project-form-container").classList.toggle("hide")},i=()=>{document.getElementById("form-project-title").value="",document.getElementById("form-project-description").value="",document.getElementById("form-project-duedate").value=""},r=e=>{document.querySelector(".todo-form-container").classList.toggle("hide")},d=()=>{document.getElementById("form-todo-title").value="",document.getElementById("form-todo-description").value="",document.getElementById("form-todo-priority").value="1st",document.getElementById("form-todo-duedate").value="",document.getElementById("form-todo-notes").value="";const e=document.querySelector(".form-todo-checklist-item-container"),t=[...e.children];console.log(t.length),console.log(t);for(let e=1;e<=t.length-1;e++)t[e].remove();const o=e.firstElementChild.lastElementChild;console.log(o),o.value="";const c=e.querySelector(".form-todo-checklist-checkbox-icon");c.setAttribute("alt","unchecked"),c.setAttribute("src","./img/box.png")},a=(e,t)=>{console.log("Checklist item id: "+t);const o=e.target.nodeName,c=e.target.parentElement.parentElement.nodeName;console.log(o),console.log(c);let n="";"DIV"==o?(console.log("Container was clicked!"),n=e.target.previousElementSibling):"IMG"==o&&(console.log("actual btn was clicked!"),n=e.target.parentNode.previousElementSibling,console.log(n));let l="";"FORM"==c?l="form-":"DIV"==c&&(l="",console.log("Its a div"));const s=document.createElement("li");s.className=`${l}todo-checklist-item`,s.id=`${l}todo-checklist-item-${t}`,n.appendChild(s);const i=document.createElement("div");i.className=`${l}todo-checklist-delete-container`,s.appendChild(i);const r=document.createElement("img");r.setAttribute("src","./img/delete.png"),r.className=`${l}todo-checklist-delete-icon`,i.appendChild(r);const d=document.createElement("div");d.className=`${l}todo-checklist-checkbox-container`,s.appendChild(d);const a=document.createElement("img");a.setAttribute("src","./img/box.png"),a.setAttribute("alt","unchecked"),a.className=`${l}todo-checklist-checkbox-icon`,d.appendChild(a);const g=document.createElement("input");g.setAttribute("type","text"),g.id=`${l}todo-checklist-item-${t}-text`,"DIV"==c&&g.setAttribute("data-todo-checklist","checklist-item-title"),s.appendChild(g),console.log(n)},g=e=>{let t=e.target.parentElement.parentElement;e.target.parentElement.parentElement.parentElement,t.remove()},h=()=>{const e=document.getElementById("project-dropdown");return console.log("Here are the dropdown options: "+e.options.length),0!=e.options.length?e.options[e.selectedIndex].getAttribute("data-project-id"):null},p=e=>{if(console.log("You are now in the toggle checkboxstatus func. domContainer is: "+e),"project-item"==e.className){const t=e.querySelector(".project-checkbox-icon");console.log(t),console.log("hey "+t.getAttribute("alt")),"unchecked"==t.getAttribute("alt")?(t.setAttribute("src","./img/boxchecked.png"),t.setAttribute("alt","checked")):"checked"==t.getAttribute("alt")&&(t.setAttribute("src","./img/box.png"),t.setAttribute("alt","unchecked"))}else if("form-todo-checklist-item"==e.className){console.log("It was the checklist item checkbox that was clicked!");const t=e.querySelector(".form-todo-checklist-checkbox-icon");console.log(t),console.log("hey "+t.getAttribute("alt")),"unchecked"==t.getAttribute("alt")?(t.setAttribute("src","./img/boxchecked.png"),t.setAttribute("alt","checked")):"checked"==t.getAttribute("alt")&&(t.setAttribute("src","./img/box.png"),t.setAttribute("alt","unchecked"))}else if("todo-checklist-item"==e.className){console.log("It was the checklist item checkbox that was clicked!");const t=e.querySelector(".todo-checklist-checkbox-icon");console.log(t),console.log("hey "+t.getAttribute("alt")),"unchecked"==t.getAttribute("alt")?(t.setAttribute("src","./img/boxchecked.png"),t.setAttribute("alt","checked")):"checked"==t.getAttribute("alt")&&(t.setAttribute("src","./img/box.png"),t.setAttribute("alt","unchecked"))}else if("todo-item"==e.className){console.log("It was the todo checkbox that was clicked!");const t=e.querySelector(".todo-item-checkbox");"unchecked"==t.getAttribute("alt")?(t.setAttribute("src","./img/boxchecked.png"),t.setAttribute("alt","checked")):"checked"==t.getAttribute("alt")&&(t.setAttribute("src","./img/box.png"),t.setAttribute("alt","unchecked"))}},m=class{checklist=[];isDone=!1;constructor(e,t,o,c,n,l){this.title=e,this.description=t,this.dueDate=o,this.priority=c,this.notes=n,this.todoId=l}get title(){return this._title}set title(e){this._title=e}get description(){return this._description}set description(e){this._description=e}get dueDate(){return this._dueDate}set dueDate(e){this._dueDate=e}get isDone(){return this._isDone}set isDone(e){this._isDone=e}get priority(){return this._priority}set priority(e){this._priority=e}get notes(){return this._notes}set notes(e){this._notes=e}get checklist(){return this._checklist}get todoId(){return this._todoId}set todoId(e){this._todoId=e}addChecklistToTodo(e){this.checklist.push(e)}},u=(e,t,o,c,n,l)=>new m(e,t,o,c,n,l),b=class{constructor(e,t,o){this.title=e,this.isDone=t,this.checklistItemId=o}get title(){return this._title}set title(e){this._title=e}get isDone(){return this._isDone}set isDone(e){this._isDone=e}get checklistItemId(){return this._checklistItemId}set checklistItemId(e){this._checklistItemId=e}},k=(e,t,o)=>new b(e,t,o),j=(e,t,o)=>{console.log("You are now ine the findChecklistArray func:"),console.log("The project arr is: "+e),console.log("The projectId is: "+t),console.log("The passedTodoId is: "+o);const c=e.find((e=>e.projectId==t));console.log(c);const n=c.todos.find((e=>e.todoId==o));return console.log(n),n.checklist};console.log(localStorage.length),console.log(localStorage);const I=[];console.log(I);let A=[];const E=e=>{const t=e.projectId;localStorage.setItem(`project-${t}`,JSON.stringify(e)),console.log(localStorage),console.log(JSON.parse(localStorage.getItem(`project-${t}`)))},f=e=>{console.log("The passed id: "+e);let t=[];t=JSON.parse(localStorage.getItem("uniqueIdArr")),t.push(e),console.log("The uniqueIdArr after having the new id pushed to it: "),console.log(t),localStorage.setItem("uniqueIdArr",JSON.stringify(t))};if(0==localStorage.length){console.log("Hey local storage is empty! Lets iniate it!");const t=new e("Default","Add a description!","2021-07-21",0);I.push(t),A.push(0);const c=new m("Do the washing","Remember to check for plecters","2021-10-21","1st","These are my awesome notes",1);t.addTodoToProject(c),A.push(1);const l=new b("Check temp",!1,2);console.log("Here is the defaultchecklist Item: "),console.log(l),A.push(2),c.addChecklistToTodo(l),l.isDone=!0,console.log(t),console.log(t.title),console.log(t.projectId),console.log(A),E(t),console.log("About to enter the populate project overview loop!"),o(I[0].projectId,I[0].title,I[0].description,I[0].dueDate,I[0].isDone),n(1,I[0].projectId,I[0].todos[0].title,I[0].todos[0].description,I[0].todos[0].dueDate,I[0].todos[0].priority,I[0].todos[0].notes,I[0].todos[0].checklist,I[0].todos[0].isDone),y=A,localStorage.setItem("uniqueIdArr",JSON.stringify(y)),console.log("A unique id has been added! "),console.log(JSON.parse(localStorage.getItem("uniqueIdArr")))}else{console.log("There are items saved in the local storage!"),console.log(I),Object.keys(localStorage).forEach((e=>{console.log(JSON.parse(localStorage.getItem(e)));const o=JSON.parse(localStorage.getItem(e));if(console.log("The key being handled: "+o),console.log(typeof o),null!=o._title){console.log("Hey this is actually a project obj!");const e=o;console.log(e);const c=e._title,n=e._description,l=e._dueDate,s=e._projectId,i=e.isDone,r=e.todos;console.log("The title is: "+c),console.log("The todos are: "+r);const d=t(c,n,l,s);d.isDone=i;const a=[];d.todos=a,console.log("Converted todos array:"),console.dir(a);for(let e=0;e<r.length;e++){console.log(r[e]);const t=r[e],o=t._title,c=t._description,n=t._dueDate,l=t._priority,s=t._notes,i=t._todoId,a=t.isDone;console.log("Getting the todo dueDate before creation, which is: "+n);const g=u(o,c,n,l,s,i);g.isDone=a,console.log("Here is the todo obj duedate: "+g.dueDate),console.log("Here is the converted todo: "),console.dir(g),d.todos.push(g),console.log("Converted object todo array: "),console.dir(d.todos);const h=t.checklist;console.log("The existing todo checklist arr: "),console.log(h);for(let e=0;e<h.length;e++){const t=h[e],o=t._title,c=t._isDone,n=t._checklistItemId,l=k(o,c,n);g.addChecklistToTodo(l),console.log("The converted todo checklist arr: "),console.dir(g.checklist)}}console.log("The converted project Obj is:"),console.log(d),console.log(I),I.push(d),console.log(I)}else console.log("This is not a project OBJ: "+o),console.log("Here is the uniqueIds Arr before we overwrite it:"),console.log(A),A=o,console.log("Here is the now overwritten session uniqueIds Arr:"),console.log(A)})),console.log("Here is the project Arr: "),console.log(I),console.log("About to enter the populate project overview loop!");for(let e=0;e<I.length;e++)console.log("The current project to render:"),console.log(I[e]),console.log("The project id is: "+I[e].projectId),o(I[e].projectId,I[e].title,I[e].description,I[e].dueDate,I[e].isDone);console.log("About to enter the populate todo overview loop!");for(let e=0;e<I.length;e++)if(console.log("The project id is: "+I[e].projectId),console.log("The todos to render:"),console.dir(I[e].todos),0!=I[e].todos.length)for(let t=0;t<I[0].todos.length;t++)console.log("The todo:"+JSON.stringify(I[e].todos[t])),console.log("The checklist array: "),console.dir(I[e].todos[t].checklist),console.log("The duedate being passed is: "+I[e].todos[t].dueDate),n(I[e].todos[t].todoId,I[e].projectId,I[e].todos[t].title,I[e].todos[t].description,I[e].todos[t].dueDate,I[e].todos[t].priority,I[e].todos[t].notes,I[e].todos[t].checklist,I[e].todos[t].isDone);else console.log("This project does not have any todos yet");c(I);const e=h();console.log("The currently selected project id is: "+e);const l=document.querySelector(".todos-container");console.log("The todo container: "+l);const s=l.querySelectorAll("article");console.log("Here is the todoItemsArr:"),console.dir(s);for(let t=0;t<s.length;t++)s[t].getAttribute("data-project-id")!=e&&s[t].classList.toggle("hide")}var y;const T=e=>{console.log("You are now in the updateProjectInLocalStorage func"),console.log("Project id is:"+e);const t=I.find((t=>t.projectId==e));console.log("Project to update is: "+t),localStorage.setItem(`project-${e}`,JSON.stringify(t)),console.log(localStorage),console.log(JSON.parse(localStorage.getItem(`project-${e}`)))};document.querySelector("main").addEventListener("click",(e=>x(e))),(()=>{const e=document.querySelector(".projects-container");console.log(e),e.addEventListener("input",(e=>v(e)))})(),(()=>{const e=document.querySelector(".todos-container");console.log(e),e.addEventListener("input",(e=>v(e)))})();const x=e=>{const m=e.target.parentElement.parentElement,b=e.target.parentElement,y=e.target.parentElement.nextElementSibling;document.querySelector(".projects-container"),document.querySelector(".todos-container"),console.log(y),console.log(e.target);const x=/\d/g;let v="";switch(e.target.id||e.target.className){case"project-add-btn":s();break;case"confirm-new-project":console.log("Project btn pressed!");const C=A.length;A.push(C),f(C);const w=document.getElementById("form-project-title").value;console.log("Here is the title for the new project: "+w);const S=document.getElementById("form-project-description").value;console.log("Here is the description for the new project: "+S);const D=document.getElementById("form-project-duedate").value;if(console.log("Here is the duedate for the new project: "+D),w.length>0){o(C,w,S,D,!1);const e=t(w,S,D,C);N=e,I.push(N),E(e),console.log(I),c(I),s(),i()}else alert("Please add a title to the project");break;case"project-form-close":case"project-bar1":case"project-bar3":s(),i();break;case"project-delete-container":case"project-delete-icon":let H="",_="";"project-delete-container"==e.target.className?H=b.id:"project-delete-icon"==e.target.className&&(H=m.id),v=H.match(x),_=v.join(""),console.log("Here is the project Id num:"+_),((e,t)=>{console.log("You are now in the remove Project item function"),console.log(e);const o=e.findIndex((e=>e.projectId==t));console.log("The project index is: "+o),e.splice(o,1),console.log(e)})(I,Number.parseInt(_)),(e=>{console.log("The passed projectId is: "+e),localStorage.removeItem(`project-${e}`),console.log(localStorage)})(_),(e=>{console.log("You are now in the remove Project Todos from DOM func");const t=document.querySelector(".todos-container"),o=[...t.children];console.log("Todo elements arr: "+o),console.log("Project Id: "+e);for(let c=0;c<o.length;c++)console.log("Html elements project id: "+o[c].getAttribute("data-project-id")),e==o[c].getAttribute("data-project-id")&&(console.log("Todo element we want to remove from the DOM: "+o[c]),t.removeChild(o[c]))})(_),c(I);const $=h();null!=$&&l($),g(e),console.log(I);break;case"project-checkbox-container":case"project-checkbox-icon":let O="",q="",L="";"project-checkbox-container"==e.target.className?(O=b.id,L=b):"project-checkbox-icon"==e.target.className&&(O=m.id,L=m),v=O.match(x),q=v.join(""),((e,t)=>{console.log(e),console.log(t);const o=e.find((e=>e.projectId===Number.parseInt(t)));!1===o.isDone?(console.log(o),o.isDone=!0,console.log(o)):(console.log(o),o.isDone=!1,console.log(o))})(I,q),p(L),T(q);break;case"todo-add-btn":r();break;case"confirm-new-todo":const J=A.length;A.push(J),f(J);const B=(()=>{const e=document.getElementById("form-todo-title").value;return console.log(e),e})(),P=(()=>{const e=document.getElementById("form-todo-description").value;return console.log(e),e})(),M=(()=>{const e=document.getElementById("form-todo-duedate").value;return console.log(e),e})(),Y=(()=>{const e=document.getElementById("form-todo-priority").value;return console.log(e),e})(),F=(()=>{const e=document.getElementById("form-todo-notes").value;return console.log(e),e})(),R=document.querySelector(".form-todo-checklist-item-container"),V=R.querySelectorAll(".form-todo-checklist-item"),G=[...V];console.log("Checklist item cnt: "),console.log(R),console.log("Checklist dom arr: "),console.log(V),console.log("Checklist item Arr: "),console.log(G);const W=u(B,P,M,Y,F,J);for(let e=0;e<G.length;e++){console.log("A checklist Item: "+G[e].lastElementChild),console.log("A checklist Item value: "+G[e].lastElementChild.value);const t=G[e].querySelector(".form-todo-checklist-checkbox-icon");console.log("The Checklist item img: "+t.getAttribute("alt"));const o=G[e].lastElementChild.value;let c=!1;"checked"==t.getAttribute("alt")&&(c=!0);const n=A.length;console.log("Here is the checklistItemId: "+n),A.push(n),f(n),console.log("Here is the arr with unique ids:"+A);const l=k(o,c,n);W.addChecklistToTodo(l)}console.log("new todo checklist arr:"),console.log(W.checklist),n(J,h(),B,P,M,Y,F,W.checklist,!1),console.log("Here is the new todo: "+W);const z=h();console.log("The selected dropdown: "+z),console.log(I);const K=I.find((e=>e.projectId==z));console.dir("The project is: "+K),console.log(JSON.stringify(K)),K.addTodoToProject(W),console.log(I),T(z),r(),d(),console.log("Add todo clicked!"),console.log(I);break;case"todo-form-close":case"todo-bar1":case"todo-bar3":console.log("Close btn pushed!"),d(),r();break;case"form-add-checklist-item-btn-container":case"form-add-checklist-item-btn":const Q=A.length;console.log("Here is the checklist item id: "+Q),a(e,Q);break;case"form-todo-checklist-checkbox-container":case"form-todo-checklist-checkbox-icon":"form-todo-checklist-checkbox-container"==e.target.className?p(b):"form-todo-checklist-checkbox-icon"==e.target.className&&(console.log(m),p(m));break;case"form-todo-checklist-delete-container":case"form-todo-checklist-delete-icon":g(e);break;case"add-checklist-item-btn-container":case"add-checklist-item-btn":const U=A.length;console.log("Here is the checklist item id: "+U),A.push(U),f(U),a(e,U);let X="",Z="";"add-checklist-item-btn-container"==e.target.className?(X=m.parentElement.id,Z=m.parentElement.getAttribute("data-project-id")):"add-checklist-item-btn"==e.target.className&&(X=m.parentElement.parentElement.id,Z=m.parentElement.parentElement.getAttribute("data-project-id")),v=X.match(x);let ee=v.join("");console.log("The reg result arr:"),console.log(v),console.log("The todoId num is: "+ee),console.log("Project id is: "+Z);const te=I.find((e=>Z==e.projectId)),oe=te.todos;console.log("Here is there todos Arr for the project: "),console.dir(oe);const ce=oe.find((e=>ee==e.todoId));console.log("Here is the todoObj: "+JSON.stringify(ce));const ne=k("",!1,U);ce.addChecklistToTodo(ne),console.log(JSON.stringify(ce)),console.log(I),localStorage.setItem(`project-${Z}`,JSON.stringify(te));break;case"todo-checkbox-container":case"todo-item-checkbox":let le="",se="",ie="",re="";"todo-checkbox-container"==e.target.className?(le=b.id,re=b,ie=b.getAttribute("data-project-id")):"todo-item-checkbox"==e.target.className&&(le=m.id,ie=m.getAttribute("data-project-id"),re=m),v=le.match(x),se=v.join(""),((e,t,o)=>{console.log("Hey we are in the toggoleToDoIsDone func"),console.log("Here is the project Arr: "+e),console.log("Here is the todoId: "+t),console.log("Here is the projectId: "+o);const c=e.find((e=>e.projectId==`${o}`));console.log("Here is the projectObj: "+c);const n=c.todos;console.log("Here is there project todos: "+n),console.log("The first todo item id: "+n[0].todoId),console.log("The passed todo id: "+t);const l=n.find((e=>e.todoId==t));console.log("Here is there todo Obj: "+JSON.stringify(l)),1==l.isDone?l.isDone=!1:l.isDone=!0,console.log("Here is there todo Obj: "+JSON.stringify(l))})(I,se,ie),p(re),console.log(I),T(ie);break;case"todo-checklist-checkbox-icon":case"todo-checklist-checkbox-container":let de="",ae="",ge="",he="",pe="",me="";"todo-checklist-checkbox-container"==e.target.className?(de=m.parentElement.parentElement.parentElement.id,ge=m.parentElement.parentElement.parentElement.getAttribute("data-project-id"),Te=m,me=b.id,p(b)):"todo-checklist-checkbox-icon"==e.target.className&&(de=m.parentElement.parentElement.parentElement.parentElement.id,ge=m.parentElement.parentElement.parentElement.parentElement.getAttribute("data-project-id"),me=m.id,p(m)),v=de.match(x),ae=v.join(""),pe=m.parentElement,console.log("Checklist cnt:"+pe),console.log(pe.childElementCount);const ue=pe.children;console.log(ue);const be=[...ue];console.log(be),he=be.findIndex((e=>e.id==m.id)),console.log(he),((e,t,o,c)=>{console.log("You are now in the toggle checklist func"),console.log("ProjectId: "+t),console.log("TodoId: "+o),console.log("Checklist item Arr index: "+c);const n=j(e,t,o)[c];console.log(n),1==n.isDone?n.isDone=!1:n.isDone=!0,console.log(e),console.log(n)})(I,ge,ae,he),T(ge);break;case"todo-delete-container":case"todo-delete-icon":let ke="",je="",Ie="";"todo-delete-container"==e.target.className?(ke=b.id,Ie=b.getAttribute("data-project-id")):"todo-delete-icon"==e.target.className&&(console.log("The todo item id str: "+ke),ke=m.id,Ie=m.getAttribute("data-project-id")),v=ke.match(x),je=v.join(""),console.log("The todo item id str: "+ke),((e,t)=>{console.log("You are now in removeTodoFromLocalStorage"),console.log("The passed projectId is: "+e),console.log("The passed todoId is: "+t);const o=JSON.parse(localStorage.getItem(`project-${e}`));console.log(o);const c=o.todos;console.log(c),o.todos=c.filter((e=>e._todoId!=t)),console.log("The project todos: "),console.log(o.todos),localStorage.setItem(`project-${e}`,JSON.stringify(o))})(Ie,je),((e,t,o)=>{console.log("You are now in the removeTodoItem Func"),console.log(e);const c=e.find((e=>e.projectId==`${o}`));console.log("Here is the projectObj: "+c);const n=c.todos,l=n.findIndex((e=>e.todoId==t));n.splice(l,1),console.log(e)})(I,je,Ie),g(e);break;case"todo-checklist-delete-container":case"todo-checklist-delete-icon":console.log("Hey delete was clicked!");let Ae="",Ee="",fe="",ye="",Te="",xe="",ve="",Ne="";console.log(m.id),"todo-checklist-delete-container"==e.target.className?(Ae=m.parentElement.parentElement.parentElement.id,fe=m.parentElement.parentElement.parentElement.getAttribute("data-project-id"),Te=m,xe=b.id,ve=e.target.parent.id):"todo-checklist-delete-icon"==e.target.className&&(console.log(e.target),Ae=m.parentElement.parentElement.parentElement.parentElement.id,console.log(Ae),fe=m.parentElement.parentElement.parentElement.parentElement.getAttribute("data-project-id"),console.log(fe),Te=m.parentElement,console.log(Te),ve=m.id,console.log(ve)),v=Ae.match(x),Ee=v.join(""),console.log("the checklistItemTodoIdNum: "+Ee),Ne=ve.match(x).join("");const Ce=Te.children;console.log(Ce);const we=[...Ce];console.log(we),console.log("The checklistTodoItemId: "+Ae),ye=we.findIndex((e=>e.id==xe)),((e,t,o,c)=>{console.log("You are now in the removeChecklistItem func"),console.log("ProjectId: "+t),console.log("TodoId: "+o),console.log("Checklist item Arr index: "+c),j(e,t,o).splice(c,1)})(I,fe,Ee,ye),((e,t,o)=>{console.log("You are now in removeChecklistItemFromLocalStorage func!"),console.log("The project id: "+e),console.log("The todoId: "+t),console.log("The checklist id: "+o);const c=JSON.parse(localStorage.getItem(`project-${e}`));console.log(c);const n=c.todos;console.log(n);const l=n.find((e=>(console.log(e._todoId),e._todoId==t)));console.log(l);let s=l.checklist;console.log("Here is the checklist Arr: "),console.log(s),l.checklist=s.filter((e=>e._checklistItemId!=o)),console.log(s),localStorage.setItem(`project-${e}`,JSON.stringify(c))})(fe,Ee,Ne),g(e),console.log(I);break;case"expand":case"expand-icon":console.log("Hey expand got clicked"),(e=>{e.classList.toggle("hide")})(y),(e=>{console.log("We are now in the switch expand icon func!"),console.log(e.target);const t=e.target;"./img/expand.png"==t.getAttribute("src")?t.setAttribute("src","./img/expandless.png"):t.setAttribute("src","./img/expand.png")})(e)}var N},v=e=>{const t=e.target.parentElement,o=e.target.parentElement.parentElement;console.log(t),console.log(o),console.log("The change event target is: "),console.dir(e.target),console.log("The value is: "),console.dir(e.target.value),console.log(e.target.className);const c=/\d/g;let n="",l="";"todo-notes"==e.target.getAttribute("data-todo")?(console.log("Yes its a todo notes!"),console.log(e.target.textContent),l=e.target.textContent):l=e.target.value;let s="",i="";e.target.hasAttribute("data-project")?(s=e.target.id,i=null):"todo-notes"==e.target.getAttribute("data-todo")?(console.log("We are in the if else"),s=o.parentElement.getAttribute("data-project-id"),i=e.target.id):e.target.hasAttribute("data-todo")?(s=e.target.parentElement.getAttribute("data-project-id"),i=e.target.id):e.target.hasAttribute("data-todo-checklist")&&(s=o.parentElement.parentElement.parentElement.getAttribute("data-project-id"),i=o.parentElement.parentElement.parentElement.id),console.log("The projectItemIdStr: "+s);let r="";n=s.match(c),r=n.join("");const d=I.find((e=>e.projectId==r));console.log("The project obj:"),console.dir(d);let a="",g="",h="",p="",m="",u="",b="",k="",A="",E="";switch(null!=i&&(console.log("The todoIdStr is: "+i),n=i.match(c),a=n.join(""),console.log("The todoIdNum is: "+a),g=d.todos,console.log(g),h=g.find((e=>e.todoId==a)),console.log("And here is the correct todo Obj"),console.dir(h),p=o,m=t.id,console.log("The checklist todo item id is: "+m),console.dir(p),console.log(p.childElementCount),u=p.children,console.log(u),b=[...u],console.log(b),k=b.findIndex((e=>e.id==m)),console.log("The checklist Arrindex is: "+k),A=j(I,r,a),E=A[k],console.log(E)),e.target.getAttribute("data-project")||e.target.getAttribute("data-todo")||e.target.getAttribute("data-todo-checklist")){case"project-title":console.log("It was the project title input that was changed!"),d.title=l,console.log(d),console.log(I);const e=[...document.getElementById("project-dropdown").options];console.log("The dropdownArr:"),console.log(e);const t=e.find((e=>e.getAttribute("data-project-id")==r));console.log(t),t.innerHTML=l;break;case"project-description":console.log("It was the project description input that was changed!"),d.description=l,console.log(d),console.log(I);break;case"project-duedate":console.log("It was the project duedate input that was changed!"),d.dueDate=l,console.log(d),console.log(I);break;case"todo-title":console.log("Todo project was changed!"),h.title=l,console.log(I);break;case"todo-priority":console.log("The priority dropdown was clicked!"),h.priority=l,console.log(I);break;case"todo-description":console.log("The description was changed!"),h.description=l,console.log(I);break;case"todo-duedate":console.log("The duedate was changed!"),h.dueDate=l,console.log("Here is the todo duedate: "+h.dueDate),console.log(I);break;case"todo-notes":console.log("Hey notes were changed!"),h.notes=l;break;case"checklist-item-title":console.log("The checklist item title has been changed!"),E.title=l,console.log("Here is the checklist title: "+E.title),console.log(I)}T(r)};document.getElementById("project-dropdown").addEventListener("change",(e=>{console.log("Hey a dropdown option has been clicked on!");const t=h();l(t)}))})();