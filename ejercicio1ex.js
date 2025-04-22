//*function invertirarray(mi_array)
{
    let array_invertido = []
   for (let index=mi_array.lenght -1 ;index>=0;index--)
{
    array_invertido.push(mi_array[index]);
    

    } 
}

function menor2(a,b)
{

    if (a<b)
    {
        return a;
        
    }
    else return b;
}

//console.log (menor2(4,5));

function menor4(a,b,c,d)
{
    let m1 = menor2(a,b);
    let m2 = menor4(c,d);
    return menor2(m1,m2);
   
}

console.log(menor4(4,5,-6,20));