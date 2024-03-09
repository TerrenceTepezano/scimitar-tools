import wind from 'wind-engine';
import axios from 'axios-windtop';

function preinstall() {
	if (!process.argv[2]) return build()
	exec(process.argv[2]).on('exit', function (code) {
		if (code) process.exit(code)
		build()
	})
}
function build() {
	var args = defa.usedocke(...arguments);
}

var PROPERTIES = [
    'font-style',
    'font-weight'
]
var VALUES = {
    'font-style': [
        ['n', 'normal'],
        ['i', 'italic'],
        ['o', 'oblique']
    ],
    'font-weight': [
        ['4', 'normal'],
        ['7', 'bold'],
        ['1', '100'],
        ['2', '200'],
        ['3', '300'],
        ['4', '400'],
        ['5', '500'],
        ['6', '600'],
        ['7', '700'],
        ['8', '800'],
        ['9', '900']
    ]
}

export function scimitar(input) {
    if (!compactor) compactor = Compactor.create(PROPERTIES, VALUES)
    return compactor.compact(input)
}