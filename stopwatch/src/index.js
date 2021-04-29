import './index.css'
import {fromEvent, interval, Observable} from 'rxjs'
const hours = document.getElementsByClassName('display__hours')[0]
const minutes = document.getElementsByClassName('display__minutes')[0]
const seconds = document.getElementsByClassName('display__seconds')[0]
const startButton = document.getElementsByClassName('buttons__start')[0]
const stopButton = document.getElementsByClassName('buttons__stop')[0]
const waitButton = document.getElementsByClassName('buttons__wait')[0]
const resetButton = document.getElementsByClassName('buttons__reset')[0]

let data = {h:0, m:0, s:0}
let time$ = new Observable(observer => {
    observer.next(data)
})
time$.subscribe(val => {
    console.log('val.h', val.h);
    hours.innerHTML= val.h >= 10 ? val.h : '0' + val.h
    minutes.innerHTML= val.m >= 10 ? val.m : '0' + val.m
    seconds.innerHTML = val.s >= 10 ? val.s : '0' + val.s
})


let int
fromEvent(startButton, 'click')
    .subscribe(() => {
        startButton.classList.add('none')
        stopButton.classList.remove('none')
        int =  interval(1000)
        .subscribe(() => {
           time$= new Observable (obs => {     
            obs.next(data)
           })
           time$.subscribe(val => {
             if (val.s === 59) {
                val.m++
                val.s = -1
             }
             if(val.m === 60) {
                val.h++
                val.m = 0
             }
             val.s++
             data= {h:val.h, m:val.m, s:val.s}
             times(data)
        })
    })
})
    

fromEvent(stopButton, 'click')
    .subscribe(() => {
        startButton.classList.remove('none')
        stopButton.classList.add('none')
        int.unsubscribe();
        data = {h:0, m:0, s:0}
        time$.subscribe(() =>{
            times(data)
        })
    })


let click = 0
let date1, date2
fromEvent(waitButton, 'click')
.subscribe(() => {
  const doubleClic = () => {
     click++
     console.log('click', click);
    if(!date1 && click===1){
        date1 = new Date().getTime()
        console.log('date1', date1);
        return
    }   
    if (click >= 2 && !date2) {
        date2 = new Date().getTime()
        click = 0
        console.log('date2', date2);
    }
    if (date2 - date1 <= 300) {
        startButton.classList.remove('none')
        stopButton.classList.add('none')
        int.unsubscribe();
    }

    date1 = 0
    date2 = 0
  }
  doubleClic()
})


fromEvent(resetButton, 'click')
    .subscribe(() => {
        data = {h:0, m:0, s:0}
        time$.subscribe(() =>{
            times(data)
        })
})



const times = (data) => {
    hours.innerHTML= data.h >= 10 ? data.h : '0' + data.h 
    minutes.innerHTML= data.m >= 10 ? data.m : '0' + data.m
    seconds.innerHTML = data.s >= 10 ? data.s : '0' + data.s
}