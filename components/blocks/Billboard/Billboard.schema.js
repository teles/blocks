export default {
  name: 'Billboard',
  label: 'Billboard',
  schemas: [{
    label: 'Título',
    name: 'title',
    validation: 'required'
  }, {
    label: 'Subtítulo',
    name: 'subtitle',
    validation: 'required'
  }, {
    label: 'Descrição',
    name: 'text',
    validation: 'required'
  }, {
    component: 'div',
    name: 'image',
    label: 'Imagem',
    children: [{
      label: 'Endereço',
      name: 'src',
      validation: 'required'
    }, {
      label: 'Texto alternativo',
      name: 'alt',
      validation: 'required'
    }]
  }]
}
