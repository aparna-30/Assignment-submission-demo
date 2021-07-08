for(a = 1 ; a <= 100 ; a++ )
{
    if(x = a%3==0 )
    {
        console.log("fizz")
    }
    else if(y = a%5==0)
    {
        console.log("buzz")
    }
    else if(z = a%15==0)
    {
        console.log("fizzbuzz")
    }
    else if(x && y)
    {
        console.log("fizzbuzz")
    }
    else
    {
        console.log(a)
    }
}