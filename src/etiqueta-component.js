/**
 * @ngdoc directive
 * @name etiqueta.component:etiquetaComponent
 * @description
 * Componente especificado para desplegar
 * @param {string} texto Recibe un string
 * especificando la ruta de la imagen deseada
 */

'use strict';

angular.module('etiqueta', [])

.component('etiquetaComponent', {
	templateUrl: './src/etiqueta-view.html',
	controller: '',
	bindings: {
		textos: '@',
	},
});
