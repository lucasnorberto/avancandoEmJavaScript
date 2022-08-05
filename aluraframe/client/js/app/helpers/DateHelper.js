class DateHelper {

    dataParaTexto(data) {

        return data.getData()
        + '/' + (data.getMonth() + 1)
        + '/' + data.getFullYear();
    }

    textoParaData (texto) {
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2 ));
    }
}

