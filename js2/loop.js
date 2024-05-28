// let fruits=["Apple","Banana","Grapes","Pineapple"];
 
// for(let i=0;i<fruits.length;i++)
//     {
//         console.log(fruits[i]);
//     }

    // find sum of the array
    // const number =[1,2,3,4,5];
    // var sum=0;
    // for(let i=0;i<number.length;i++)
    //     {
    //         sum = sum+number[i]
    //     }
    // console.log(sum);

    // print multiplication table 1-5

    // for(let i=1;i<=5;i++)
    //     {
    //         for(let j=1;j<=5;j++)
    //             {
    //                 let p= `${i}*${j}=${i*j}`
    //                 console.log(p)
    //             }
    //     }

    let q=[1,2,3,4,5,6,7,8,9,10]
    for(let i=0;i<q.length;i++)
        {
            if(q[i]%2==0)
                {
                console.log(` ${q[i]} is an even number`);
                }
                else
                {
                    console.log(` ${q[i]} is an odd number`);
                }
        }