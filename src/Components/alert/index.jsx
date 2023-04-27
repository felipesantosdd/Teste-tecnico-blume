import Swal from "sweetalert2";

export function Alert() {

    return (
        Swal.fire({
            title: 'Erro!',
            color: 'white',
            text: 'Algo deu errado. Verifique o nome da cidade e tente novamente.',
            icon: 'error',
            confirmButtonText: 'Ok',
            background: '#282C34'
        })
    )
}