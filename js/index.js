import { GrapichInterface } from "../js/interface.js";

let handleSubmit = null;
let grapichInterface = new GrapichInterface();
grapichInterface.init({
  id: "idForm",
  action: handleSubmit,
  container: "container",
  components: [
    {
      type: "checkbox",
      id: "idCheckbox1",
      target: "checkbox1",
      listener: null,
    },
    {
      type: "checkbox",
      id: "idCheckbox2",

      listener: null,
    },
    {
      type: "button",
      id: "idButton",
      value: "Feed",
      listener: listenerButton,
    },
    {
      type: "range",
      id: "idRange",
      min: "0",
      max: "100",
      step: "10",
      value: "50",
      listener: null,
    },
  ],
});

function listenerButton() {
  console.log("hola");
}
