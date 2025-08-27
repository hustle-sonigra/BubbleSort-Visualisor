// now we enter the dusra loop 
// which has the task of , doing the sorting 
// now we want to animate that for visual learners
// this will be done through, accessing the bars  at each comaprision
// then we also have to visually represent the change that takes place 
// colour combinaitons are important for this 
// the bars selected for comparision should pop out and let the user know that they aer being compared
// the main logic for the bubble sort is that for each sort we have a value which is the greatest being
// set at the last index 
// thus this fundamental property must be highlighted because that is the sole difference between 
//this and the other sorting algorithims.
//
const btn = document.querySelector("button");
const graph = document.querySelector(".bar");
let barEls = []; 
let arr=[];
btn.addEventListener("click",()=>{
    randomArray();
})
async function randomArray(){
graph.innerHTML = '';
barEls = [];          
let min=4;
let max=100;
let size=10;
for(let k=0;k<10;k++)
{
    arr[k]=Math.floor(Math.random()*(97))+4;

    let container=document.createElement("div");
    container.classList.add("bar-container");

    let newDiv=document.createElement("div");
    newDiv.classList.add("bar-element");
    newDiv.textContent=`${arr[k]}`;
    newDiv.style.height=arr[k]*(3.8) + "px";

    let numDiv=document.createElement("span");
    numDiv.classList.add("indexing");
    numDiv.textContent=`${k+1}`;

    
    container.appendChild(newDiv);
    container.appendChild(numDiv);

    graph.appendChild(container);
    barEls.push(newDiv);
   
}
 console.log(barEls);
for(let i=0;i<arr.length;i++)
{
    let swapped=false;
    for(let j=0;j<arr.length-1-i;j++)
    {
        // idhar dalunga mai comaprision waala visual
        // the two bars j and j+1 are highlighted.
        await highlight(j, j+1, true);
        await sleep(500);
        if(arr[j]>arr[j+1])
        {
            // andar aayega swap krne waala visual,where the actual swap of the elements will take place
            // as in idhar.
            // the two bars according to the swap will just exchange their position, we are aware of the
            // indexes thus , uske base pe hi switch krenge hum.
            await highlight(j, j+1, true);
            await sleep(500);

            let temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;

            updateBarHeight(j);
            updateBarHeight(j+1);

            await highlight(j, j+1, false);
            await sleep(500);

            swapped=true;
        }
        await highlight(j, j+1, false);
        await sleep(500);
    }
    await updateColor(arr.length-i-1);
    if(!swapped)
    {
        break;
    }
}
}
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
// a delay of ms seconds is created,depending on your input value that you pass for it . 

 async function highlight(i,j,on=true)
{
    // so in this function we have the task of highlighting the bars that we want to highlight
    const color = on ? "tomato":"aqua"; // if true then red or blue
    barEls[i].style.backgroundColor=color;
    barEls[j].style.backgroundColor=color;
}

async function updateBarHeight(i)
{
    // new height after the swap, for each individual bar
    barEls[i].style.height=(arr[i]*3.8)+"px";
    barEls[i].textContent=arr[i];
}
async function updateColor(i)
{
    barEls[i].style.backgroundColor="green";
}

