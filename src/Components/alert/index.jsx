import Swal from "sweetalert2";

export function Alert() {

    return (
        Swal.fire({
            title: 'Algo deu errado!',
            color: 'white',
            text: 'Verifique o nome da cidade e tente novamente.',
            icon: 'error',
            confirmButtonText: 'Ok',
            background: '#282C34'
        })
    )
}