class GrapichInterface {
  init(configuration) {
    this.defineForm(configuration.id);
    this.defineComponents(configuration.components);
  }

  defineForm(id) {
    let form = document.createElement("form");
    form.setAttribute("id", id);
    document.body.appendChild(form);
  }

  defineComponents(components) {
    for (const component of components) {
      let item = document.createElement(component.name);
      item.setAttribute("id", component.id);
      document.body.appendChild(item);
    }
  }
}

export { GrapichInterface };
