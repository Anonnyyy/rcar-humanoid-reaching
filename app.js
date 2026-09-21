
const video=document.querySelector('#project-video');
for(const button of document.querySelectorAll('[data-seek]'))button.addEventListener('click',()=>{
 if(!video)return;
 const seek=()=>{video.currentTime=Number(button.dataset.seek);video.play().catch(()=>{});};
 if(video.readyState>=1)seek();else{video.addEventListener('loadedmetadata',seek,{once:true});video.load();}
 document.querySelectorAll('[data-seek]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 video.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
});
const dialog=document.querySelector('.lightbox');
if(dialog){for(const button of document.querySelectorAll('[data-enlarge]'))button.addEventListener('click',()=>{
 const original=button.querySelector('img');const image=dialog.querySelector('img');image.src=original.src;image.alt=original.alt;dialog.showModal();
});dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});}
