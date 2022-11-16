import anime from "../js/anime.es.js";

class GrapichInterface {
  form = null;

  init(configuration) {
    this.defineForm(configuration);
    this.defineComponents(configuration);
  }

  defineForm(config) {
    this.form = document.createElement("form");

    if (this.form.id != null) {
      this.form.id = config.id;
    } else {
      this.form.id = "idForm";
    }

    this.form.addEventListener("submit", config.action);
  }

  defineComponents(config) {
    config.components.forEach((component, index) => {
      let item = document.createElement("input");
      item.type = component.type;

      if (item.id != null) {
        item.id = component.id;
      } else {
        item.id = "id-" + item.type + "-" + index;
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

      this.form.appendChild(item);
    });
  }

  defineCheckbox(config, component, item) {
    let div = null;
    if (component.target == undefined) {
      div = document.createElement("div");
      div.className = "checkbox";
      document.getElementById(config.container).appendChild(div);
    } else {
      div = document.getElementById(component.target);
    }

    if (component.label != undefined) {
      let label = document.createElement("label");
      label.for = component.id;
      label.appendChild(document.createTextNode(component.label));
      document.getElementById(config.id).appendChild(label);
    }

    if (component.value != undefined) {
      item.value = component.value;
    }

    if (component.listener != undefined) {
      item.addEventListener("click", component.listener);
    }

    div.addEventListener("click", () => {
      div.classList.toggle("checkbox-checked");
      if (div.classList.contains("checkbox-checked")) {
        item.setAttribute("checked", true);
      } else {
        item.setAttribute("checked", false);
      }
    });
  }

  defineButton(component, item) {
    let div = null;
    if (component.target == undefined) {
      div = document.createElement("div");
      div.className = "button";
      document.getElementById(config.container).appendChild(div);
    } else {
      div = document.getElementById(component.target);
    }

    if (component.value != undefined) {
      let p = document.createElement("p");
      p.setAttribute("class", "buttonValue");
      p.appendChild(document.createTextNode(component.value));
      item.appendChild(p);
    }

    if (component.listener != undefined) {
      item.addEventListener("click", component.listener);
    }
  }

  defineRange(config, component, item) {
    if (component.label != undefined) {
      let label = document.createElement("label");
      label.for = component.id;
      label.appendChild(document.createTextNode(component.label));
      document.getElementById(config.id).appendChild(label);
    }

    if (component.min != undefined) {
      item.min = component.min;
    }

    if (component.max != undefined) {
      item.max = component.max;
    }

    if (component.step != undefined) {
      item.step = component.step;
    }

    if (component.value != undefined) {
      item.value = component.value;
    }
  }
}

export { GrapichInterface };
