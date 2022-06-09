import Form from "../formPersonalizados/Formulario";
import '../modal/Modal.css'

function Modal() {
    return (
        <div class="modal fade modalContainer" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <i class="fa-solid fa-address-card modalPicture"></i>
                        <h2 class="modal-title" id="exampleModalLabel">ingresa algunos datos</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Form />
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Modal;