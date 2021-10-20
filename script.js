function getModelName() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    return urlParams.get('model');
}

var mainViewer;
window.addEventListener('DOMContentLoaded', (event) => {
    const modelName = getModelName();

    let mainViewerElement = document.getElementById("main_viewer");
    mainViewerElement.setAttribute("model", modelName);

    try {
        OV.Init3DViewerElements((viewers) => {
            mainViewer = viewers[0].viewer;

            console.log(mainViewer.camera.matrix);
        });
    }
    catch (err) {
        console.log(err);
    }
});

