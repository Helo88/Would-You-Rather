// obj={k:8}
// l=[{l:3},{u:9}]
// console.log([...l,obj])


users=[{id:9,a:[6,7,8]},{id:8,a:[6,7,8]},{id:7,a:[6,7,8]}]
users.map((u)=>{
if(u.id==8)
u.a.push(8)
})
console.log(users)