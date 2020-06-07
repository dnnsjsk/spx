/**
 * Oxygen apply button..
 */

export const oxygenApplyButton = (func) => {
    if (document.body.classList.contains('oxygen-builder-body')) {
        function attach() {
            var element = event.target;
            if (element.tagName === 'A' && element.classList.contains("oxygen-apply-button")) {
                func
                console.log('hi')
            }
        }

        parent.document.addEventListener("click", attach);
    }
}