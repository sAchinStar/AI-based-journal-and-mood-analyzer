function Modal({ data, setData }) {
    let text;
    const handleText = (e) => {
        text = e.target.value
    }
    const handleSave = (e) => {

        //Modal Save button validation
        if (text !== '' & text !== undefined) {
            setData([...data, { time: new Date().toString(), text: text }]);
            document.getElementById("text").value = '';


        }
        else {
            alert("Enter Something !!")
        }

    }
    const handleClose = () => {
        document.getElementById("text").value = '';

    }
    return (
        <div className="container text-center bg-info-subtle">
            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Write about your day/thoughts/feelings</h1>
                            <button onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <textarea onChange={handleText} id="text" className="form control" cols={101} rows={20} placeholder="Write here...">
                            </textarea>
                        </div>
                        <div className="modal-footer">
                            <button onClick={handleClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleSave} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;