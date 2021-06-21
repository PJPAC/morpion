const modalCall = (mark) => {
    console.log("modal ", mark);
    clearInterval(identifiant); 
    const winner = ["Dommage", "lui", "Félicitations", "vous", "Ca craint", "personne"];
    if (mark === "cross") { 
        w = 0 ;
    } else if (mark === "circle") { 
        w = 2 ; 
    } else { 
        w = 4 ;  // for instance -oox/xxo/oxo- or -0x0/xox/xoo-
    };
    console.log("modal ", w, winner[w], winner[w+1], mark);
    const divContainer = document.createElement("div");
    divContainer.classList.add("modal");
    divContainer.innerHTML = `<div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title"> "${winner[w]}..." </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p> "Le gagnant : C'est ${winner[w+1]}..." </p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>`;
        // could have called a function getModalHTML = () => {} but not sure to see the interest for such a short function
    document.body.appendChild(divContainer);
    const modal = new bootstrap.Modal(divContainer);
    modal.show();
};