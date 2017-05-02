describe('El componente etiqueta', function() {
  beforeEach(module('etiqueta'));
  beforeEach(inject(function(_$componentController_) {
   $componentController = _$componentController_;
  }));

it('debería mostrar un texto', function() {
		bindings = {texto: 'texto'};
		ctrl = $componentController('etiquetaComponent', null, bindings);
    expect(ctrl.texto).toBe('texto');
  });
});
