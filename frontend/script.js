//===== 1. ΑΡΙ KEY (Safe: browser 6 )

let API_KEY = localStorage.getItem(jarvis_key');

If(IAPI_KEY){

API_KEY = prompt('Enter your Gemini API Key:"); if(API_KEY) localStorage.setItem('jarvis_key', API_KEY);

// 2. SMART MODELS (2໖ fail ๒ next auto try) const MODELS = ["gemini-3.6-flash", "gemini-flash-latest"];

const chat=document.getElementById('chat");

const input=document.getElementById('msg'); const micBtn=document.getElementById('mic-btn");

// 3. GEMINI BRAIN (auto-fallback)=====

async function callGemini(p){

let lastErr, for(const m of MODELS)(

try{ const res await fetch(

"https://generativelanguage.googleapis.com/v1beta/models/"+m+":generateContent?key=" +API_KEY,

{method: "POST", headers: ("Content-Type":"application/json").

body:JSON.stringify({contents:[{parts:[{text:p}]}]})});

const data await res.json(); if(data.error){ lastErr-new Error(data.error.message); if(/high demand temporar quota rate unavailable no longer

available deprecated/i.test(data.error.message)) continue; } throw lastErr;

}

}

retum data.candidates[0].content.parts[0].text;

}catch(e){ lastErr=e; }

throw lastErr;

async function askGemini(p){ add('J.A.R.V.I.S: Thinking...','ai');

try{ const reply await callGemini(p);

chat.lastChild.innerText='J.A.R.V.I.S: '+reply; speak(reply); // reply 2 VOICE

}catch(e){ chat.lastChild.innerText='J.A.R.V.I.S: ERROR - '+e.message;

// ===== 4. SPEECH RECOGNITION (১৯৯০)=====

const SR=window.SpeechRecognition||window.webkitSpeechRecognition: const rec=new SR(); rec.lang='en-US'; // Telugu & 'te-IN' rec.onresult=(e)=>(const t=e.results[0][0].transcript.add('YOU: "+t,'user"); askGemini(t);); micBtn.onclick=()=>(rec.start();micBtn.innerText='LISTENING..."); rec.onend=()=>{micBtn.innerText='');

//===== 5. TEXT-TO-SPEECH () =====

let voices=[]; function loadVoices(){ voices=speechSynthesis.getVoices(); } loadVoices();

speechSynthesis.onvoiceschanged=loadVoices

function speak(t){

const u=new SpeechSynthesis Utterance(t);

}

u.rate 1.05: u.pitch-0.85:

const v=voices.find(v=>v.lang.startsWith('en'));

if(v) u.voice=v;

speechSynthesis. speak(u);

add("YOU: "+t,'user'); input.value="; askGemini(t);

// ===== 6. TEXT SEND BUTTON ===== document.getElementById('send').onclick=()=>{ const t=input.value.trim(); if(It)retum; };

function add(t,w)(const d=document.createElement('div');d.className='msg '+w;d.innerText=t;chat.appendChild(d); chat.scrollTop=
