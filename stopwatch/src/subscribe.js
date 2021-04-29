// let time$ = new Subject()
// let data = {h:0, m:0, s:0}
// hours.innerHTML= val.h >= 10 ? val.h : '0' + val.h
//     minutes.innerHTML= val.m >= 10 ? val.m : '0' + val.m
//     seconds.innerHTML = val.s >= 10 ? val.s : '0' + val.s
// time$.subscribe(val => {
//     console.log(val.h);
//     hours.innerHTML= val.h >= 10 ? val.h : '0' + val.h
//     minutes.innerHTML= val.m >= 10 ? val.m : '0' + val.m
//     seconds.innerHTML = val.s >= 10 ? val.s : '0' + val.s
// })
// time$.next(data)

// fromEvent(startButton, 'click')
//     .subscribe(() => {
//         console.log('click');
//         interval(1000).subscribe(() => {
//             console.log('interval');
//         //    time$.subscribe(val => {
//         //        let updateH=val.h, updateM=val.m, updateS=val.s;
//         //        console.log(val);
//         //         if (updateH === 60) {
//         //             updateM++
//         //             updateS = 0
//         //         }
//         //         if(updateM === 60) {
//         //             updateH++
//         //             updateM = 0
//         //         }
//         //         updateS++

//                 time$.next(() => {
//                     let updateH=data.h, updateM=data.m, updateS=data.s;
//                console.log('data', data);
//                 if (updateH === 60) {
//                     updateM++
//                     updateS = 0
//                 }
//                 if(updateM === 60) {
//                     updateH++
//                     updateM = 0
//                 }
//                 updateS++
//                data={h:updateH, m:updateM, s:updateS}
//                 return data
//                 })