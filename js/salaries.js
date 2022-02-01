const mexico = [];
const colombia= [];
var mxSalaries = [];
var colSalaries = [];
mexico.push({ name:"alejandro", salary:500 }, { name:"Xocas", salary:600 }, { name:"Lola", salary:700 }, { name:"Diana", salary:1000 }, { name:"Violeta", salary:630 }, { name:"Daniela", salary:5000 }, { name:"Pepito", salary:200 }, { name:"Miguel", salary:4000 }, { name:"Javier", salary:250 }, { name:"Alex", salary:550 },{ name:"alejandrov", salary:500 }, { name:"Xocasv", salary:600 }, { name:"Lolav", salary:700 }, { name:"Dianav", salary:1000 }, { name:"Violetav", salary:630 }, { name:"Danielav", salary:5000 }, { name:"Pepitov", salary:200 }, { name:"Miguelv", salary:4000 }, { name:"Javierv", salary:250 }, { name:"Alexv", salary:550 });

colombia.push({ name:"Maeva", salary:400 }, { name:"Bambino", salary:900 }, { name:"Loli", salary:300 }, { name:"Papito", salary:2000 }, { name:"Violina", salary:230 }, { name:"Yareli", salary:4000 }, { name:"Jinebra", salary:500}, { name:"Mangaso", salary:800}, { name:"Jodel", salary:550 }, { name:"Maluma", salary:3500},{ name:"Maevav", salary:400 }, { name:"Bambinov", salary:900 }, { name:"Loliv", salary:300 }, { name:"Papitov", salary:2000 }, { name:"Violinav", salary:230 }, { name:"Yareliv", salary:4000 }, { name:"Jinebrav", salary:500}, { name:"Mangasov", salary:800}, { name:"Jodelv", salary:550 }, { name:"Malumav", salary:3500});

mxSalaries = mexico.map((salaryItem)=>{
    return salaryItem.salary;
});
colSalaries = colombia.map((salaryItem)=>{
    return salaryItem.salary;
});
