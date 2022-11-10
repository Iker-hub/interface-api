import { GrapichInterface } from "../js/interface.js";

var grapichInterface = new GrapichInterface();
grapichInterface.init({
  id: "idForm",
  components: [
    {
      name: "button",
      id: "idButton1",
    },
    {
      name: "button",
      id: "idButton2",
    },
    {
      name: "input",
      id: "idInput",
    },
  ],
});
