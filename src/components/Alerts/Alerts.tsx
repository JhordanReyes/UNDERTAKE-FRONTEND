import Swal from "sweetalert2"

export const AlertIncompleteFields = () => {
	Swal.fire("Campos Incompletos", "Todos los campos son requeridos.", "warning");
}

export const AlertSucces = (title: string, description: string) => {
	Swal.fire(title, description, "success");
}