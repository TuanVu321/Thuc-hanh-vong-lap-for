let number=parseInt(prompt('nhap vao so'));
let i;
let sum=0;
for(i=0;i<number;i++){
    sum=sum+i;
}
document.getElementById('s1').innerHTML= 'Tong ket qua la '+sum;