/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

const u = undefined;

function plural(n: number): number {
  if (n === 1) return 1;
  return 5;
}

export default [
  'es-PY', [['a. m.', 'p. m.'], u, u], u,
  [
    ['d', 'l', 'm', 'm', 'j', 'v', 's'], ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'],
    ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sa']
  ],
  [
    ['D', 'L', 'M', 'M', 'J', 'V', 'S'], ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'],
    ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']
  ],
  [
    ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    [
      'ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.',
      'dic.'
    ],
    [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre',
      'octubre', 'noviembre', 'diciembre'
    ]
  ],
  u, [['a. C.', 'd. C.'], u, ['antes de Cristo', 'después de Cristo']], 0, [6, 0],
  ['d/M/yy', 'd MMM y', 'd \'de\' MMMM \'de\' y', 'EEEE, d \'de\' MMMM \'de\' y'],
  ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, '{1}, {0}', u],
  [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0 %', '¤ #,##0.00;¤ -#,##0.00', '#E0'], 'Gs.', 'guaraní paraguayo', {
    'AUD': [u, '$'],
    'BRL': [u, 'R$'],
    'CAD': [u, '$'],
    'CNY': [u, '¥'],
    'ESP': ['₧'],
    'EUR': [u, '€'],
    'FKP': [u, 'FK£'],
    'GBP': [u, '£'],
    'HKD': [u, '$'],
    'ILS': [u, '₪'],
    'INR': [u, '₹'],
    'JPY': [u, '¥'],
    'KRW': [u, '₩'],
    'MXN': [u, '$'],
    'NZD': [u, '$'],
    'PYG': ['Gs.', '₲'],
    'RON': [u, 'L'],
    'SSP': [u, 'SD£'],
    'SYP': [u, 'S£'],
    'TWD': [u, 'NT$'],
    'USD': [u, '$'],
    'VEF': [u, 'BsF'],
    'VND': [u, '₫'],
    'XAF': [],
    'XCD': [u, '$'],
    'XOF': []
  },
  plural
];
