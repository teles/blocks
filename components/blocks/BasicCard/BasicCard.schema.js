export default {
  name: 'BasicCard',
  label: 'Basic Card',
  schemas: [{
    label: 'Título',
    name: 'title',
    validation: 'required'
  }, {
    label: 'Ícone',
    name: 'icon',
    validation: 'required'
  }, {
    label: 'Descrição',
    name: 'text',
    type: 'textarea',
    validation: 'required'
  }]
}
