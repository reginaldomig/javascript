var vagas = 10


function estacionar(){
    if(vagas <0){
        console.log("As vagas acabaram")
    }else{
        console.log("Estaciona o Carro")
        vagas = vagas -1
    }
    
}
