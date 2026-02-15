'use strict'

import createHome from "./src/js/pages/home.js"

const app = document.getElementById('app')

app.append(...createHome())