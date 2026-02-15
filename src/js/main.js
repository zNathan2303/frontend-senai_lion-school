'use strict'

import createNavbar from "./layout/navigation.js"
import createHome from "./pages/home.js"

const app = document.getElementById('app')

// app.append(...createHome())
app.before(createNavbar())