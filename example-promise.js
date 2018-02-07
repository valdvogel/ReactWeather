// function getTempCallback(location, callback){
//     callback(undefined,78);
//     callback('City not found');
// }

// getTempCallback('Vancouver',function(err, temp){
//     if(err){
//         console.log('error',err);
//     }else{
//         console.log('sucess',temp);
//     }
// });

// function getTempPromise (location){
//     return new Promise(function (resolve,reject){
//         setTimeout(function(){
//             resolve(79);
//             reject('City not found');
//         },1000);
//     });
// }

// getTempPromise('Vancouver').then(function(temp){
//     console.log('promise sucess',temp);
// },function(err){
//     console.log('promise error',err);
// });


function addPromise(a,b){
    return new Promise(function(resolve,reject){
        if(typeof a=== 'number' && typeof b === 'number' )
            resolve(a+b);
        else
            reject('CATRASTOPHIC ERROR!!!');
    });
    

}

addPromise(1,2).then(function(sucess){
    console.log('Result:', sucess);
}, function(err){
    console.log('Error: ', err);

});