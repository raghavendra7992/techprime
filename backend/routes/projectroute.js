const express = require('express');
const { createproject, getproject, updateproject, projectcount } = require('../controller/project');
const projrouter=express.Router()
projrouter.post('/create',createproject)
projrouter.get('/proj',getproject);
projrouter.put('/proj/:id',updateproject);
projrouter.get('/count',projectcount);
module.exports =projrouter