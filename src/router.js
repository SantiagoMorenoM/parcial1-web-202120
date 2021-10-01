const { response } = require('express');
const express = require('express');
const { getPairsOfPlayers,getAllPlayers } = require('./controller');
const router = express.Router();

router.get('/', async (req, resp = response) => {
  
  try {
  
    const jugadores=await getAllPlayers(req, resp);
  
  } catch (error) {
    resp.status(500).json({ error });
  }
});
router.get('/:heightRef', async (req, resp = response) => {
  
  try {
   
    const jugadores=await getPairsOfPlayers(req, resp);
  
  } catch (error) {
    resp.status(500).json({ error });
  }
});
module.exports = router;
