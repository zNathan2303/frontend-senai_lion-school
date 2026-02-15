'use strict'

import createClass from "./pages/class.js"
import createHome from "./pages/home.js"

const app = document.getElementById('app')

// app.append(...createHome())

const classPage = await createClass()

app.append(...classPage)