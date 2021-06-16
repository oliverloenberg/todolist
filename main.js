(()=>{"use strict";const e=e=>{e.classList.toggle("hide")},t=e=>{document.querySelector(".project-form-container").classList.toggle("hide")},o=()=>{document.getElementById("form-project-title").value="",document.getElementById("form-project-description").value="",document.getElementById("form-project-duedate").value=""},c=e=>{document.querySelector(".todo-form-container").classList.toggle("hide")},n=()=>{document.getElementById("form-todo-title").value="",document.getElementById("form-todo-description").value="",document.getElementById("form-todo-priority").value="1st",document.getElementById("form-todo-duedate").value="",document.getElementById("form-todo-notes").value="";const e=[...document.querySelector(".form-todo-checklist-item-container").children];console.log(e.length),console.log(e);for(let t=1;t<=e.length-1;t++)e[t].remove();const t=document.getElementById("form-todo-checklist-item-1-text");console.log(t),t.value=""},l=()=>{console.log("Checklist add btn has been pressed!");const e=document.querySelector(".form-todo-checklist-item-container"),t=s(),o=document.createElement("li");o.className="form-todo-checklist-item",o.id=`form-todo-checklist-item-${t+1}`,e.appendChild(o);const c=document.createElement("div");c.className="form-todo-checklist-delete-container",o.appendChild(c);const n=document.createElement("img");n.setAttribute("src","./img/delete.png"),c.appendChild(n);const l=document.createElement("div");l.className="form-todo-checklist-checkbox-container",o.appendChild(l);const d=document.createElement("img");d.setAttribute("src","./img/box.png"),d.className="form-todo-checklist-checkbox",l.appendChild(d);const i=document.createElement("input");o.appendChild(i),console.log(e)},s=()=>document.querySelector(".form-todo-checklist-item-container").childElementCount,d=new class{isDone=!1;constructor(e,t,o){this.title=e,this.description=t,this.dueDate=o}get title(){return this._title}set title(e){e.length<1?alert("Name is too short"):this._title=e}get description(){return this._description}set description(e){e.length<1?alert("Description is too short"):this._description=e}get dueDate(){return this._dueDate}set dueDate(e){this._dueDate=e}get isDone(){return this._dueDate}set isDone(e){this._isDone=e}}("Default","Add a description!","Ongoing"),i=[];i.push(d),document.querySelector("main").addEventListener("click",(s=>(s=>{const d=s.target.parentElement.nextElementSibling;switch(console.log(d),console.log(s.target),s.target.id||s.target.className){case"project-add-btn":t();break;case"project-form-close":case"project-bar1":case"project-bar3":t(),o();break;case"todo-add-btn":c();break;case"todo-form-close":case"todo-bar1":case"todo-bar3":console.log("Close btn pushed!"),c(),n();break;case"form-add-checklist-item-btn-container":case"form-add-checklist-item-btn":l();break;case"expand":case"expand-icon":console.log("Hey expand got clicked"),e(d),switchExpandIcon()}})(s))),(()=>{const e=document.querySelector(".projects-container");console.log(e);const t=document.createElement("article");t.className="project-item",t.id="project-1",e.appendChild(t);const o=document.createElement("div");o.className="project-delete-container",t.appendChild(o);const c=document.createElement("img");c.setAttribute("src","./img/delete.png"),o.appendChild(c);const n=document.createElement("div");n.className="project-checkbox-container",t.appendChild(n);const l=document.createElement("img");l.setAttribute("src","./img/box.png"),l.className="project-item-checkbox",n.appendChild(l);const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("placeholder","Default"),t.appendChild(s);const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("placeholder","Your first project!"),t.appendChild(d);const i=document.createElement("input");i.setAttribute("type","date"),t.appendChild(i),console.log(o)})(),console.log(i),console.log(d),console.log(d.title),d.title="Home stuff changed",console.log(d.title)})();