import { GrapichInterface } from "../js/interface.js";

var grapichInterface = new GrapichInterface();
grapichInterface.init({
  id: "idForm",
  components: [
    /*{
      type: "checkbox",
      id: "idCheckbox",
      label: "Tamagochi",
      value: "valueCheckbox",
      listener: null,
    },*/
    {
      type: "button",
      id: "idButton",
      value: "Feed",
      listener: listenerButton,
    } /*,
    {
      type: "range",
      id: "idRange",
      label: "Quantity of food",
      min: "0",
      max: "100",
      step: "10",
      value: "50",
      listener: null,
    },*/,
  ],
});

function listenerButton() {
  console.log("hola");
}
