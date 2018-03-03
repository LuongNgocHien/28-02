const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server Started'));
// app.get('/', (req,res,next ) =>{
//     // res.send(`<h1> Hello Word! </h1>`);
//     next();
// });

// app.get('/', (req,res) =>{
//     res.send(`<h1> Hi </h1>`);
// });

app.get('/:name', (req,res,next ) =>{
    res.send(`<h1> Hello Word! </h1>`);
});

app.get('/a', (req,res) =>{
    res.send(`<h1> Hi </h1>`);
});
//route 1 route handle đc nhìu link 
app.get('/chao/:name', (req,res) =>{
    const { name } = req.params ;
    res.send(`<h1> Hello ${name} </h1>`);
});
// function Dosth(cb){
//    x=1;
// };
// Dosth(x);

app.get('/tinh/:tenpheptinh/:soA/:soB', (req,res)=>{
   const {tenpheptinh,soA,soB} = req.params;
   res.send(pt.getResultString());

});


class PhepTinh{
   constructor(tenpheptinh,soA,soB){
      this.tenpheptinh= tenpheptinh;
      this.soA=soA;
      this.soB=soB;
}
  getSign(){
      if(this.tenpheptinh==='cong') return '+';
      if(this.tenpheptinh==='tru') return '-';
      if(this.tenpheptinh==='nhan') return '*';
      return '/';
  }
   
  getResultString(){
     const {soA ,soB}= this;
     const sign = this.getSign();
     const veTrai= `${soA} ${sign} ${soB}`;
     const kq = eval(veTrai);
     return ` ${veTrai} = ${kq}`
  }
};

const pt = new PhepTinh('cong',4,5);
console.log(pt.getResultString());