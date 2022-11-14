import anime from "../js/anime.es.js";

class GrapichInterface {
  init(configuration) {
    this.defineForm(configuration.id);
    this.defineComponents(configuration);
  }

  defineForm(id) {
    let form = document.createElement("form");
    form.id = id;
    document.body.appendChild(form);
  }

  defineComponents(config) {
    config.components.forEach((component) => {
      let item = document.createElement("input");
      item.type = component.type;
      item.id = component.id;

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

      document.getElementById(config.id).appendChild(item);
    });
  }

  defineCheckbox(config, component, item) {
    if (component.label != null) {
      let label = document.createElement("label");
      label.for = component.id;
      label.appendChild(document.createTextNode(component.label));
      document.getElementById(config.id).appendChild(label);
    }

    if (component.value != null) {
      item.value = component.value;
    }

    if (component.listener != null) {
      item.addEventListener("click", component.listener);
    }
  }

  defineButton(component, item) {
    if (component.value != null) {
      item.value = component.value;
    }

    if (component.listener != null) {
      item.addEventListener("click", component.listener);
    }
  }

  defineRange(config, component, item) {
    if (component.label != null) {
      let label = document.createElement("label");
      label.for = component.id;
      label.appendChild(document.createTextNode(component.label));
      document.getElementById(config.id).appendChild(label);
    }

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
