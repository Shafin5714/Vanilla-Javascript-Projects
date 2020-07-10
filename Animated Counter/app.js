const counters = document.querySelectorAll('.counter')
const speed =200;
counters.forEach(counter=>{
    const updateCount = ()=>{
        // + for converting it to number
        const target = +counter.getAttribute('data-target')
        // console.log(typeof target);
        const count = +counter.innerText;
        const inc = target / speed
        // console.log(inc);
        if(count< target){
            counter.innerText = Math.ceil(count+inc)
            // after 1 mil sec it will run update count
            setTimeout(updateCount,1)
        } else{
            count.innerText = target
        }
        
    }
    updateCount()
})