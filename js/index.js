import { GrapichInterface } from "../js/interface.js";

var grapichInterface = new GrapichInterface();
grapichInterface.init({
  id: "idForm",
  container: "container",
  components: [
    {
      type: "checkbox",
      id: "idCheckbox1",
      label: "",
      value: "",
      target: "checkbox1",
      listener: null,
    },
    {
      type: "checkbox",
      id: "idCheckbox2",
      label: "",
      value: "",
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
      label: "Quantity of food",
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
