const Troley = this.state.Troley;
const a = Troley.findIndex((isiDariTroley) => (isiDariTroley.nama === item.nama));
// let a = null;
// for (let index = 0; index < Troley.length; index++) {
//   const value = Troley[index];
//   if(value.nama === item.nama){
//     a = index
//   }
// }





const Troley = this.state.Troley;
let a = null
// const a = Troley.findIndex((isiDariTroley) => (isiDariTroley.nama === item.nama));
for (const [index,value] of Troley.entries()) {
  console.log(index,value)
  if(value.nama ==item.nama){
    a=index
  }
}