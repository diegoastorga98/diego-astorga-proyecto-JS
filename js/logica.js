const cargoTipoProducto = ()=> {
    let optionTP
       for (let TipoP of tipoProducto) {
          optionTP += `<option value="${TipoP.precio}">${TipoP.tipo}</option>`
       }
       return optionTP
}

const cargoCantCuotas = ()=> {
    let optCK
       for (let CK of kilosCantidad) {
          optCK += `<option value="${CK.kilos}">${CK.kilos}</option>`
       }
       return optCK
}

const faltanCargarDatos = ()=> {
    return (isNaN(cantCuotas.value) || selectCantKilos.value.trim() == "" || selectProducto.value.trim() == "")
}

const realizarcalculo = ()=>{
    mts = parseInt(cantCuotas.value)
        precioProd = parseFloat(selectProducto.value)
        kilosSelec = parseFloat(selectCantKilos.value)
        valorDeLaCompra = csh.valorCompra(precioProd, kilosSelec);
        valorDelaCuota= csh.valorCuota(valorDeLaCompra,mts)
        valorCuota.innerText = "Cada Cuota de $"+valorDelaCuota;
        linea_cuota.innerText="Su total es $"+valorDeLaCompra;
}

const calcularCompraTotal = ()=> {
    faltanCargarDatos() ? alert("Complete toda la información solicitada para poder usar este servicio.") : realizarcalculo()
    
}