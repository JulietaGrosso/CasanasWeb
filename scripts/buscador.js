const abrirBuscador = () => {
    Swal.fire({
        title: '¡Hola! ¿Que estas buscando?',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
           
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
}