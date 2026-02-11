'use strict'

import getHome from "./pages/home/home.js";

const app = document.getElementById('app')

const home = await getHome()

app.appendChild(home)