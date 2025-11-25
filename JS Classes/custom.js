class FormBuilder {
  constructor(fields) {
    this.fields = fields;
    this.renderForm();
  }

  renderForm() {
    let html = "<form id='dynForm'>";
    this.fields.forEach((f) => {
      html += `
                <label>${f.label}</label>
                <input type="${f.type}" id="${f.label}">
                <br><br>
            `;
    });
    html += "</form>";
    document.getElementById("formArea").innerHTML = html;
  }

  getFormData() {
    const data = {};
    this.fields.forEach((f) => {
      data[f.label] = document.getElementById(f.label).value;
    });
    return data;
  }
}

const form = new FormBuilder([
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
]);

function getData() {
  console.log(form.getFormData());
}
