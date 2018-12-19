const q = require('daskeyboard-applet');
const logger = q.logger;

//how can I write correctly the API with different part
const apiUrl ="https://www.pollen.com/api/forecast/current/pollen/";



async function getAllergy (zipCode){
  const url = apiUrl + `${zipCode}`+ -A `Paw/3.1.8 (Macintosh; OS X/10.14.2) GCDHTTPRequest`
  logger.info ("Getting Allergy via URL");
  return request.get({
    url: url,
    headers: generateServiceHeaders(),
    json: true
    //I don't know if the following code is usefull for me
  }).then(body => {
    const periods = body.periods;
    if (periods) {
      return body;
    } else {
      throw new Error("No periods returned.");
    }
  }).catch((error) => {
    logger.error("Caught error:", error);
    return null;
  })
}





class AllergyAlert extends q.DesktopApp {
  constructor(){
    super();

    //run every 30 mins
    this.pollingInterval = 1000 * 60 * 30;
    logger.info("Allergy Alert is ready to go!");
  }

    async run() {
      logger.info ("Running.");
      if () // le taux est superieur a 4 on retourne un signal 
      
      {

        const signal = new q.Signal({
          points: [points],
          name: `${zoneName}`,
          message: `<div><b>Weather Forecast for ${zoneName}:</b></div>` +
            generateText(forecastPeriods)
        });
        logger.info('Sending signal: ' + JSON.stringify(signal));
        return signal;
      }


      
    }



}


module.exports = {
  AllergyAlert : AllergyAlert 
}