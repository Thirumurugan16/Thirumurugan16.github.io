const skills=[
 ["Apex Programming","⚡",["Apex Fundamentals","Object-Oriented Programming","Classes and Methods","Collections","SOQL and SOSL","DML Operations","Exception Handling","Governor Limits","Bulkification Concepts","Apex Testing Fundamentals"],"big"],
 ["Triggers & Asynchronous Apex","🔔",["Before and After Triggers","Trigger Context Variables","Trigger Handler Concepts","Future Methods","Queueable Apex","Batch Apex","Scheduled Apex"],"big"],
 ["Salesforce Administration","🛡",["Relationships","Data Security","Sales Cloud","Service Cloud","Reports and Dashboards","Sandbox","Agentforce (AI)"],""],
 ["Salesforce Automation","🔄",["Record-Triggered Flows","Screen Flows","Scheduled-Triggered Flows","Flow Decisions and Loops","Process Automation","Lead Assignment Concepts"],""],
 ["Lightning Web Components","🌱",["HTML Fundamentals","LWC Component Structure","JavaScript — Learning","CSS — Learning","Lightning Web Components — In Progress"],"learn"],
 ["Tools & Additional Skills","🧰",["Visual Studio Code","Salesforce Developer Console","Git and GitHub","Postman","Jira","Python","MySQL","AWS Fundamentals"],""]
];
const chip=t=>`<span class="chip">${t}</span>`;
const S=p=>`<svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const SK={
"Apex Programming":[S('<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14"/>'),"#0176D3","#00A1E0"],
"Triggers & Asynchronous Apex":[S('<path d="M20 12a8 8 0 1 1-3-6.2M20 4v4h-4"/><path d="M12.5 7l-3 5h3l-1 5 4-6h-3z"/>'),"#0176D3","#8F90F0"],
"Salesforce Administration":[S('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><circle cx="12" cy="10" r="2"/><path d="M8.5 16c.5-2 2-3 3.5-3s3 1 3.5 3"/>'),"#032D60","#40C9C6"],
"Salesforce Automation":[S('<rect x="3" y="3" width="6" height="5" rx="1"/><rect x="15" y="3" width="6" height="5" rx="1"/><path d="M12 12l3 3-3 3-3-3z"/><path d="M6 8v2c0 1 1 2 2 2h1M18 8v2c0 1-1 2-2 2h-1M12 18v3"/>'),"#35C4F0","#0176D3"],
"Lightning Web Components":[S('<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><path d="M15.5 14.5l-2 2.5 2 2.5M19.5 14.5l2 2.5-2 2.5"/>'),"#0176D3","#A5A6F6"],
"Tools & Additional Skills":[S('<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 7v10M18 11c0 4-6 3-12 6"/>'),"#0176D3","#F59E0B"]};
document.getElementById("skillGrid").innerHTML=["Salesforce Administration","Salesforce Automation","Apex Programming","Triggers & Asynchronous Apex","Lightning Web Components","Tools & Additional Skills"].map(o=>skills.find(x=>x[0]===o)).map(([n,i,c,k])=>`<article class="card skill ${k} rv"><h3><span class="sk-ic" style="background:linear-gradient(135deg,${SK[n][1]},${SK[n][2]})">${SK[n][0]}</span>${n}${k==="learn"?' <span class="badge">Currently Learning</span>':""}</h3><div class="chips">${c.map(chip).join("")}</div></article>`).join("");
const stages=[["Enquiry","Web/Portal","📥"],["Lead Management","Assignment Rule","👤"],["Site Visit","Schedule/Log","📅"],["Opportunity","Stage Tracking","💼"],["Unit Booking","Inventory Lock","🏢"],["Payment","Milestone","💳"],["Handover","Complete","🔑"]];
const W=p=>`<svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const wfs=[
["Customer Enquiry",'<path d="M4 5h16v11H9l-5 4z"/>',"Buyer enquiries are captured through the UrbanNest site enquiry form."],
["Lead Management",'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 3-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.5 0 4 2 4 5"/>',"Capture and manage customer enquiries through Salesforce CRM."],
["Site Visit",'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"Schedule and track property site visits for qualified leads."],
["Opportunity",'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',"Track interested buyers through the sales stages."],
["Unit Booking",'<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',"Link a selected property unit to the buyer and manage its booking status."],
["Payment",'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',"Track payment milestones against each booking."],
["Property Handover",'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l2 2"/>',"Confirm payments and complete the final property handover."]];
const sup=[["Property Inventory",[3,4]],["Cancellation / Refund",[4,5]]];
function buildWF(){const el=document.getElementById("wf");
 el.innerHTML=`<div><h4>UrbanNest — High-Level CRM Workflow</h4><small class="c">Conceptual workflow, not a project screenshot</small></div><div class="steps2">${wfs.map((s,i)=>`<button type="button" class="s2" data-i="${i}"><span class="ico">${W(s[1])}</span><b>${s[0]}</b></button>`).join("")}</div><div class="desc2" aria-live="polite"></div><div class="sup">${sup.map(s=>`<span>${s[0]}</span>`).join("")}</div>`;
 const bs=[...el.querySelectorAll(".s2")],ds=el.querySelector(".desc2"),ss=[...el.querySelectorAll(".sup span")];
 const set=i=>{bs.forEach((b,k)=>{b.classList.toggle("act",k===i);b.classList.toggle("done",k<=i)});ds.innerHTML=`<b>${wfs[i][0]}</b><br>${wfs[i][2]}`;ss.forEach((x,k)=>x.classList.toggle("on",sup[k][1].includes(i)))};
 bs.forEach((b,i)=>{["mouseenter","focus","click"].forEach(ev=>b.addEventListener(ev,()=>set(i)))});set(1)}
buildWF();
document.getElementById("ufMods").innerHTML=["Lead Management","Property Inventory","Site Visits","Opportunities","Unit Booking","Payment Tracking","Cancellations","Handover"].map(x=>`<span>${x}</span>`).join("");
document.getElementById("ufChips").innerHTML=["Salesforce CRM","Custom Objects","Salesforce Flow","Apex-related Business Logic","Validation Rules","Role Hierarchy","Experience Cloud","Reports & Dashboards"].map(chip).join("");
document.getElementById("mods").innerHTML=[["Lead Management","Captures property inquiries from web forms and maps assignment rules to regional sales executives."],["Property Inventory Management","Tracks available, reserved, and sold flat/villa units with automated status locking."],["Site Visit Management","Facilitates customer site inspection bookings, feedback logging, and automated reminders."],["Customer & Opportunity Management","Converts qualified leads into Opportunities with stages reflecting buyer intent."],["Unit Selection & Booking Management","Links chosen property unit to buyer record and generates preliminary booking agreements."],["Payment Management","Milestone-based installment tracking, down-payment verification, and payment schedule receipts."],["Cancellation & Refund Management","Handles cancellation requests, releases inventory locks, and computes deductions."],["Property Handover Management","Verifies complete payment clearances, snag checks, and final key handover confirmation."]].map((x,i)=>`<div><b>${i+1}. ${x[0]}:</b> ${x[1]}</div>`).join("");
const chain=a=>a.map((x,i)=>`<span class="node${i==a.length-1?" hot":""}">${x}</span>`).join('<span aria-hidden="true">→</span>');
document.getElementById("chain1").innerHTML=chain(["Project","Phase","Property Unit"]);
document.getElementById("chain2").innerHTML=chain(["Lead","Account / Contact","Opportunity","Booking","Payment","Handover"]);
document.getElementById("caps").innerHTML=["Custom Objects and Relationships","Record Types and Validation Rules","Role Hierarchy and User Access","Property Inventory Requirements","Salesforce Automation","CRM Business Processes","Agile Sprint Collaboration"].map(x=>`<li>${x}</li>`).join("");
const exp=[
 ["Salesforce Intern","AJ Skill Development & DigiKAS","June 2026 – Present","Gained practical exposure to Salesforce CRM configuration, customization, development concepts, and collaborative project activities."],
 ["AWS Cloud Intern","HTGE Technologies Pvt Ltd","May 2025 – November 2025","Worked with foundational AWS cloud services, including EC2, S3, IAM, RDS, and VPC."],
];
document.getElementById("tl").innerHTML=exp.map(([r,o,d,t])=>`<article class="card ti rv"><h3>${r}</h3><div class="d">${o} · ${d}</div><p style="margin:6px 0 0">${t}</p></article>`).join("");

// nav
const menu=document.getElementById("menu"),bg=document.getElementById("burger");
bg.onclick=()=>{const o=menu.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
menu.querySelectorAll("a").forEach(a=>a.onclick=()=>{menu.classList.remove("open");bg.setAttribute("aria-expanded",false)});
const links=[...menu.querySelectorAll('a[href^="#"]')],secs=links.map(a=>document.querySelector(a.getAttribute("href")));
let lock=null;
const setAct=id=>links.forEach(l=>{const on=l.getAttribute("href")==="#"+id;l.classList.toggle("act",on);on?l.setAttribute("aria-current","true"):l.removeAttribute("aria-current")});
const track=()=>{if(lock||document.getElementById("modal").classList.contains("show")||document.getElementById("lb").classList.contains("show"))return;const y=window.scrollY+110;let id=secs[0].id;secs.forEach(s=>{if(s.offsetTop<=y)id=s.id});if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4)id=secs[secs.length-1].id;setAct(id)};
links.forEach(l=>l.addEventListener("click",()=>{setAct(l.getAttribute("href").slice(1));clearTimeout(lock);lock=setTimeout(()=>{lock=null;track()},900)}));
addEventListener("scroll",track,{passive:true});addEventListener("resize",track);addEventListener("load",track);
addEventListener("hashchange",()=>{const id=location.hash.slice(1);if(secs.some(s=>s.id===id))setAct(id)});
track();
// reveal
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");ro.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".rv").forEach(e=>ro.observe(e));
// modal
const m=document.getElementById("modal");let last;
const close=()=>{m.classList.remove("show");document.body.classList.remove("noscroll");last&&last.focus();track()};
document.querySelectorAll("[data-open]").forEach(b=>b.onclick=e=>{last=e.currentTarget;m.classList.add("show");document.body.classList.add("noscroll");m.querySelector(".mb").scrollTop=0;document.getElementById("closeM").focus()});
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=close);
m.onclick=e=>{if(e.target===m)close()};
const ev=[["assets/evidence-1.webp","Home page of the UrbanNest Experience Cloud site (sandbox)"],["assets/evidence-2.webp","Featured developments with status and availability"],["assets/evidence-3.webp","Villa and commercial development listings"],["assets/evidence-4.webp","Property enquiry form"],["assets/evidence-5.webp","Properties navigation menu by category"]];
const lb=document.getElementById("lb"),lbImg=document.getElementById("lbImg"),lbCap=document.getElementById("lbCap");let lbLast;
if(!ev.length)document.getElementById("evid").hidden=true;
document.getElementById("gal").innerHTML=ev.map((x,i)=>`<button type="button" data-g="${i}"><img src="${x[0]}" alt="${x[1]}" loading="lazy"><span>${x[1]}</span></button>`).join("");
document.querySelectorAll("[data-g]").forEach(b=>b.onclick=()=>{const x=ev[b.dataset.g];lbLast=b;lbImg.src=x[0];lbImg.alt=x[1];lbCap.textContent=x[1];lb.classList.add("show");document.getElementById("lbX").focus()});
const closeLb=()=>{lb.classList.remove("show");lbLast&&lbLast.focus()};
document.getElementById("lbX").onclick=closeLb;lb.onclick=e=>{if(e.target===lb)closeLb()};
document.addEventListener("keydown",e=>{if(e.key!=="Escape")return;if(lb.classList.contains("show"))closeLb();else if(m.classList.contains("show"))close()});

/* Claude preview only: window.claude is absent on GitHub Pages, so the normal download link is used there */
(()=>{const rb=document.querySelector(".resume-btn");if(!rb||!window.claude||!claude.use)return;
rb.addEventListener("click",async e=>{e.preventDefault();try{const d=await claude.use("downloads");if(!d)return;const u=rb.getAttribute("href");let data;
if(u.startsWith("data:")){const b=atob(u.split(",")[1]),a=new Uint8Array(b.length);for(let i=0;i<b.length;i++)a[i]=b.charCodeAt(i);data=a}else data=await(await fetch(u)).blob();
await d.save({filename:"D_Thirumurugan_Resume.pdf",data})}catch(err){}})})();
