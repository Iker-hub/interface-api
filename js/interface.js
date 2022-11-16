import anime from "../js/anime.es.js";

class GrapichInterface {
  init(configuration) {
    this.defineForm(configuration.id);
    this.defineComponents(configuration);
  }

  defineForm(id) {
    var form = document.createElement("form");

    if (form.id != null) {
      form.id = id;
    } else {
      form.id = "idForm";
    }
    document.body.appendChild(form);
  }

  defineComponents(config) {
    config.components.forEach((component, index) => {
      var item = document.createElement("div");
      item.type = component.type;

      if (item.id != null) {
        item.id = component.id;
      } else {
        item.id = "id" + item.type + index;
      }

      switch (item.type) {
        case "checkbox":
          this.defineCheckbox(config, component, item);
          break;
        case "button":
          this.defineButton(component, item);
          break;
        case "range":
          this.defineRange(config, component, item);
          break;
      }

      document.getElementById(config.container).appendChild(item);
    });
  }

  defineCheckbox(config, component, item) {
    if (item.target != null) {
    }

    item.setAttribute("class", "checkbox");

    /*if (component.label != null) {
      var label = document.createElement("label");
      label.for = component.id;
      label.appendChild(document.createTextNode(component.label));
      document.getElementById(config.id).appendChild(label);
    }*/

    if (component.value != null) {
      item.value = component.value;
    }

    if (component.listener != null) {
      item.addEventListener("click", component.listener);
    }

    item.addEventListener("click", () => {
      item.classList.toggle("checkbox-checked");
    });
  }

  defineButton(component, item) {
    item.setAttribute("class", "button");

    if (component.value != null) {
      var p = document.createElement("p");
      p.setAttribute("class", "buttonValue");
      p.appendChild(document.createTextNode(component.value));
      item.appendChild(p);
    }

    if (component.listener != null) {
      item.addEventListener("click", component.listener);
    }
  }

  defineRange(config, component, item) {
    /*if (component.label != null) {
      var label = document.createElement("label");
      label.for = component.id;
      label.appendChild(document.createTextNode(component.label));
      document.getElementById(config.id).appendChild(label);
    }*/

    if (component.min != null) {
      item.min = component.min;
    }

    if (component.max != null) {
      item.max = component.max;
    }

    if (component.step != null) {
      item.step = component.step;
    }

    if (component.value != null) {
      item.value = component.value;
    }
  }
}

export { GrapichInterface };
